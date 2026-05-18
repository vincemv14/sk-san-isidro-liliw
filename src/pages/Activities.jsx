import React, { useState, useRef } from 'react';
import sktreasandsecPhoto from '../assets/activities/events/sktreasandsec.jpg';
import pasko2023Photo from '../assets/activities/events/paskongkalinga2023.jpg';
import oathtakingPhoto from '../assets/activities/events/oathtaking.jpg';
import kkassemblyPhoto from '../assets/activities/events/kkassembly.jpg';
import laronglahi2024Photo from '../assets/activities/events/laronglahi2024.jpg';
import basketball2023Photo from '../assets/activities/events/basketballchristmas2023.jpg';
import mlPhoto from '../assets/activities/events/mltournament.jpg';
import kkprofilingPhoto from '../assets/activities/project/kkprofiling2024.jpg';
import financialindependentPhoto from '../assets/activities/project/financialindependent.jpg';
import librenggupit2024Photo from '../assets/activities/project/librenggupit2024.jpg';
import eyecarePhoto from '../assets/activities/project/eyecare.jpg';
import meetingPhoto from '../assets/activities/seminars/meeting.jpg';
import bcpcPhoto from '../assets/activities/seminars/bcpcelection.jpg';
import mandatoryPhoto from '../assets/activities/seminars/mandatory1.png';
import leadershipPhoto from '../assets/activities/seminars/leadership.jpg';
import kuyaivanPhoto from '../assets/activities/awards/kuyaivan.jpg';
import theaPhoto from '../assets/activities/awards/theagraduate.jpg';
import maiPhoto from '../assets/activities/awards/maigrad.jpg';
import dangalPhoto from '../assets/activities/awards/dangalnigattayaw.jpg';
import schoolsuppliesPhoto from '../assets/activities/upcoming/schoolsupplies.jpg';

