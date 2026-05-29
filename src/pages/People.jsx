import React, { useState, useEffect, useRef } from 'react';

// Asset Imports - SK
import gianPhoto     from '../assets/sk/gian.png';
import binsPhoto     from '../assets/sk/bins.jpeg';
import theaPhoto     from '../assets/sk/thea.jpg';
import efferPhoto    from '../assets/sk/effer.jpg';
import paulPhoto     from '../assets/sk/paul.jpg';
import samPhoto      from '../assets/sk/sam.jpg';
import angelPhoto    from '../assets/sk/angel.png';
import nidelinePhoto from '../assets/sk/nideline.jpg';
import maiPhoto      from '../assets/sk/mai.jpg';
import lorieannPhoto from '../assets/sk/lorieann.png';

// Asset Imports - SB
import kapPhoto      from '../assets/sb/kap.png';
import daisyPhoto    from '../assets/sb/daisy.png';
import elviePhoto    from '../assets/sb/elvie.png';
import sergioPhoto   from '../assets/sb/sergio.png';
import garryPhoto    from '../assets/sb/garry.png';
import jrPhoto       from '../assets/sb/jr.png';
import jaimePhoto    from '../assets/sb/jaime.png';
import angelPhoto1   from '../assets/sb/angel.png';
import lendelPhoto   from '../assets/sb/lendel1.png';
import jhommelPhoto  from '../assets/sb/jhommel1.png';

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
  .people-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

  /* ── Section base ── */
  .people-section {
    padding: clamp(64px, 8vw, 110px) clamp(20px, 6%, 8%);
    width: 100%; box-sizing: border-box;
  }

  /* ── Section labels (same as Home/About) ── */
  .section-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;
  }
  .section-tag::before { content: ''; width: 22px; height: 2.5px; background: #FFD000; border-radius: 2px; }
  .section-tag.green { color: #2d7a32; }
  .section-tag.light { color: #90c090; }

  .section-h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3.5vw, 2.5rem);
    font-weight: 700; line-height: 1.2; margin-bottom: 6px;
  }
  .section-h2.dark-text  { color: #001f01; }
  .section-h2.light-text { color: #ffffff; }
  .section-sub {
    font-size: clamp(0.82rem, 1.8vw, 0.96rem);
    margin-bottom: 48px; line-height: 1.6;
  }
  .section-sub.green { color: #64748b; }
  .section-sub.light { color: rgba(255,255,255,0.5); }

  /* ── SB section (light) ── */
  .sb-section { background: #f4f7f4; }

  /* ── SK section (dark) ── */
  .sk-section { background: #001401; }

  /* ── History section ── */
  .history-section { background: #ffffff; }

  /* ── Lead card wrapper ── */
  .lead-wrapper {
    display: flex; justify-content: center; margin-bottom: 44px;
  }

  /* ── Member grid ── */
  .member-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px; width: 100%;
  }
  @media (max-width: 900px)  { .member-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; } }
  @media (max-width: 600px)  { .member-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }

  /* ── Official card ── */
  .official-card {
    border-radius: 18px; text-align: center;
    padding: clamp(14px, 2.5vw, 22px) clamp(10px, 2vw, 18px);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: default; box-sizing: border-box; width: 100%;
  }
  .official-card:hover { transform: translateY(-6px); }
  .official-card.sb-card {
    background: #0c4b00;
    border: 1px solid rgba(255,208,0,0.3);
    box-shadow: 0 4px 18px rgba(0,0,0,0.12);
  }
  .official-card.sb-card:hover { box-shadow: 0 10px 32px rgba(0,0,0,0.2); }
  .official-card.sk-card {
    background: #ffc800;
    border: 1px solid #e6b400;
    box-shadow: 0 4px 18px rgba(0,0,0,0.1);
  }
  .official-card.sk-card:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.18); }

  /* Lead card is wider */
  .official-card.lead {
    max-width: 240px;
    padding: clamp(18px, 3vw, 28px) clamp(14px, 2.5vw, 22px);
  }

  /* Photo circle */
  .photo-circle {
    border-radius: 50%; margin: 0 auto 14px;
    overflow: hidden; background: #fff;
    flex-shrink: 0;
  }
  .photo-circle img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .photo-circle.sb-border { border: 3px solid #FFD000; }
  .photo-circle.sk-border { border: 3px solid #002c02; }

  /* Card text */
  .card-name {
    font-weight: 700; line-height: 1.25;
    margin-bottom: 5px;
  }
  .card-name.sb  { color: #ffffff; }
  .card-name.sk  { color: #001f01; }
  .card-pos {
    font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.5px; margin-bottom: 5px;
  }
  .card-pos.sb  { color: #FFD000; }
  .card-pos.sk  { color: #3d2600; }
  .card-committee { font-style: italic; line-height: 1.3; margin-top: 4px; }
  .card-committee.sb { color: rgba(255,255,255,0.6); }
  .card-committee.sk { color: rgba(0,0,0,0.5); }

  /* ── History tables ── */
  .history-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px; margin-top: 10px;
  }
  .history-col h3 {
    font-family: 'DM Sans', sans-serif;
    color: #001f01; font-size: clamp(0.95rem, 2vw, 1.1rem);
    font-weight: 700; margin-bottom: 14px;
    display: flex; align-items: center; gap: 8px;
  }
  .history-col h3::before { content: ''; width: 16px; height: 2.5px; background: #FFD000; border-radius: 2px; flex-shrink: 0; }
  .history-table-wrap {
    border-radius: 12px; overflow: hidden;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    overflow-x: auto; -webkit-overflow-scrolling: touch;
  }
  .history-table {
    width: 100%; min-width: 300px;
    border-collapse: collapse; background: #fff;
  }
  .history-table thead tr { background: #001f01; }
  .history-table thead th {
    padding: clamp(10px, 2vw, 14px) clamp(12px, 2.5vw, 18px);
    text-align: left; color: #FFD000;
    font-size: clamp(0.75rem, 1.8vw, 0.88rem);
    font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.06em; white-space: nowrap;
    border-bottom: 2px solid #FFD000;
  }
  .history-table tbody tr { border-bottom: 1px solid #f0f0f0; transition: background 0.15s; }
  .history-table tbody tr:hover { background: #f8faf8; }
  .history-table tbody tr:last-child { border-bottom: none; }
  .history-table tbody td {
    padding: clamp(10px, 2vw, 13px) clamp(12px, 2.5vw, 18px);
    font-size: clamp(0.75rem, 1.7vw, 0.88rem); color: #334155;
  }
  .history-table tbody td:first-child { font-weight: 600; color: #001f01; }
  .history-table tbody td:last-child  { color: #64748b; white-space: nowrap; }

  /* ── Footer (same as Home/About) ── */
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
  .footer-divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); max-width: 1100px; margin: 0 auto 20px; }
  .footer-copy { text-align: center; font-size: 0.78rem; color: rgba(255,255,255,0.3); max-width: 1100px; margin: 0 auto; }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const sbMembers = [
  { name: "HON. DAISY S. OGANIA",         position: "Barangay Kagawad",   committee: "Committee Chair on Appropriation",       image: daisyPhoto  },
  { name: "HON. SERGIO A. CAGAS",         position: "Barangay Kagawad",   committee: "Committee Chair on Health",              image: sergioPhoto },
  { name: "HON. ELVIRA M. NOMA",          position: "Barangay Kagawad",   committee: "Committee Chair on Women's and Family",  image: elviePhoto  },
  { name: "HON. GARRY L. LAGRISOLA",      position: "Barangay Kagawad",   committee: "Committee Chair on Agriculture",         image: garryPhoto  },
  { name: "HON. REGIDOR A. PINEDA JR.",   position: "Barangay Kagawad",   committee: "Committee Chair on Education",           image: jrPhoto     },
  { name: "HON. JAIME B. SALAZAR",        position: "Barangay Kagawad",   committee: "Committee Chair on Peace and Order",     image: jaimePhoto  },
  { name: "HON. ANGELITO M. MATIC",       position: "Barangay Kagawad",   committee: "Committee Chair on Infrastructure",      image: angelPhoto1 },
  { name: "HON. LENDEL F. ALMARES",       position: "Barangay Secretary",                                                      image: lendelPhoto },
  { name: "HON. JHOMMEL M. MONTEVIRGEN",  position: "Barangay Treasurer",                                                      image: jhommelPhoto},
];

const skMembers = [
  { name: "HON. VINCE M. VILLANUEVA",         position: "SK Member", committee: "Committee Chair on Social Inclusion and Equity",   image: binsPhoto     },
  { name: "HON. ALTHEA MARIE POONIN",         position: "SK Member", committee: "Committee Chair on Education",                     image: theaPhoto     },
  { name: "HON. JENNIFER B. PLATERO",         position: "SK Member", committee: "Committee Chair on Women Empowerment",             image: efferPhoto    },
  { name: "HON. PAUL ANGELO B. GRINDULO",     position: "SK Member", committee: "Committee Chair on Social Protection and Security",image: paulPhoto     },
  { name: "HON. SAMANTHA CLAIRE M. VASALLO",  position: "SK Member", committee: "Committee Chair on Health",                       image: samPhoto      },
  { name: "HON. ANGEL DIANNE M. TIQUIS",      position: "SK Member", committee: "Committee Chair on Environment",                  image: angelPhoto    },
  { name: "HON. NIDELINE MEI N. LABRIAGA",    position: "SK Member", committee: "Committee Chair on Agriculture",                  image: nidelinePhoto },
  { name: "HON. LORIE ANN A. SANTOS",         position: "SK Secretary",                                                            image: lorieannPhoto },
  { name: "HON. MAI MAI A. FRESCO",           position: "SK Treasurer",                                                            image: maiPhoto      },
];

const pastSB = [
  { name: "HON. FELINO C. MERCADO",    years: "2018 - PRESENT" },
  { name: "HON. VALENTINO MONTESINES", years: "2013 - 2018"    },
  { name: "HON. FELINO C. MERCADO",    years: "2002 - 2013"    },
  { name: "HON. ANDRES SUMAYA",        years: "1994 - 2002"    },
  { name: "HON. ROMEO P. TORRES",      years: "1991 - 1994"    },
  { name: "HON. JOSE MONTESINES"                               },
  { name: "HON. MARIQUITA S. MOJADO"                           },
  { name: "HON. MAXIMO G. OGANIA"                              },
];

const pastSK = [
  { name: "HON. GIAN LORBEN M. LAGRISOLA", years: "2023 - PRESENT" },
  { name: "HON. MEZZA LUNA BRUL",          years: "2018 - 2023"    },
  { name: "HON. JOHN KENNETH NOMA",        years: "2013 - 2018"    },
  { name: "HON. MA. RICA S. GRINDULO",     years: "2008 - 2013"    },
  { name: "HON. MARIELEN MERCADO",         years: "2002 - 2008"    },
  { name: "HON. VIVIAN M. LAGRISOLA",      years: "1996 - 2002"    },
  { name: "HON. ROWENA NOMA CRUZ",         years: "1993 - 1996"    },
  { name: "HON. OLIVER SUMAYA",            years: "1988 - 1993"    },
  { name: "HON. LITO LUMANGAYA",           years: "1988 - 1993"    },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const People = () => {
  const [sbRef,      sbVisible]      = useFadeIn(0);
  const [skRef,      skVisible]      = useFadeIn(0);
  const [historyRef, historyVisible] = useFadeIn(0);

  return (
    <main className="people-page" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <style>{globalCSS}</style>

      {/* ── 1. SANGGUNIANG BARANGAY ────────────────────────────────────── */}
      <section className="people-section sb-section" ref={sbRef}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

          <div style={fadeStyle(sbVisible, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>
              2023 – 2026
            </div>
            <h2 className="section-h2 dark-text">
              Sangguniang Barangay <br />ng San Isidro, Liliw
            </h2>
            <p className="section-sub green">
              The legislative body responsible for barangay governance and local ordinances.
            </p>
          </div>

          {/* Punong Barangay — centered lead */}
          <div className="lead-wrapper" style={fadeStyle(sbVisible, 'up', 120)}>
            <OfficialCard
              name="HON. FELINO MERCADO"
              position="Punong Barangay"
              image={kapPhoto}
              variant="sb"
              isLead
            />
          </div>

          {/* Members grid */}
          <div className="member-grid">
            {sbMembers.map((m, i) => (
              <div key={i} style={fadeStyle(sbVisible, 'up', 180 + i * 50)}>
                <OfficialCard {...m} variant="sb" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SANGGUNIANG KABATAAN ────────────────────────────────────── */}
      <section className="people-section sk-section" ref={skRef}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

          <div style={fadeStyle(skVisible, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>
              2023 – 2026
            </div>
            <h2 className="section-h2 light-text">
              Sangguniang Kabataan <br />ng San Isidro, Liliw
            </h2>
            <p className="section-sub light">
              The youth council championing the voice and welfare of Barangay San Isidro's youth.
            </p>
          </div>

          {/* SK Chairperson — centered lead */}
          <div className="lead-wrapper" style={fadeStyle(skVisible, 'up', 120)}>
            <OfficialCard
              name="HON. GIAN LORBEN MITRA LAGRISOLA"
              position="SK Chairperson"
              committee="Committee Chair on Sports and Youth Development"
              image={gianPhoto}
              variant="sk"
              isLead
            />
          </div>

          {/* Members grid */}
          <div className="member-grid">
            {skMembers.map((m, i) => (
              <div key={i} style={fadeStyle(skVisible, 'up', 180 + i * 50)}>
                <OfficialCard {...m} variant="sk" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. HISTORY OF LEADERSHIP ───────────────────────────────────── */}
      <section className="people-section history-section" ref={historyRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', ...fadeStyle(historyVisible, 'up', 0) }}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>
              Legacy
            </div>
            <h2 className="section-h2 dark-text">History of Leadership</h2>
            <p className="section-sub green" style={{ marginBottom: '40px' }}>
              Honoring the officials who have shaped and served Barangay San Isidro through the years.
            </p>
          </div>

          <div className="history-grid">
            <div className="history-col" style={fadeStyle(historyVisible, 'left', 120)}>
              <h3>Past Punong Barangays</h3>
              <div className="history-table-wrap">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Official Name</th>
                      <th>Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastSB.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.years || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="history-col" style={fadeStyle(historyVisible, 'right', 180)}>
              <h3>Past SK Chairpersons</h3>
              <div className="history-table-wrap">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>Official Name</th>
                      <th>Term</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastSK.map((item, i) => (
                      <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.years || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// ─── Official Card ────────────────────────────────────────────────────────────
const OfficialCard = ({ name, position, committee, image, variant = 'sb', isLead = false }) => {
  const isSB = variant === 'sb';

  const photoSize = isLead
    ? 'clamp(100px, 16vw, 150px)'
    : 'clamp(64px, 12vw, 100px)';

  const nameFontSize  = isLead
    ? 'clamp(0.8rem, 1.8vw, 1rem)'
    : 'clamp(0.7rem, 1.4vw, 0.82rem)';

  const posFontSize   = isLead
    ? 'clamp(0.68rem, 1.4vw, 0.78rem)'
    : 'clamp(0.6rem, 1.2vw, 0.7rem)';

  const commFontSize  = isLead ? '0.72rem' : '0.62rem';

  return (
    <div className={`official-card ${isSB ? 'sb-card' : 'sk-card'}${isLead ? ' lead' : ''}`}>
      <div
        className={`photo-circle ${isSB ? 'sb-border' : 'sk-border'}`}
        style={{ width: photoSize, height: photoSize }}
      >
        <img
          src={image}
          alt={name}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=No+Photo'; }}
        />
      </div>

      <h4 className={`card-name ${isSB ? 'sb' : 'sk'}`} style={{ fontSize: nameFontSize }}>
        {name}
      </h4>

      <p className={`card-pos ${isSB ? 'sb' : 'sk'}`} style={{ fontSize: posFontSize }}>
        {position}
      </p>

      {committee && (
        <p className={`card-committee ${isSB ? 'sb' : 'sk'}`} style={{ fontSize: commFontSize }}>
          {committee}
        </p>
      )}
    </div>
  );
};

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

export default People;
