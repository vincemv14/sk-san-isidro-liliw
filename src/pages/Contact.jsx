import React from 'react';

const Contact = () => {
  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  // --- Row 1: Emergency Hotlines ---
  const emergencyNumbers = [
    { label: "PNP Liliw (Police)", number: "(049) 563-1234", color: "#e11d48" },
    { label: "BFP Liliw (Fire)", number: "(049) 563-5678", color: "#f59e0b" },
    { label: "Liliw RHU (Medical)", number: "(049) 563-9000", color: "#10b981" },
    { label: "MDRRMO Liliw", number: "0912-345-6789", color: "#1d4ed8" }
  ];

  // --- Row 2: Social Media ---
  const socialLinks = [
    { platform: "Facebook", name: "SK San Isidro - Liliw", link: "https://facebook.com/sksanisidroliliw", color: "#1877F2" },
    { platform: "Instagram", name: "@sksanisidro", link: "https://instagram.com", color: "#E4405F" }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      
      {/* HERO SECTION */}
      <section style={{ backgroundColor: brandGreen, padding: '120px 10% 60px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: brandGold, fontWeight: '800' }}>GET IN TOUCH</h1>
        <p style={{ opacity: 0.8, maxWidth: '700px', margin: '20px auto' }}>
          We are here to serve. Reach out for emergencies, inquiries about youth programs, or community concerns.
        </p>
      </section>

      {/* ROW 1: EMERGENCY HOTLINES (High Priority) */}
      <section style={{ padding: '80px 10% 40px' }}>
        <h2 style={sectionTitleStyle}>🚨 Emergency Hotlines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {emergencyNumbers.map((item, index) => (
            <div key={index} style={{ 
              padding: '25px', 
              borderRadius: '16px', 
              backgroundColor: '#fff1f2', 
              border: `1px solid ${item.color}`,
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 10px 0', color: item.color }}>{item.label}</h4>
              <p style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#000' }}>{item.number}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ROW 2: SOCIAL MEDIA & SK CHANNELS */}
      <section style={{ padding: '60px 10%', backgroundColor: '#f8fafc' }}>
        <h2 style={sectionTitleStyle}>📱 Connect with Us</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {socialLinks.map((soc, index) => (
            <a key={index} href={soc.link} target="_blank" rel="noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '20px 40px',
              backgroundColor: 'white',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e2e8f0',
              transition: '0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span style={{ fontWeight: 'bold', color: soc.color }}>{soc.platform}</span>
              <span style={{ color: '#475569' }}>{soc.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ROW 3: PHYSICAL OFFICE & SB SAN ISIDRO */}
      <section style={{ padding: '80px 10% 120px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px' 
        }}>
          {/* SK Office */}
          <div style={officeCardStyle}>
            <h3 style={{ color: brandGreen }}>SK San Isidro Office</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              📍 2nd Floor, Barangay Hall Building<br />
              San Isidro, Liliw, Laguna<br />
              Philippines, 4004
            </p>
            <p style={{ fontWeight: 'bold' }}>Office Hours: Mon-Fri (8:00 AM - 5:00 PM)</p>
          </div>

          {/* Sangguniang Barangay */}
          <div style={officeCardStyle}>
            <h3 style={{ color: brandGreen }}>Sangguniang Barangay</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6' }}>
              For Barangay Clearances, Indigency, and Blotter concerns, 
              please visit the main Barangay Hall Ground Floor.
            </p>
            <p style={{ fontWeight: 'bold' }}>Contact: (049) XXX-XXXX</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Styles & Components ---

const sectionTitleStyle = {
  fontSize: '2rem',
  color: '#002c02',
  textAlign: 'center',
  marginBottom: '40px',
  textTransform: 'uppercase'
};

const officeCardStyle = {
  padding: '40px',
  borderRadius: '24px',
  border: '1px solid #e2e8f0',
  backgroundColor: 'white',
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)'
};

const Footer = () => (
  <footer style={{ backgroundColor: '#002c02', padding: '60px 10%', color: '#ffffff' }}>
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: '#ffd000' }}>BARANGAY SAN ISIDRO</h2>
      <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Liliw, Laguna • Service with Transparency</p>
      <div style={{ marginTop: '30px', fontSize: '0.8rem', opacity: 0.3 }}>
        © 2026 Designed by SK Vince M. Villanueva.
      </div>
    </div>
  </footer>
);

export default Contact;