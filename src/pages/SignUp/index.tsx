// Core dependencies
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom components
import { Logo } from '../../components/Logo';
import { Warning } from '../../components/Warning';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';

// Styling related imports
import { Container } from './styles';
import { polygon } from '../../assets';
import { api } from '../../services/api';

interface SignUpProps {
  name?: string;
  email?: string;
  password?: string;
}

export function SignUp(){

  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userData, setUserData] = useState<SignUpProps>({});
  const [passwordIssue, setPasswordIssue] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [submitRequest, setSubmitRequest] = useState<boolean>(false);
  const [successCounter, setSuccessCounter] = useState<number>(-1);

  function handleNameChange(event: any) {
    setUserData(userData => ({
      ...userData,
      name: event.target.value
    }))
  }

  function handleEmailChange(event: any) {
    setUserData(userData => ({
      ...userData,
      email: event.target.value
    }))
  }

  function handlePasswordChange(event: any) {
    setUserData(userData => ({
      ...userData,
      password: event.target.value
    }))
  }

  function handleCreateNewUser(event: any) {
    event.preventDefault();
    const modal = document.querySelector('dialog#confirm-create') as HTMLDialogElement;
    modal?.showModal();
  }

  useEffect(() => {

    if (userData.name && userData.email && userData.password) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }

  }, [userData.name, userData.email, userData.password]);

  useEffect(() => {
    if (successCounter > 0) {
      const interval = setInterval(() => {
        setSuccessCounter(prevState => prevState - 1);
      }, 1000);
      return () => clearInterval(interval);
    }

    if (successCounter === 0) {
      navigate('/');
    }
  }, [successCounter, navigate]);

  useEffect(() => {

    async function handleSubmitRequest() {
      setApiResponse('');
      setIsLoading(true);

      if (userData?.name && userData?.email && userData?.password) {
        
        try {
          await api.post('/users', { ...userData });

          const modal = document.querySelector('dialog#inform-create') as HTMLDialogElement;
          modal?.showModal();

          // set value to navigate to SignIn page after three seconds...
          setSuccessCounter(3);
 
        } catch(error: any) {
          if (error.response) {
            setApiResponse(error.response.data.message);
          } else if (error.request) {
            setApiResponse(error.request);
          } else {
            setApiResponse('Servidor indisponível. Tente mais tarde...');
          }
        }
      }
  
      setIsLoading(false);
    }

    if (submitRequest) {
      handleSubmitRequest();
      setSubmitRequest(false);
    }

  }, [submitRequest, userData]);

  return (
    <Container>
      <header><Logo /></header>
      <form onSubmit={handleCreateNewUser}>
        <h1 className='poppins-medium-400'>Crie sua conta</h1>
        <Input type='name'
          label='Nome'
          placeholder='Exemplo: Maria'
          onChange={handleNameChange} />
        <Input type='email'
          label='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          onChange={handleEmailChange} />
        <Input type='password'
          label='Senha'
          placeholder='No mínimo 6 caracteres'
          onChange={handlePasswordChange} />
        <h3>{passwordIssue}</h3>
        <Button disabled={!isReady || passwordIssue}
          isLoading={isLoading} >
          <span className='poppins-medium-100'>Criar conta</span>
        </Button>
        <Link to={'/'} className='poppins-medium-100'>Já tenho uma conta</Link>
      </form>
      <Modal
        name='confirm-create'
        type='confirm'
        message='Você está pronto(a) para cadastrar um(a) novo(a) usuário(a)?'
        userDecisionSetter={setSubmitRequest}
      />      
      <Modal
        name='inform-create'
        type='inform'
        message={`Conta cadastrada com sucesso! Agora, basta fazer o login para começar 😊`}
      />
      { !isLoading && apiResponse &&
        <Warning type='api-bad-response'
          response={apiResponse} /> }
      { userData?.password &&
        <Warning type='password-issue'
          password={userData?.password}
          passwordIssueSetter={setPasswordIssue} /> }            
    </Container>
  );
}