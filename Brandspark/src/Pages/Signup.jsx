import React from 'react'

import './Signup.css';

const Signup = () => {
  return (
    <div>
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
          <input type="confirmPassword" required />
          <label htmlFor="confirmPassword">Confirm password</label>
        </div><br/><br/>

        <button type="submit">Sign Up</button>
        <div className="Login"><br/>
          <p className='Log'>Don't have an account? <a href="/Login">Register</a></p>
        </div>
      </form>

    </div>
    </div>


    </div>
  )
}

export default Signup