import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
        <Header />

        <div className='absolute'>
          <img className='w-[100vw] h-[100vh]' src='../images/login-wallpaper.jpg' alt='login-wallpaper'/>
        </div>

        <form className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
          
          <h1 className='text-white text-3xl mb-5 font-bold'>
            {
              isLogin ? "Login" : "Sign Up"
            }
          </h1>

          <div className='flex flex-col'>          
            <input type='text' placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg bg-gray-800 text-white'/>          
            <input type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg bg-gray-800 text-white'/>           
            <input type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg bg-gray-800 text-white'/>
            <p className='text-white'>
              {
                isLogin ? "Already have an account ?" : "New to Netflix ?"
              }
            </p>
          </div>

        </form>
    </div>
  )
}

export default Login;