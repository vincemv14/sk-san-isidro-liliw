import React from 'react';

// Asset Imports - SK
import gianPhoto from '../assets/sk/gian.png'; 
import binsPhoto from '../assets/sk/bins.jpeg';
import theaPhoto from '../assets/sk/thea.jpg'; 
import efferPhoto from '../assets/sk/effer.jpg'; 
import paulPhoto from '../assets/sk/paul.jpg';
import samPhoto from '../assets/sk/sam.jpg';
import angelPhoto from '../assets/sk/angel.png';
import nidelinePhoto from '../assets/sk/nideline.jpg';
import maiPhoto from '../assets/sk/mai.jpg';
import lorieannPhoto from '../assets/sk/lorieann.png'; 

// Asset Imports - SB
import kapPhoto from '../assets/sb/kap.png'; 
import daisyPhoto from '../assets/sb/daisy.png';
import elviePhoto from '../assets/sb/elvie.png';
import sergioPhoto from '../assets/sb/sergio.png';
import garryPhoto from '../assets/sb/garry.png';
import jrPhoto from '../assets/sb/jr.png';
import jaimePhoto from '../assets/sb/jaime.png';
import angelPhoto1 from '../assets/sb/angel.png';
import lendelPhoto from '../assets/sb/lendel1.png';
import jhommelPhoto from '../assets/sb/jhommel1.png';

