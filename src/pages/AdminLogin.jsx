import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminImg from '../assets/admin.png';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);
  const navigate = useNavigate();

  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME || 'official';
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'sanisidro';

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('bsi_admin_auth', 'true');
        navigate('/admin-dashboard');
      } else {
        setError('Incorrect username or password. Please try again.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #001401 0%, #002c02 60%, #001f01 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', Arial, sans-serif",
      padding: '20px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow blobs */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,208,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,208,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: 'clamp(28px, 6vw, 48px)',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Logo / avatar */}
        <div style={{
          width: '88px', height: '88px',
          borderRadius: '50%', overflow: 'hidden',
          margin: '0 auto 20px',
          border: '3px solid #001f01',
          background: '#f0f7f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={adminImg} alt="Admin" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Heading */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: 'rgba(0,31,1,0.07)', border: '1px solid rgba(0,31,1,0.15)',
          color: '#2d7a32', fontSize: '10px', fontWeight: '700',
          padding: '4px 12px', borderRadius: '100px',
          letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px',
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          Restricted Access
        </div>

        <h2 style={{ color: '#001f01', margin: '0 0 6px', fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: '700' }}>
          Admin Login
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: '0 0 28px', lineHeight: '1.5' }}>
          Barangay San Isidro Officials Only
        </p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>

          {/* Username */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                color: '#94a3b8', display: 'flex', alignItems: 'center',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                style={{
                  width: '100%', padding: '12px 14px 12px 36px',
                  borderRadius: '9px', border: '1.5px solid #cbd5e1',
                  fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = '#064e3b'}
                onBlur={e  => e.target.style.borderColor = '#cbd5e1'}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                color: '#94a3b8', display: 'flex', alignItems: 'center',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <input
                type={showPass ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                style={{
                  width: '100%', padding: '12px 42px 12px 36px',
                  borderRadius: '9px', border: '1.5px solid #cbd5e1',
                  fontSize: '0.92rem', boxSizing: 'border-box', outline: 'none',
                  transition: 'border-color 0.2s',
                  fontFamily: 'inherit',
                }}
                onFocus={e => e.target.style.borderColor = '#064e3b'}
                onBlur={e  => e.target.style.borderColor = '#cbd5e1'}
              />
              {/* Show / hide toggle */}
              <button
                type="button"
                onClick={() => setShowPass(p => !p)}
                style={{
                  position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: '#94a3b8', padding: 0, display: 'flex', alignItems: 'center',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#334155'}
                onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
              >
                {showPass ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: '#ffebee', border: '1px solid #ef9a9a',
              borderRadius: '9px', padding: '11px 14px',
              color: '#b71c1c', fontSize: '0.84rem',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '13px',
              background: loading ? '#4a7c59' : '#001f01',
              color: '#FFD000',
              border: 'none',
              borderRadius: '9px',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '6px',
              transition: 'background 0.2s, transform 0.15s',
              fontFamily: 'inherit',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => { if (!loading) e.target.style.background = '#064e3b'; }}
            onMouseLeave={e => { if (!loading) e.target.style.background = '#001f01'; }}
          >
            {loading ? 'Verifying…' : 'Login'}
          </button>
        </form>

        <p style={{ color: '#cbd5e1', fontSize: '0.78rem', marginTop: '22px', lineHeight: '1.5' }}>
          This area is restricted to authorized barangay staff only.
        </p>
      </div>
    </div>
  );
}
