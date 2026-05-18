import React, { useState } from 'react';
import heroBg from '../assets/home/san-isidro.jpg'; 

const Home = () => {
  const [showHotlines, setShowHotlines] = useState(false);
  const [showHealth, setShowHealth] = useState(false); // FIXED: Corrected state setter assignment
  const heroHeight = "80vh"; 

  // --- Styles ---
  const sectionHeadingStyle1 = {
    color: '#ffffff',
    fontSize: '2.2rem',
    marginBottom: '20px',
    display: 'inline-block',
    fontWeight: 'bold',
    borderBottom: '4px solid #ffd000'
  };

  const sectionHeadingStyle2 = {
    color: '#003f0e',
    fontSize: '2.2rem',
    marginBottom: '20px',
    display: 'inline-block',
    fontWeight: 'bold',
    borderBottom: '4px solid #538b56'
  };

  const glassButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    color: 'white',
    border: '1px solid white', 
    padding: '12px 30px',
    fontSize: '0.85rem',
    fontWeight: '600',
    borderRadius: '12px', 
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    outline: 'none'
  };

  // Helper for Hero Button Hover
  const handleHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)';
    e.target.style.transform = isHover ? 'translateY(-2px)' : 'translateY(0)';
  };

  return (
    <main className="home-container">
      {/* 1. HERO SECTION */}
      <section 
        id="hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${heroBg})`,
          height: heroHeight,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ padding: '0 10%', width: '100%' }}>
          <div style={{ color: 'white', textAlign: 'left' }}>
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 10px 0', lineHeight: '1', fontWeight: "650" }}>
              Welcome to <br /> Barangay San Isidro
            </h1>
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 20px 0', lineHeight: '1', fontWeight: "650" }}>
              Liliw, Laguna
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', maxWidth: '650px', opacity: '0.9', lineHeight: '1.6' }}>
              A progressive community, dedicated to genuine service to <br />
              enrich the lives of its residents through good governance.
            </p>
            
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                style={glassButtonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => document.getElementById('know-more').scrollIntoView({ behavior: 'smooth' })}
              >
                KNOW MORE
              </button>
              <button 
                style={glassButtonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => document.getElementById('calendar').scrollIntoView({ behavior: 'smooth' })}
              >
                CALENDAR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTENT SECTION: KNOW MORE */}
      <section id="know-more" style={{ backgroundColor: '#002c02', padding: '100px 10%' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={sectionHeadingStyle1}>KNOW MORE</h2>
          <p style={{ color: '#ffffff', fontSize: '1.15rem', lineHeight: '1.8', marginTop: '20px' }}>
            Barangay San Isidro is a community built on the pillars of 
            hard work and unity. Known as a vital part of Liliw, the <strong>"Tsinelas Capital,"</strong> we take 
            pride in our local heritage while embracing the future through digital innovation.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
             <div style={{ padding: '25px', borderLeft: '6px solid #ffd000', background: 'rgba(255,255,255,0.05)', borderRadius: '0 10px 10px 0', flex: 1 }}>
                <strong style={{ color: '#ffd000', fontSize: '1.1rem' }}>Our Vision:</strong>
                <p style={{ margin: '10px 0 0', color: '#e2e8f0' }}>To be a model of transparency and active youth participation in Laguna, fostering growth through technology and culture.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CONTENT SECTION: CALENDAR OF ACTIVITIES */}
      <section id="calendar" style={{ backgroundColor: '#ffffff', padding: '100px 10%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={sectionHeadingStyle2}>CALENDAR OF ACTIVITIES</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            <EventCard date="April 29 - May 03, 2026" title="22nd Tsinelas Festival" desc="Join us as we celebrate the 22nd Liliw Tsinelas Festival with local art exhibits." />
            <EventCard date="May 14, 2026 | 7:00 PM" title="Sayawan sa San Isidro 2026" desc="Quarterly meeting to discuss local projects and budget transparency." />
            <EventCard date="MAY 15, 2026 | 4:00 PM" title="Sagala 2026" desc="A workshop for young developers to sharpen their technical skills." />
            <EventCard date="May 16, 2026 | 2:00 PM" title="Sangguniang Kabataan Assembly" desc="Quarterly meeting to discuss local projects and budget transparency." />
          </div>
        </div>
      </section>

      {/* 4. QUICK LINKS GUIDE */}
      <section id="quick-links" style={{ backgroundColor: '#001a01', padding: '100px 10%', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ ...sectionHeadingStyle1, borderBottomColor: '#fdd835' }}>QUICK LINKS GUIDE</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginTop: '40px' }}>
            <QuickLinkCard 
              icon="📞" 
              title="Emergency Hotlines" 
              desc="Immediate access to PNP, BFP, and Local Rescue teams." 
              onClick={() => setShowHotlines(true)} 
            />
            <QuickLinkCard 
              icon="📋" 
              title="Disclosure Board" 
              desc="View Barangay budgets, projects, and transparency reports." 
              link="/disclosure" 
            />
            <QuickLinkCard 
              icon="🏥" 
              title="Health Services" 
              desc="Information on health centers and emergency ID solutions." 
              onClick={() => setShowHealth(true)}  
            />
          </div>
        </div>

        {/* --- EMERGENCY HOTLINES MODAL --- */}
        {showHotlines && (
          <div style={modalOverlayStyle} onClick={() => setShowHotlines(false)}>
            <div style={hotlineBoxStyle} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowHotlines(false)} style={closeButtonStyle}>×</button>
              <h3 style={{ color: '#fdd835', marginBottom: '20px', fontSize: '1.5rem' }}>🚨 EMERGENCY HOTLINES</h3>
              
              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Office of the Municipal Mayor:</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>563-1001 local 103</span>
                </div>
                <a href="https://www.facebook.com/MunicipalityofLiliw" target="_blank" rel="noreferrer" style={linkStyle}>
                  Visit Page
                </a>
              </div>
              
              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>BFP Liliw:</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>(049) 503-1756 / 0956-769-0379</span>
                </div>
                <a href="https://www.facebook.com/liliw.lagunabfp" target="_blank" rel="noreferrer" style={linkStyle}>
                  Visit Page
                </a>
              </div>
              
              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Liliw Municipal Police Station:</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>0906-360-4119 / 0998-598-5647</span>
                </div>
                <a href="https://www.facebook.com/liliwmps232" target="_blank" rel="noreferrer" style={linkStyle}>
                  Visit Page
                </a>
              </div>

              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Liliw MDRRMO:</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>0945-135-0537 / (049) 5033-621</span>
                </div>
                <a href="https://www.facebook.com/LiliwMdrrmoOfficialPage" target="_blank" rel="noreferrer" style={linkStyle}>
                  Visit Page
                </a>
              </div>

              <p style={{ fontSize: '0.8rem', marginTop: '20px', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textAlign: 'center' }}>
                Please use these numbers for urgent emergencies only.
              </p>
            </div>
          </div>
        )}

        {/* --- HEALTH SERVICES MODAL --- */}
        {showHealth && (
          <div style={modalOverlayStyle} onClick={() => setShowHealth(false)}>
            <div style={hotlineBoxStyle} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowHealth(false)} style={closeButtonStyle}>×</button>
              <h3 style={{ color: '#fdd835', marginBottom: '20px', fontSize: '1.5rem' }}>🏥 HEALTH SERVICES</h3>
              
              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Liliw Rural Health Unit (RHU):</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>(049) 563-3655</span>
                </div>
                
              </div>

              <div style={{ padding: '15px 0', fontSize: '0.95rem', lineHeight: '1.5', color: '#e2e8f0' }}>
                <strong>Barangay Health Workers (BHW):</strong>
                <p style={{ margin: '5px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                  For local checkups, basic medicine distribution, and maternal care schedules, please drop by or coordinate with our text updates directly through the San Isidro Barangay Hall health deck.
                </p>
              </div>

              <p style={{ fontSize: '0.8rem', marginTop: '20px', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textAlign: 'center' }}>
                Our health response team operates regular checkups daily from 8:00 AM to 5:00 PM.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 5. VISION RE-EMPHASIS / INFO */}
      <section style={{ backgroundColor: '#ffffff', padding: '100px 10%' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={sectionHeadingStyle2}>COMMUNITY VALUES</h2>
          <p style={{ color: '#000000', fontSize: '1.15rem', lineHeight: '1.8', marginTop: '20px' }}>
            Barangay San Isidro is a community built on the pillars of 
            hard work and unity. Known as a vital part of Liliw, the <strong>"Tsinelas Capital,"</strong> we take 
            pride in our local heritage while embracing the future through digital innovation.
          </p>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
             <div style={{ padding: '25px', borderLeft: '6px solid #ffd000', background: 'rgb(2, 51, 0)', borderRadius: '0 10px 10px 0', flex: 1 }}>
                <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>Our Vision:</strong>
                <p style={{ margin: '10px 0 0', color: '#e2e8f0' }}>To be a model of transparency and active youth participation in Laguna, fostering growth through technology and culture.</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Reusable Components ---

const EventCard = ({ date, title, desc }) => (
  <div style={{ 
    background: '#002c02', 
    padding: '30px', 
    borderRadius: '20px', 
    transition: 'transform 0.3s ease'
  }}
  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <span style={{ color: '#ffd000', fontWeight: '800', fontSize: '0.85rem' }}>{date}</span>
    <h3 style={{ margin: '15px 0', color: 'white', fontSize: '1.3rem' }}>{title}</h3>
    <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

const QuickLinkCard = ({ icon, title, desc, link, onClick }) => (
  <div style={quickLinkCardStyle}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{icon}</div>
    <h3 style={{ color: '#fdd835', fontSize: '1.2rem', marginBottom: '10px' }}>{title}</h3>
    <p style={{ color: '#cbd5e1', fontSize: '0.85rem', marginBottom: '20px' }}>{desc}</p>
    
    {onClick ? (
      <button onClick={onClick} style={actionButtonStyle}>VIEW LIST</button>
    ) : (
      <a href={link} style={{ textDecoration: 'none' }}>
        <button style={actionButtonStyle}>OPEN</button>
      </a>
    )}
  </div>
);

const Footer = () => (
  <footer style={{ 
    backgroundColor: '#002c02', 
    padding: '60px 10%', 
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ffffff' 
  }}>
    <div style={{ 
      maxWidth: '1100px', 
      margin: '0 auto', 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'space-between', 
      gap: '40px' 
    }}>
      <div style={{ flex: '1 1 300px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
          BARANGAY SAN ISIDRO
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', maxWidth: '400px' }}>
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna. 
          Dedicated to digital innovation and youth-led service.
        </p>
      </div>

      <div style={{ flex: '1 1 150px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: '1rem' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2' }}>
          <li><a href="#hero" style={footerLinkStyle}>Home</a></li>
          <li><a href="#know-more" style={footerLinkStyle}>About Us</a></li>
          <li><a href="#calendar" style={footerLinkStyle}>Events</a></li>
          <li><a href="#quick-links" style={footerLinkStyle}>Transparency</a></li>
        </ul>
      </div>

      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: '1rem' }}>Contact Us</h4>
        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '5px 0' }}>📍 Brgy. San Isidro, Liliw, Laguna</p>
        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '5px 0' }}>📧 contact@sangguniangkabataanngsanisidro@gmail.com</p>
        <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '5px 0' }}>📞 (049) XXX-XXXX</p>
      </div>
    </div>

    <div style={{ 
      maxWidth: '1100px', 
      margin: '40px auto 0', 
      paddingTop: '20px', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
      textAlign: 'center',
      fontSize: '0.8rem',
      color: 'rgba(255,255,255,0.5)'
    }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva. All Rights Reserved.
    </div>
  </footer>
);

