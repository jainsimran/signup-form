import './App.css';
export default function App() {
  return (
    <>
      <h1> Sign up </h1>
      <div>
        <label>
          Name:
         <input type='text' />
        </label>
      </div>
      <div>
        <label>
          Email: 
           <input type='email' />
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