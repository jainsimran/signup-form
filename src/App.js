import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const validEmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function validateName(event) {
    // setName(event.target.value);
    if (event.target.value.length >= 4) {
      setIsNameValid(true);
    }
    else {
      setIsNameValid(false);
    }
  }

  function validateEmail(event) {
    if (validEmailFormat.test(event.target.value)) {
      setIsEmailValid(true);
    }
    else {
      setIsEmailValid(false);
    }
  }



  return (
    <>
      <h1> Sign up </h1>
      <div>
        <label>
          Name:
         <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={(event) => validateName(event)}
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
            onChange={(event) => setEmail(event.target.value)}
            onBlur={(event) => validateEmail(event)}
          />
          {isEmailValid ? null : email==='' ? null : <div>Enter valid email address</div>}
        </label>
      </div>
      <div>
        <label>
          Phone number: 
           <input type='number'/>
        </label>
      </div>
      <div>
        <label>
          Password: 
           <input type='password' />
        </label>
      </div>
      <input type='submit' />
     
    </>
  )
}