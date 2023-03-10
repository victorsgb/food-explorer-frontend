// Custom components
import { Button } from '../Button';

// Styling related imports
import { Container } from './styles';
import { GiCancel, GiConfirmed } from 'react-icons/gi';

interface ModalProps {
  type: 'inform' | 'confirm';
  name: string;
  message: string;
  userDecisionSetter?: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function Modal({name, type, message, userDecisionSetter, ...rest}: ModalProps | any) {

  function handleClickOnInformOKButton() {
    const dialog = document.querySelector(`dialog#${name}`) as HTMLDialogElement;
    dialog?.close();
  };
  
  function handleClickOnConfirmCancelButton() {
    const dialog = document.querySelector(`dialog#${name}`) as HTMLDialogElement;
    if (userDecisionSetter) {
      userDecisionSetter(false);
    }
    dialog?.close();
  };
  
  function handleClickOnConfirmOKButton() {
    const dialog = document.querySelector(`dialog#${name}`) as HTMLDialogElement;
    if (userDecisionSetter) {
      userDecisionSetter(true);
    }
    dialog?.close();
  };

  return (
    <Container id={name} {...rest}>
      <p className='poppins-medium-100'>{message}</p>
      <div className='buttons-wrapper'>
        { type === 'inform' &&
          <Button onClick={handleClickOnInformOKButton}
            text='Entendi' /> }
        { type === 'confirm' &&
          <>
            <Button onClick={handleClickOnConfirmCancelButton}
              icon={GiCancel}
              text='Cancelar' />
            <Button onClick={handleClickOnConfirmOKButton}
              icon={GiConfirmed}
              text='Confirmar' />
          </> }
      </div>
    </Container>
  )
}