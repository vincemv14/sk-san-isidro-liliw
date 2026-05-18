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

const People = () => {
  // --- Styles ---
  const sectionStyle = { padding: '80px 10%', backgroundColor: '#ffffff' };
  const darkSectionStyle = { ...sectionStyle, backgroundColor: '#002c02', color: 'white' };
  const gridStyle = { display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' };
  
  const headingStyle = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '40px',
    display: 'inline-block',
    borderBottom: '4px solid #ffd000',
    lineHeight: '1.2'
    
  };

  const tableContainerStyle = {
    overflowX: 'auto',
    marginTop: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    border: '1px solid #e2e8f0'
  };

  // --- Data Arrays ---
  const sbMembers = [
    { name: "HON. DAISY S. OGANIA", position: "Barangay Kagawad", image: daisyPhoto },
    { name: "HON. SERGIO A. CAGAS", position: "Barangay Kagawad", image: sergioPhoto },
    { name: "HON. ELVIRA M. NOMA", position: "Barangay Kagawad", image: elviePhoto },
    { name: "HON. GARRY L. LAGRISOLA", position: "Barangay Kagawad", image: garryPhoto },
    { name: "HON. REGIDOR A. PINEDA JR.", position: "Barangay Kagawad", image: jrPhoto },
    { name: "HON. JAIME B. SALAZAR", position: "Barangay Kagawad", image: jaimePhoto },
    { name: "HON. ANGELITO M. MATIC", position: "Barangay Kagawad", image: angelPhoto1 },
  ];

  const skMembers = [
    { name: "HON. VINCE MITRA VILLANUEVA", position: "SK Member", image: binsPhoto },
    { name: "HON. ALTHEA MARIE POONIN", position: "SK Member", image: theaPhoto },
    { name: "HON. JENNIFER B. PLATERO", position: "SK Member", image: efferPhoto },
    { name: "HON. PAUL ANGELO B. GRINDULO", position: "SK Member", image: paulPhoto },
    { name: "HON. SAMANTHA CLAIRE M. VASALLO", position: "SK Member", image: samPhoto },
    { name: "HON. ANGEL DIANNE TIQUIS", position: "SK Member", image: angelPhoto },
    { name: "HON. NIDELINE MEI LABRIAGA", position: "SK Member", image: nidelinePhoto },
  ];

  const pastSB = [
    { name: "HON. FELINO C. MERCADO", years: "2023 - PRESENT" },
    { name: "HON. FELINO C. MERCADO", years: "2018 - 2023" },
    { name: "HON. FELINO C. MERCADO", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
  ];

  const pastSK = [
    { name: "HON. GIAN LORBEN M. LAGRISOLA", years: "2023 - PRESENT" },
    { name: "HON. MEZZA LUNA BRUL", years: "2018 - 2023" },
    { name: "HON. MA. RICA S. GRINDULO", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
    { name: "HON. [NAME HERE]", years: "2013 - 2018" },
  ];

  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        
        {/* 1. SANGGUNIANG BARANGAY SECTION */}
        <section style={sectionStyle}>
          <div style={{ textAlign: 'center',maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ ...headingStyle, color: '#002c02', borderBottomColor: '#538b56'}}>
              SANGGUNIANG BARANGAY NG SAN ISIDRO <br/> LILIW 2023 - 2026
            </h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
              <OfficialCard 
                name="HON. FELINO MERCADO" 
                position="Punong Barangay" 
                image={kapPhoto} 
                isDark={false}
              />
            </div>

            <div style={gridStyle}>
              {sbMembers.map((member, index) => (
                <OfficialCard key={index} {...member} isDark={false} />
              ))}
              <OfficialCard name="HON. LENDEL F. ALMARES" position="Barangay Secretary" image="path/to/sec.jpg" isDark={false} />
              <OfficialCard name="HON. JHOMMEL M. MONTEVIRGEN" position="Barangay Treasurer" image="path/to/tres.jpg" isDark={false} />
            </div>
          </div>
        </section>

        {/* 2. SANGGUNIANG KABATAAN SECTION */}
        <section style={darkSectionStyle}>
          <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{...headingStyle, color: '#ffffff'}}>SANGGUNIANG KABATAAN NG SAN ISIDRO <br/> LILIW 2023 - 2026</h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
              <OfficialCard 
                name="HON. GIAN LORBEN MITRA LAGRISOLA" 
                position="SK Chairperson" 
                image={gianPhoto} 
                isDark={true}
              />
            </div>

            <div style={gridStyle}>
              {skMembers.map((member, index) => (
                <OfficialCard key={index} {...member} isDark={true} />
              ))}
              <OfficialCard name="HON. LORIE ANN A. SANTOS" position="SK Secretary" image={lorieannPhoto} isDark={true} />
              <OfficialCard name="HON. MAI MAI A. FRESCO" position="SK Treasurer" image={maiPhoto} isDark={true} />
            </div>
          </div>
        </section>

        {/* 3. HISTORY SECTION */}
        <section style={{ ...sectionStyle, backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ ...headingStyle, color: '#002c02' }}>HISTORY OF LEADERSHIP</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginTop: '20px' }}>
              
              {/* Past SB Table */}
              <div>
                <h3 style={{ color: '#0c4b00', marginBottom: '15px' }}>Past Punong Barangays</h3>
                <div style={tableContainerStyle}>
                  <HistoryTable data={pastSB} />
                </div>
              </div>

              {/* Past SK Table */}
              <div>
                <h3 style={{ color: '#0c4b00', marginBottom: '15px' }}>Past SK Chairpersons</h3>
                <div style={tableContainerStyle}>
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

// --- Sub-Components ---

const OfficialCard = ({ name, position, image, isDark }) => {
  // Logic for separate colors
  const nameColor = isDark ? '#002c02' : '#ffffff'; // Dark Green on Yellow vs White on Green
  const posColor = isDark ? '#444444' : '#ffd000'; // Dark Gray on Yellow vs Yellow on Green
  const borderColor = isDark ? '#002c02' : '#ffd000';

  return (
    <div 
      style={{ 
        background: isDark ? '#ffbb00' : '#0c4b00', 
        padding: '25px', borderRadius: '20px', textAlign: 'center', width: '240px',
        border: isDark ? '1px solid #eab308' : '1px solid #ffd000',
        transition: 'transform 0.3s ease', cursor: 'default'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ 
        width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#ffffff', 
        margin: '0 auto 20px', overflow: 'hidden', border: `4px solid ${borderColor}`
      }}>
        <img 
          src={image} alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Photo'; }} 
        />
      </div>
      <h4 style={{ color: nameColor, fontSize: '1.05rem', margin: '0 0 5px 0', fontWeight: 'bold' }}>{name}</h4>
      <p style={{ color: posColor, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{position}</p>
    </div>
  );
};

const HistoryTable = ({ data }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
    <thead>
      <tr style={{ backgroundColor: '#002c02', color: '#ffd000' }}>
        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ffd000' }}>Official Name</th>
        <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #ffd000' }}>Term</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '15px', fontWeight: '600', color: '#333' }}>{item.name}</td>
          <td style={{ padding: '15px', color: '#666' }}>{item.years}</td>
        </tr>
      ))}
    </tbody>
  </table>
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
        <p style={{ fontSize: '0.85rem' }}>📧 contact@sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);

export default People;