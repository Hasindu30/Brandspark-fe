import React from 'react';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = () => {
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
        <Navbar />
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
            <button type="submit">Login</button>
            <div className="register">
              <p>Don't have an account? <a href="/Signup">Register</a></p>
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
                    width="20"
                    height="20"
                  />
                  Login with Google
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
