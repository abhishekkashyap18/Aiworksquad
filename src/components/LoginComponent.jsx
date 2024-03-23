import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";


function LoginComponent() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Hardcoded credentials (for demonstration only)
    const hardcodedEmail = 'user123';
    const hardcodedPassword = 'pass123';

    // Client-side validation (enhanced)
    if (!Email || !password) {
      setErrorMessage('Please enter both username and password.');
      return; // Exit function if validation fails
    }

    if (Email !== hardcodedEmail || password !== hardcodedPassword) {
      setErrorMessage('Invalid username or password.');
      return; // Exit function if credentials don't match
    }

    // Successful login (redirect to Home page)
    setErrorMessage(''); // Clear any previous error messages
    navigate('/home'); // Assuming you have a 'home' route defined
  };






  return (
    <div className='bg-gray-700 py-6 px-6'>
        <img src="/logo.jpg" alt="" className='sm:w-52 h-12 mix-blend-multiply w-36' />
    <div className='flex flex-col justify-center items-center  text-white h-screen'>
    
      <div className='flex flex-col h-4/5 2xl:w-[43%]  xl:w-[50%] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[95%] items-center bg-neutral-900'>
        <h1 className='mt-8 text-2xl font-bold'>Welcome Back</h1>
        <h2 className='sm:text-lg mt-4 text-md'>Sign in to continue to Aiworksquad.</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

      <form onSubmit={handleSubmit} className='w-full h-full flex justify-center items-center flex-col rounded mb-24'>
      <div className='flex flex-row border border-white mt-4 justify-between w-[53%] rounded-md'>
        <span className='flex flex-row items-center ml-2 text-sm'><TfiEmail/></span>
        <input 
         type="text"
         id="Email"
         placeholder="Email"
         name="Email"
         value={Email}
         onChange={handleUsernameChange}
         required
          className='rounded-md w-[100%] h-11 bg-neutral-900 px-6 outline-none'
        />
      </div>

      <div className='flex flex-row border border-white mt-5 justify-between w-[53%] rounded-md'>
        <span className='flex flex-row items-center ml-2 '><CiLock/></span>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            required
            className='rounded-md h-11 w-[100%] bg-neutral-900 px-6 outline-none'
          />
      </div>
        
        <div className='flex sm:flex-row  justify-between sm:gap-10 my-3 gap-5 flex-col'>
           <span className='flex flex-row xl:mr-9'>
            <input type="checkbox" name="remember " id="remember" className='sm:w-4 sm:h-4 mt-1 opacity-100 mr-1' />
            <label htmlFor="remember" className='sm:text-sm text-xs'>Remember me</label>
            </span>
            <p className='text-neutral-500 text-xs sm:text-sm'>Forgot Password?</p>
        </div>

        <button type='submit' className='w-[53%] h-11 rounded bg-blue-500 mt-11'>
            Login
        </button>
        </form>
      </div>
      <h1 className=' mt-20'>2023 AiworkSquad.</h1>
    </div>
    </div>
  );
}

export default LoginComponent;


