// Styling related imports
import { Container } from './styles';

// Type imports
import { IconType } from 'react-icons/lib';

interface InputProps extends React.HTMLProps<HTMLInputElement>  {
  type: 'name' | 'email' | 'password' | 'file' | 'select' | 'money' | 'multiline';
  label?: string;
  placeholder?: string;
  icon?: IconType;
  options?: string[];
}

export function Input({ type, label, placeholder, icon: Icon, options, ...rest }: InputProps){

  function handleFocusToImageInput() {
    if (document) {
      const imageInput = document.querySelector('#image') as HTMLInputElement;

      if (imageInput) {
        imageInput.focus();
      }
    }
  }

  function convertMoneyStrToNumber(value: string) {
    if (!value) {
      return '';
    }

    let [reaisWithDotsAndMoneyNotation, cents] = value.split(',');
    
    let [ , reaisWithDots] = reaisWithDotsAndMoneyNotation.split(' ');

    if (cents && cents.length === 1) {
      cents = String(Number(cents) * 10);
    }

    const reais = reaisWithDots.replaceAll('.', '');

    if (cents) {
      return reais + '.' + cents;

    } else {
      return reais;

    }
  }

  function convertNumberToMoneyStr(value: string) {

    if(!value) {
      return ''; 
    }

    const commaSwappedByDotsString = String(value).replace(',', '.');

    let [reais, cents] = commaSwappedByDotsString.split('.');

    if (cents && cents.length === 1) {
      cents = String(Number(cents) * 10);
    }

    const splitString = reais.split('');
    const reverseArray = splitString.reverse();
    const joinString = reverseArray.join('');

    let reversedDottedString = joinString.replace(/.{3}/g, '$&.');

    if (reversedDottedString.length % 4 === 0) {
      reversedDottedString = reversedDottedString.substring(0, reversedDottedString.length -1);
    }

    const splitReversedString = reversedDottedString.split('');
    const reverseBackArray = splitReversedString.reverse();
    const finalString = reverseBackArray.join('');
    
    if (cents) {
      return 'R$ ' + finalString + ',' + cents.substring(0, 2).padStart(2, '0');
    
    } else {
      return 'R$ ' + finalString + ',00';

    }
  }

  function handleMoneyInputOnFocus(event: any) {
    const moneyInput  = document.querySelector('#money-input') as HTMLInputElement;

    moneyInput.value = convertMoneyStrToNumber(event.target.value) as string;
    moneyInput.type = 'number';
  }

  function handleMoneyInputOnBlur(event: any) {
    const moneyInput  = document.querySelector('#money-input') as HTMLInputElement;

    moneyInput.type = 'text'
    moneyInput.value = convertNumberToMoneyStr(event.target.value) as string;
  }

  return (
    <Container id={type} className='input'>
      { label && 
        <label htmlFor={label}
          className='roboto-small-regular' >{label}
        </label> }
      <div className={`input-wrapper ${type}`}> 
        { type === 'file' && 
            <label htmlFor='image' onFocus={handleFocusToImageInput}>
              { Icon && <Icon className='icon' size={32} /> }
              <span className='poppins-medium-100'>Selecione uma imagem</span>
              <input id='image'
                type={type}
                title={label} />
            </label> }
        { type === 'money' && 
          <input id='money-input'
          title={label}
          className='roboto-small-regular'
          type='number'
          step='0.01'
          onFocus={handleMoneyInputOnFocus}
          onBlur={handleMoneyInputOnBlur}          placeholder={placeholder} {...rest} />
        }
        { type === 'select' && 
          <>
            <select name={label}
              id={label}
              className='roboto-small-regular' >
              {options && options.map((item, index) => (
                <option value={index}>{item}</option>
              ))}
            </select>
            { Icon && <Icon className='icon' size={32} /> }
          </> }
        { type === 'multiline' &&
          <textarea name={label}
            rows={50}
            className='roboto-small-regular'
            placeholder={placeholder} /> }
        { (type !== 'file' &&
          type !== 'select' &&
          type !== 'money' && 
          type !== 'multiline') &&
          <>
            { Icon && <Icon className='icon' size={22} />}
            <input name={label}
              title={label}
              className='roboto-small-regular'
              type={type}
              placeholder={placeholder} {...rest} />
          </> }
      </div>
    </Container>
  );
}