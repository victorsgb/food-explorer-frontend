// Core dependencies
import { useCallback, useEffect, useRef, useState } from 'react';

// Custom components
import { Button } from '../Button';

// Styling related imports
import { Container } from './styles';
import { GiCancel, GiConfirmed } from 'react-icons/gi';

interface ModalProps {
  name: string;
  message: string;
  userDecisionSetter?: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpenTracker: number;
}

export function SignOutModal({name, message, userDecisionSetter, modalOpenTracker, ...rest}: ModalProps | any) {

  const [timer, setTimer] = useState<number>(60);
  const timerRef = useRef<number | undefined>(timer);
  timerRef.current = timer;

  const [active, setActive] = useState<boolean>(false);

  function handleClickOnConfirmCancelButton() {
    const dialog = document.querySelector(`dialog#${name}`) as HTMLDialogElement;
    if (userDecisionSetter) {
      userDecisionSetter(false);
    }
    dialog?.close();
    setActive(false);
  };
  
  const handleClickOnConfirmOKButton = useCallback(() => {
    const dialog = document.querySelector(`dialog#${name}`) as HTMLDialogElement;
    if (userDecisionSetter) {
      userDecisionSetter(true);
    }
    dialog?.close();
    setActive(false);
  }, [name, userDecisionSetter]);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setTimer(prevState => prevState - 1);
        console.log(timerRef.current);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [active]);

  useEffect(() => {

    if (timer <= 0) {
      setTimer(60);
      handleClickOnConfirmOKButton();
      setActive(false);
    }

  }, [timer, handleClickOnConfirmOKButton]);

  useEffect(() => {

    if (modalOpenTracker > 0) {
      setTimer(60);
      setActive(true);
    }

  }, [modalOpenTracker]);

  return (
    <Container id={name} {...rest}>
      <p>{message}</p>
      <div className='buttons-wrapper'>
        <Button onClick={handleClickOnConfirmCancelButton}
          icon={GiConfirmed}
          text='Continuar' />
        <Button onClick={handleClickOnConfirmOKButton}
          icon={GiCancel}
          text='Sair' />
      </div>
      <p>Desconectando em {timer} segundos...</p>
    </Container>
  )
}