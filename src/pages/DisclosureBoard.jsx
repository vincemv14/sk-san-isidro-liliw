import React, { useState, useEffect, useRef } from 'react';
import skBudget2025    from '../assets/disclosureboard/sksanisidrobudget2025.pdf';
import skreformact     from '../assets/disclosureboard/skreformact.pdf';
import sandiganngkabatan from '../assets/disclosureboard/sandiganngkabataan.pdf';
import cbydp           from '../assets/disclosureboard/cbydp.pdf';
import abyip           from '../assets/disclosureboard/abyip.pdf';
import abp             from '../assets/disclosureboard/abp.pdf';
import reso            from '../assets/disclosureboard/reso.pdf';
import taxordinance    from '../assets/disclosureboard/taxordinance.pdf';
import sanisidrofees   from '../assets/disclosureboard/sanisidrofees.pdf';

const useFadeIn = (delay = 0) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return [ref, visible];
};

const fadeStyle = (visible, direction = 'up', delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible
    ? 'translate(0,0)'
    : direction === 'up'   ? 'translateY(28px)'
    : direction === 'left' ? 'translateX(-20px)'
    : 'translateX(20px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .disclosure-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; background: #fff; }

  .db-hero {
    background: #001401;
    padding: clamp(64px, 9vw, 120px) clamp(20px, 7%, 10%) clamp(52px, 7vw, 90px);
    text-align: center; position: relative; overflow: hidden;
  }
  .db-hero::before {
    content: ''; position: absolute; top: -80px; right: -80px;
    width: clamp(220px, 38vw, 460px); height: clamp(220px, 38vw, 460px);
    background: radial-gradient(circle, rgba(255,208,0,0.07) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .db-hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,208,0,0.1); border: 1px solid rgba(255,208,0,0.3);
    color: #FFD000; font-size: 11px; font-weight: 600;
    padding: 5px 14px; border-radius: 100px;
    letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 22px;
  }
  .db-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 3.2rem);
    color: #fff; font-weight: 700;
    margin-bottom: 18px; line-height: 1.15; position: relative; z-index: 1;
  }
  .db-hero-title span { color: #FFD000; }
  .db-hero-sub {
    color: rgba(255,255,255,0.68);
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    line-height: 1.8; max-width: 680px;
    margin: 0 auto; position: relative; z-index: 1;
  }

  .db-section { padding: clamp(60px, 8vw, 100px) clamp(20px, 7%, 10%); width: 100%; }
  .db-section.white-bg { background: #fff; }
  .db-section.light-bg { background: #f4f7f4; }
  .db-section.dark-bg  { background: #001401; }

  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .section-tag::before { content:''; width:22px; height:2.5px; background:#FFD000; border-radius:2px; }
  .section-tag.green { color: #2d7a32; }
  .section-tag.light { color: #90c090; }
  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 700; line-height: 1.2; margin-bottom: 8px;
  }
  .section-h2.dark-text  { color: #001f01; }
  .section-h2.light-text { color: #fff; }
  .section-sub { font-size: clamp(0.82rem, 1.8vw, 0.96rem); line-height: 1.6; margin-bottom: 36px; text-align: center }
  .section-sub.green { color: #64748b; }
  .section-sub.light { color: rgba(255,255,255,0.5); }

  .doc-row {
    background: #fff; border: 1px solid #e8eef0;
    border-radius: 12px; padding: clamp(14px, 2.5vw, 20px) clamp(16px, 3vw, 28px);
    display: flex; justify-content: space-between;
    align-items: center; flex-wrap: wrap; gap: 14px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .doc-row:hover { transform: translateX(4px); border-color: #064e3b; box-shadow: 0 4px 18px rgba(0,0,0,0.08); }
  .doc-row-left { flex: 1 1 200px; }
  .doc-row-icon {
    width: 38px; height: 38px; border-radius: 8px;
    background: #f0f7f0; border: 1px solid #d1e8d1;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-right: 14px;
  }
  .doc-row-icon svg { width: 18px; height: 18px; color: #064e3b; }
  .doc-row-inner { display: flex; align-items: center; }
  .doc-title { font-size: clamp(0.86rem, 2vw, 0.96rem); font-weight: 700; color: #001f01; line-height: 1.4; margin-bottom: 4px; }
  .doc-meta { font-size: clamp(0.7rem, 1.5vw, 0.78rem); color: #94a3b8; }
  .doc-btns { display: flex; gap: 8px; flex-shrink: 0; }
  .doc-btn-view {
    padding: clamp(7px, 1.5vw, 9px) clamp(14px, 2.5vw, 18px);
    border-radius: 7px; border: 1.5px solid #cbd5e1;
    background: transparent; color: #475569;
    font-family: 'DM Sans', sans-serif; font-weight: 600;
    font-size: clamp(0.72rem, 1.6vw, 0.8rem); cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .doc-btn-view:hover { border-color: #064e3b; color: #064e3b; }
  .doc-btn-dl {
    padding: clamp(7px, 1.5vw, 9px) clamp(14px, 2.5vw, 18px);
    border-radius: 7px; border: none;
    background: #001f01; color: #FFD000;
    font-family: 'DM Sans', sans-serif; font-weight: 700;
    font-size: clamp(0.72rem, 1.6vw, 0.8rem); cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    display: flex; align-items: center; gap: 5px;
  }
  .doc-btn-dl:hover { background: #064e3b; transform: translateY(-1px); }
  .doc-btn-dl svg { width: 12px; height: 12px; }

  .natl-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    gap: clamp(14px, 2.5vw, 20px);
  }
  .natl-card {
    background: #fff; border-radius: 14px; border-left: 4px solid #FFD000;
    padding: clamp(18px, 3vw, 26px); display: flex; flex-direction: column;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .natl-card:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(0,0,0,0.14); }
  .natl-agency {
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.08em; color: #2d7a32; margin-bottom: 10px;
    display: flex; align-items: center; gap: 6px;
  }
  .natl-agency::before { content:''; width:12px; height:2px; background:#FFD000; border-radius:2px; }
  .natl-title { font-size: clamp(0.85rem, 1.8vw, 0.96rem); font-weight: 700; color: #001f01; line-height: 1.45; flex: 1; margin-bottom: 12px; }
  .natl-year { font-size: 0.78rem; color: #64748b; margin-bottom: 16px; }
  .natl-view-btn {
    align-self: flex-start; display: inline-flex; align-items: center; gap: 5px;
    background: none; border: none; color: #1877f2; font-weight: 700;
    font-family: 'DM Sans', sans-serif; font-size: 0.82rem; cursor: pointer; padding: 0;
    transition: color 0.2s;
  }
  .natl-view-btn:hover { color: #1255b8; }
  .natl-view-btn svg { width: 13px; height: 13px; }

  .news-list { display: flex; flex-direction: column; gap: clamp(14px, 2.5vw, 20px); }
  .news-card {
    background: #fff; border: 1px solid #e8eef0; border-radius: 14px;
    padding: clamp(18px, 3.5vw, 28px); display: flex; flex-direction: column; gap: 14px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .news-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.09); border-color: #b6d4b8; }
  .news-source-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
  .news-source-badge {
    display: inline-flex; align-items: center;
    background: #f0f7f0; border: 1px solid #c8e0c8;
    color: #064e3b; font-size: 0.7rem; font-weight: 700;
    padding: 3px 10px; border-radius: 100px;
    text-transform: uppercase; letter-spacing: 0.06em;
  }
  .news-date { font-size: 0.75rem; color: #94a3b8; font-weight: 600; }
  .news-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: #001f01; font-weight: 700; line-height: 1.35; margin-bottom: 6px;
  }
  .news-desc { font-size: clamp(0.84rem, 1.8vw, 0.94rem); color: #475569; line-height: 1.7; }
  .news-read-btn {
    align-self: flex-start; display: inline-flex; align-items: center; gap: 7px;
    padding: 9px 20px; border-radius: 8px; border: 1.5px solid #cbd5e1;
    background: #fff; color: #334155;
    font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.8rem;
    cursor: pointer; transition: background 0.2s, border-color 0.2s, color 0.2s;
  }
  .news-read-btn:hover { background: #001f01; border-color: #001f01; color: #FFD000; }
  .news-read-btn svg { width: 13px; height: 13px; transition: transform 0.2s; }
  .news-read-btn:hover svg { transform: translateX(2px); }

  .site-footer { background: #001001; padding: clamp(40px, 6vw, 70px) clamp(20px, 8%, 10%) clamp(24px, 4vw, 36px); }
  .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(24px, 5vw, 60px); max-width: 1100px; margin: 0 auto 32px; }
  @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
  .footer-brand { color: #FFD000; font-size: clamp(1.1rem, 3vw, 1.45rem); font-weight: 700; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
  .footer-p { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.65; }
  .footer-contact-h { color: #FFD000; font-size: 0.88rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 16px; }
  .footer-contact-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.5; }
  .footer-contact-row svg { width:15px; height:15px; flex-shrink:0; margin-top:2px; color:#FFD000; }
  .footer-divider { border:none; border-top:1px solid rgba(255,255,255,0.08); max-width:1100px; margin:0 auto 20px; }
  .footer-copy { text-align:center; font-size:0.78rem; color:rgba(255,255,255,0.3); max-width:1100px; margin:0 auto; }
`;

const localDocuments = [
  { id: 1, title: "SK San Isidro - Official Budget Expenses 2025",                               category: "Expenses",                                            date: "1st - 4th Quarter 2025",                 fileUrl: skBudget2025  },
  { id: 2, title: "SK San Isidro Comprehensive Barangay Youth Development Plan (CBYDP)",                       category: "3-year Strategic Plan",                               date: "2024-2026",                              fileUrl: cbydp         },
  { id: 3, title: "SK San Isidro Annual Barangay Youth Investment Program (ABYIP)",                            category: "2026",                                                date: "2026",                                   fileUrl: abyip         },
  { id: 4, title: "Annual Budget Proposal",                                                      category: "Budget Proposal",                                     date: "2026",                                   fileUrl: abp           },
  { id: 5, title: "SK RESOLUSYON BLG. 003",                                                     category: "Resolution",                                          date: "October 14, 2025",                       fileUrl: reso          },
  { id: 6, title: "BARANGAY RESOLUSYON BLG. 11 SERIES 2024 TAX ORDINANCES",                     category: "BRGY TAX ORDINANCES",                                 date: "August 18, 2024 APPROVED JULY 14, 2025", fileUrl: taxordinance  },
  { id: 7, title: "MUNICIPAL RESOLUSYON BLG. 12 SERIES 2025 FEES AND CHARGES",                  category: "MUNICIPAL APPROVAL FOR IMPOSING FEES AND CHARGES",    date: "August 18, 2024 APPROVED JULY 14, 2025", fileUrl: sanisidrofees },
];

const nationalFiles = [
  { id: 'n1', title: "SK Reform Act (RA 10742) - IRR",                                                                           agency: "National",                year: "2024 Update",   fileUrl: skreformact },
  { id: 'n2', title: "UPDATED GUIDELINES ON THE APPROPRIATION, RELEASE, PLANNING, AND BUDGETING PROCESS FOR THE SK FUNDS",       agency: "DBM, DILG, NYC",          year: "May 23, 2025",  fileUrl: "https://www.dbm.gov.ph/wp-content/uploads/Issuances/2025/Joint-Memorandum-Circular/DBM-DILG-NYC-JOINT-MEMORANDUM-CIRCULAR-(JMC)-NO.-1-DATED-MAY-23,-2025.pdf" },
  { id: 'n3', title: "Philippine Youth Development Plan (PYDP)",                                                                  agency: "National Youth Commission", year: "2023-2028",     fileUrl: "https://drive.google.com/file/d/1dcIQfgzZWYWhL6usBFAF6Xo1xLEyuw7f/view" },
  { id: 'n4', title: "Sangguniang Kabataan Officials Eligibility (SKOE)",                                                         agency: "Civil Service Commission",  year: "May 07, 2026",  fileUrl: "https://csc.gov.ph/special-eligibilities/sangguniang-kabataan-officials-eligibility" },
];

const nationalNews = [
  { id: 'news4', title: "Barangay and Sangguniang Kabataan Elections (BSKE)",                                                                          desc: "Summary of Important Dates for the BSKE 2026.",                                                        source: "COMELEC",                       date: "January 30, 2026",  newsUrl: "https://www.facebook.com/photo/?fbid=1369122368586925&set=a.224420856390421" },
  { id: 'news1', title: "National Youth Commission Sangguniang Kabataan Web Portal (NYC-SKWP)",                                                        desc: "Designed to empower SK officials, LYDOs, streamlined access to essential resources and reporting tools.", source: "National Youth Commission (NYC)", date: "2026",             newsUrl: "https://nyc-sk.com/landing" },
  { id: 'news2', title: "Inventory and Turnover of Barangay and SK Properties, Financial Records, Documents and Money Accountabilities",               desc: "DILG orders early barangay, SK inventory ahead of November polls.",                                      source: "DILG Memo Circulars",           date: "April 14, 2026",    newsUrl: "https://www.dilg.gov.ph/issuances/mc/Inventory-and-Turnover-of-Barangay-and-SK-Properties-Financial-Records-Documents-BSK-PFRDs-and-Money-Accountabilities-by-all-incumbent-Barangay-and-SK-Officials-and-the-creation-of-the-Barangay-and-SK-Inventory-Team-and-the-CityMunicipal-Assessment-and-Transition-Team-in-view-of-the-Barangay-and-Sangguniang-Kabataan-Elections-on-the-first-Monday-of-November-2026/4188" },
  { id: 'news3', title: "Sandigan ng Kabataan: Primer on Accountability of SK Officials",                                                              desc: "How do we hold SK officials accountable? Here's a step-by-step guide!",                                  source: "GoodGovPH",                     date: "March 21, 2026",    newsUrl: sandiganngkabatan },
];

const openLink = (url) => {
  if (url && url !== '#' && url !== 'LINK_TO_YOUR_GOOGLE_DRIVE_PDF') {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else { alert('File link coming soon!'); }
};

const handleDownload = (url, filename) => {
  if (!url || url === '#' || url === 'LINK_TO_YOUR_GOOGLE_DRIVE_PDF') {
    alert('Download file coming soon!'); return;
  }
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename || 'document.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const DisclosureBoard = () => {
  const [heroRef,  heroVis]  = useFadeIn(0);
  const [localRef, localVis] = useFadeIn(0);
  const [natlRef,  natlVis]  = useFadeIn(0);
  const [newsRef,  newsVis]  = useFadeIn(0);

  return (
    <main className="disclosure-page">
      <style>{globalCSS}</style>

      <section className="db-hero" ref={heroRef}>
        <div style={fadeStyle(heroVis, 'up', 0)}>
          <div className="db-hero-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
            Transparency &amp; Accountability
          </div>
        </div>
        <div style={fadeStyle(heroVis, 'up', 120)}>
          <h1 className="db-hero-title">Disclosure &amp; <span>Resources</span></h1>
        </div>
        <div style={fadeStyle(heroVis, 'up', 220)}>
          <p className="db-hero-sub">
            Bridging the gap between Local Governance and National Policy. Stay informed with official
            San Isidro files and nationwide youth development updates.
          </p>
        </div>
      </section>

      <section className="db-section white-bg" ref={localRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(localVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Local Transparency</div>
            <h2 className="section-h2 dark-text">Barangay San Isidro Files</h2>
            <p className="section-sub green">Local transparency and accountability documents.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {localDocuments.map((doc, i) => (
              <div key={doc.id} style={fadeStyle(localVis, 'up', 80 + i * 60)}>
                <DocRow
                  title={doc.title} sub={doc.category} date={doc.date}
                  onView={() => openLink(doc.fileUrl)}
                  onDownload={() => handleDownload(doc.fileUrl, `${doc.title}.pdf`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="db-section dark-bg" ref={natlRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(natlVis, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>National Policy</div>
            <h2 className="section-h2 light-text">National Government Files</h2>
            <p className="section-sub light">Important circulars and laws from DILG, NYC, and COA.</p>
          </div>
          <div className="natl-grid">
            {nationalFiles.map((file, i) => (
              <div key={file.id} className="natl-card" style={fadeStyle(natlVis, 'up', 100 + i * 80)}>
                <div className="natl-agency">{file.agency} Office</div>
                <h4 className="natl-title">{file.title}</h4>
                <p className="natl-year">Reference Year: {file.year}</p>
                <button className="natl-view-btn" onClick={() => openLink(file.fileUrl)}>
                  View Document
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="db-section light-bg" ref={newsRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(newsVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Updates</div>
            <h2 className="section-h2 dark-text">SK News Nationwide</h2>
            <p className="section-sub green">Latest headlines from the National SK Federation.</p>
          </div>
          <div className="news-list">
            {nationalNews.map((news, i) => (
              <div key={news.id} className="news-card" style={fadeStyle(newsVis, 'up', 80 + i * 70)}>
                <div className="news-source-row">
                  <span className="news-source-badge">{news.source}</span>
                  <span className="news-date">{news.date}</span>
                </div>
                <div>
                  <h3 className="news-title">{news.title}</h3>
                  <p className="news-desc">{news.desc}</p>
                </div>
                <button className="news-read-btn" onClick={() => openLink(news.newsUrl)}>
                  Read Article
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
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

const DocRow = ({ title, sub, date, onView, onDownload }) => (
  <div className="doc-row">
    <div className="doc-row-inner doc-row-left">
      <div className="doc-row-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      </div>
      <div>
        <div className="doc-title">{title}</div>
        <div className="doc-meta">{sub} &nbsp;·&nbsp; {date}</div>
      </div>
    </div>
    <div className="doc-btns">
      <button className="doc-btn-view" onClick={onView}>View</button>
      <button className="doc-btn-dl" onClick={onDownload}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Download
      </button>
    </div>
  </div>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <div className="footer-brand">Barangay San Isidro</div>
        <p className="footer-p">Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna.</p>
      </div>
      <div>
        <div className="footer-contact-h">Contact Us</div>
        <div className="footer-contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Brgy. Hall, San Isidro, Liliw, Laguna
        </div>
        <div className="footer-contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <polyline points="2,4 12,13 22,4"/>
          </svg>
          sangguniangkabataanngsanisidro@gmail.com
        </div>
      </div>
    </div>
    <hr className="footer-divider" />
    <p className="footer-copy">© 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.</p>
  </footer>
);

export default DisclosureBoard;
