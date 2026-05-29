import React, { useState, useEffect, useRef } from 'react';

// ─── Scroll Animation Hook ────────────────────────────────────────────────────
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

// ─── Global CSS ───────────────────────────────────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .contact-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; background: #fff; }

  /* ── Hero ── */
  .ct-hero {
    background: #001401;
    padding: clamp(64px, 9vw, 120px) clamp(20px, 7%, 10%) clamp(52px, 7vw, 90px);
    text-align: center; position: relative; overflow: hidden;
  }
  .ct-hero::before {
    content: ''; position: absolute; top: -80px; left: -80px;
    width: clamp(220px, 38vw, 460px); height: clamp(220px, 38vw, 460px);
    background: radial-gradient(circle, rgba(255,208,0,0.07) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .ct-hero::after {
    content: ''; position: absolute; bottom: -60px; right: -60px;
    width: clamp(160px, 28vw, 320px); height: clamp(160px, 28vw, 320px);
    background: radial-gradient(circle, rgba(255,208,0,0.05) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .ct-hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,208,0,0.1); border: 1px solid rgba(255,208,0,0.3);
    color: #FFD000; font-size: 11px; font-weight: 600;
    padding: 5px 14px; border-radius: 100px;
    letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 22px;
  }
  .ct-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 5vw, 3.2rem);
    color: #fff; font-weight: 700;
    margin-bottom: 18px; line-height: 1.15; position: relative; z-index: 1;
  }
  .ct-hero-title span { color: #FFD000; }
  .ct-hero-sub {
    color: rgba(255,255,255,0.68);
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    line-height: 1.8; max-width: 640px;
    margin: 0 auto; position: relative; z-index: 1;
  }

  /* ── Section base ── */
  .ct-section { padding: clamp(60px, 8vw, 100px) clamp(20px, 7%, 10%); width: 100%; }
  .ct-section.white-bg  { background: #fff; }
  .ct-section.light-bg  { background: #f4f7f4; }
  .ct-section.dark-bg   { background: #001401; }

  /* ── Shared section heading ── */
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
  .section-sub { font-size: clamp(0.82rem, 1.8vw, 0.96rem); line-height: 1.6; margin-bottom: 40px; text-align: center }
  .section-sub.green { color: #64748b; }
  .section-sub.light { color: rgba(255,255,255,0.5); }

  /* ── Emergency hotline cards ── */
  .hotline-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    gap: clamp(12px, 2vw, 18px);
    max-width: 1100px; margin: 0 auto;
  }
  .hotline-card {
    padding: clamp(18px, 3vw, 26px);
    border-radius: 14px; background: #fff;
    border: 1px solid #e8eef0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    text-align: center;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .hotline-card:hover { transform: translateY(-4px); border-color: #064e3b; box-shadow: 0 8px 24px rgba(0,0,0,0.09); }
  .hotline-label {
    font-size: clamp(0.78rem, 1.8vw, 0.86rem);
    font-weight: 700; color: #001f01;
    text-transform: uppercase; letter-spacing: 0.04em;
    margin-bottom: 12px; line-height: 1.35;
  }
  .hotline-number {
    font-size: clamp(0.88rem, 2vw, 1rem);
    color: #334155; margin: 3px 0; line-height: 1.5;
    font-weight: 500;
  }
  .hotline-badge {
    display: inline-block; margin-bottom: 10px;
    background: #f0f7f0; border: 1px solid #c8e0c8;
    border-radius: 100px; padding: 3px 10px;
    font-size: 0.68rem; font-weight: 700;
    color: #064e3b; text-transform: uppercase;
    letter-spacing: 0.07em;
  }
  .hotline-note {
    text-align: center; margin-top: clamp(18px, 3vw, 28px);
    font-size: clamp(0.75rem, 1.6vw, 0.82rem);
    color: #94a3b8; font-style: italic;
  }

  /* ── Social section (dark) ── */
  .social-grid {
    display: flex; flex-wrap: wrap; gap: 16px;
    justify-content: center;
  }
  .social-link {
    display: flex; align-items: center; gap: 14px;
    padding: clamp(14px, 2.5vw, 18px) clamp(22px, 4vw, 36px);
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 100px; text-decoration: none;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
  }
  .social-link:hover { background: rgba(255,255,255,0.13); border-color: rgba(255,208,0,0.4); transform: translateY(-3px); }
  .social-platform {
    font-weight: 700; font-size: clamp(0.82rem, 1.8vw, 0.92rem);
    display: flex; align-items: center; gap: 7px;
  }
  .social-platform svg { width: 18px; height: 18px; }
  .social-name { font-size: clamp(0.8rem, 1.8vw, 0.9rem); color: rgb(255, 255, 255); }
  .social-divider { width: 1px; height: 18px; background: rgba(255,255,255,0.2); }

  /* ── Offices section ── */
  .offices-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: clamp(16px, 3vw, 28px);
    max-width: 1000px; margin: 0 auto;
  }
  .office-card {
    padding: clamp(24px, 4vw, 36px);
    border-radius: 16px; background: #fff;
    border: 1px solid #e8eef0;
    box-shadow: 0 4px 18px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .office-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,0.1); border-color: #b6d4b8; }
  .office-card-icon {
    width: 44px; height: 44px; border-radius: 10px;
    background: #f0f7f0; border: 1px solid #d1e8d1;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 16px;
  }
  .office-card-icon svg { width: 22px; height: 22px; color: #064e3b; }
  .office-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1rem, 2.2vw, 1.15rem);
    color: #001f01; font-weight: 700;
    margin-bottom: 12px; line-height: 1.3;
  }
  .office-address {
    color: #475569; font-size: clamp(0.84rem, 1.8vw, 0.92rem);
    line-height: 1.75; margin-bottom: 14px;
  }
  .office-hours {
    display: inline-flex; align-items: center; gap: 6px;
    background: #f0f7f0; border: 1px solid #c8e0c8;
    border-radius: 8px; padding: 7px 12px;
    font-size: clamp(0.76rem, 1.6vw, 0.82rem);
    font-weight: 600; color: #064e3b;
  }
  .office-hours svg { width: 13px; height: 13px; }

  /* ── Map strip ── */
  .map-strip {
    border-radius: 14px; overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    height: clamp(260px, 38vw, 400px);
    max-width: 1000px; margin: 36px auto 0;
  }
  .map-strip iframe { width: 100%; height: 100%; border: 0; display: block; }

  /* ── Footer ── */
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

// ─── Data ─────────────────────────────────────────────────────────────────────
const emergencyNumbers = [
  { label: "Liliw Municipal Police Station",                              numbers: ["0906-360-4119", "0998-598-5647", "5035-904"] },
  { label: "Meralco Philippines",                                         numbers: ["02-16-211", "09175-592-824", "Text Only: 0920-971-6211 / 09175-516-211"] },
  { label: "Liliw Bureau of Fire Protection",                             numbers: ["0956-769-0379", "503-1756"] },
  { label: "Liliw Rural Health Unit",                                     numbers: ["(049) 5633-055"] },
  { label: "Liliw Municipal Disaster Risk Reduction & Management Office", numbers: ["0945-135-0537", "(049) 5033-621", "0953-611-0440 (Lowland)"] },
  { label: "Liliw Mayor's Office",                                        numbers: ["563-1001 local 103"] },
  { label: "Philippine Red Cross Laguna Chapter",                         numbers: ["(049) 501-1114"] },
];

const socialLinks = [
  { platform: "Facebook", name: "SK San Isidro - Liliw",    link: "https://facebook.com/sksanisidroliliw",               color: "#1877F2" },
  { platform: "Facebook", name: "Barangay San Isidro",       link: "https://www.facebook.com/barangay.sanisidro.7140",    color: "#1877F2" },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const Contact = () => {
  const [heroRef,  heroVis]   = useFadeIn(0);
  const [hotRef,   hotVis]    = useFadeIn(0);
  const [socRef,   socVis]    = useFadeIn(0);
  const [offRef,   offVis]    = useFadeIn(0);

  return (
    <main className="contact-page">
      <style>{globalCSS}</style>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="ct-hero" ref={heroRef}>
        <div style={fadeStyle(heroVis, 'up', 0)}>
          <div className="ct-hero-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
            </svg>
            Get in Touch
          </div>
        </div>
        <div style={fadeStyle(heroVis, 'up', 120)}>
          <h1 className="ct-hero-title">
            We're Here <span>to Serve</span>
          </h1>
        </div>
        <div style={fadeStyle(heroVis, 'up', 220)}>
          <p className="ct-hero-sub">
            Reach out for emergencies, inquiries about youth programs, or community concerns.
            Your voice matters in Barangay San Isidro.
          </p>
        </div>
      </section>

      {/* ── 1. EMERGENCY HOTLINES (white) ────────────────────────────── */}
      <section className="ct-section white-bg" ref={hotRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(hotVis, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>Always Ready</div>
            <h2 className="section-h2 dark-text">Emergency Hotlines</h2>
            <p className="section-sub green">For urgent situations — contact these services immediately.</p>
          </div>

          <div className="hotline-grid">
            {emergencyNumbers.map((item, i) => (
              <div
                className="hotline-card"
                key={i}
                style={fadeStyle(hotVis, 'up', 80 + i * 55)}
              >
                <div className="hotline-badge">Emergency</div>
                <div className="hotline-label">{item.label}</div>
                {item.numbers.map((num, j) => (
                  <div className="hotline-number" key={j}>{num}</div>
                ))}
              </div>
            ))}
          </div>

          <p className="hotline-note" style={fadeStyle(hotVis, 'up', 80 + emergencyNumbers.length * 55)}>
            Please use these numbers for urgent emergencies only.
          </p>
        </div>
      </section>

      {/* ── 2. CONNECT WITH US (dark) ─────────────────────────────────── */}
      <section className="ct-section dark-bg" ref={socRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={fadeStyle(socVis, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>Social Media</div>
            <h2 className="section-h2 light-text">Connect with Us</h2>
            <p className="section-sub light">Follow our official pages for news, announcements, and updates.</p>
          </div>

          <div className="social-grid" style={fadeStyle(socVis, 'up', 120)}>
            {socialLinks.map((soc, i) => (
              <a
                key={i}
                href={soc.link}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <span className="social-platform" style={{ color: soc.color }}>
                  {/* Facebook SVG icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                  {soc.platform}
                </span>
                <span className="social-divider" />
                <span className="social-name">{soc.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR OFFICES (light) ────────────────────────────────────── */}
      <section className="ct-section light-bg" ref={offRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(offVis, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>Visit Us</div>
            <h2 className="section-h2 dark-text">Our Offices</h2>
            <p className="section-sub green">Drop by during office hours — we'd love to hear from you in person.</p>
          </div>

          <div className="offices-grid">
            {/* SK and SB Office */}
            <div className="office-card" style={fadeStyle(offVis, 'left', 100)}>
              <div className="office-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="office-title">SK and SB of San Isidro Office</div>
              <div className="office-address">
                📍 2nd Floor, Barangay Hall Building<br />
                San Isidro, Liliw, Laguna<br />
                Philippines, 4004
              </div>
              <div className="office-hours">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Mon – Fri &nbsp;·&nbsp; 8:00 AM – 5:00 PM
              </div>
            </div>

            {/* Sangguniang Barangay */}
            <div className="office-card" style={fadeStyle(offVis, 'right', 160)}>
              <div className="office-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
                </svg>
              </div>
              <div className="office-title">Sangguniang Barangay</div>
              <div className="office-address">
                For Barangay Clearances, Indigency, and other concerns,
                please visit the main Barangay Hall Ground Floor.
              </div>
              <div className="office-hours">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                Look for Brgy. Secretary Lendel F. Almares
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="map-strip" style={fadeStyle(offVis, 'up', 260)}>
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

      <Footer />
    </main>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
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

export default Contact;