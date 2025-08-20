import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook } from 'react-icons/fa';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      // Mock login - replace with actual authentication
      const user = {
        id: 1,
        email: "admin@store.com",
        password: "admin123",
        name: "Admin User",
        role: "admin"
      };

      if (formData.email === user.email && formData.password === user.password) {
        onLogin(user);
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } else {
      // Mock registration
      const newUser = {
        id: Date.now(),
        ...formData,
        role: 'user'
      };
      onLogin(newUser);
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Sign in to continue' : 'Get started with your account'}</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="auth-input"
                required
              />
            </div>
          )}

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="auth-input"
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="auth-input"
              required
            />
          </div>

          {isLogin && (
            <div className="forgot-password">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="auth-button">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="auth-divider">
            <span>or continue with</span>
          </div>

          <div className="social-auth">
            <button type="button" className="social-button google">
              <FaGoogle /> Google
            </button>
            <button type="button" className="social-button facebook">
              <FaFacebook /> Facebook
            </button>
          </div>
        </form>

        <p className="auth-switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin 
            ? "Don't have an account? Sign up" 
            : "Already have an account? Sign in"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
