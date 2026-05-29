import React, { useState, useEffect, useRef } from 'react';
import heroBg from '../assets/home/san-isidro.jpg';
import agriPhoto from '../assets/activities/project/agrivillage.jpg';
import AnimatedHeader from "../components/AnimatedHeader";

// ─── Scroll Animation Hook ───────────────────────────────────────────────────
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

// ─── CSS ─────────────────────────────────────────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .home-container { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  /* ── Hero ── */
  .hero-section {
    position: relative;
    min-height: 88vh;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(105deg, rgba(0,20,1,0.88) 45%, rgba(0,30,2,0.55) 100%);
  }
  .hero-inner {
    position: relative; z-index: 1;
    padding: clamp(40px, 8vw, 80px) clamp(20px, 8%, 10%);
    width: 100%;
  }
  .hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,208,0,0.12); border: 1px solid rgba(255,208,0,0.35);
    color: #FFD000; font-size: clamp(11px, 1.5vw, 13px); font-weight: 600;
    padding: 5px 14px; border-radius: 100px;
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 20px;
  }
  .hero-badge svg { width: 12px; height: 12px; }
  .hero-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 6vw, 4rem);
    color: #fff; line-height: 1.12; font-weight: 700;
    margin-bottom: 20px; max-width: 700px;
  }
  .hero-h1 span { color: #FFD000; }
  .hero-p {
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    color: rgba(255,255,255,0.8); line-height: 1.75;
    max-width: 580px; margin-bottom: 36px;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-gold {
    background: #FFD000; color: #002800;
    border: none; padding: 13px 28px;
    font-size: clamp(0.75rem, 1.5vw, 0.82rem);
    font-weight: 700; border-radius: 8px;
    cursor: pointer; text-transform: uppercase;
    letter-spacing: 0.07em;
    transition: background 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-gold:hover { background: #ffe033; transform: translateY(-2px); }
  .btn-ghost {
    background: transparent; color: #fff;
    border: 1.5px solid rgba(255,255,255,0.45);
    padding: 13px 28px;
    font-size: clamp(0.75rem, 1.5vw, 0.82rem);
    font-weight: 600; border-radius: 8px;
    cursor: pointer; text-transform: uppercase;
    letter-spacing: 0.07em;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); transform: translateY(-2px); }

  /* Stats strip */
  .hero-stats {
    display: flex; gap: 16px; flex-wrap: wrap; margin-top: 56px;
  }
  .stat-chip {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px; padding: 10px 18px;
  }
  .stat-chip .num { color: #FFD000; font-size: clamp(1rem, 2.5vw, 1.4rem); font-weight: 700; display: block; }
  .stat-chip .lbl { color: rgba(255,255,255,0.55); font-size: 11px; display: block; margin-top: 2px; }

  /* ── Section base ── */
  .section { padding: clamp(60px, 8vw, 110px) clamp(20px, 8%, 10%); }
  .section-tag {
    display: flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700; color: #2d7a32;
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .section-tag::before { content: ''; width: 22px; height: 2.5px; background: #FFD000; border-radius: 2px; }
  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    color: #002800; font-weight: 700;
    margin-bottom: 8px; line-height: 1.2;
  }
  .section-h2.light { color: #fff; }
  .section-sub {
    font-size: clamp(0.85rem, 1.8vw, 0.98rem);
    color: #64748b; margin-bottom: 36px; line-height: 1.6;
  }
  .section-sub.light { color: rgba(255,255,255,0.55); }

  /* ── Know More ── */
  .know-more-section {
    background: #001f01;
    padding: clamp(60px, 8vw, 110px) clamp(20px, 8%, 10%);
  }
  .know-more-inner { max-width: 900px; margin: 0 auto; text-align: center; }
  .know-more-inner .section-tag { justify-content: center; }
  .know-more-p {
    color: #cbd5e1; font-size: clamp(0.92rem, 2vw, 1.05rem);
    line-height: 1.85; margin-bottom: 22px;
  }
  .know-more-p strong { color: #fff; }

  /* ── Calendar ── */
  .calendar-section { background: #f4f7f4; }
  .calendar-grid { display: flex; flex-direction: column; gap: 14px; max-width: 860px; margin: 0 auto; }
  .event-card {
    display: flex; flex-wrap: wrap; align-items: flex-start;
    background: #fff; border-left: 5px solid #064e3b;
    border-radius: 10px; padding: 16px 18px; gap: 14px;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  .event-card:hover { transform: translateX(5px); box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
  .event-date-badge {
    background: #064e3b; color: #fdd835;
    padding: 8px 12px; border-radius: 7px;
    font-weight: 700; font-size: 0.75rem;
    min-width: 120px; max-width: 165px;
    line-height: 1.55; flex-shrink: 0; text-align: center;
  }
  .event-info { flex: 1 1 180px; min-width: 0; }
  .event-title { font-size: clamp(0.95rem, 2vw, 1.05rem); font-weight: 700; color: #064e3b; margin-bottom: 4px; }
  .event-desc { font-size: clamp(0.82rem, 1.6vw, 0.88rem); color: #666; line-height: 1.5; }

  /* ── Quick Links ── */
  .quick-links-section { background: #001401; }
  .ql-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px; margin-top: 8px;
  }
  .ql-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 14px; padding: 28px 22px;
    text-align: center;
    transition: background 0.2s, border-color 0.2s, transform 0.2s;
    cursor: pointer;
  }
  .ql-card:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,208,0,0.45);
    transform: translateY(-4px);
  }
  .ql-icon { width: 48px; height: 48px; object-fit: contain; margin-bottom: 16px; }
  .ql-title { color: #fdd835; font-size: clamp(1rem, 2vw, 1.15rem); font-weight: 700; margin-bottom: 10px; }
  .ql-desc { color: rgba(255,255,255,0.6); font-size: clamp(0.8rem, 1.6vw, 0.85rem); line-height: 1.6; margin-bottom: 20px; }
  .ql-btn {
    background: #FFD000; color: #002800;
    border: none; padding: 10px 0;
    border-radius: 7px; font-weight: 700;
    cursor: pointer; width: 100%;
    text-transform: uppercase; font-size: 0.78rem;
    letter-spacing: 0.06em;
    transition: background 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .ql-btn:hover { background: #ffe033; }

  /* ── Community Values ── */
  .values-section { background: #fff; }
  .values-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 5vw, 60px);
    align-items: start;
    margin-top: 10px;
  }
  @media (max-width: 720px) { .values-grid { grid-template-columns: 1fr; } }
  .values-body-p {
    font-size: clamp(0.9rem, 1.8vw, 1rem);
    color: #334155; line-height: 1.8; margin-bottom: 18px;
  }
  .vision-box {
    background: #001f01; border-left: 5px solid #FFD000;
    padding: 20px 22px; border-radius: 0 10px 10px 0;
    margin-top: 6px;
  }
  .vision-box strong { color: #FFD000; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 8px; }
  .vision-box p { color: rgba(255,255,255,0.82); font-size: clamp(0.88rem, 1.8vw, 0.97rem); line-height: 1.7; }
  .pillars { display: flex; flex-direction: column; gap: 12px; }
  .pillar-card {
    display: flex; align-items: flex-start; gap: 14px;
    background: #f8faf8; border: 1px solid #e4ede4;
    border-radius: 10px; padding: 16px;
    transition: transform 0.2s, border-color 0.2s;
  }
  .pillar-card:hover { transform: translateX(4px); border-color: #064e3b; }
  .pillar-dot { width: 9px; height: 9px; background: #FFD000; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
  .pillar-title { font-size: 0.92rem; font-weight: 700; color: #064e3b; margin-bottom: 3px; }
  .pillar-desc { font-size: 0.82rem; color: #64748b; line-height: 1.55; }

  /* ── News ── */
  .news-section { background: #f4f7f4; }
  .news-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0; border-radius: 16px; overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06);
    transition: transform 0.2s, box-shadow 0.2s;
    max-width: 1100px; margin: 0 auto;
  }
  .news-card:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(0,0,0,0.1); }
  @media (max-width: 700px) { .news-card { grid-template-columns: 1fr; } }
  .news-img { min-height: 280px; overflow: hidden; }
  .news-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .news-body {
    background: #fff;
    padding: clamp(24px, 4vw, 44px);
    display: flex; flex-direction: column; justify-content: center;
  }
  .news-tag {
    display: inline-block;
    background: #001f01; color: #FFD000;
    font-size: 0.72rem; font-weight: 700;
    padding: 5px 14px; border-radius: 100px;
    text-transform: uppercase; letter-spacing: 0.07em;
    margin-bottom: 16px; width: fit-content;
  }
  .news-h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.1rem, 2.5vw, 1.55rem);
    color: #001f01; font-weight: 700;
    line-height: 1.3; margin-bottom: 14px;
  }
  .news-p {
    font-size: clamp(0.85rem, 1.7vw, 0.97rem);
    color: #475569; line-height: 1.7; margin-bottom: 24px;
  }
  .news-cta {
    display: inline-flex; align-items: center; gap: 8px;
    background: #001f01; color: #FFD000;
    padding: 12px 26px; border-radius: 9px;
    font-weight: 700; font-size: 0.82rem;
    text-decoration: none; align-self: flex-start;
    text-transform: uppercase; letter-spacing: 0.06em;
    border: none; cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .news-cta:hover { background: #0c4b00; transform: translateY(-2px); }

  /* ── Modal ── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.82);
    display: flex; align-items: center; justify-content: center;
    padding: 20px; z-index: 11000;
    backdrop-filter: blur(3px);
  }
  .modal-box {
    background: #001f01;
    border: 1px solid rgba(253,216,53,0.5);
    border-radius: 18px;
    width: 100%; max-width: 460px;
    max-height: 85vh;
    display: flex; flex-direction: column;
    position: relative;
    color: #fff;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
    overflow: hidden;
  }
  .modal-header {
    padding: 22px 24px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
  }
  .modal-title {
    color: #fdd835; font-size: clamp(1.1rem, 3vw, 1.4rem);
    font-weight: 700; text-align: center; text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .modal-close {
    position: absolute; top: 14px; right: 18px;
    background: none; border: none; color: rgba(255,255,255,0.6);
    font-size: 1.6rem; cursor: pointer; line-height: 1;
    transition: color 0.2s;
  }
  .modal-close:hover { color: #fff; }
  .modal-body { overflow-y: auto; padding: 8px 24px 20px; flex: 1; }
  .hotline-item {
    display: flex; justify-content: space-between; align-items: center;
    padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08);
    gap: 12px; flex-wrap: wrap;
  }
  .hotline-item:last-of-type { border-bottom: none; }
  .hotline-label { font-weight: 700; font-size: 0.92rem; display: block; margin-bottom: 3px; }
  .hotline-num { color: rgba(255,255,255,0.8); font-size: 0.88rem; }
  .hotline-link { color: #fdd835; font-size: 0.88rem; text-decoration: underline; white-space: nowrap; }
  .modal-note {
    font-size: 0.78rem; color: rgba(255,255,255,0.45);
    font-style: italic; text-align: center; padding: 14px 24px 4px;
    border-top: 1px solid rgba(255,255,255,0.08);
    flex-shrink: 0;
  }

  /* ── Footer ── */
  .site-footer {
    background: #001001;
    padding: clamp(40px, 6vw, 70px) clamp(20px, 8%, 10%) clamp(24px, 4vw, 36px);
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(24px, 5vw, 60px);
    max-width: 1100px; margin: 0 auto 32px;
  }
  @media (max-width: 560px) { .footer-grid { grid-template-columns: 1fr; } }
  .footer-brand { color: #FFD000; font-size: clamp(1.1rem, 3vw, 1.45rem); font-weight: 700; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
  .footer-p { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.65; }
  .footer-contact-h { color: #FFD000; font-size: 0.88rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 16px; }
  .footer-contact-row { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 0.85rem; color: rgba(255,255,255,0.6); line-height: 1.5; }
  .footer-contact-row svg { width: 15px; height: 15px; flex-shrink: 0; margin-top: 2px; color: #FFD000; }
  .footer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); max-width: 1100px; margin: 0 auto 20px; }
  .footer-copy { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.3); max-width: 1100px; margin: 0 auto; }
`;

// ─── Component ───────────────────────────────────────────────────────────────
const Home = () => {
  const [showHotlines, setShowHotlines] = useState(false);
  const [showHealth, setShowHealth] = useState(false);

  const [heroRef, heroVisible] = useFadeIn(100);
  const [knowRef, knowVisible] = useFadeIn(0);
  const [calRef, calVisible] = useFadeIn(0);
  const [qlRef, qlVisible] = useFadeIn(0);
  const [valRef, valVisible] = useFadeIn(0);
  const [newsRef, newsVisible] = useFadeIn(0);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = (showHotlines || showHealth) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showHotlines, showHealth]);

  return (
    <main className="home-container">
      <style>{globalCSS}</style>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-inner" ref={heroRef}>
          <div style={fadeStyle(heroVisible, 'up', 0)}>
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Liliw, Laguna
            </div>
          </div>

          <div style={fadeStyle(heroVisible, 'up', 120)}>
            <h1 className="hero-h1">
              Welcome to <br />
              <span>Barangay San Isidro</span>
            </h1>
          </div>

          <div style={fadeStyle(heroVisible, 'up', 220)}>
            <p className="hero-p">
              Enriching the lives of our residents through good governance, genuine
              service, and a unified commitment to a progressive, innovative, and
              culturally proud San Isidro.
            </p>
          </div>

          <div style={fadeStyle(heroVisible, 'up', 320)}>
            <div className="hero-btns">
              <button
                className="btn-gold"
                onClick={() => document.getElementById('know-more').scrollIntoView({ behavior: 'smooth' })}
              >
                Know More
              </button>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById('calendar').scrollIntoView({ behavior: 'smooth' })}
              >
                Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. KNOW MORE ────────────────────────────────────────────────── */}
      <section id="know-more" className="know-more-section" ref={knowRef}>
        <div className="know-more-inner">
          <AnimatedHeader />
          <div style={fadeStyle(knowVisible, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>About Us</div>
            <h2 className="section-h2 light" style={{ textAlign: 'center', marginBottom: '36px' }}>
              Know More
            </h2>
          </div>

          <div style={fadeStyle(knowVisible, 'up', 120)}>
            <p className="know-more-p">
              Inspired by our patron saint, <strong>San Isidro Labrador</strong>, our barangay is built on
              collective action (<em>Bayanihan</em>) and honest labor. Just as San Isidro found holiness in
              cultivating the land, our community finds its true strength in dedication and shared growth.
              This industrious spirit perfectly mirrors our town's broader identity as the{' '}
              <strong>"Tsinelas Capital of the Philippines."</strong> The same meticulous hands that
              craft Liliw's famous footwear are the hands that build up our neighborhood—shaping a resilient
              community culture defined by perseverance, economic self-reliance, and deep artistic pride.
            </p>
            <p className="know-more-p">
              For us, this unified foundation means that genuine public service and transparent governance
              are the keys to cultivating a thriving, forward-thinking environment. From grassroots
              community feeding initiatives during challenging times to vibrant sports tournaments and
              grand cultural festivals, our unity is our primary harvest. Guided by the faithful example
              of San Isidro and the proud craftsmanship traditions of Liliw, we remain fiercely dedicated
              to fostering an inclusive barangay where our youth are actively empowered to lead, our
              families are safeguarded, and every resident's voice is structurally valued.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. CALENDAR OF ACTIVITIES ───────────────────────────────────── */}
      <section id="calendar" className="section calendar-section" ref={calRef}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', ...fadeStyle(calVisible, 'up', 0) }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Schedule</div>
            <h2 className="section-h2">Calendar of Activities</h2>
          </div>

          <div className="calendar-grid">
            {[
              { date: 'April 29 – May 03, 2026',          title: '22nd Tsinelas Festival',                   desc: 'Join us as we celebrate the 22nd Liliw Tsinelas Festival with local art exhibits.' },
              { date: 'May 14, 2026 | 7:00 PM',           title: 'Sayawan sa San Isidro 2026',               desc: 'Quarterly meeting to discuss local projects and budget transparency.' },
              { date: 'May 15, 2026 | 4:00 PM',           title: 'Sagala 2026',                              desc: 'A workshop for young developers to sharpen their technical skills.' },
              { date: 'May 16, 2026 | 2:00 PM',           title: 'Sangguniang Kabataan Assembly',            desc: 'Quarterly meeting to discuss local projects and budget transparency.' },
              { date: 'Sept 28 – Oct 05, 2026',           title: 'Filing of Certificates of Candidacy',     desc: 'Aspiring SK and SB Officials Filing of Candidacy for BSKE 2026.' },
              { date: 'October 22 – 31, 2026',            title: 'BSKE 2026 Campaign Period',                desc: '2-Weeks Campaign Period for BSKE 2026.' },
              { date: 'November 02, 2026',                 title: 'BSKE 2026 Election Day',                  desc: 'Voting Hours 7:00 am – 3:00 pm.' },
              { date: 'December 02, 2026',                 title: 'SOCE Filing',                             desc: 'Last Day to file Statement of Contributions and Expenditures (SOCE).' },
            ].map((ev, i) => (
              <div
                key={i}
                className="event-card"
                style={fadeStyle(calVisible, 'up', i * 60)}
              >
                <div className="event-date-badge">{ev.date}</div>
                <div className="event-info">
                  <div className="event-title">{ev.title}</div>
                  <div className="event-desc">{ev.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. QUICK LINKS GUIDE ────────────────────────────────────────── */}
      <section id="quick-links" className="section quick-links-section" ref={qlRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '12px', ...fadeStyle(qlVisible, 'up', 0) }}>
            <div className="section-tag" style={{ justifyContent: 'center', color: '#90c090' }}>Quick Access</div>
            <h2 className="section-h2 light">Quick Links Guide</h2>
            <p className="section-sub light">Instantly reach the services you need</p>
          </div>

          <div className="ql-grid">
            {[
              {
                icon: '/images/call.png', title: 'Emergency Hotlines',
                desc: 'Immediate access to PNP, BFP, and Local Rescue teams.',
                label: 'View List', action: () => setShowHotlines(true),
              },
              {
                icon: '/images/agreement.png', title: 'Disclosure Board',
                desc: 'View Barangay budgets, projects, and transparency reports.',
                label: 'Open', link: '/disclosure',
              },
              {
                icon: '/images/safety.png', title: 'Health Services',
                desc: 'Information on health centers and emergency ID solutions.',
                label: 'View List', action: () => setShowHealth(true),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="ql-card"
                style={fadeStyle(qlVisible, 'up', i * 100)}
                onClick={card.action || undefined}
              >
                <img src={card.icon} alt={card.title} className="ql-icon" />
                <div className="ql-title">{card.title}</div>
                <div className="ql-desc">{card.desc}</div>
                {card.action ? (
                  <button className="ql-btn" onClick={card.action}>{card.label}</button>
                ) : (
                  <a href={card.link} style={{ textDecoration: 'none' }}>
                    <button className="ql-btn">{card.label}</button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMMUNITY VALUES ─────────────────────────────────────────── */}
      <section className="section values-section" ref={valRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(valVisible, 'up', 0)}>
            <div className="section-tag">Our Foundation</div>
            <h2 className="section-h2">Community Values</h2>
          </div>

          <div className="values-grid">
            <div style={fadeStyle(valVisible, 'left', 100)}>
              <p className="values-body-p">
                Barangay San Isidro is a community built on the pillars of hard work and unity.
                Known as a vital part of Liliw, the <strong>"Tsinelas Capital,"</strong> we take
                pride in our local heritage while embracing the future through digital innovation.
              </p>
              <div className="vision-box">
                <strong>Our Vision</strong>
                <p>
                  To be a model of transparency and active youth participation in Laguna,
                  fostering growth through technology and culture.
                </p>
              </div>
            </div>

            <div className="pillars" style={fadeStyle(valVisible, 'right', 180)}>
              {[
                { title: 'Bayanihan Spirit',       desc: "Collective action and unity rooted in our patron San Isidro Labrador's example." },
                { title: 'Transparent Governance', desc: 'Open budgets, public disclosures, and accountable community leadership.' },
                { title: 'Youth Empowerment',      desc: 'Actively involving SK in local projects, culture, and decision-making.' },
                { title: 'Cultural Pride',         desc: "Preserving Liliw's identity as the Tsinelas Capital of the Philippines." },
              ].map((p, i) => (
                <div className="pillar-card" key={i}>
                  <div className="pillar-dot" />
                  <div>
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. LATEST NEWS & ANNOUNCEMENTS ──────────────────────────────── */}
      <section className="section news-section" ref={newsRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px', ...fadeStyle(newsVisible, 'up', 0) }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Updates</div>
            <h2 className="section-h2">Latest News &amp; Announcements</h2>
            <p className="section-sub">Stay updated with the most recent events and projects in Barangay San Isidro</p>
          </div>

          <div className="news-card" style={fadeStyle(newsVisible, 'up', 120)}>
            <div className="news-img">
              <img
                src={agriPhoto}
                alt="Agri-Village Launch and Distribution Drive"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Barangay+News'; }}
              />
            </div>
            <div className="news-body">
              <span className="news-tag">Latest Project</span>
              <h3 className="news-h3">Successful Agri-Village Launch &amp; Distribution Drive</h3>
              <p className="news-p">
                Barangay San Isidro recently rolled out its sustainable agricultural showcase
                initiative, highlighting local food production and empowering active youth
                involvement. Fresh seedlings, organic resources, and farming equipment provisions
                were distributed to help promote neighborhood food security.
              </p>
              <a href="/activities" className="news-cta">
                Read More Activities
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMERGENCY HOTLINES MODAL ─────────────────────────────────────── */}
      {showHotlines && (
        <div className="modal-overlay" onClick={() => setShowHotlines(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Emergency Hotlines</div>
              <button className="modal-close" onClick={() => setShowHotlines(false)}>×</button>
            </div>
            <div className="modal-body">
              {[
                { label: 'Office of the Municipal Mayor:', num: '563-1001 local 103',         href: 'https://www.facebook.com/MunicipalityofLiliw' },
                { label: 'BFP Liliw:',                     num: '(049) 503-1756 / 0956-769-0379', href: 'https://www.facebook.com/liliw.lagunabfp' },
                { label: 'Liliw Municipal Police Station:', num: '0906-360-4119 / 0998-598-5647', href: 'https://www.facebook.com/liliwmps232' },
                { label: 'Liliw MDRRMO:',                  num: '0945-135-0537 / (049) 5033-621', href: 'https://www.facebook.com/LiliwMdrrmoOfficialPage' },
                { label: 'Philippine Red Cross Laguna Chapter:', num: '(049) 501-1114',        href: 'https://www.facebook.com/philredcrosslagunachapter' },
              ].map((h, i) => (
                <div className="hotline-item" key={i}>
                  <div>
                    <span className="hotline-label">{h.label}</span>
                    <span className="hotline-num">{h.num}</span>
                  </div>
                  <a href={h.href} target="_blank" rel="noreferrer" className="hotline-link">Visit Page</a>
                </div>
              ))}
            </div>
            <div className="modal-note">Please use these numbers for urgent emergencies only.</div>
          </div>
        </div>
      )}

      {/* ── HEALTH SERVICES MODAL ────────────────────────────────────────── */}
      {showHealth && (
        <div className="modal-overlay" onClick={() => setShowHealth(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Health Services</div>
              <button className="modal-close" onClick={() => setShowHealth(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="hotline-item">
                <div>
                  <span className="hotline-label">Liliw Rural Health Unit (RHU):</span>
                  <span className="hotline-num">(049) 563-3655</span>
                </div>
              </div>
              <div className="hotline-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
                <span className="hotline-label">Barangay Health Workers (BHW):</span>
                <span className="hotline-num" style={{ lineHeight: '1.6' }}>
                  For basic medicine distribution and medical assistance, please visit or coordinate
                  with our SB Officials, or proceed directly to our Barangay Hall.
                </span>
              </div>
            </div>
            <div className="modal-note">Please coordinate with our Barangay Health Committee for assistance.</div>
          </div>
        </div>
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Brgy. Hall, San Isidro, Liliw, Laguna
            </div>
            <div className="footer-contact-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
              sangguniangkabataanngsanisidro@gmail.com
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="footer-copy">© 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.</p>
      </footer>
    </main>
  );
};

export default Home;
