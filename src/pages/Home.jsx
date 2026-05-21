import React, { useState } from 'react';
import heroBg from '../assets/home/san-isidro.jpg'; 
import agriPhoto from '../assets/activities/project/agrivillage.jpg';
import AnimatedHeader from "../components/AnimatedHeader";


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


const Home = () => {
  const [showHotlines, setShowHotlines] = useState(false);
  const [showHealth, setShowHealth] = useState(false); // FIXED: Corrected state setter assignment
  const heroHeight = "80vh"; 

  
  const glassButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)', 
    color: 'white',
    border: '1px solid white', 
    padding: '12px 25px',
    fontSize: '0.8rem',
    fontWeight: '600',
    borderRadius: '12px', 
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'all 0.3s ease',
    marginBottom: '30px',
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
            <h1 style={{ fontSize: '3.5rem', margin: '0 0 30px 0', lineHeight: '1', fontWeight: "650" }}>
              Liliw, Laguna
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '40px', maxWidth: '650px', opacity: '0.9', lineHeight: '1.6' }}>
              Enriching the lives of our residents through good governance, genuine service, and a unified commitment to a progressive, innovative, and culturally proud San Isidro.
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
      <section id="know-more" style={{ backgroundColor: '#002c02', padding: '150px 10%' }}>
        <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto' }}>
          <AnimatedHeader />
          <h2 style={sectionHeadingStyle1}>KNOW MORE</h2>
          <AnimatedHeader />

          <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Paragraph 1 */}
            <p style={{ margin: 0, color: '#e2e8f0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Inspired by our patron saint, <strong>San Isidro Labrador</strong>, our barangay is built on 
              collective action (<em>Bayanihan</em>) and honest labor. Just as San Isidro found holiness in 
              cultivating the land, our community finds its true strength in dedication and shared growth. 
              This industrious spirit perfectly mirrors our town's broader identity as the 
              <strong> "Tsinelas Capital of the Philippines."</strong> The same meticulous hands that 
              craft Liliw's famous footwear are the hands that build up our neighborhood—shaping a resilient 
              community culture defined by perseverance, economic self-reliance, and deep artistic pride.
            </p>

            {/* Paragraph 2 */}
            <p style={{ margin: 0, color: '#e2e8f0', fontSize: '1.05rem', lineHeight: '1.7' }}>
              For us, this unified foundation means that genuine public service and transparent governance 
              are the keys to cultivating a thriving, forward-thinking environment. From grassroots 
              community feeding initiatives during challenging times to vibrant sports tournaments and 
              grand cultural festivals, our unity is our primary harvest. Guided by the faithful example 
              of San Isidro and the proud craftsmanship traditions of Liliw, we remain fiercely dedicated 
              to fostering an inclusive barangay where our youth are actively empowered to lead, our 
              families are safeguarded, and every resident's voice is structurally valued.
            </p>

          </div>
        </div>
      </section>

      {/* 3. CONTENT SECTION: CALENDAR OF ACTIVITIES */}
      <section id="calendar" style={{ backgroundColor: '#f9f9f9', padding: '100px 10%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <AnimatedHeader />
            <h2 style={sectionHeadingStyle2}>CALENDAR OF ACTIVITIES</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <EventCard date="April 29 - May 03, 2026" title="22nd Tsinelas Festival" desc="Join us as we celebrate the 22nd Liliw Tsinelas Festival with local art exhibits." />
            <EventCard date="May 14, 2026 | 7:00 PM" title="Sayawan sa San Isidro 2026" desc="Quarterly meeting to discuss local projects and budget transparency." />
            <EventCard date="MAY 15, 2026 | 4:00 PM" title="Sagala 2026" desc="A workshop for young developers to sharpen their technical skills." />
            <EventCard date="May 16, 2026 | 2:00 PM" title="Sangguniang Kabataan Assembly" desc="Quarterly meeting to discuss local projects and budget transparency." />
            <EventCard date="September 28 - October 05, 2026" title="Filing of Certificates of Candidacy" desc="Aspiring SK and SB Officials Filing of Candidacy for BSKE 2026" />
            <EventCard date="October 22 - 31, 2026" title="BSKE 2026 Campaign Period" desc="2-Weeks Campaign Period for BSKE 2026" />
            <EventCard date="November 02, 2026" title="BSKE 2026 Election Day" desc="Voting Hours 7:00 am - 3:00 pm" />
            <EventCard date="December 02, 2026" title="SOCE Filing" desc="Last Day to file Statement of Contributions and Expenditures (SOCE)" />
          </div>
        </div>
      </section>

      {/* 4. QUICK LINKS GUIDE */}
      <section id="quick-links" style={{ backgroundColor: '#001a01', padding: '150px 10%', position: 'relative' }}>
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
  <div 
    style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      zIndex: 9999
    }} 
    onClick={() => setShowHotlines(false)}
  >
    <div 
      style={{
        backgroundColor: '#002c02',
        color: '#fff',
        border: '1px solid #ffd000',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '80vh', // Forces the height limit
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        position: 'relative'
      }} 
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header Area */}
      <button onClick={() => setShowHotlines(false)} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>×</button>
      <h3 style={{ color: '#fdd835', textAlign: 'center', margin: '0 0 20px 0', fontSize: '1.5rem' }}>🚨 EMERGENCY HOTLINES</h3>
      
      {/* Scrollable List Area */}
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <strong style={{ display: 'block' }}>Office of the Municipal Mayor:</strong>
            <span style={{ fontSize: '0.9rem', wordBreak: 'break-all' }}>563-1001 local 103</span>
          </div>
          <a href="https://www.facebook.com/MunicipalityofLiliw" target="_blank" rel="noreferrer" style={{ color: '#ffd000', marginLeft: '10px', whiteSpace: 'nowrap' }}>Visit Page</a>
        </div>
        {/* Repeat this structure for other hotline items */}
      </div>

      <p style={{ textAlign: 'center', fontSize: '0.75rem', marginTop: '15px', fontStyle: 'italic' }}>Please use these numbers for urgent emergencies only.</p>
    
              
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

              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Philippine Red Cross Laguna Chapter:</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>(049) 501-1114</span>
                </div>
                <a href="https://www.facebook.com/philredcrosslagunachapter" target="_blank" rel="noreferrer" style={linkStyle}>
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
              <h3 style={{ color: '#fdd835', marginBottom: '20px', fontSize: '1.5rem'}}>🏥 HEALTH SERVICES</h3>
              
              <div style={hotlineItemStyle}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <strong>Liliw Rural Health Unit (RHU):</strong>
                  <span style={{ color: '#ffffff', fontSize: '1rem', marginTop: '4px' }}>(049) 563-3655</span>
                </div>
                
              </div>

              <div style={{ padding: '15px 0', fontSize: '0.95rem', lineHeight: '1.5', color: '#e2e8f0' }}>
                <strong>Barangay Health Workers (BHW):</strong>
                <p style={{ margin: '5px 0 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                  For basic medicine distribution and medical assistance, please visit or coordinate with our SB Officials, or proceed directly to our Barangay Hall.
                </p>
              </div>

              <p style={{ fontSize: '0.8rem', marginTop: '20px', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', textAlign: 'center' }}>
                Please coordinate with our Barangay Health Committee for assistance
              </p>
            </div>
          </div>
        )}
      </section>

      {/* 5. VISION RE-EMPHASIS / INFO */}
      <section style={{ backgroundColor: '#ffffff', padding: '150px 10%' }}>
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

      {/* --- LATEST COMMUNITY NEWS SECTION --- */}
      <section style={{
        backgroundColor: '#f8fafc', 
        padding: 'clamp(50px, 8vh, 80px) 5%',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)',
              fontWeight: 'bold',
              display: 'inline-block',
              borderBottom: '4px solid #538b56',
              lineHeight: '1.3',
              color: '#002c02',
              margin: 0,
              paddingBottom: '8px'
            }}>
              LATEST NEWS & ANNOUNCEMENTS
            </h2>
            <p style={{ color: '#64748b', marginTop: '10px', fontSize: 'clamp(0.85rem, 2vw, 1rem)' }}>
              Stay updated with the most recent events and projects in Barangay San Isidro
            </p>
          </div>

          {/* News Layout Grid */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            alignItems: 'stretch',
            marginTop: '20px'
          }}>
            
            {/* Left Column: Featured News Image */}
            <div style={{
              flex: '1 1 450px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid #e2e8f0',
              minHeight: '320px',
              position: 'relative'
            }}>
              <img 
                src={agriPhoto} 
                alt="Latest Barangay Event"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Barangay+News'; }}
              />
            </div>

            {/* Right Column: Brief Text Details */}
            <div style={{
              flex: '1 1 400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: '#ffffff',
              padding: 'clamp(20px, 4vw, 40px)',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e2e8f0',
              boxSizing: 'border-box'
            }}>
              <span style={{
                color: '#ffd000',
                backgroundColor: '#002c02',
                padding: '6px 14px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                alignSelf: 'flex-start',
                marginBottom: '16px'
              }}>
                Latest Project
              </span>

              <h3 style={{
                color: '#002c02',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 'bold',
                margin: '0 0 12px 0',
                lineHeight: '1.3'
              }}>
                Successful Agri-Village Launch & Distribution Drive
              </h3>

              <p style={{
                color: '#475569',
                fontSize: 'clamp(0.88rem, 1.8vw, 1rem)',
                lineHeight: '1.6',
                margin: '0 0 24px 0'
              }}>
                Barangay San Isidro recently rolled out its sustainable agricultural showcase initiative, highlighting local food production and empowering active youth involvement. Fresh seedlings, organic resources, and farming equipment provisions were distributed to help promote neighborhood food security.
              </p>

              <a 
                href="/activities" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 28px',
                  backgroundColor: '#002c02',
                  color: '#ffd000',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  alignSelf: 'flex-start',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 12px rgba(0, 44, 2, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0c4b00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#002c02';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Read More Activities
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Reusable Components ---

const EventCard = ({ date, title, desc }) => {
  // I-split natin ang date para makuha ang Month at Day kung gusto mo ng ganitong effect
  return (
    <div style={{
      display: 'flex',
      background: '#ffffff',
      borderLeft: '6px solid #064e3b',
      borderRadius: '8px',
      padding: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      alignItems: 'center',
      gap: '20px'
    }}>
      {/* Date Box */}
      <div style={{
        background: '#064e3b',
        color: '#fdd835',
        padding: '10px',
        borderRadius: '6px',
        textAlign: 'center',
        minWidth: '80px',
        fontWeight: 'bold',
        fontSize: '0.8rem'
      }}>
        {date}
      </div>
      
      {/* Event Details */}
      <div>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: '#064e3b' }}>{title}</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>{desc}</p>
      </div>
    </div>
  );
};

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
  <footer style={{ backgroundColor: '#002c02', padding: '60px 10%', color: '#ffffff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1 1 300px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>BARANGAY SAN ISIDRO</h2>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna. 
        </p>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px' }}>Contact Us</h4>
        <p style={{ fontSize: '0.85rem' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
        <p style={{ fontSize: '0.85rem' }}>📧 @sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
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
  padding: '20px', // Binawasan ang padding para mas compact
  borderRadius: '20px',
  border: '1px solid #fdd835',
  maxWidth: '450px',
  width: '90%',
  maxHeight: '80vh', // Limitado sa 80% ng screen height
  display: 'flex',
  flexDirection: 'column', // Para maayos ang flow sa loob
  position: 'relative',
  color: 'white',
  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
  margin: 'auto' // Para laging nasa gitna ng screen
};

// Bagong style para sa scrollable area ng content
const hotlineContentStyle = {
  overflowY: 'auto', // Dito magkakaroon ng scroll kung mahaba ang listahan
  paddingRight: '10px'
};

const hotlineItemStyle = {
  padding: '12px 0', // Bahagyang binawasan
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '0.95rem' // Ginawang mas maliit para mas maraming kasya
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