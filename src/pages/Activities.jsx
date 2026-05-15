import React, { useRef } from 'react';
import sktreasandsecPhoto from '../assets/activities/events/sktreasandsec.jpg';
import kkprofilingPhoto from '../assets/activities/project/kkprofiling2024.jpg';
import eyecarePhoto from '../assets/activities/project/eyecare.jpg';
import meetingPhoto from '../assets/activities/seminars/meeting.jpg';
import kuyaivanPhoto from '../assets/activities/awards/kuyaivan.jpg';
import schoolsuppliesPhoto from '../assets/activities/upcoming/schoolsupplies.jpg';

const Activities = () => {
  // --- Scroll Refs for smooth navigation ---
  const eventsRef = useRef(null);
  const projectsRef = useRef(null);
  const seminarsRef = useRef(null);
  const achievementsRef = useRef(null);
  const upcomingRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 120, // Offset for the sticky header
      behavior: 'smooth',
    });
  };

  // --- Theme Constants ---
  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      
      {/* 1. STICKY HERO & NAVIGATION */}
      <section style={{ 
        backgroundColor: brandGreen, 
        padding: '30px 10% 40px', 
        textAlign: 'center', 
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: brandGold, marginBottom: '30px', fontWeight: '800' }}>
          ACTIVITIES & PROGRAMS
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <NavButton label="Events" onClick={() => scrollToSection(eventsRef)} />
          <NavButton label="Projects" onClick={() => scrollToSection(projectsRef)} />
          <NavButton label="Seminars" onClick={() => scrollToSection(seminarsRef)} />
          <NavButton label="Achievements" onClick={() => scrollToSection(achievementsRef)} />
          <NavButton label="Upcoming" onClick={() => scrollToSection(upcomingRef)} />
        </div>
      </section>

      {/* 2. EVENTS SECTION */}
      <section ref={eventsRef} style={sectionStyle}>
        <SectionTitle title="Community Events" />
        <div style={listLayout}>
          <HorizontalCard 
            title="Elected SK Treasurer and Secretary"
            date="February 04, 2024"
            desc="Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night."
            img={sktreasandsecPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
          />
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section ref={projectsRef} style={{ ...sectionStyle, backgroundColor: '#f9fafb' }}>
        <SectionTitle title="Projects" />
        <div style={listLayout}>
          <HorizontalCard 
          
            title="KK Profiling"
            date="February 25, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={kkprofilingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
          />
        </div>

        <div style={listLayout}>
          <HorizontalCard 
            title="Eye Care and Health Screening Medical Mission"
            date="January 29, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={eyecarePhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
          />
        </div>
      </section>

      {/* 4. SEMINARS SECTION */}
      <section ref={seminarsRef} style={sectionStyle}>
        <SectionTitle title="Seminars & Education" />
        <div style={listLayout}>
          <HorizontalCard 
            title="1st Official SK Meeting"
            date="November 26, 2023"
            desc="Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills."
            img={meetingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
          />
        </div>
      </section>

      {/* 5. ACHIEVEMENTS SECTION */}
      <section ref={achievementsRef} style={{ ...sectionStyle, backgroundColor: brandGreen, color: 'white' }}>
        <SectionTitle title="Achievements & Awards" isDark />
        <div style={listLayout}>
          <HorizontalCard 
            title="Liliw's Got Talent San Isidro Representative"
            date="September 01, 2025"
            desc="Recognized for our consistent efforts in public disclosure and digital innovation in governance."
            img={kuyaivanPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql"
            isDark
          />
        </div>
      </section>

      {/* 6. UPCOMING SECTION */}
      <section ref={upcomingRef} style={sectionStyle}>
        <SectionTitle title="Upcoming Programs" />
        <div style={listLayout}>
          <HorizontalCard 
            title="School Supplies Donation Drive 2026"
            date="Tentative: May 17, 2026"
            desc="Building camaraderie through sports. Registration for Sitio representatives will open soon!"
            img={schoolsuppliesPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Atomic Components ---

const NavButton = ({ label, onClick }) => (
  <button 
    onClick={onClick} 
    style={{
      padding: '8px 18px', borderRadius: '25px', border: '1px solid #ffd000',
      backgroundColor: 'transparent', color: '#ffd000', fontWeight: '700',
      cursor: 'pointer', transition: '0.3s', fontSize: '0.85rem'
    }}
    onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffd000'; e.target.style.color = '#002c02'; }}
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#ffd000'; }}
  >
    {label.toUpperCase()}
  </button>
);

const SectionTitle = ({ title, isDark }) => (
  <h2 style={{ 
    fontSize: '3rem', fontWeight: '900', color: isDark ? '#ffd000' : '#002c02', 
    marginBottom: '50px', textTransform: 'uppercase', letterSpacing: '-1px' 
  }}>
    {title}
  </h2>
);

const HorizontalCard = ({ title, date, img, desc, fbLink, isDark }) => (
  <div 
    style={{
      display: 'flex', flexWrap: 'wrap', marginBottom: '20px', backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : '#ffffff',
      borderRadius: '24px', overflow: 'hidden', border: isDark ? '2px solid rgba(255,255,255,0.1)' : '1px solid #00000036',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <div style={{ flex: '1 1 400px', minHeight: '300px' }}>
      <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ flex: '1.2 1 300px', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <small style={{ color: isDark ? '#ffd000' : '#059669', fontWeight: '800', letterSpacing: '1px' }}>{date}</small>
      <h3 style={{ fontSize: '1.8rem', margin: '15px 0', color: isDark ? '#ffffff' : '#002c02', lineHeight: '1.2' }}>{title}</h3>
      <p style={{ color: isDark ? '#cbd5e1' : '#475569', lineHeight: '1.7', marginBottom: '30px', fontSize: '1.05rem' }}>{desc}</p>
      
      <a 
        href={fbLink} target="_blank" rel="noopener noreferrer"
        style={{
          backgroundColor: '#1877F2', color: 'white', padding: '12px 28px', borderRadius: '12px',
          textDecoration: 'none', fontWeight: '700', width: 'fit-content', fontSize: '0.9rem',
          display: 'flex', alignItems: 'center', gap: '10px'
        }}
      >
        View on Facebook ↗
      </a>
    </div>
  </div>
);

const sectionStyle = { padding: '100px 10%' };
const listLayout = { display: 'flex', flexDirection: 'column', gap: '70px' };

// --- FULLY RETAINED FOOTER ---
const Footer = () => (
    <footer style={{ 
      backgroundColor: '#002c02', padding: '60px 10%', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff' 
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>BARANGAY SAN ISIDRO</h2>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5', maxWidth: '400px' }}>
            Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna. 
            Dedicated to digital innovation and youth-led service.
          </p>
        </div>
  
        <div style={{ flex: '1 1 150px' }}>
          <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', lineHeight: '2' }}>
            <li><a href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="/people" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Officials</a></li>
            <li><a href="/activities" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Activities</a></li>
          </ul>
        </div>
  
        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: '1rem' }}>Contact Us</h4>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
          <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>📧 contact@sangguniangkabataanngsanisidro@gmail.com</p>
        </div>
      </div>
      <div style={{ maxWidth: '1100px', margin: '40px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
        © 2026 Barangay San Isidro. Designed by SK Vince M. Villanueva. All Rights Reserved.
      </div>
    </footer>
  );

export default Activities;