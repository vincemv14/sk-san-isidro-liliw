import React, { useRef } from 'react';
import sktreasandsecPhoto from '../assets/activities/events/sktreasandsec.jpg';
import kkprofilingPhoto from '../assets/activities/project/kkprofiling2024.jpg';
import eyecarePhoto from '../assets/activities/project/eyecare.jpg';
import meetingPhoto from '../assets/activities/seminars/meeting.jpg';
import kuyaivanPhoto from '../assets/activities/awards/kuyaivan.jpg';
import schoolsuppliesPhoto from '../assets/activities/upcoming/schoolsupplies.jpg';

const Activities = () => {
  const eventsRef = useRef(null);
  const projectsRef = useRef(null);
  const seminarsRef = useRef(null);
  const achievementsRef = useRef(null);
  const upcomingRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 120,
      behavior: 'smooth',
    });
  };

  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>

      {/* 1. HERO & NAV */}
      <section style={{
        backgroundColor: brandGreen,
        padding: 'clamp(40px, 8vw, 100px) 5%',
        textAlign: 'center',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 99,
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontSize: 'clamp(1.3rem, 4vw, 2.5rem)',
          color: brandGold,
          marginBottom: '15px',
          fontWeight: '800'
        }}>
          ACTIVITIES & PROGRAMS
        </h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
          <NavButton label="Events"       onClick={() => scrollToSection(eventsRef)} />
          <NavButton label="Projects"     onClick={() => scrollToSection(projectsRef)} />
          <NavButton label="Seminars"     onClick={() => scrollToSection(seminarsRef)} />
          <NavButton label="Achievements" onClick={() => scrollToSection(achievementsRef)} />
          <NavButton label="Upcoming"     onClick={() => scrollToSection(upcomingRef)} />
        </div>
      </section>

      {/* 2. EVENTS */}
      <section ref={eventsRef} style={sectionStyle}>
        <SectionTitle title="Community Events" />
        <CardGrid>
          <ActivityCard
            title="Elected SK Treasurer and Secretary"
            date="February 04, 2024"
            desc="Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night."
            img={sktreasandsecPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
          />
          <ActivityCard
            title="Elected SK Treasurer and Secretary"
            date="February 04, 2024"
            desc="Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night."
            img={sktreasandsecPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
          />
          <ActivityCard
            title="Elected SK Treasurer and Secretary"
            date="February 04, 2024"
            desc="Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night."
            img={sktreasandsecPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
          />
          <ActivityCard
            title="Elected SK Treasurer and Secretary"
            date="February 04, 2024"
            desc="Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night."
            img={sktreasandsecPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
          />
        </CardGrid>
      </section>

      {/* 3. PROJECTS */}
      <section ref={projectsRef} style={{ ...sectionStyle, backgroundColor: '#f9fafb' }}>
        <SectionTitle title="Projects" />
        <CardGrid>
          <ActivityCard
            title="KK Profiling"
            date="February 25, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={kkprofilingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
          />
          <ActivityCard
            title="Eye Care and Health Screening Medical Mission"
            date="January 29, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={eyecarePhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
          />
          <ActivityCard
            title="KK Profiling"
            date="February 25, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={kkprofilingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
          />
          <ActivityCard
            title="KK Profiling"
            date="February 25, 2024"
            desc="We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students."
            img={kkprofilingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
          />
        </CardGrid>
      </section>

      {/* 4. SEMINARS */}
      <section ref={seminarsRef} style={sectionStyle}>
        <SectionTitle title="Seminars & Education" />
        <CardGrid>
          <ActivityCard
            title="1st Official SK Meeting"
            date="November 26, 2023"
            desc="Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills."
            img={meetingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
          />
          <ActivityCard
            title="1st Official SK Meeting"
            date="November 26, 2023"
            desc="Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills."
            img={meetingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
          />
          <ActivityCard
            title="1st Official SK Meeting"
            date="November 26, 2023"
            desc="Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills."
            img={meetingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
          />
          <ActivityCard
            title="1st Official SK Meeting"
            date="November 26, 2023"
            desc="Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills."
            img={meetingPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
          />
        </CardGrid>
      </section>

      {/* 5. ACHIEVEMENTS */}
      <section ref={achievementsRef} style={{ ...sectionStyle, backgroundColor: brandGreen, color: 'white' }}>
        <SectionTitle title="Achievements & Awards" isDark />
        <CardGrid>
          <ActivityCard
            title="Liliw's Got Talent San Isidro Representative"
            date="September 01, 2025"
            desc="Recognized for our consistent efforts in public disclosure and digital innovation in governance."
            img={kuyaivanPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql"
            isDark
          />
          <ActivityCard
            title="Liliw's Got Talent San Isidro Representative"
            date="September 01, 2025"
            desc="Recognized for our consistent efforts in public disclosure and digital innovation in governance."
            img={kuyaivanPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql"
            isDark
          />
          <ActivityCard
            title="Liliw's Got Talent San Isidro Representative"
            date="September 01, 2025"
            desc="Recognized for our consistent efforts in public disclosure and digital innovation in governance."
            img={kuyaivanPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql"
            isDark
          />
          <ActivityCard
            title="Liliw's Got Talent San Isidro Representative"
            date="September 01, 2025"
            desc="Recognized for our consistent efforts in public disclosure and digital innovation in governance."
            img={kuyaivanPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql"
            isDark
          />
        </CardGrid>
      </section>

      {/* 6. UPCOMING */}
      <section ref={upcomingRef} style={sectionStyle}>
        <SectionTitle title="Upcoming Programs" />
        <CardGrid>
          <ActivityCard
            title="School Supplies Donation Drive 2026"
            date="Tentative: May 17, 2026"
            desc="Building camaraderie through sports. Registration for Sitio representatives will open soon!"
            img={schoolsuppliesPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
          />
          <ActivityCard
            title="School Supplies Donation Drive 2026"
            date="Tentative: May 17, 2026"
            desc="Building camaraderie through sports. Registration for Sitio representatives will open soon!"
            img={schoolsuppliesPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
          />
          <ActivityCard
            title="School Supplies Donation Drive 2026"
            date="Tentative: May 17, 2026"
            desc="Building camaraderie through sports. Registration for Sitio representatives will open soon!"
            img={schoolsuppliesPhoto}
            fbLink="https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
          />
        </CardGrid>
      </section>

      <Footer />
    </main>
  );
};

// --- Wrapper: responsive grid for all cards ---
const CardGrid = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
    gap: 'clamp(16px, 3vw, 30px)',
  }}>
    {children}
  </div>
);

// --- Single Activity Card (vertical, mobile-first) ---
const ActivityCard = ({ title, date, img, desc, fbLink, isDark }) => (
  <div
    style={{
      backgroundColor: isDark ? 'rgba(255,255,255,0.07)' : '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid #e2e8f0',
      boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
      transition: 'transform 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
  >
    {/* Image — fixed height so all cards align */}
    <div style={{ width: '100%', height: 'clamp(180px, 40vw, 240px)', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={img}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>

    {/* Content */}
    <div style={{
      padding: 'clamp(16px, 4vw, 28px)',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    }}>
      <small style={{
        color: isDark ? '#ffd000' : '#059669',
        fontWeight: '800',
        letterSpacing: '0.5px',
        fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
        textTransform: 'uppercase',
      }}>{date}</small>

      <h3 style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
        margin: '10px 0',
        color: isDark ? '#ffffff' : '#002c02',
        lineHeight: '1.3',
        fontWeight: '700',
      }}>{title}</h3>

      <p style={{
        color: isDark ? '#cbd5e1' : '#475569',
        lineHeight: '1.7',
        fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
        flex: 1,
        marginBottom: '20px',
      }}>{desc}</p>

      <a
        href={fbLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#1877F2',
          color: 'white',
          padding: 'clamp(9px, 2vw, 12px) clamp(16px, 3vw, 24px)',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: '700',
          fontSize: 'clamp(0.78rem, 2vw, 0.88rem)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          alignSelf: 'flex-start',
        }}
      >
        View on Facebook ↗
      </a>
    </div>
  </div>
);

// --- Nav Button ---
const NavButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 18px)',
      borderRadius: '25px',
      border: '1px solid #ffd000',
      backgroundColor: 'transparent',
      color: '#ffd000',
      fontWeight: '700',
      cursor: 'pointer',
      transition: '0.3s',
      fontSize: 'clamp(0.7rem, 1.8vw, 0.85rem)',
    }}
    onMouseEnter={(e) => { e.target.style.backgroundColor = '#ffd000'; e.target.style.color = '#002c02'; }}
    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#ffd000'; }}
  >
    {label.toUpperCase()}
  </button>
);

// --- Section Title ---
const SectionTitle = ({ title, isDark }) => (
  <h2 style={{
    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
    fontWeight: '900',
    color: isDark ? '#ffd000' : '#002c02',
    marginBottom: 'clamp(24px, 4vw, 50px)',
    textTransform: 'uppercase',
    letterSpacing: '-0.5px',
  }}>
    {title}
  </h2>
);

// --- Section base style ---
const sectionStyle = {
  padding: 'clamp(50px, 8vw, 100px) 5%',
  width: '100%',
  boxSizing: 'border-box',
};

// --- Footer ---
const Footer = () => (
  <footer style={{
    backgroundColor: '#002c02',
    padding: 'clamp(40px, 6vh, 60px) 5%',
    borderTop: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
  }}>
    <div style={{
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px'
    }}>
      <div style={{ flex: '1 1 250px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 'bold' }}>
          BARANGAY SAN ISIDRO
        </h2>
        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#cbd5e1', lineHeight: '1.5', maxWidth: '400px' }}>
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna.
          Dedicated to digital innovation and youth-led service.
        </p>
      </div>
      <div style={{ flex: '1 1 140px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Quick Links</h4>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '2' }}>
          <li><a href="/"           style={footerLink}>Home</a></li>
          <li><a href="/about"      style={footerLink}>About Us</a></li>
          <li><a href="/people"     style={footerLink}>Officials</a></li>
          <li><a href="/activities" style={footerLink}>Activities</a></li>
        </ul>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Contact Us</h4>
        <p style={{ fontSize: 'clamp(0.78rem, 2vw, 0.85rem)', color: '#cbd5e1', margin: '5px 0' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
        <p style={{ fontSize: 'clamp(0.78rem, 2vw, 0.85rem)', color: '#cbd5e1', margin: '5px 0' }}>📧 contact@sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{
      maxWidth: '1100px',
      margin: '40px auto 0',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      textAlign: 'center',
      fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
      color: 'rgba(255,255,255,0.5)'
    }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva. All Rights Reserved.
    </div>
  </footer>
);

const footerLink = { color: '#cbd5e1', textDecoration: 'none' };

export default Activities;