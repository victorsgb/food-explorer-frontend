// Styling related imports
import { Container } from './styles';

interface InputProps extends React.HTMLProps<HTMLInputElement>  {
  type: 'name' | 'email' | 'password';
  label: string;
  placeholder: string;
}

export function Input({ type, label, placeholder, ...rest }: InputProps){
  return (
    <Container className='input'>
      <label htmlFor={label}
        className='roboto-small-regular' >{label}
      </label>
      <input name={label}
        className='roboto-small-regular'
        type={type}
        placeholder={placeholder} {...rest} />
    </Container>
  );
}