const People = () => {

  const headingStyle = {
    fontSize: 'clamp(2.2rem, 3.5vw, 2.2rem)',
    fontWeight: 'bold',
    marginBottom: '40px',
    display: 'inline-block',
    borderBottom: '4px solid #ffd000',
    lineHeight: '1.3',
  };

  const sbMembers = [
    { 
        name: "HON. DAISY S. OGANIA", 
        position: "Barangay Kagawad", 
        committee: "Committee Chair on Appropriation", 
        image: daisyPhoto 
    },
    { name: "HON. SERGIO A. CAGAS",        position: "Barangay Kagawad",committee:"Committee Chair on Health", image: sergioPhoto },
    { name: "HON. ELVIRA M. NOMA",         position: "Barangay Kagawad",committee:"Committee Chair on Women's and Family", image: elviePhoto },
    { name: "HON. GARRY L. LAGRISOLA",     position: "Barangay Kagawad",committee:"Committee Chair on Agriculture", image: garryPhoto },
    { name: "HON. REGIDOR A. PINEDA JR.",  position: "Barangay Kagawad",committee:"Committee Chair on Education", image: jrPhoto },
    { name: "HON. JAIME B. SALAZAR",       position: "Barangay Kagawad",committee:"Committee Chair on Peace and Order", image: jaimePhoto },
    { name: "HON. ANGELITO M. MATIC",      position: "Barangay Kagawad",committee:"Committee Chair on Infrastructure", image: angelPhoto1 },
    { name: "HON. LENDEL F. ALMARES",      position: "Barangay Secretary", image: lendelPhoto },
    { name: "HON. JHOMMEL M. MONTEVIRGEN", position: "Barangay Treasurer", image: jhommelPhoto },
  ];

  const skMembers = [
    { name: "HON. VINCE M. VILLANUEVA",    position: "SK Member",committee:"Committee Chair on Social Inclusion and Equity",    image: binsPhoto },
    { name: "HON. ALTHEA MARIE POONIN",       position: "SK Member",committee:"Committee Chair on Education",    image: theaPhoto },
    { name: "HON. JENNIFER B. PLATERO",       position: "SK Member",committee:"Committee Chair on Women Empowerment",    image: efferPhoto },
    { name: "HON. PAUL ANGELO B. GRINDULO",   position: "SK Member",committee:"Committee Chair on Social Protection and Security",    image: paulPhoto },
    { name: "HON. SAMANTHA CLAIRE M. VASALLO",position: "SK Member",committee:"Committee Chair on Health",    image: samPhoto },
    { name: "HON. ANGEL DIANNE M. TIQUIS",       position: "SK Member",committee:"Committee Chair on Environment",    image: angelPhoto },
    { name: "HON. NIDELINE MEI N. LABRIAGA",     position: "SK Member",committee:"Committee Chair on Agriculture",    image: nidelinePhoto },
    { name: "HON. LORIE ANN A. SANTOS",       position: "SK Secretary", image: lorieannPhoto },
    { name: "HON. MAI MAI A. FRESCO",         position: "SK Treasurer", image: maiPhoto },
  ];

  const pastSB = [
    { name: "HON. FELINO C. MERCADO", years: "2018 - PRESENT" },
    { name: "HON. VALENTINO MONTESINES",       years: "2013 - 2018" },
    { name: "HON. FELINO C. MERCADO", years: "2002 - 2013" },
    { name: "HON. ANDRES SUMAYA",       years: "1994 - 2002" },
    { name: "HON. ROMEO P. TORRES",       years: "1991 - 1994" },
    { name: "HON. JOSE MONTESINES" },
    { name: "HON. MARIQUITA S. MOJADO" },
    { name: "HON. MAXIMO G. OGANIA" },
  ];

  const pastSK = [
    { name: "HON. GIAN LORBEN M. LAGRISOLA", years: "2023 - PRESENT" },
    { name: "HON. MEZZA LUNA BRUL", years: "2018 - 2023" },
    { name: "HON. JOHN KENNETH NOMA", years: "2013 - 2018" },
    { name: "HON. MA. RICA S. GRINDULO", years: "2008 - 2013" },
    { name: "HON. MARIELEN MERCADO", years: "2003 - 2008" },
    { name: "HON. VIVIAN M. LAGRISOLA", years: "1996 - 2002" },
    { name: "HON. ROWENA NOMA CRUZ",years: "1993 - 1998" },
    { name: "HON. OLIVER SUMAYA", years: "1988 - 1993" },
    { name: "HON. LITO LUMANGAYA", years: "1988 - 1993" }
  ];

  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <div style={{ flex: 1 }}>

        {/* 1. SANGGUNIANG BARANGAY */}
        <section style={{
          backgroundColor: '#ffffff',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, color: '#002c02', borderBottomColor: '#538b56' }}>
              SANGGUNIANG BARANGAY NG SAN ISIDRO <br /> LILIW 2023 - 2026
            </h2>

            {/* Captain — alone, centered */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <OfficialCard
                name="HON. FELINO MERCADO"
                position="Punong Barangay"
                image={kapPhoto}
                isDark={false}
                isLead
              />
            </div>

            {/* Members — 2 per row on mobile, 3–4 on desktop */}
            <MemberGrid members={sbMembers} isDark={false} />
          </div>
        </section>

        {/* 2. SANGGUNIANG KABATAAN */}
        <section style={{
          backgroundColor: '#002c02',
          color: 'white',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, color: '#ffffff' }}>
              SANGGUNIANG KABATAAN NG SAN ISIDRO <br /> LILIW 2023 - 2026
            </h2>

            {/* Chairperson — alone, centered */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
              <OfficialCard
                name="HON. GIAN LORBEN MITRA LAGRISOLA"
                position="SK Chairperson"
                committee="Committee Chair on Sports and Youth Development"
                image={gianPhoto}
                isDark={true}
                isLead
              />
            </div>

            {/* Members — 2 per row on mobile, 3–4 on desktop */}
            <MemberGrid members={skMembers} isDark={true} />
          </div>
        </section>

        {/* 3. HISTORY */}
        <section style={{
          backgroundColor: '#f8fafc',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, color: '#002c02', borderBottomColor: '#538b56',}}>
              HISTORY OF LEADERSHIP
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              marginTop: '20px',
            }}>
              <div>
                <h3 style={{ color: '#0c4b00', marginBottom: '15px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
                  Past Punong Barangays
                </h3>
                <div style={{ overflowX: 'auto', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                  <HistoryTable data={pastSB} />
                </div>
              </div>
              <div>
                <h3 style={{ color: '#0c4b00', marginBottom: '15px', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)' }}>
                  Past SK Chairpersons
                </h3>
                <div style={{ overflowX: 'auto', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
                  <HistoryTable data={pastSK} />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
};

// --- Updated Responsive Grid Wrapper ---
const MemberGrid = ({ members, isDark }) => {
  // Listen to screen width dynamically
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      display: 'grid',
      // FIX: 2 columns on mobile devices, automatically scales to 4 columns on desktop layouts!
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: isMobile ? '12px' : '24px',
      width: '100%',
      boxSizing: 'border-box',
      marginTop: '20px'
    }}>
      {members.map((member, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <OfficialCard {...member} isDark={isDark} />
        </div>
      ))}
    </div>
  );
};

const OfficialCard = ({ name, position, committee, image, isDark, isLead }) => {
  const nameColor = isDark ? '#002c02' : '#ffffff';
  const posColor = isDark ? '#444444' : '#ffd000';
  const borderColor = isDark ? '#002c02' : '#ffd000';

  const [isMobile, setIsMobile] = React.useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive sizes
  const photoSize = isLead 
    ? 'clamp(110px, 18vw, 160px)' 
    : (isMobile ? 'clamp(70px, 16vw, 100px)' : '110px');
  
  const cardWidth = isLead ? 'clamp(180px, 40vw, 260px)' : '100%';

  return (
    <div
      style={{
        background: isDark ? '#ffbb00' : '#0c4b00',
        padding: isMobile ? '12px 8px' : '20px 14px',
        borderRadius: '20px',
        textAlign: 'center',
        width: cardWidth,
        maxWidth: isLead ? '260px' : '240px',
        border: isDark ? '1px solid #eab308' : '1px solid #ffd000',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        boxSizing: 'border-box',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{
        width: photoSize,
        height: photoSize,
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        margin: '0 auto 12px',
        overflow: 'hidden',
        border: `3px solid ${borderColor}`,
      }}>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Photo'; }}
        />
      </div>

      <h4 style={{
        color: nameColor,
        fontSize: isLead ? 'clamp(0.78rem, 2vw, 1.05rem)' : (isMobile ? '0.75rem' : '0.85rem'),
        margin: '0 0 4px 0',
        fontWeight: 'bold',
        lineHeight: '1.2',
      }}>{name}</h4>

      <p style={{
        color: posColor,
        fontSize: isLead ? 'clamp(0.68rem, 1.6vw, 0.82rem)' : (isMobile ? '0.6rem' : '0.7rem'),
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        margin: 0,
      }}>{position}</p>

      {/* COMMITTEE FIELD */}
      {committee && (
        <p style={{
          color: isDark ? '#555' : '#e0e0e0',
          fontSize: isLead ? '0.75rem' : '0.65rem',
          fontStyle: 'italic',
          marginTop: '6px',
          lineHeight: '1.1',
          margin: 0
        }}>
          {committee}
        </p>
      )}
    </div>
  );
};

const HistoryTable = ({ data }) => (
  <div style={{
    width: '100%',
    overflowX: 'auto',
    WebkitOverflowScrolling: 'touch', /* smooth scroll on iOS */
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0',
  }}>
    <table style={{
      width: '100%',
      minWidth: '320px', /* prevents collapsing too small */
      borderCollapse: 'collapse',
      backgroundColor: 'white',
    }}>
      <thead>
        <tr style={{ backgroundColor: '#002c02', color: '#ffd000' }}>
          <th style={{
            padding: 'clamp(10px, 2vw, 15px)',
            textAlign: 'left',
            borderBottom: '2px solid #ffd000',
            fontSize: 'clamp(0.78rem, 2vw, 0.95rem)',
            whiteSpace: 'nowrap',
          }}>Official Name</th>
          <th style={{
            padding: 'clamp(10px, 2vw, 15px)',
            textAlign: 'left',
            borderBottom: '2px solid #ffd000',
            fontSize: 'clamp(0.78rem, 2vw, 0.95rem)',
            whiteSpace: 'nowrap',
          }}>Term</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{
              padding: 'clamp(10px, 2vw, 15px)',
              fontWeight: '600',
              color: '#333',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.9rem)',
            }}>{item.name}</td>
            <td style={{
              padding: 'clamp(10px, 2vw, 15px)',
              color: '#666',
              fontSize: 'clamp(0.72rem, 1.8vw, 0.9rem)',
              whiteSpace: 'nowrap',
            }}>{item.years}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Footer = () => (
  <footer style={{
    backgroundColor: '#002c02',
    padding: 'clamp(40px, 6vh, 60px) 5%',
    color: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
  }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1 1 250px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', fontWeight: 'bold' }}>
          BARANGAY SAN ISIDRO
        </h2>
        <p style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', color: '#cbd5e1', lineHeight: '1.6' }}>
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna.
        </p>
      </div>
      <div style={{ flex: '1 1 200px' }}>
        <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Contact Us</h4>
        <p style={{ fontSize: 'clamp(0.78rem, 2vw, 0.85rem)', color: '#cbd5e1', margin: '5px 0' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
        <p style={{ fontSize: 'clamp(0.78rem, 2vw, 0.85rem)', color: '#cbd5e1', margin: '5px 0' }}>📧 @sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);

export default People;