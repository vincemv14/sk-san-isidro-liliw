import React from 'react';

const disclosure = () => {
  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  // --- Local San Isidro Documents ---
  const localDocuments = [
    { id: 1, title: "ABYIP 2026 - Official Budget", category: "Finances", date: "Jan 2026", fileUrl: "LINK_TO_YOUR_GOOGLE_DRIVE_PDF" },
    { id: 2, title: "SK Resolution No. 05 - Youth Portal", category: "Resolutions", date: "May 2026", fileUrl: "LINK_TO_YOUR_GOOGLE_DRIVE_PDF" },
  ];

  // --- National Government Files (Updated with Official Directories) ---
  const nationalFiles = [
    { 
        id: 'n1', 
        title: "SK Reform Act (RA 10742) - IRR", 
        agency: "National", 
        year: "2024 Update", 
        fileUrl: "https://www.officialgazette.gov.ph/downloads/2016/01jan/20160115-RA-10742-BSA.pdf" 
    },
    { 
        id: 'n2', 
        title: "DILG Circular: COA Audit Guidelines", 
        agency: "DILG", 
        year: "2025", 
        fileUrl: "https://www.dilg.gov.ph/issuances/" 
    },
    { 
        id: 'n3', 
        title: "National Youth Philippine Development Plan (NYDP)", 
        agency: "NYC", 
        year: "2023-2028", 
        fileUrl: "https://drive.google.com/file/d/1mWZfnQQVqAwv5FfCrPfEQ8AcqXQNRC3b/view" 
    },
  ];

  const nationalNews = [
    { 
      id: 'news1', 
      title: "National SK Federation Summit 2026", 
      desc: "SK leaders nationwide gather to discuss climate action and digital literacy initiatives.",
      source: "NYC Philippines",
      date: "May 10, 2026",
      newsUrl: "https://facebook.com/nycofficial"
    },
    { 
      id: 'news2', 
      title: "New Budget Allocation for Youth Mental Health", 
      desc: "National government approves additional funding for community-based mental health programs.",
      source: "DILG News",
      date: "April 28, 2026",
      newsUrl: "https://www.dilg.gov.ph/"
    }
  ];

  // Helper function to open links
  const openLink = (url) => {
    if(url !== "#") window.open(url, "_blank", "noopener,noreferrer");
    else alert("File link coming soon!");
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      
      {/* HERO HEADER */}
      <section style={{ backgroundColor: brandGreen, padding: '120px 10% 60px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: brandGold, fontWeight: '800' }}>DISCLOSURE & RESOURCES</h1>
        <p style={{ opacity: 0.8, maxWidth: '800px', margin: '20px auto' }}>
          Bridging the gap between Local Governance and National Policy. Stay informed with official 
          San Isidro files and nationwide youth development updates.
        </p>
      </section>

      {/* SECTION 1: LOCAL DISCLOSURE BOARD */}
      <section style={{ padding: '80px 10% 40px' }}>
        <SectionHeader1 title="Barangay San Isidro Files" subtitle="Local transparency and accountability documents." />
        <div style={listLayout}>
          {localDocuments.map(doc => (
            <DocRow 
                key={doc.id} 
                title={doc.title} 
                sub={doc.category} 
                date={doc.date} 
                onView={() => openLink(doc.fileUrl)} 
            />
          ))}
        </div>
      </section>

      {/* SECTION 2: NATIONAL GOVERNMENT POLICIES */}
      <section style={{ padding: '60px 10%', backgroundColor: '#002c02' }}>
        <SectionHeader2 title="National Government Files" subtitle="Important circulars and laws from DILG, NYC, and COA." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {nationalFiles.map(file => (
            <div key={file.id} style={nationalCardStyle}>
              <div style={{ color: 'darkgreen', fontWeight: 'bold', fontSize: '0.8rem', marginBottom: '10px' }}>{file.agency} OFFICE</div>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{file.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#000000' }}>Reference Year: {file.year}</p>
              {/* Added onClick to open the actual PDF URL */}
              <button onClick={() => openLink(file.fileUrl)} style={smallBtnStyle}>Open PDF ↗</button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SK NEWS NATIONWIDE */}
      <section style={{ padding: '80px 10% 120px' }}>
        <SectionHeader1 title="SK News Nationwide" subtitle="Latest headlines from the National SK Federation." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          {nationalNews.map(news => (
            <div key={news.id} style={newsRowStyle}>
              <div style={{ flex: 1 }}>
                <small style={{ color: brandGreen, fontWeight: 'bold' }}>{news.source} • {news.date}</small>
                <h3 style={{ margin: '10px 0', fontSize: '1.4rem', color: '#0f172a' }}>{news.title}</h3>
                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>{news.desc}</p>
              </div>
              <button onClick={() => openLink(news.newsUrl)} style={readMoreBtn}>Read Article</button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Updated Atomic Components to handle Clicks ---

const DocRow = ({ title, sub, date, onView }) => (
    <div style={docRowStyle}>
      <div>
        <h4 style={{ margin: 0, color: '#002c02' }}>{title}</h4>
        <small style={{ color: '#a7a7a7' }}>{sub} • {date}</small>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={onView} style={actionBtn(false)}>View</button>
        <button onClick={onView} style={actionBtn(true)}>Download</button>
      </div>
    </div>
  );

// Rest of your components (SectionHeader1, SectionHeader2, Styled Objects, Footer) 
// remain exactly the same as your provided code.

const SectionHeader1 = ({ title, subtitle }) => (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '2rem', color: '#002c02', margin: 0}}>{title}</h2>
      <p style={{ color: '#64748b', marginTop: '5px' }}>{subtitle}</p>
    </div>
  );
  
  const SectionHeader2 = ({ title, subtitle }) => (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ fontSize: '2rem', color: '#ffffff', margin: 0 }}>{title}</h2>
      <p style={{ color: '#9b9b9b', marginTop: '5px' }}>{subtitle}</p>
    </div>
  );
  
  const listLayout = { display: 'flex', flexDirection: 'column', gap: '15px' };
  
  const docRowStyle = {
    backgroundColor: 'white', padding: '20px 30px', borderRadius: '12px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
  };
  
  const nationalCardStyle = {
    backgroundColor: 'white', padding: '25px', borderRadius: '16px',
    borderLeft: '5px solid #002c02', boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  };
  
  const newsRowStyle = {
    display: 'flex', gap: '40px', padding: '30px', backgroundColor: 'white',
    borderRadius: '20px', border: '1px solid #e2e8f0', flexWrap: 'wrap'
  };
  
  const actionBtn = (isPrimary) => ({
    padding: '8px 16px', borderRadius: '8px', border: isPrimary ? 'none' : '1px solid #cbd5e1',
    backgroundColor: isPrimary ? '#002c02' : 'transparent', color: isPrimary ? '#ffd000' : '#475569',
    fontWeight: 'bold', cursor: 'pointer'
  });
  
  const smallBtnStyle = {
    marginTop: '15px', backgroundColor: 'transparent', border: 'none',
    color: '#1877F2', fontWeight: 'bold', cursor: 'pointer', padding: 0
  };
  
  const readMoreBtn = {
    alignSelf: 'center', padding: '10px 20px', borderRadius: '8px', color: '#000000', 
    border: '1px solid #cbd5e1', backgroundColor: 'white', cursor: 'pointer',
    fontWeight: '600'
  };
  
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
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ color: '#ffd000', marginBottom: '20px', fontSize: '1rem' }}>Contact Us</h4>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>📍 Brgy. Hall, San Isidro, Liliw, Laguna</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)' }}>
          © 2026 Barangay San Isidro. Designed by SK Vince M. Villanueva.
        </div>
      </footer>
    );

export default disclosure;