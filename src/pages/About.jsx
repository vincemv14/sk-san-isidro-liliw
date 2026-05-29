import React, { useState, useEffect, useRef } from 'react';

// ─── Scroll Animation Hook (same as Home.jsx) ────────────────────────────────
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
      { threshold: 0.1 }
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
    : direction === 'up'
    ? 'translateY(32px)'
    : direction === 'left'
    ? 'translateX(-24px)'
    : 'translateX(24px)',
  transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
});

// ─── Global CSS ───────────────────────────────────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .about-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  /* ── Shared section base ── */
  .about-section {
    padding: clamp(70px, 9vw, 120px) clamp(20px, 7%, 10%);
    width: 100%; box-sizing: border-box;
  }

  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; color: #2d7a32;
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .section-tag::before { content: ''; width: 22px; height: 2.5px; background: #FFD000; border-radius: 2px; }
  .section-tag.light { color: #90c090; }

  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 700; line-height: 1.15; margin-bottom: 18px;
  }
  .section-h2.dark-text  { color: #001f01; }
  .section-h2.light-text { color: #ffffff; }

  /* ── 1. HERO / INTRO ── */
  .intro-section {
    background: #001401;
    position: relative; overflow: hidden;
  }
  .intro-section::before {
    content: '';
    position: absolute; top: -60px; right: -60px;
    width: clamp(200px, 35vw, 420px);
    height: clamp(200px, 35vw, 420px);
    background: radial-gradient(circle, rgba(255,208,0,0.07) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .intro-inner {
    max-width: 820px; margin: 0 auto; text-align: center; position: relative; z-index: 1;
  }
  .intro-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,208,0,0.1); border: 1px solid rgba(255,208,0,0.3);
    color: #FFD000; font-size: 11px; font-weight: 600;
    padding: 5px 14px; border-radius: 100px;
    letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 22px;
  }
  .intro-p {
    color: rgba(255,255,255,0.78);
    font-size: clamp(0.95rem, 2vw, 1.12rem);
    line-height: 1.85; margin-top: 14px;
  }

  /* ── 2. GEOGRAPHY ── */
  .geo-section { background: #ffffff; }
  .geo-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(28px, 5vw, 60px);
    align-items: center;
    max-width: 1100px; margin: 0 auto;
  }
  @media (max-width: 720px) { .geo-grid { grid-template-columns: 1fr; } }
  .geo-text-p {
    color: #334155;
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    line-height: 1.8; margin-top: 12px;
  }
  .map-frame {
    height: clamp(280px, 40vw, 440px);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
    border: 1px solid #e2e8f0;
  }
  .map-frame iframe { width: 100%; height: 100%; border: 0; display: block; }

  /* ── 3. POPULATION ── */
  .pop-section { background: #001401; }
  .pop-inner { max-width: 1000px; margin: 0 auto; text-align: center; }
  .pop-p {
    color: rgba(255,255,255,0.72);
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    max-width: 720px; margin: 12px auto 48px;
    line-height: 1.8;
  }
  .stats-row {
    display: flex; justify-content: center;
    gap: clamp(14px, 3vw, 24px); flex-wrap: wrap;
  }

  /* ── 4. AREA ── */
  .area-section { background: #f4f7f4; }
  .area-inner { max-width: 1000px; margin: 0 auto; text-align: center; }
  .area-p {
    color: #475569;
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    max-width: 720px; margin: 12px auto 48px;
    line-height: 1.8;
  }

  /* ── Stat Card ── */
  .stat-card {
    padding: clamp(22px, 3vw, 32px) clamp(18px, 3vw, 28px);
    border-radius: 14px;
    flex: 1 1 140px; max-width: 220px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .stat-card:hover { transform: translateY(-4px); }
  .stat-card.dark {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .stat-card.light {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }
  .stat-value {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.7rem, 4.5vw, 2.6rem);
    font-weight: 700; display: block; margin-bottom: 8px;
  }
  .stat-value.dark  { color: #FFD000; }
  .stat-value.light { color: #001f01; }
  .stat-label {
    font-size: clamp(0.72rem, 1.5vw, 0.82rem);
    text-transform: uppercase; letter-spacing: 0.09em;
    font-weight: 700; display: block;
  }
  .stat-label.dark  { color: rgba(255,255,255,0.5); }
  .stat-label.light { color: #64748b; }

  /* ── Footer ── */
  .site-footer {
    background: #001001;
    padding: clamp(40px, 6vw, 70px) clamp(20px, 8%, 10%) clamp(24px, 4vw, 36px);
  }
  .footer-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 5vw, 60px);
    max-width: 1100px; margin: 0 auto 32px;
  }
  @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
  .footer-brand {
    color: #FFD000; font-size: clamp(1.1rem, 3vw, 1.45rem);
    font-weight: 700; margin-bottom: 12px;
    text-transform: uppercase; letter-spacing: 0.04em;
  }
  .footer-p { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.65; }
  .footer-contact-h {
    color: #FFD000; font-size: 0.88rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 16px;
  }
  .footer-contact-row {
    display: flex; align-items: flex-start; gap: 10px;
    margin-bottom: 10px; font-size: 0.85rem;
    color: rgba(255,255,255,0.6); line-height: 1.5;
  }
  .footer-contact-row svg { width: 15px; height: 15px; flex-shrink: 0; margin-top: 2px; color: #FFD000; }
  .footer-divider {
    border: none; border-top: 1px solid rgba(255,255,255,0.08);
    max-width: 1100px; margin: 0 auto 20px;
  }
  .footer-copy {
    text-align: center; font-size: 0.78rem;
    color: rgba(255,255,255,0.3); max-width: 1100px; margin: 0 auto;
  }
`;

// ─── Component ────────────────────────────────────────────────────────────────
const About = () => {
  const [introRef, introVisible]  = useFadeIn(0);
  const [geoRef,   geoVisible]    = useFadeIn(0);
  const [popRef,   popVisible]    = useFadeIn(0);
  const [areaRef,  areaVisible]   = useFadeIn(0);

  return (
    <main className="about-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <style>{globalCSS}</style>

      {/* ── 1. INTRODUCTION ──────────────────────────────────────────────── */}
      <section className="about-section intro-section" ref={introRef}>
        <div className="intro-inner">
          <div style={fadeStyle(introVisible, 'up', 0)}>
            <div className="intro-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Liliw, Laguna
            </div>
          </div>

          <div style={fadeStyle(introVisible, 'up', 120)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>About the Barangay</div>
            <h2 className="section-h2 light-text">Introduction</h2>
          </div>

          <div style={fadeStyle(introVisible, 'up', 240)}>
            <p className="intro-p">
              Welcome to Liliw, Laguna. Barangay San Isidro stands as a
              beacon of heritage and progress. As a key player in the Tsinelas Capital,
              our community is built on a foundation of unity, transparency, and a
              drive toward digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. GEOGRAPHY ─────────────────────────────────────────────────── */}
      <section className="about-section geo-section" ref={geoRef}>
        <div className="geo-grid">

          {/* Text side */}
          <div style={fadeStyle(geoVisible, 'left', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Land Coverage</div>
            <h2 className="section-h2 dark-text">Geography</h2>
            <p className="geo-text-p">
              Barangay San Isidro is situated in the scenic municipality of Liliw, Laguna.
              Known for its cool climate and proximity to Mt. Banahaw, our geography provides
              a lush, green environment that supports both our traditional tsinelas industry
              and local agriculture.
            </p>

            {/* Small geo highlights */}
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
  { icon: '/images/mountain.png', label: 'Near Mt. Banahaw', sub: 'Cool highland climate' },
  { icon: '/images/slippers.png', label: 'Tsinelas Capital', sub: 'Famous footwear tradition' },
  { icon: '/images/earth.png', label: 'Agricultural Zone', sub: 'Lush farming lands' },
].map((item, i) => (
  <div
    key={i}
    style={{
      display: 'flex', alignItems: 'center', gap: '14px',
      background: '#f4f7f4', border: '1px solid #e2e8f0',
      borderRadius: '10px', padding: '12px 16px',
      transition: 'transform 0.2s, border-color 0.2s',
      ...fadeStyle(geoVisible, 'left', 80 + i * 80),
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
  >
    {/* Conditional check: Render an img tag if it's a path, else render the emoji */}
    {item.icon.startsWith('/') ? (
      <img 
        src={item.icon} 
        alt={item.label} 
        style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
      />
    ) : (
      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
    )}
    
    <div>
      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#001f01' }}>{item.label}</div>
      <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{item.sub}</div>
    </div>
  </div>
))}
            </div>
          </div>

          {/* Map side */}
          <div className="map-frame" style={fadeStyle(geoVisible, 'right', 120)}>
            <iframe
              title="Barangay San Isidro Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15469.761427503468!2d121.42875185!3d14.1249767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ba0f488663d%3A0x6b865586616e0331!2sSan%20Isidro%2C%20Liliw%2C%20Laguna!5e0!3m2!1sen!2sph!4v1715690000000!5m2!1sen!2sph"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── 3. POPULATION ────────────────────────────────────────────────── */}
      <section className="about-section pop-section" ref={popRef}>
        <div className="pop-inner">
          <div style={fadeStyle(popVisible, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>Demographics</div>
            <h2 className="section-h2 light-text">Population</h2>
          </div>

          <div style={fadeStyle(popVisible, 'up', 120)}>
            <p className="pop-p">
              San Isidro is home to a vibrant community. Our population
              is composed of dedicated professionals, local farmers, and
              youth sector. The community continues to grow through agriculture and crop production,
              with residents actively contributing to local development and preserving traditions.
            </p>
          </div>

          <div className="stats-row">
            {[
              { value: '531+', label: 'Total Residents' },
              { value: '120+', label: 'Households' },
              { value: '45%',  label: 'Youth Population' },
            ].map((s, i) => (
              <div
                key={i}
                className="stat-card dark"
                style={fadeStyle(popVisible, 'up', 200 + i * 100)}
              >
                <span className="stat-value dark">{s.value}</span>
                <span className="stat-label dark">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. AREA ──────────────────────────────────────────────────────── */}
      <section className="about-section area-section" ref={areaRef}>
        <div className="area-inner">
          <div style={fadeStyle(areaVisible, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Land Coverage</div>
            <h2 className="section-h2 dark-text">Area</h2>
          </div>

          <div style={fadeStyle(areaVisible, 'up', 120)}>
            <p className="area-p">
              The geographical area encompasses distinct agricultural lands and residential zones
              that form the cornerstone of local development plans and community layout maps.
            </p>
          </div>

          <div className="stats-row">
            {[
              { value: '75.37 ha', label: 'Total Area' },
              { value: '92.17%',   label: 'Agricultural Area' },
              { value: '5.89 ha',  label: 'Residential' },
            ].map((s, i) => (
              <div
                key={i}
                className="stat-card light"
                style={fadeStyle(areaVisible, 'up', 200 + i * 100)}
              >
                <span className="stat-value light">{s.value}</span>
                <span className="stat-label light">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
};

// ─── Stat Card (kept as reusable sub-component) ───────────────────────────────
const StatCard = ({ value, label, isDarkSection }) => (
  <div className={`stat-card ${isDarkSection ? 'dark' : 'light'}`}>
    <span className={`stat-value ${isDarkSection ? 'dark' : 'light'}`}>{value}</span>
    <span className={`stat-label ${isDarkSection ? 'dark' : 'light'}`}>{label}</span>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer className="site-footer">
    <div className="footer-grid">
      <div>
        <div className="footer-brand">Barangay San Isidro</div>
        <p className="footer-p">
          Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna.
        </p>
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

export default About;
