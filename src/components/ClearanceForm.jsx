import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 

export default function ClearanceForm() {
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

  const [formData, setFormData] = useState({ 
    name: '', 
    type: defaultType, 
    qty: 1, 
    phone: '' 
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedService = serviceCategories
      .flatMap(cat => cat.items)
      .find(item => item.name === formData.type);
    
    const totalPrice = (selectedService ? selectedService.price : 0) * formData.qty;

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from('clearance_requests')
      .insert([{ 
        resident_name: formData.name, 
        clearance_type: formData.type, 
        quantity: formData.qty, 
        total_price: totalPrice,
        contact_number: formData.phone 
      }])
      .select();

    if (error) {
      setLoading(false);
      alert("Error: " + error.message);
      return;
    }

    // 2. Send email notification via Brevo
    try {
      await fetch("https://rldwnflgixgoqszinxur.supabase.co/functions/v1/send-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          resident_name: formData.name,
          clearance_type: formData.type,
          quantity: formData.qty,
          total_price: totalPrice,
          contact_number: formData.phone,
        }),
      });
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
    }

    setLoading(false);
    alert("Success! Your Reference Code is: " + data[0].id);
    // ✅ Reset form BEFORE returning from the handler
    setFormData({ name: '', type: defaultType, qty: 1, phone: '' });
  }; // ✅ handleSubmit ends here

  // ✅ JSX return is at the component level, not inside handleSubmit
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', background: '#ffffff', borderRadius: '16px', border: '1px solid #cecece', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.16)' }}>
      <h2 style={{ textAlign: 'center', color: '#002c02', marginBottom: '25px', marginTop: 0 }}>Request Service</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Full Name</label>
          {/* ✅ Added value prop for controlled input */}
          <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Service Type</label>
          {/* ✅ Added value prop for controlled select */}
          <select 
            value={formData.type}
            onChange={e => setFormData({...formData, type: e.target.value})}
            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0', background: '#fff' }}
          >
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Quantity</label>
            {/* ✅ Added value prop for controlled input */}
            <input type="number" value={formData.qty} min={1} onChange={e => setFormData({...formData, qty: parseInt(e.target.value)})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: '600', color: '#4a5568' }}>Phone</label>
            {/* ✅ Added value prop for controlled input */}
            <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e0' }} />
          </div>
        </div>

        <button type="submit" disabled={loading} style={{ marginTop: '10px', padding: '14px', background: '#006400', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          {loading ? 'Submitting...' : 'SUBMIT REQUEST'}
        </button>
      </form>
    </div>
  );
}