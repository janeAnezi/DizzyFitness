import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('All fields are required.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      if (response.status === 200) {
        alert('Login Successful');
        navigate('/'); 
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
      console.error(err.response || err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #ece9e6, #ffffff)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Log In</h2>

        {error && (
          <div
            style={{
              color: 'red',
              textAlign: 'center',
              marginBottom: '1rem',
              fontWeight: 'bold',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '5px',
                border: '1px solid #ddd',
                outline: 'none',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: '#333',
              }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '5px',
                border: '1px solid #ddd',
                outline: 'none',
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '0.8rem',
              backgroundColor: isLoading ? '#ccc' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>
        </form>

        <p
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: '#555',
          }}
        >
          Don't have an account?{' '}
          <a
            href="/register"
            style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
