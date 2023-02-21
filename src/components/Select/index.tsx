// Styling related imports
import { Container } from './styles';

// Type imports
import { IconType } from 'react-icons/lib';
import { CategoryProps } from '../../pages/Home';

interface InputProps extends React.HTMLProps<HTMLSelectElement> {
  label?: string;
  icon?: IconType;
  options?: CategoryProps[];
}

export function Select({ label, icon: Icon, options, ...rest }: InputProps){
  return (
    <Container className='select'>
      { label && 
        <label htmlFor={label}
          className='roboto-small-regular' >
          {label}
        </label> }
      <div className={`select-wrapper`}> 
        <select name={label}
          id={label}
          className='roboto-small-regular' {...rest} >
          {options && options.map((item, index) => (
            <option key={index} value={item.id}>{item.category}</option>
          ))}
        </select>
        { Icon && <Icon className='icon' size={32} /> }
      </div>
    </Container>
  );
}