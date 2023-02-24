// Styling related imports
import { useEffect, useState } from 'react';
import { Container } from './styles';

interface WarningProps {
  type: 'api-bad-response' | 'password-issue';
  response?: string;
  password?: string;
  passwordIssueSetter?: React.Dispatch<React.SetStateAction<boolean>>; 
}

export function Warning({type, response, password, passwordIssueSetter}: WarningProps){

  const [hasFewChars, setHasFewChars] = useState(false);

  const [threeCriteriaAttended, setThreeCriteriaAttended] = useState(true);

  const [hasUpperCase, setHasUpperCase] = useState(true);
  const [hasLowerCase, setHasLowerCase] = useState(true);
  const [hasNumbers, setHasNumbers] = useState(true);
  const [hasNonalphas, setHasNonalphas] = useState(true);

  function handleChangeOnPasswordInput(password: string) {
    var hasFewChars = password.length < 6;
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumbers = /\d/.test(password);
    var hasNonalphas = /\W/.test(password);

    if (hasFewChars) {
      setHasFewChars(true);
    } else {
      setHasFewChars(false);
    }

    if (hasUpperCase) {
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }

    if (hasLowerCase) {
      setHasLowerCase(true);
    } else {
      setHasLowerCase(false);
    }

    if (hasNumbers) {
      setHasNumbers(true);
    } else {
      setHasNumbers(false);
    }

    if (hasNonalphas) {
      setHasNonalphas(true);
    } else {
      setHasNonalphas(false);
    }
  }

  useEffect(() => {

    if (password) {
      handleChangeOnPasswordInput(password);
    }

  }, [password]);

  useEffect(() => {
    if ((hasFewChars || (Number(hasUpperCase) + Number(hasLowerCase) + Number(hasNumbers) + Number(hasNonalphas)) < 3) && password && password.length > 0) {
      setThreeCriteriaAttended(false);

      if (passwordIssueSetter) {
        passwordIssueSetter(true);
      } 
        
    } else {
      setThreeCriteriaAttended(true);

      if (passwordIssueSetter) {
        passwordIssueSetter(false);
      } 
    }

  }, [password, passwordIssueSetter, hasFewChars, hasUpperCase, hasNumbers, hasNonalphas, hasLowerCase]);

  return (
    <Container>
        <div className={type}>
          { type === 'api-bad-response' && 
            <h2 className='poppins-medium-100'>
              <span>{response}</span>
            </h2> }
          { type === 'password-issue' && 
            <ul className='poppins-medium-100'>
              { !threeCriteriaAttended && hasFewChars &&
                <li className='unsatisfied'>Senha deve ter no mínimo 6 caracteres;</li> }
              { !threeCriteriaAttended && !hasFewChars &&
                <li className='satisfied'>Senha com mais de 6 caracteres;</li> }
              { !threeCriteriaAttended && !hasUpperCase &&
                <li className='unsatisfied'>Senha deve ter letra maiúscula;</li> }
              { !threeCriteriaAttended && hasUpperCase &&
                <li className='satisfied'>Senha contém letra maiúscula;</li> }
              { !threeCriteriaAttended && !hasLowerCase &&
                <li className='unsatisfied'>Senha deve ter letra minúscula;</li> }
              { !threeCriteriaAttended && hasLowerCase &&
                <li className='satisfied'>Senha contém letra minúscula;</li> }
              { !threeCriteriaAttended && !hasNonalphas &&
                <li className='unsatisfied'>Senha deve ter símbolo não alfa-numérico;</li> }
              { !threeCriteriaAttended && hasNonalphas &&
                <li className='satisfied'>Senha contém símbolo não alfa-numérico;</li> }
              { !threeCriteriaAttended && !hasNumbers &&
                <li className='unsatisfied'>Senha deve ter dígito numérico;</li> }
              { !threeCriteriaAttended && hasNumbers &&
                <li className='satisfied'>Senha contém dígito numérico;</li> }
              { threeCriteriaAttended &&
                <li className='satisfied'>Senha forte definida!</li> }
            </ul> }
          <div className='duration-line' />
        </div>
    </Container>
  );
}