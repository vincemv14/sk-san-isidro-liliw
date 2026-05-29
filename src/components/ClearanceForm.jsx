import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function ClearanceForm({ onSuccess }) {
  const serviceCategories = [
    {
      title: "Clearances & Applications",
      items: [
        { name: "Sari-Sari Store Clearance", price: 100 },
        { name: "Driver's License Application", price: 50 },
        { name: "Loan Application", price: 50 },
        { name: "Local Employment Application", price: 50 },
        { name: "Police Clearance Application", price: 50 },
        { name: "Electric Connection Application", price: 50 },
        { name: "Water Connection Application", price: 50 },
        { name: "Internet Connection Application", price: 50 },
        { name: "Commercial Store", price: 200 },
        { name: "Vehicle Service Center", price: 100 },
        { name: "Warehouse", price: 500 },
        { name: "Space Rental/Apartment", price: 100 },
        { name: "Construction Firm", price: 500 },
        { name: "Gasoline Station", price: 500 },
        { name: "Internet Cafe", price: 100 },
        { name: "Computer Shop", price: 100 },
        { name: "Junk Shop", price: 500 },
        { name: "Other Clearances Not Mentioned", price: 50 }
      ]
    },
    {
      title: "Permits & Certifications",
      items: [
        { name: "Certification of Residency/Personal Identity", price: 0 },
        { name: "Certification of Economic Status/Indigence", price: 0 },
        { name: "Certification of Compliance", price: 0 },
        { name: "Agreement/Deed of Sale", price: 100 },
        { name: "Building Permit", price: 100 },
        { name: "Fencing Permit", price: 100 }
      ]
    },
    {
      title: "Facility Rentals",
      items: [
        { name: "Basketball Court (Private Org/Full Day)", price: 700 },
        { name: "Basketball Court (Night Time/2 hours)", price: 200 }
      ]
    }
  ];

  const defaultType = serviceCategories[0].items[0].name;

  const [formData, setFormData] = useState({ name: '', type: defaultType, qty: 1, phone: '' });
  const [loading, setLoading] = useState(false);
  const [successCode, setSuccessCode] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(successCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleClose = () => {
    setSuccessCode(null);
    setCopied(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedService = serviceCategories
      .flatMap((cat) => cat.items)
      .find((item) => item.name === formData.type);

    const totalPrice = (selectedService ? selectedService.price : 0) * formData.qty;

    const { data, error } = await supabase
      .from('clearance_requests')
      .insert([{
        resident_name: formData.name,
        clearance_type: formData.type,
        quantity: formData.qty,
        total_price: totalPrice,
        contact_number: formData.phone,
      }])
      .select('reference_code');

    if (error) {
      setLoading(false);
      alert('Error: ' + error.message);
      return;
    }

    const generatedCode = data[0].reference_code;

    try {
      await fetch(
        'https://rldwnflgixgoqszinxur.supabase.co/functions/v1/send-notification',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            resident_name: formData.name,
            clearance_type: formData.type,
            quantity: formData.qty,
            contact_number: formData.phone,
            total_price: totalPrice,
            reference_code: generatedCode,
          }),
        }
      );
    } catch (emailErr) {
      console.error('Email notification failed:', emailErr);
    }

    setLoading(false);
    setFormData({ name: '', type: defaultType, qty: 1, phone: '' });
    setSuccessCode(generatedCode);
    if (onSuccess) onSuccess(generatedCode);
  };

  return (
    <>
      {successCode && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999, padding: '20px' }}>
          <div style={{ background: '#002c02', border: '1px solid #fdd835', borderRadius: '20px', padding: '36px 32px', maxWidth: '440px', width: '100%', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: '#ffd000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '32px', color: '#002c02', fontWeight: 'bold' }}>✓</div>
            <h2 style={{ color: '#ffd000', margin: '0 0 10px', fontSize: '1.4rem' }}>Request Submitted!</h2>
            <div style={{ background: 'rgba(255,255,255,0.08)', border: '1.5px dashed #ffd000', borderRadius: '10px', padding: '16px', marginBottom: '8px' }}>
              <p style={{ color: '#aaa', fontSize: '0.75rem', margin: '0 0 6px', letterSpacing: '1px' }}>YOUR REFERENCE CODE</p>
              <p style={{ color: '#ffd000', fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '3px', margin: 0 }}>{successCode}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '20px' }}>
              <button onClick={handleCopy} style={{ padding: '11px 24px', background: '#ffd000', color: '#002c02', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>{copied ? '✓ Copied!' : 'Copy Code'}</button>
              <button onClick={handleClose} style={{ padding: '11px 24px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', cursor: 'pointer' }}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', background: '#ffffff', borderRadius: '16px', border: '1px solid #cecece', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.16)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ textAlign: 'center', color: '#002c02', margin: 0 }}>Request Service</h2>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Full Name</label>
            <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Service Type</label>
            <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0' }}>
              {serviceCategories.map((cat) => (
                <optgroup key={cat.title} label={cat.title}>
                  {cat.items.map((item) => (
                    <option key={item.name} value={item.name}>{item.name} - ₱{item.price}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Quantity</label>
              <input type="number" value={formData.qty} min={1} onChange={(e) => setFormData({ ...formData, qty: parseInt(e.target.value) })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Phone</label>
              <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', boxSizing: 'border-box' }} />
            </div>
          </div>
          <button type="submit" disabled={loading} style={{ padding: '14px', background: '#006400', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer' }}>
            {loading ? 'Submitting...' : 'SUBMIT REQUEST'}
          </button>
        </form>
      </div>
    </>
  );
}