"use client";
import { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/'; // Redirect to home page
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundImage: 'url(background_mongo.png)', 
      backgroundSize: 'cover' 
    }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
      <h1>Trip Planner</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', color: 'black' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', color: 'black' }}
      />
      <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#00684A', color: 'white', border: 'none' }}>
        Login
      </button>
      </form>
    </div>
  );
};

export default Login;