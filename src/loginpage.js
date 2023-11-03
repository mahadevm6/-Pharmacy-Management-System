import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './loginpage.css'

function LoginForm() {
  return (
    <div className='LOG2'>
      <div>             <p>,</p>
        <form className='abc'>
        <p style={{fontWeight:"bold",fontSize:"20px"}}>Login Page</p>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
            />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div>
            <button ><a href='/app'>login</a></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
