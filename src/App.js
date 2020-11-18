import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  function validateName(event) {
    setName(event.target.value);
    if (event.target.value.length >= 4) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
  }

  function validateEmail(event) {
    setEmail(event.target.value);
    if (validEmailFormat.test(event.target.value)) {
      setIsEmailValid(true);
    }
    else {
      setIsEmailValid(false);
    }
  }

  function validatePhoneNumber(event) {
    setPhoneNumber(event.target.value);
    if (event.target.value.length == 10) {
      setIsPhoneNumberValid(true);
    }
    else {
      setIsPhoneNumberValid(false);
    }
  }

  function validatePassword(event) {
    setPassword(event.target.value);
    if (event.target.value.length >= 6) {
      setIsPasswordValid(true);
    }
    else {
      setIsPasswordValid(false);
    }
  }

  function onSubmit() {
    if (isNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid) {
      console.log('form submited');
    }
    else {
      console.log('check the form again');
    }
  }

  useEffect(() => {
    if (isNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid) {
      setIsFormValid(true);
    }
    else {
      setIsFormValid(false);
    }
  }, [isNameValid, isEmailValid, isPhoneNumberValid, isPasswordValid]);



  return (
    <>
      <h1> Sign up </h1>
      <div>
        <label>
          Name:
         <input
            type='text'
            value={name}
            onChange={(event) => validateName(event)}
            // onBlur={(event) => validateName(event)}
          />
          {isNameValid ? null : name === '' ? null : <div>Please enter valid name with minimum 4 words</div>}
        </label>
      </div>
      <div>
        <label>
          Email: 
           <input
            type='email'
            value={email}
            onChange={(event) => validateEmail(event)}
            // onBlur={(event) => validateEmail(event)}
          />
          {isEmailValid ? null : email==='' ? null : <div>Enter valid email address</div>}
        </label>
      </div>
      <div>
        <label>
          Phone number: 
           <input
            type='number'
            value={phoneNumber}
            onChange={(event) => validatePhoneNumber(event)}
          />
          {isPhoneNumberValid ? null : phoneNumber === '' ? null : <div>Enter valid phone number</div>}
        </label>
      </div>
      <div>
        <label>
          Password: 
           <input
            type='password'
            value={password}
            onChange={(event) => validatePassword(event)}
          />
          {isPasswordValid ? null : password === '' ? null : <div>Enter valid atleast 6 words password</div>}
        </label>
      </div>
      <input type='submit' onClick={onSubmit} disabled={!isFormValid}/>
    </>
  )
}