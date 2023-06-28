import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <center className='login'>
    <h1>Login</h1> 
      <span className='fa fa-facebook'></span> <br/> <br/>
      <input className='inp' type={'text'} placeholder="Enter your name"></input> <br/> <br/>
      <input className='inp' type={'password'} placeholder="Enter your password"></input> <br/> <br/>
      <button className='btn' type='button'>Login</button>
    </center>
      
    </>
  );
}

export default App;
