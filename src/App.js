import { useEffect, useState } from 'react';
import './App.css';
import { validEmailFormat, minNameLength } from './constants';


export default function App() {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumErrorMessage, setPhoneNumErrorMessage] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  function validateName() {
    if (name.trim().length >= minNameLength) {
      setIsNameValid(true);
      setNameErrorMessage('');
    }
    else {
      setIsNameValid(false);
      setNameErrorMessage('Name should have minimum 4 letters');
    }
  }

  function validateEmail() {
    if (validEmailFormat.test(email)) {
      setIsEmailValid(true);
      setEmailErrorMessage('');
    }
    else {
      setIsEmailValid(false);
      setEmailErrorMessage('Enter valid email address');
    }
  }

  function validatePhoneNumber() {
    if (phoneNumber.length >= 10 && phoneNumber.length <= 12) {
      setIsPhoneNumberValid(true);
      setPhoneNumErrorMessage('');
    }
    else {
      setIsPhoneNumberValid(false);
      setPhoneNumErrorMessage('Phone number should have 10 or 12 digits');
    }
  }

  function validatePassword() {
    if (password.trim().length >= 6) {
      setIsPasswordValid(true);
      setPasswordErrorMessage('');
    }
    else {
      setIsPasswordValid(false);
      setPasswordErrorMessage('Enter valid atleast 6 words password');
    }
  }

  function onSubmit() {
    if (isNameValid && isEmailValid && isPhoneNumberValid && isPasswordValid) {
      console.log('form submited');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      setIsFormSubmitted(true);
    }
    else {
      console.log('check the form again');
      setIsFormSubmitted(false);
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
      {isFormSubmitted ? <div className='form'>Your account has been created. </div> : 
      <div className='form'>
      <h1> SIGN UP</h1>
      <div>
        <label>
        Name:
         <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={validateName}
          />
          {nameErrorMessage === '' ? null : <div className='warning'>{nameErrorMessage}</div>}
        </label>
      </div>
      <div>
        <label>
        Email: 
           <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={validateEmail}
          />
          {emailErrorMessage === '' ? null : <div className='warning'>{emailErrorMessage}</div>}
        </label>
      </div>
      <div>
        <label>
        Phone number: 
           <input
            type='number'
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            onBlur={validatePhoneNumber}
          />
          {phoneNumErrorMessage === '' ? null : <div className='warning'>{phoneNumErrorMessage}</div>}
        </label>
      </div>
      <div>
        <label>
        Password: 
           <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onBlur={validatePassword}
          />
          {passwordErrorMessage === '' ? null : <div className='warning'>{passwordErrorMessage}</div>}
        </label>
      </div>
          <button type='submit' onClick={onSubmit} disabled={!isFormValid} className='submitBtn'> CREATE ACCOUNT </button>
        </div>
      }

    </>
  )
}