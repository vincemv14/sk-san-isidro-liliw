import React from 'react';
import skBudget2025 from '../assets/disclosureboard/sksanisidrobudget2025.pdf';

const DisclosureBoard = () => {
  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  const localDocuments = [
    { id: 1, title: "SK San Isidro - Official Budget Expenses 2025", category: "Expenses", date: "1st - 4th Quarter 2025", fileUrl: skBudget2025 },
    { id: 2, title: "SK Resolution No. 05 - Youth Portal", category: "Resolutions", date: "May 2026", fileUrl: "LINK_TO_YOUR_GOOGLE_DRIVE_PDF" },
  ];

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
      title: "UPDATED GUIDELINES ON THE APPROPRIATION, RELEASE, PLANNING, AND BUDGETING PROCESS FOR THE SK FUNDS", 
      agency: "DBM, DILG, NYC", 
      year: "May 23, 2025", 
      fileUrl: "https://www.dbm.gov.ph/wp-content/uploads/Issuances/2025/Joint-Memorandum-Circular/DBM-DILG-NYC-JOINT-MEMORANDUM-CIRCULAR-(JMC)-NO.-1-DATED-MAY-23,-2025.pdf" 
    },
    { 
      id: 'n3', 
      title: "Philippine Youth Development Plan (PYDP)", 
      agency: "National Youth Commission", 
      year: "2023-2028", 
      fileUrl: "https://drive.google.com/file/d/1dcIQfgzZWYWhL6usBFAF6Xo1xLEyuw7f/view" 
    },
    { 
      id: 'n4', 
      title: "Sangguniang Kabataan Officials Eligibility (SKOE)", 
      agency: "Civil Service Commission", 
      year: "May 07, 2026", 
      fileUrl: "https://csc.gov.ph/special-eligibilities/sangguniang-kabataan-officials-eligibility" 
    },
  ];

  const nationalNews = [
    { 
      id: 'news1', 
      title: "National Youth Commission Sangguniang Kabataan Web Portal (NYC-SKWP)", 
      desc: "Designed to empower SK officials, LYDOs, streamlined access to essential resources and reporting tools.",
      source: "National Youth Commission (NYC)",
      date: "2026",
      newsUrl: "https://nyc-sk.com/landing"
    },
    { 
      id: 'news2', 
      title: "Inventory and Turnover of Barangay and SK Properties, Financial Records, Documents and Money Accountabilities", 
      desc: "DILG orders early barangay, SK inventory ahead of November polls.",
      source: "DILG Memo Circulars",
      date: "April 14, 2026",
      newsUrl: "https://www.dilg.gov.ph/issuances/mc/Inventory-and-Turnover-of-Barangay-and-SK-Properties-Financial-Records-Documents-BSK-PFRDs-and-Money-Accountabilities-by-all-incumbent-Barangay-and-SK-Officials-and-the-creation-of-the-Barangay-and-SK-Inventory-Team-and-the-CityMunicipal-Assessment-and-Transition-Team-in-view-of-the-Barangay-and-Sangguniang-Kabataan-Elections-on-the-first-Monday-of-November-2026/4188"
    },
    { 
      id: 'news3', 
      title: "Sandigan ng Kabataan: Primer on Accountability of SK Officials", 
      desc: "How do we hold SK officials accountable? Here's a step-by-step guide!",
      source: "GoodGovPH",
      date: "March 21, 2026",
      newsUrl: "https://drive.google.com/drive/u/0/folders/1kbC4GU7IlCHuh9ZAS_w_-BTL3DhYAGFy"
    }
  ];

  const openLink = (url) => {
    if (url && url !== "#" && url !== "LINK_TO_YOUR_GOOGLE_DRIVE_PDF") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("File link coming soon!");
    }
  };

  const handleDownload = (url, filename) => {
    if (!url || url === "#" || url === "LINK_TO_YOUR_GOOGLE_DRIVE_PDF") {
      alert("Download file coming soon!");
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename || 'document.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', width: '100%', overflowX: 'hidden' }}>

      {/* HERO HEADER */}
      <section style={{
        backgroundColor: brandGreen,
        padding: 'clamp(60px, 10vw, 120px) 5% clamp(40px, 6vw, 60px)',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontSize: 'clamp(1.5rem, 5vw, 3rem)',
          color: brandGold,
          fontWeight: '800',
          margin: '0 0 15px',
        }}>
          DISCLOSURE & RESOURCES
        </h1>
        <p style={{
          opacity: 0.8,
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: 'clamp(0.88rem, 2.5vw, 1rem)',
          lineHeight: '1.7',
        }}>
          Bridging the gap between Local Governance and National Policy. Stay informed with official
          San Isidro files and nationwide youth development updates.
        </p>
      </section>

      {/* SECTION 1: LOCAL DISCLOSURE */}
      <section style={{
        padding: 'clamp(50px, 8vw, 80px) 5% clamp(30px, 5vw, 40px)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader1
            title="Barangay San Isidro Files"
            subtitle="Local transparency and accountability documents."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {localDocuments.map(doc => (
              <DocRow
                key={doc.id}
                title={doc.title}
                sub={doc.category}
                date={doc.date}
                onView={() => openLink(doc.fileUrl)}
                onDownload={() => handleDownload(doc.fileUrl, `${doc.title}.pdf`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: NATIONAL GOVERNMENT FILES */}
      <section style={{
        padding: 'clamp(50px, 8vw, 60px) 5%',
        backgroundColor: '#002c02',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader2
            title="National Government Files"
            subtitle="Important circulars and laws from DILG, NYC, and COA."
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(14px, 3vw, 20px)',
          }}>
            {nationalFiles.map(file => (
              <div key={file.id} style={{
                backgroundColor: 'white',
                padding: 'clamp(16px, 3vw, 25px)',
                borderRadius: '16px',
                borderLeft: '5px solid #002c02',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
              }}>
                <div style={{
                  color: 'darkgreen',
                  fontWeight: 'bold',
                  fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}>
                  {file.agency} OFFICE
                </div>
                <h4 style={{
                  margin: '0 0 10px 0',
                  fontSize: 'clamp(0.88rem, 2.5vw, 1.05rem)',
                  lineHeight: '1.4',
                  color: '#0f172a',
                  flex: 1,
                }}>
                  {file.title}
                </h4>
                <p style={{
                  fontSize: 'clamp(0.78rem, 2vw, 0.85rem)',
                  color: '#444',
                  margin: '0 0 12px',
                }}>
                  Reference Year: {file.year}
                </p>
                <button
                  onClick={() => openLink(file.fileUrl)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#1877F2',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    padding: 0,
                    fontSize: 'clamp(0.8rem, 2vw, 0.88rem)',
                    textAlign: 'left',
                  }}
                >
                  View ↗
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SK NEWS */}
      <section style={{
        padding: 'clamp(50px, 8vw, 80px) 5% clamp(60px, 10vw, 120px)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <SectionHeader1
            title="SK News Nationwide"
            subtitle="Latest headlines from the National SK Federation."
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vw, 25px)' }}>
            {nationalNews.map(news => (
              <div key={news.id} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                padding: 'clamp(18px, 4vw, 30px)',
                backgroundColor: 'white',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxSizing: 'border-box',
              }}>
                <div>
                  <small style={{
                    color: brandGreen,
                    fontWeight: 'bold',
                    fontSize: 'clamp(0.7rem, 1.8vw, 0.82rem)',
                  }}>
                    {news.source} • {news.date}
                  </small>
                  <h3 style={{
                    margin: '8px 0',
                    fontSize: 'clamp(0.95rem, 2.8vw, 1.3rem)',
                    color: '#0f172a',
                    lineHeight: '1.4',
                  }}>
                    {news.title}
                  </h3>
                  <p style={{
                    color: '#475569',
                    fontSize: 'clamp(0.82rem, 2vw, 1rem)',
                    lineHeight: '1.6',
                    margin: 0,
                  }}>
                    {news.desc}
                  </p>
                </div>
                <button
                  onClick={() => openLink(news.newsUrl)}
                  style={{
                    alignSelf: 'flex-start',
                    padding: 'clamp(8px, 2vw, 10px) clamp(14px, 3vw, 20px)',
                    borderRadius: '8px',
                    color: '#000000',
                    border: '1px solid #cbd5e1',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: 'clamp(0.78rem, 2vw, 0.88rem)',
                  }}
                >
                  Read Article
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// --- Atomic Components ---

const DocRow = ({ title, sub, date, onView, onDownload }) => (
  <div style={{
    backgroundColor: 'white',
    padding: 'clamp(14px, 3vw, 20px) clamp(16px, 4vw, 30px)',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    boxSizing: 'border-box',
  }}>
    <div style={{ flex: '1 1 200px' }}>
      <h4 style={{
        margin: '0 0 4px',
        color: '#002c02',
        fontSize: 'clamp(0.88rem, 2.5vw, 1rem)',
        lineHeight: '1.4',
      }}>
        {title}
      </h4>
      <small style={{ color: '#a7a7a7', fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)' }}>
        {sub} • {date}
      </small>
    </div>
    <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
      <button onClick={onView} style={{
        padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px)',
        borderRadius: '8px',
        border: '1px solid #cbd5e1',
        backgroundColor: 'transparent',
        color: '#475569',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
      }}>
        View
      </button>
      <button onClick={onDownload} style={{
        padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px)',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#002c02',
        color: '#ffd000',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
      }}>
        Download
      </button>
    </div>
  </div>
);

const SectionHeader1 = ({ title, subtitle }) => (
  <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
    <h2 style={{
      fontSize: 'clamp(1.3rem, 4vw, 2rem)',
      color: '#002c02',
      margin: '0 0 6px',
      fontWeight: 'bold',
    }}>
      {title}
    </h2>
    <p style={{
      color: '#64748b',
      marginTop: '5px',
      fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
    }}>
      {subtitle}
    </p>
  </div>
);

const SectionHeader2 = ({ title, subtitle }) => (
  <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)', textAlign: 'center' }}>
    <h2 style={{
      fontSize: 'clamp(1.3rem, 4vw, 2rem)',
      color: '#ffffff',
      margin: '0 0 6px',
      fontWeight: 'bold',
    }}>
      {title}
    </h2>
    <p style={{
      color: '#9b9b9b',
      marginTop: '5px',
      fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
    }}>
      {subtitle}
    </p>
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

export default DisclosureBoard;