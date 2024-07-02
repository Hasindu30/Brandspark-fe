import React from 'react';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Signup = () => {
  const handleSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // Handle the response and send it to your backend for further processing
  };

  const handleFailure = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div>
        <Navbar/>
        <div>
          <div className="wrapper">
            <form action="#">
              <h2>Sign Up</h2>
              <div className="input-field">
                <input type="text" required />
                <label htmlFor="First Name">Enter your First Name</label>
              </div>
              <div className="input-field">
                <input type="text" required />
                <label htmlFor="Second Name">Enter your Second Name</label>
              </div>
              <div className="input-field">
                <input type="text" required />
                <label htmlFor="email">Enter your email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label htmlFor="password">Enter your password</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label htmlFor="confirmPassword">Confirm password</label>
              </div>
              <br/><br/>
              <button type="submit">Signup</button>
              <div className="Login"><br/>
                <p className='Log'>If have an account? <a href="/Login">Login</a></p>
              </div>
            </form>
            <div className="google-login">
              <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleFailure}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Signup;
