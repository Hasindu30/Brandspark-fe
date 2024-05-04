import React from 'react'

import './Signup.css';

const Login = () => {
  return (
    <div>

    <div className="wrapper">
          <form action="#">
            <h2>Login</h2>
            <div className="input-field">
              <input type="text" required />
              <label htmlFor="email">Enter your email</label>
            </div>
            <div className="input-field">
              <input type="password" required />
              <label htmlFor="password">Enter your password</label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Log In</button>
            <div className="register">
              <p>Don't have an account? <a href="/Signup">Register</a></p>
            </div>
          </form>
    
        </div>
        </div>
  )
}

export default Login