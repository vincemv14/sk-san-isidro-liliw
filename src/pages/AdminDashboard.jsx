import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const STATUSES = ['Pending', 'Processing', 'Ready for Pickup', 'Completed', 'Rejected'];

const statusColors = {
  'Pending':           { bg: '#fff8e1', color: '#795548', border: '#ffe082' },
  'Processing':        { bg: '#e3f2fd', color: '#1565c0', border: '#90caf9' },
  'Ready for Pickup':  { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8' },
  'Completed':         { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7' },
  'Rejected':          { bg: '#ffebee', color: '#b71c1c', border: '#ef9a9a' },
};

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .admin-page { font-family: 'DM Sans', Arial, sans-serif; background: #f1f5f9; min-height: 100vh; }

  /* ── Top nav ── */
  .admin-nav {
    background: #001401; height: 60px;
    padding: 0 clamp(16px, 4vw, 40px);
    display: flex; align-items: center; justify-content: space-between;
    position: sticky; top: 0; z-index: 50;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
  .admin-nav-brand { color: #FFD000; font-weight: 700; font-size: clamp(0.82rem, 2vw, 0.96rem); }
  .admin-nav-sub   { color: rgba(255,255,255,0.4); font-size: 0.76rem; margin-left: 10px; }
  .admin-nav-btns  { display: flex; gap: 10px; align-items: center; }
  .nav-btn-refresh {
    background: transparent; border: 1px solid rgba(255,255,255,0.2);
    color: rgba(255,255,255,0.8); padding: 6px 14px; border-radius: 7px;
    cursor: pointer; font-size: 0.8rem; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, border-color 0.2s;
  }
  .nav-btn-refresh:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.4); }
  .nav-btn-logout {
    background: #b71c1c; border: none; color: #fff;
    padding: 6px 14px; border-radius: 7px; cursor: pointer;
    font-size: 0.8rem; font-family: 'DM Sans', sans-serif; font-weight: 600;
    transition: background 0.2s;
  }
  .nav-btn-logout:hover { background: '#991b1b'; }

  /* ── Content wrapper ── */
  .admin-content { max-width: 1300px; margin: 0 auto; padding: clamp(16px, 3vw, 28px) clamp(12px, 3vw, 24px); }

  /* ── Stats ── */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 12px; margin-bottom: 22px;
  }
  .stat-card {
    background: #fff; border-radius: 12px; padding: 16px;
    text-align: center; cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .stat-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
  .stat-num   { font-size: clamp(1.4rem, 4vw, 2rem); font-weight: 700; margin-bottom: 4px; }
  .stat-label { font-size: 0.72rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; }

  /* ── Controls ── */
  .controls-row { display: flex; gap: 10px; margin-bottom: 18px; flex-wrap: wrap; }
  .search-input {
    flex: 1; min-width: 200px; padding: 10px 14px;
    border-radius: 9px; border: 1.5px solid #e2e8f0;
    font-size: 0.88rem; outline: none;
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s;
    background: #fff;
  }
  .search-input:focus { border-color: #064e3b; }
  .filter-select {
    padding: 10px 14px; border-radius: 9px;
    border: 1.5px solid #e2e8f0; font-size: 0.88rem;
    background: #fff; cursor: pointer; outline: none;
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s;
  }
  .filter-select:focus { border-color: #064e3b; }

  /* ── Request cards ── */
  .requests-list { display: flex; flex-direction: column; gap: 12px; }
  .request-card {
    background: #fff; border-radius: 13px;
    border: 1px solid #e8eef0;
    padding: 18px 20px;
    display: grid;
    grid-template-columns: 1.4fr 1.2fr 0.9fr 0.9fr 1.1fr;
    gap: 14px; align-items: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .request-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: #c8dbc8; }
  @media (max-width: 860px) {
    .request-card { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 520px) {
    .request-card { grid-template-columns: 1fr; }
  }

  .rc-field-label { font-size: 0.7rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px; }
  .rc-name        { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 3px; }
  .rc-ref         { font-family: monospace; font-size: 0.78rem; color: #64748b; margin-bottom: 2px; }
  .rc-date        { font-size: 0.72rem; color: #94a3b8; }
  .rc-service     { font-size: 0.88rem; color: #1e293b; font-weight: 500; margin-bottom: 3px; }
  .rc-fee         { font-size: 0.78rem; color: #64748b; }
  .rc-contact     { font-size: 0.88rem; color: #334155; }
  .status-badge   { display: inline-block; padding: 4px 12px; border-radius: 100px; font-size: 0.76rem; font-weight: 700; border: 1px solid; }

  .status-select {
    width: 100%; padding: 9px 11px; border-radius: 8px;
    border: 1.5px solid #e2e8f0; font-size: 0.84rem;
    background: #f8fafc; cursor: pointer; outline: none;
    font-family: 'DM Sans', sans-serif; margin-bottom: 8px;
    transition: border-color 0.2s;
  }
  .status-select:focus { border-color: #064e3b; }
  .save-btn {
    width: 100%; padding: 9px 14px; border: none;
    border-radius: 8px; font-weight: 700; font-size: 0.82rem;
    cursor: pointer; transition: background 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .save-btn:hover:not(:disabled) { transform: translateY(-1px); }
  .save-btn:disabled { opacity: 0.65; cursor: not-allowed; }

  /* ── Empty / loading states ── */
  .empty-state {
    text-align: center; padding: 60px 20px;
    background: #fff; border-radius: 13px;
    border: 1px solid #e8eef0; color: #94a3b8;
  }
  .empty-icon { font-size: 2.4rem; margin-bottom: 10px; }
  .empty-text { font-size: 0.92rem; }

  /* ── Footer hint ── */
  .admin-footer { text-align: center; color: #cbd5e1; font-size: 0.76rem; margin-top: 28px; padding-bottom: 20px; }
`;

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [requests,     setRequests]     = useState([]);
  const [loading,      setLoading]      = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [search,       setSearch]       = useState('');
  const [saving,       setSaving]       = useState({});
  const [saved,        setSaved]        = useState({});
  const [localStatus,  setLocalStatus]  = useState({});

  // ── Auth guard ────────────────────────────────────────────────────────
  useEffect(() => {
    if (sessionStorage.getItem('bsi_admin_auth') !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  // ── Fetch ─────────────────────────────────────────────────────────────
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('clearance_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setRequests(data);
      const init = {};
      data.forEach(r => { init[r.id] = r.status || 'Pending'; });
      setLocalStatus(init);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchRequests(); }, [fetchRequests]);

  // ── Handlers ──────────────────────────────────────────────────────────
  const handleStatusChange = (id, newStatus) => {
    setLocalStatus(prev => ({ ...prev, [id]: newStatus }));
    setSaved(prev => ({ ...prev, [id]: false }));
  };

  const handleSave = async (id) => {
    setSaving(prev => ({ ...prev, [id]: true }));
    const { error } = await supabase
      .from('clearance_requests')
      .update({ status: localStatus[id] })
      .eq('id', id);

    if (!error) {
      setSaved(prev => ({ ...prev, [id]: true }));
      setRequests(prev => prev.map(r => r.id === id ? { ...r, status: localStatus[id] } : r));
      setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2500);
    }
    setSaving(prev => ({ ...prev, [id]: false }));
  };

  const handleLogout = () => {
    sessionStorage.removeItem('bsi_admin_auth');
    navigate('/admin');
  };

  const formatDate = (d) =>
    d ? new Date(d).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

  // ── Filtered list ─────────────────────────────────────────────────────
  const filtered = requests.filter(r => {
    const matchStatus = filterStatus === 'All' || r.status === filterStatus || (!r.status && filterStatus === 'Pending');
    const q = search.toLowerCase();
    const matchSearch = !q ||
      r.resident_name?.toLowerCase().includes(q)  ||
      r.reference_code?.toLowerCase().includes(q) ||
      r.clearance_type?.toLowerCase().includes(q) ||
      r.contact_number?.includes(q);
    return matchStatus && matchSearch;
  });

  // ── Stats ─────────────────────────────────────────────────────────────
  const stats = STATUSES.reduce((acc, s) => {
    acc[s] = requests.filter(r => (r.status || 'Pending') === s).length;
    return acc;
  }, {});
  stats['All'] = requests.length;

  const statConfig = [
    { label: 'Total',      key: 'All',             color: '#001f01' },
    { label: 'Pending',    key: 'Pending',          color: '#795548' },
    { label: 'Processing', key: 'Processing',       color: '#1565c0' },
    { label: 'Ready',      key: 'Ready for Pickup', color: '#6a1b9a' },
    { label: 'Completed',  key: 'Completed',        color: '#2e7d32' },
    { label: 'Rejected',   key: 'Rejected',         color: '#b71c1c' },
  ];

  return (
    <div className="admin-page">
      <style>{globalCSS}</style>

      {/* ── TOP NAV ──────────────────────────────────────────────────── */}
      <nav className="admin-nav">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="admin-nav-brand">Barangay San Isidro</span>
          <span className="admin-nav-sub">Admin Dashboard</span>
        </div>
        <div className="admin-nav-btns">
          <button className="nav-btn-refresh" onClick={fetchRequests}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
              </svg>
              Refresh
            </span>
          </button>
          <button className="nav-btn-logout" onClick={handleLogout}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
              Logout
            </span>
          </button>
        </div>
      </nav>

      <div className="admin-content">

        {/* ── STATS ──────────────────────────────────────────────────── */}
        <div className="stats-grid">
          {statConfig.map(s => (
            <div
              key={s.key}
              className="stat-card"
              onClick={() => setFilterStatus(s.key)}
              style={{ borderColor: filterStatus === s.key ? s.color : 'transparent' }}
            >
              <div className="stat-num" style={{ color: s.color }}>{stats[s.key] || 0}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── CONTROLS ───────────────────────────────────────────────── */}
        <div className="controls-row">
          <input
            className="search-input"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍  Search by name, reference code, service…"
          />
          <select
            className="filter-select"
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* ── REQUESTS ───────────────────────────────────────────────── */}
        {loading ? (
          <div className="empty-state">
            <div className="empty-icon">⏳</div>
            <div className="empty-text">Loading requests…</div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📭</div>
            <div className="empty-text">No requests found.</div>
          </div>
        ) : (
          <div className="requests-list">
            {filtered.map((req) => {
              const sc = statusColors[req.status || 'Pending'];
              const isSaving = saving[req.id];
              const isSaved  = saved[req.id];
              return (
                <div key={req.id} className="request-card">

                  {/* Name + Ref + Date */}
                  <div>
                    <div className="rc-name">{req.resident_name}</div>
                    <div className="rc-ref">{req.reference_code}</div>
                    <div className="rc-date">{formatDate(req.created_at)}</div>
                  </div>

                  {/* Service */}
                  <div>
                    <div className="rc-field-label">Service</div>
                    <div className="rc-service">{req.clearance_type}</div>
                    <div className="rc-fee">₱{req.total_price?.toFixed(2)} &nbsp;·&nbsp; Qty {req.quantity}</div>
                  </div>

                  {/* Contact */}
                  <div>
                    <div className="rc-field-label">Contact</div>
                    <div className="rc-contact">{req.contact_number}</div>
                  </div>

                  {/* Current status badge */}
                  <div>
                    <div className="rc-field-label">Status</div>
                    <span
                      className="status-badge"
                      style={{ background: sc?.bg, color: sc?.color, borderColor: sc?.border }}
                    >
                      {req.status || 'Pending'}
                    </span>
                  </div>

                  {/* Selector + Save */}
                  <div>
                    <select
                      className="status-select"
                      value={localStatus[req.id] || req.status || 'Pending'}
                      onChange={e => handleStatusChange(req.id, e.target.value)}
                    >
                      {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <button
                      className="save-btn"
                      onClick={() => handleSave(req.id)}
                      disabled={isSaving}
                      style={{
                        background: isSaved ? '#2e7d32' : '#001f01',
                        color: isSaved ? '#fff' : '#FFD000',
                      }}
                    >
                      {isSaving ? 'Saving…' : isSaved ? '✓ Saved!' : 'Update Status'}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        <p className="admin-footer">
          Showing {filtered.length} of {requests.length} requests
        </p>
      </div>
    </div>
  );
}
