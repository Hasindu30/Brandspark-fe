import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        firstName,
        secondName,
        email,
        password
      });
      console.log(res.data);
      // Store token in localStorage or state
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <div className="input-field">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName">Enter your first name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
              required
            />
            <label htmlFor="secondName">Enter your second name</label>
          </div>
          <div className="input-field">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Enter your email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Enter your password</label>
          </div>
          <button type="submit">Signup</button>
          <div className="register">
            <p>Already have an account? <a href="/Login">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;



/* import React from 'react';
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
              render={renderProps => (
                <button
                  className="google-login-button"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    width="200"
                    height="200"
                  />
                login with Google
                </button>
              )}
            />
          </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Signup;
 */