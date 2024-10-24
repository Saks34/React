import React, { useState } from 'react';
import './Auth.css'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div className="auth-buttons">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>
          Sign Up
        </button>
      </div>

      {isLogin ? (
        <form className="auth-form">
          <div>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <a href="#forgot-password">Forgot password?</a>
          <button type="submit">Login</button>
          <p>
            Not a member?{' '}
            <span className="toggle-signup" onClick={() => setIsLogin(false)}>
              Sign up
            </span>
          </p>
        </form>
      ) : (
        <form className="auth-form">
          <div>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default Auth;