// --- CSS-in-JS Objects ---

const quickLinkCardStyle = {
  background: 'rgba(255, 255, 255, 0.08)',
  padding: '30px',
  borderRadius: '15px',
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease'
};

const actionButtonStyle = {
  backgroundColor: '#fdd835', 
  color: '#002c02', 
  border: 'none', 
  padding: '10px 20px', 
  borderRadius: '8px', 
  fontWeight: 'bold', 
  cursor: 'pointer',
  width: '100%',
  textTransform: 'uppercase',
  fontSize: '0.8rem'
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 11000, /* Fixed layering value to stay over sticky page panels safely */
  backdropFilter: 'blur(4px)'
};

const hotlineBoxStyle = {
  backgroundColor: '#002c02',
  padding: '40px',
  borderRadius: '20px',
  border: '2px solid #fdd835',
  maxWidth: '450px',
  width: '90%',
  position: 'relative',
  color: 'white',
  boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
};

const hotlineItemStyle = {
  padding: '15px 0',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.1rem'
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '2rem',
  cursor: 'pointer',
  lineHeight: '1'
};

const linkStyle = {
  color: '#fdd835',
  textDecoration: 'underline',
  fontSize: '0.95rem'
};

const footerLinkStyle = {
  color: '#cbd5e1',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  cursor: 'pointer'
};

export default Home;