const Activities = () => {
  const eventsRef = useRef(null);
  const projectsRef = useRef(null);
  const seminarsRef = useRef(null);
  const achievementsRef = useRef(null);
  const upcomingRef = useRef(null);

  // --- State Variables to Track Visible Limits per Section ---
  const [eventsLimit, setEventsLimit] = useState(2);
  const [projectsLimit, setProjectsLimit] = useState(2);
  const [seminarsLimit, setSeminarsLimit] = useState(2);
  const [achievementsLimit, setAchievementsLimit] = useState(2);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 120,
      behavior: 'smooth',
    });
  };

  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  // --- Data Arrays ---
  const eventsData = [
    {
      title: "Oath Taking Ceremony of Elected Sk Chairman",
      date: "November 20, 2023",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: oathtakingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid08aaEZP2TK5HnpoWJaPs7NXZjwHCFDH3GmJ5vDjpWYj3JDpjN82NkDY71R8TagQt8l"
    },
    {
      title: "Paskong Kalinga 2023",
      date: "December 23, 2023",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: pasko2023Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0268APusxBHT9Fnmcq4cHqG8LTpQ8HFwrx86ebGnFLfZBoFqQW7jn43jsf33GE2bo5l"
    },
    {
      title: "Elected SK Treasurer and Secretary",
      date: "February 04, 2024",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: sktreasandsecPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l"
    },
    {
      title: "1st Katipunan ng Kabataan Assembly",
      date: "April 22, 2024",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: kkassemblyPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0YPD3Qk2PbhDFvsVxgarKrD4aQ85sNpPWYx4bvsEWdJpQrHLN1YmruE7ErVFaUBTxl"
    },

    {
      title: "LakaSKabataan: Palaro ng Lahi 2024",
      date: "January 06, 2024",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: laronglahi2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02HTiXn9DCzsrZF1FFD742FouAC3qU53hcGD6X3CcxTdAsZ4pmWwYUBySJrGGzy2nul"
    },

    {
      title: "2023 Basketball League: Christmas Edition",
      date: "December 24, 2023",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: basketball2023Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0zznRyFSyB1C2sNYfhaBxky8CrAabQiiWtx4XyHo7aF2zhgXkd9GiGRz5zKyEUwSBl"
    },

    {
      title: "Mobile Legends Tournament",
      date: "September 14, 2024",
      desc: "Our annual celebration of youth power! This year features the 'Sining at Kultura' festival, sports clinics, and the much-awaited SK Night.",
      img: mlPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid05yRkC87UHhVzbtSfZjiXg2naecoAWLVGH7KFhZjKQoEhNByZdj9cmr3eQ46TwwBul"
    }
    
  ];

  const projectsData = [
    {
      title: "Hair We Go: Libreng Gupit 2024",
      date: "January 29, 2024",
      desc: "We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students.",
      img: librenggupit2024Photo,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
    },
    {
      title: "Eye Care and Health Screening Medical Mission",
      date: "January 29, 2024",
      desc: "We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students.",
      img: eyecarePhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl"
    },
    {
      title: "KK Profiling",
      date: "February 25, 2024",
      desc: "We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students.",
      img: kkprofilingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl"
    },
    {
      title: "SK San Isidro Financial Independent",
      date: "July 04, 2024",
      desc: "We are illuminating the dark corners of our Sitios. This project aims to install 50 additional solar lamps to ensure safety for night-shift workers and students.",
      img: financialindependentPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0dP3wwPT9ehppcccqSmxQVuojGCrEhZauUCvUpibeoWAZhxj3xydrj2rzU9gZF1fcl"
    }
  ];

  const seminarsData = [
    {
      title: "Sangguniang Kabataan Mandatory Training",
      date: "November 13 - 14, 2023",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: mandatoryPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0PokvUXmNEXMj5Uyu1fuDhaomDLxrdjEq8L2ofnK1Spwne98CaXiu6rN45piYVK4nl"
    },
    {
      title: "1st Official SK Meeting",
      date: "November 26, 2023",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: meetingPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl"
    },
    {
      title: "BCPC Election",
      date: "November 03, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: bcpcPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0QW47Z94hby1h1tJACrvZbpja2fLATPjR23DZDqYzoi34ghYNRBSeurozN8aQzzAXl"
    },
    {
      title: "2nd KK Assembly and Leadership Training & Seminar",
      date: "November 10, 2024",
      desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",
      img: leadershipPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl"
    }
  ];

  const achievementsData = [
    {
      title: "SK Althea Poonin Graduation",
      date: "July 05, 2024",
      desc: "Recognized for our consistent efforts in public disclosure and digital innovation in governance.",
      img: theaPhoto,
      fbLink: "https://www.facebook.com/photo?fbid=775097244812066&set=a.153869373601526",
      isDark: true
    },
    {
      title: "SK Mai Mai Fresco Graduation",
      date: "July 09, 2024",
      desc: "Recognized for our consistent efforts in public disclosure and digital innovation in governance.",
      img: maiPhoto,
      fbLink: "https://www.facebook.com/photo?fbid=777189201269537&set=a.153869373601526",
      isDark: true
    },
    {
      title: "Liliw's Got Talent San Isidro Representative",
      date: "September 01, 2025",
      desc: "Recognized for our consistent efforts in public disclosure and digital innovation in governance.",
      img: kuyaivanPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql",
      isDark: true
    },
    {
      title: "Dangal ni Gat Tayaw Awardees",
      date: "April 30, 2026",
      desc: "Recognized for our consistent efforts in public disclosure and digital innovation in governance.",
      img: dangalPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rKS5ihLT3hmSSLdgkCfqek9MqhhqABhf1MDhXBXTfKZtk16oTQJcCwdFefCnEihvl",
      isDark: true
    }
  ];

  const upcomingData = [
    {
      title: "School Supplies Donation Drive 2026",
      date: "Tentative: May 17, 2026",
      desc: "Building camaraderie through sports. Registration for Sitio representatives will open soon!",
      img: schoolsuppliesPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
    },
    {
      title: "School Supplies Donation Drive 2026",
      date: "Tentative: May 17, 2026",
      desc: "Building camaraderie through sports. Registration for Sitio representatives will open soon!",
      img: schoolsuppliesPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
    },
    {
      title: "School Supplies Donation Drive 2026",
      date: "Tentative: May 17, 2026",
      desc: "Building camaraderie through sports. Registration for Sitio representatives will open soon!",
      img: schoolsuppliesPhoto,
      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl"
    }
  ];

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
          <NavButton label="Events" onClick={() => scrollToSection(eventsRef)} />
          <NavButton label="Projects" onClick={() => scrollToSection(projectsRef)} />
          <NavButton label="Seminars" onClick={() => scrollToSection(seminarsRef)} />
          <NavButton label="Achievements" onClick={() => scrollToSection(achievementsRef)} />
          <NavButton label="Upcoming" onClick={() => scrollToSection(upcomingRef)} />
        </div>
      </section>

      {/* 2. EVENTS */}
      <section ref={eventsRef} style={sectionStyle}>
        <SectionTitle title="Community Events" />
        <CardGrid>
          {eventsData.slice(0, eventsLimit).map((item, idx) => (
            <ActivityCard key={idx} {...item} />
          ))}
        </CardGrid>
        {eventsLimit < eventsData.length && (
          <LoadMoreButton onClick={() => setEventsLimit(prev => prev + 2)} />
        )}
      </section>

      {/* 3. PROJECTS */}
      <section ref={projectsRef} style={{ ...sectionStyle, backgroundColor: '#f9fafb' }}>
        <SectionTitle title="Projects" />
        <CardGrid>
          {projectsData.slice(0, projectsLimit).map((item, idx) => (
            <ActivityCard key={idx} {...item} />
          ))}
        </CardGrid>
        {projectsLimit < projectsData.length && (
          <LoadMoreButton onClick={() => setProjectsLimit(prev => prev + 2)} />
        )}
      </section>

      {/* 4. SEMINARS */}
      <section ref={seminarsRef} style={sectionStyle}>
        <SectionTitle title="Seminars & Education" />
        <CardGrid>
          {seminarsData.slice(0, seminarsLimit).map((item, idx) => (
            <ActivityCard key={idx} {...item} />
          ))}
        </CardGrid>
        {seminarsLimit < seminarsData.length && (
          <LoadMoreButton onClick={() => setSeminarsLimit(prev => prev + 2)} />
        )}
      </section>

      {/* 5. ACHIEVEMENTS */}
      <section ref={achievementsRef} style={{ ...sectionStyle, backgroundColor: brandGreen, color: 'white' }}>
        <SectionTitle title="Achievements & Awards" isDark />
        <CardGrid>
          {achievementsData.slice(0, achievementsLimit).map((item, idx) => (
            <ActivityCard key={idx} {...item} />
          ))}
        </CardGrid>
        {achievementsLimit < achievementsData.length && (
          <LoadMoreButton isDark onClick={() => setAchievementsLimit(prev => prev + 2)} />
        )}
      </section>

      {/* 6. UPCOMING */}
      <section ref={upcomingRef} style={sectionStyle}>
        <SectionTitle title="Upcoming Programs" />
        <CardGrid>
          {upcomingData.map((item, idx) => (
            <ActivityCard key={idx} {...item} />
          ))}
        </CardGrid>
      </section>

      <Footer />
    </main>
  );
};

