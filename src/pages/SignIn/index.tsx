// Core dependencies
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Custom components and hooks
import { Logo } from '../../components/Logo';
import { Warning } from '../../components/Warning';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

// Styling related imports
import { Container } from './styles';

// Type related imports
import { SignInProps } from '../../hooks/auth';

export function SignIn(){

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [credentials, setCredentials] = useState<SignInProps>({});
  const [isReady, setIsReady] = useState<boolean>(false);

  function handleEmailChange(event: any) {
    setCredentials(credentials => ({
      ...credentials,
      email: event.target.value
    }))
  }

  function handlePasswordChange(event: any) {
    setCredentials(credentials => ({
      ...credentials,
      password: event.target.value
    }))
  }

  async function handleSignIn(event: any) {
    event.preventDefault();
    setApiResponse('');
    setIsLoading(true);

    if (credentials?.email && credentials?.password) {
      const response = await signIn(credentials);

      console.log({response});
      if (response === 'Logado com sucesso!') {
        navigate('/')

      } else {
        setApiResponse(response);
      }
    }

    setIsLoading(false);
  }

  useEffect(() => {

    if (credentials.email && credentials.password) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }

  }, [credentials.email, credentials.password]);

  return (
    <Container>
      <header><Logo /></header>
      <form onSubmit={handleSignIn}>
        <h1 className='poppins-medium-400'>Faça login</h1>
        <Input type='email'
          label='Email'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          onChange={handleEmailChange} />
        <Input type='password'
          label='Senha'
          placeholder='No mínimo 6 caracteres'
          onChange={handlePasswordChange} />
        <Button disabled={ !isReady ||
          (credentials?.password && credentials.password.length < 6)
        } isLoading={isLoading} >
          <span className='poppins-medium-100'>Entrar</span>
        </Button>
        <Link to={'/sign-up'} className='poppins-medium-100'>Criar uma conta</Link>
      </form>
      { !isLoading && apiResponse &&
        <Warning type='api-bad-response'
          response={apiResponse} /> }
    </Container>
  );
}