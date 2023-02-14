// Styling related imports
import { Container } from './styles';

// Type imports
import { IconType } from 'react-icons/lib';

interface InputProps extends React.HTMLProps<HTMLInputElement>  {
  type: 'name' | 'email' | 'password';
  label?: string;
  placeholder: string;
  icon?: IconType
}

export function Input({ type, label, placeholder, icon: Icon, ...rest }: InputProps){
  return (
    <Container className='input'>
      { label && 
        <label htmlFor={label}
          className='roboto-small-regular' >{label}
        </label> }
      <div className='input-wrapper'> 
        { Icon && <Icon className='icon' size={22} />}
        <input name={label}
          className='roboto-small-regular'
          type={type}
          placeholder={placeholder} {...rest} />
      </div>
    </Container>
  );
}