// --- Universal Load More Button Component ---
const LoadMoreButton = ({ onClick, isDark }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
    <button
      onClick={onClick}
      style={{
        padding: '12px 32px',
        borderRadius: '8px',
        border: isDark ? '2px solid #ffd000' : '2px solid #002c02',
        backgroundColor: 'transparent',
        color: isDark ? '#ffd000' : '#002c02',
        fontWeight: '700',
        fontSize: '0.9rem',
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = isDark ? '#ffd000' : '#002c02';
        e.target.style.color = isDark ? '#002c02' : '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.color = isDark ? '#ffd000' : '#002c02';
      }}
    >
      Load More Posts
    </button>
  </div>
);

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

// --- Single Activity Card ---
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
    <div style={{ width: '100%', height: 'clamp(180px, 40vw, 240px)', overflow: 'hidden', flexShrink: 0 }}>
      <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>

    <div style={{ padding: 'clamp(16px, 4vw, 28px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <small style={{ color: isDark ? '#ffd000' : '#059669', fontWeight: '800', letterSpacing: '0.5px', fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)', textTransform: 'uppercase' }}>
        {date}
      </small>

      <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', margin: '10px 0', color: isDark ? '#ffffff' : '#002c02', lineHeight: '1.3', fontWeight: '700' }}>
        {title}
      </h3>

      <p style={{ color: isDark ? '#cbd5e1' : '#475569', lineHeight: '1.7', fontSize: 'clamp(0.82rem, 2vw, 0.95rem)', flex: 1, marginBottom: '20px' }}>
        {desc}
      </p>

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

export default Activities;