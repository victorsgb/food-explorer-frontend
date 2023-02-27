// Styling related imports
import { Container } from './styles';

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label?: string;
  placeholder?: string;
}

export function TextArea({ label, placeholder, ...rest }: TextAreaProps){

  return (
    <Container className='textarea'>
      { label && 
        <label htmlFor={label}
          className='roboto-small-regular' >
          {label}
        </label> }
      <div className={`textarea-wrapper`}> 
      <textarea name={label}
        maxLength={120}
        className='roboto-small-regular'
        placeholder={placeholder} {...rest} />
      </div>
    </Container>
  );
}