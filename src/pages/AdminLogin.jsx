import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminImg from '../assets/admin.png';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'sanisidro';

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('bsi_admin_auth', 'true');
        navigate('/admin-dashboard');
      } else {
        setError('Incorrect password. Please try again.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#002c02',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: 'clamp(28px, 6vw, 48px)',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        textAlign: 'center'
      }}>

        {/* ✅ admin.png image instead of emoji icon */}
        <div style={{
          width: '88px',
          height: '88px',
          borderRadius: '50%',
          overflow: 'hidden',
          margin: '0 auto 20px',
          border: '3px solid #002c02',
          background: '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={adminImg}
            alt="Admin"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <h2 style={{ color: '#002c02', margin: '0 0 6px', fontSize: '1.4rem' }}>ADMIN LOGIN</h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', margin: '0 0 28px' }}>
          Barangay San Isidro Officials Only
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: '600', color: '#4a5568', display: 'block', marginBottom: '6px' }}>
              Admin Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '13px 14px',
                borderRadius: '8px',
                border: '1.5px solid #cbd5e0',
                fontSize: '0.95rem',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          {error && (
            <div style={{ background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: '8px', padding: '10px 14px', color: '#b71c1c', fontSize: '0.85rem' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '14px',
              background: '#006400',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.8 : 1,
              marginTop: '4px'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ color: '#a1a1a1', fontSize: '0.9rem', marginTop: '24px' }}>
          This area is restricted to authorized barangay staff only.
        </p>
      </div>
    </div>
  );
}
