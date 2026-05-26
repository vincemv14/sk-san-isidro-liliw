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

export default function AdminDashboard() {
  const navigate   = useNavigate();
  const [requests, setRequests]         = useState([]);
  const [loading, setLoading]           = useState(true);
  const [filterStatus, setFilterStatus] = useState('All');
  const [search, setSearch]             = useState('');
  const [saving, setSaving]             = useState({}); // { [id]: true/false }
  const [saved, setSaved]               = useState({}); // { [id]: true/false }
  const [localStatus, setLocalStatus]   = useState({}); // { [id]: status }

  // ✅ Guard — redirect to login if not authenticated
  useEffect(() => {
    if (sessionStorage.getItem('bsi_admin_auth') !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

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

  const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

  const filtered = requests.filter(r => {
    const matchStatus = filterStatus === 'All' || r.status === filterStatus || (!r.status && filterStatus === 'Pending');
    const q = search.toLowerCase();
    const matchSearch = !q ||
      r.resident_name?.toLowerCase().includes(q) ||
      r.reference_code?.toLowerCase().includes(q) ||
      r.clearance_type?.toLowerCase().includes(q) ||
      r.contact_number?.includes(q);
    return matchStatus && matchSearch;
  });

  // Stats
  const stats = STATUSES.reduce((acc, s) => {
    acc[s] = requests.filter(r => (r.status || 'Pending') === s).length;
    return acc;
  }, {});
  stats['All'] = requests.length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', fontFamily: 'Arial, sans-serif' }}>

      {/* Top Nav */}
      <div style={{ background: '#002c02', padding: '0 clamp(16px, 4vw, 40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
        <div>
          <span style={{ color: '#ffd000', fontWeight: 'bold', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>BARANGAY SAN ISIDRO</span>
          <span style={{ color: '#aaa', fontSize: '0.8rem', marginLeft: '12px' }}>Admin Dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button onClick={fetchRequests} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.82rem' }}>
            ↻ Refresh
          </button>
          <button onClick={handleLogout} style={{ background: '#b71c1c', border: 'none', color: '#fff', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.82rem' }}>
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: 'clamp(16px, 4vw, 32px) clamp(12px, 3vw, 24px)' }}>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Total', key: 'All', color: '#002c02' },
            { label: 'Pending', key: 'Pending', color: '#795548' },
            { label: 'Processing', key: 'Processing', color: '#1565c0' },
            { label: 'Ready', key: 'Ready for Pickup', color: '#6a1b9a' },
            { label: 'Completed', key: 'Completed', color: '#2e7d32' },
            { label: 'Rejected', key: 'Rejected', color: '#b71c1c' },
          ].map(s => (
            <div key={s.key} onClick={() => setFilterStatus(s.key)} style={{
              background: '#fff', borderRadius: '12px', padding: '16px',
              textAlign: 'center', cursor: 'pointer',
              border: filterStatus === s.key ? `2px solid ${s.color}` : '1px solid #e2e8f0',
              transition: 'all 0.2s'
            }}>
              <p style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 'bold', color: s.color, margin: '0 0 4px' }}>{stats[s.key] || 0}</p>
              <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search + Filter Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name, reference code, service..."
            style={{ flex: 1, minWidth: '200px', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '0.9rem', outline: 'none' }}
          />
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e0', fontSize: '0.9rem', background: '#fff', cursor: 'pointer' }}
          >
            <option value="All">All Statuses</option>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Table */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>Loading requests...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            No requests found.
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filtered.map((req) => (
              <div key={req.id} style={{
                background: '#fff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '18px 20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '12px',
                alignItems: 'center'
              }}>
                {/* Name + Ref */}
                <div>
                  <p style={{ fontWeight: '700', color: '#1e293b', margin: '0 0 3px', fontSize: '0.95rem' }}>{req.resident_name}</p>
                  <p style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#64748b', margin: '0 0 3px' }}>{req.reference_code}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{formatDate(req.created_at)}</p>
                </div>

                {/* Service */}
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 2px' }}>Service</p>
                  <p style={{ fontSize: '0.88rem', color: '#1e293b', margin: '0 0 2px', fontWeight: '500' }}>{req.clearance_type}</p>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>₱{req.total_price?.toFixed(2)} · Qty {req.quantity}</p>
                </div>

                {/* Contact */}
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 2px' }}>Contact</p>
                  <p style={{ fontSize: '0.88rem', color: '#1e293b', margin: 0 }}>{req.contact_number}</p>
                </div>

                {/* Current Status Badge */}
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 6px' }}>Current Status</p>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '99px',
                    fontSize: '0.78rem',
                    fontWeight: 'bold',
                    background: statusColors[req.status || 'Pending']?.bg,
                    color: statusColors[req.status || 'Pending']?.color,
                    border: `1px solid ${statusColors[req.status || 'Pending']?.border}`
                  }}>
                    {req.status || 'Pending'}
                  </span>
                </div>

                {/* Status Selector + Save */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <select
                    value={localStatus[req.id] || req.status || 'Pending'}
                    onChange={e => handleStatusChange(req.id, e.target.value)}
                    style={{ padding: '8px 10px', borderRadius: '8px', border: '1.5px solid #cbd5e0', fontSize: '0.85rem', background: '#f8fafc', cursor: 'pointer' }}
                  >
                    {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <button
                    onClick={() => handleSave(req.id)}
                    disabled={saving[req.id]}
                    style={{
                      padding: '8px 14px',
                      background: saved[req.id] ? '#2e7d32' : '#006400',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '0.82rem',
                      cursor: saving[req.id] ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s'
                    }}
                  >
                    {saving[req.id] ? 'Saving...' : saved[req.id] ? '✓ Saved!' : 'Update Status'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p style={{ textAlign: 'center', color: '#cbd5e0', fontSize: '0.78rem', marginTop: '32px' }}>
          Showing {filtered.length} of {requests.length} requests
        </p>
      </div>
    </div>
  );
}
