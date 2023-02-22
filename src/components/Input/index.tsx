// Styling related imports
import { Container } from './styles';

// Type imports
import { IconType } from 'react-icons/lib';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type: 'name' | 'email' | 'password' |
        'file' | 'money';
  label?: string;
  placeholder?: string;
  icon?: IconType;
}

export function Input({ type, label, placeholder, icon: Icon, ...rest }: InputProps){

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

    let [reaisWithMoneyNotation, cents] = value.split(',');
    
    let [ , reaisWithDots] = reaisWithMoneyNotation.split(' ');

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
          className='label roboto-small-regular' >
          {label}
        </label> }
      <div className={`input-wrapper ${type}`}> 
        { type === 'file' && 
            <label htmlFor='image' 
              onFocus={handleFocusToImageInput} >
              { Icon && <Icon className='icon' size={32} /> }
              { placeholder && 
                <span className='poppins-medium-100'>
                  {placeholder}
                </span> }
              <input id='image'
                type={type}
                title={label} {...rest} />
            </label> }
        { type === 'money' && 
          <input id='money-input'
          title={label}
          className='roboto-small-regular'
          type='number'
          step='0.01'
          onFocus={handleMoneyInputOnFocus}
          onBlur={handleMoneyInputOnBlur}
          placeholder={placeholder} {...rest} /> }
        { (type !== 'file' && type !== 'money') &&
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