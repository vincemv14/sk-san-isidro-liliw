import React, { useState, useRef, useEffect } from 'react';

// ── Event imports ────────────────────────────────────────────────────────────
import sktreasandsecPhoto     from '../assets/activities/events/sktreasandsec.jpg';
import pasko2023Photo         from '../assets/activities/events/paskongkalinga2023.jpg';
import oathtakingPhoto        from '../assets/activities/events/oathtaking.jpg';
import kkassemblyPhoto        from '../assets/activities/events/kkassembly.jpg';
import laronglahi2024Photo    from '../assets/activities/events/laronglahi2024.jpg';
import basketball2023Photo    from '../assets/activities/events/basketballchristmas2023.jpg';
import basketball2024Photo    from '../assets/activities/events/basketballchristmas2024.jpg';
import kkassembly2025Photo    from '../assets/activities/events/kkassembly2025.jpg';
import laronglahi2025Photo    from '../assets/activities/events/laronglahi2025.jpg';
import laronglahi2026Photo    from '../assets/activities/events/laronglahi2026.jpg';
import pasko2024Photo         from '../assets/activities/events/paskuhan2024.jpg';
import sagala2024Photo        from '../assets/activities/events/sagala2024.jpg';
import sagala2025Photo        from '../assets/activities/events/sagala2025.jpg';
import sagala2026Photo        from '../assets/activities/events/sagala2026.jpg';
import sbassemblyPhoto        from '../assets/activities/events/sbassembly2024.jpg';
import volleyball2024Photo    from '../assets/activities/events/volleyball2024.jpg';
import volleyball2025Photo    from '../assets/activities/events/vball2025.jpg';
import mlPhoto                from '../assets/activities/events/mltournament.jpg';
import thevoicePhoto          from '../assets/activities/events/thevoice.jpg';

// ── Project imports ──────────────────────────────────────────────────────────
import kkprofilingPhoto           from '../assets/activities/project/kkprofiling2024.jpg';
import financialindependentPhoto  from '../assets/activities/project/financialindependent.jpg';
import librenggupit2024Photo      from '../assets/activities/project/librenggupit2024.jpg';
import eyecarePhoto               from '../assets/activities/project/eyecare.jpg';
import agriPhoto                  from '../assets/activities/project/agrivillage.jpg';
import arrozcaldoPhoto            from '../assets/activities/project/arrozcaldo.jpg';
import chessPhoto                 from '../assets/activities/project/chess.jpg';
import cleanandgreenPhoto         from '../assets/activities/project/cleanandgreen.jpg';
import gandangnanayPhoto          from '../assets/activities/project/gandangnanay.jpg';
import sloganPhoto                from '../assets/activities/project/slogan.jpg';

// ── Seminar imports ──────────────────────────────────────────────────────────
import meetingPhoto       from '../assets/activities/seminars/meeting.jpg';
import bcpcPhoto          from '../assets/activities/seminars/bcpcelection.jpg';
import mandatoryPhoto     from '../assets/activities/seminars/mandatory1.png';
import leadershipPhoto    from '../assets/activities/seminars/leadership.jpg';
import artofbrandingPhoto from '../assets/activities/seminars/artofbranding.jpg';
import hivandaidsPhoto    from '../assets/activities/seminars/hivandaids.jpg';
import youthcongress      from '../assets/activities/seminars/youthcongress.jpg';

// ── Award imports ────────────────────────────────────────────────────────────
import kuyaivanPhoto        from '../assets/activities/awards/kuyaivan.jpg';
import theaPhoto            from '../assets/activities/awards/theagraduate.jpg';
import maiPhoto             from '../assets/activities/awards/maigrad.jpg';
import dangalPhoto          from '../assets/activities/awards/dangalnigattayaw.jpg';
import bookPhoto            from '../assets/activities/awards/bookkeeping.jpg';
import digitalPhoto         from '../assets/activities/awards/digitalartsvince.jpg';
import fullcompliant1Photo  from '../assets/activities/awards/fullycompliant.jpg';
import fullcompliant2Photo  from '../assets/activities/awards/fullycompliantnovember.jpg';
import sksecandtreasPhoto   from '../assets/activities/awards/sksecandtreas.jpg';
import lptPhoto             from '../assets/activities/awards/lpt.jpg';
import magnaPhoto           from '../assets/activities/awards/magna.jpg';
import gawadPhoto           from '../assets/activities/awards/gawad.jpg';

// ── Upcoming imports ─────────────────────────────────────────────────────────
import schoolsuppliesPhoto from '../assets/activities/upcoming/schoolsupplies.jpg';

// ─── Scroll Animation Hook (same as Home / About / People) ───────────────────
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
      { threshold: 0.06 }
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
    : direction === 'up' ? 'translateY(28px)' : 'translateY(0)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

// ─── Global CSS ───────────────────────────────────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .activities-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; background: #fff; }

  /* ── Sticky hero/nav ── */
  .act-hero {
    background: #001401;
    padding: clamp(32px, 5vw, 56px) clamp(20px, 6%, 8%);
    text-align: center;
    position: sticky; top: 0; z-index: 99;
    box-shadow: 0 4px 20px rgba(0,0,0,0.35);
    width: 100%;
  }
  .act-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 4vw, 2.4rem);
    color: #FFD000; font-weight: 700;
    margin-bottom: clamp(14px, 2.5vw, 22px);
    line-height: 1.2;
  }
  .act-nav {
    display: flex; justify-content: center; align-items: center;
    gap: clamp(6px, 1.5vw, 12px); flex-wrap: wrap;
    max-width: 800px; margin: 0 auto;
  }
  .nav-pill {
    padding: 7px clamp(12px, 2.5vw, 20px);
    border-radius: 100px;
    border: 1.5px solid rgba(255,208,0,0.55);
    background: transparent; color: #FFD000;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600; font-size: clamp(0.72rem, 1.6vw, 0.82rem);
    cursor: pointer; text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  }
  .nav-pill:hover {
    background: #FFD000; color: #001401;
    border-color: #FFD000; transform: translateY(-1px);
  }

  /* ── Section base ── */
  .act-section {
    padding: clamp(56px, 7vw, 100px) clamp(20px, 6%, 8%);
    width: 100%; box-sizing: border-box;
  }
  .act-section.light-bg  { background: #f4f7f4; }
  .act-section.white-bg  { background: #ffffff; }
  .act-section.dark-bg   { background: #001401; }

  /* ── Section heading group ── */
  .act-section-head { margin-bottom: 40px; }
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
    font-weight: 700; line-height: 1.2; margin-bottom: 6px;
  }
  .section-h2.dark-text  { color: #001f01; }
  .section-h2.light-text { color: #ffffff; }

  /* ── Card grid ── */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
    gap: clamp(14px, 2.5vw, 22px);
    width: 100%;
  }
  @media (max-width: 600px) { .card-grid { grid-template-columns: 1fr 1fr; gap: 10px; } }
  @media (max-width: 400px) { .card-grid { grid-template-columns: 1fr; } }

  /* ── Activity card ── */
  .act-card {
    border-radius: 14px; overflow: hidden;
    display: flex; flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    cursor: default;
  }
  .act-card:hover { transform: translateY(-6px); }
  .act-card.card-light {
    background: #fff;
    border: 1px solid #e8eef0;
    box-shadow: 0 4px 18px rgba(0,0,0,0.06);
  }
  .act-card.card-light:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
  .act-card.card-dark {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 4px 18px rgba(0,0,0,0.2);
  }
  .act-card.card-dark:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.3); }

  .card-img-wrap { width: 100%; aspect-ratio: 16/11; overflow: hidden; flex-shrink: 0; }
  .card-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
  .act-card:hover .card-img-wrap img { transform: scale(1.04); }

  .card-body {
    padding: clamp(14px, 2.5vw, 20px);
    display: flex; flex-direction: column; flex: 1;
  }
  .card-date {
    font-size: 0.72rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.07em;
    margin-bottom: 7px; flex-shrink: 0;
  }
  .card-date.light { color: #64748b; }
  .card-date.dark  { color: #FFD000; }

  .card-title {
    font-size: clamp(0.88rem, 1.8vw, 1rem);
    font-weight: 700; line-height: 1.3;
    margin-bottom: 8px;
    display: -webkit-box; -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; overflow: hidden;
    min-height: 2.6em;
  }
  .card-title.light { color: #001f01; }
  .card-title.dark  { color: #ffffff; }

  .card-desc {
    font-size: clamp(0.78rem, 1.6vw, 0.85rem);
    line-height: 1.6; flex: 1; margin-bottom: 16px;
    display: -webkit-box; -webkit-line-clamp: 4;
    -webkit-box-orient: vertical; overflow: hidden;
  }
  .card-desc.light { color: #475569; }
  .card-desc.dark  { color: rgba(255,255,255,0.65); }

  .card-fb-btn {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 10px 14px; border-radius: 8px;
    background: #1877f2; color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700; font-size: 0.78rem;
    text-decoration: none; text-transform: uppercase;
    letter-spacing: 0.05em; margin-top: auto; flex-shrink: 0;
    transition: background 0.2s;
  }
  .card-fb-btn:hover { background: #1560cc; }

  /* ── Load more ── */
  .load-more-wrap { display: flex; justify-content: center; margin-top: clamp(28px, 4vw, 44px); }
  .load-more-btn {
    padding: 12px clamp(24px, 4vw, 36px);
    border-radius: 8px; font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.84rem; cursor: pointer;
    text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.2s, color 0.2s, transform 0.15s;
  }
  .load-more-btn:hover { transform: translateY(-2px); }
  .load-more-btn.on-light {
    background: transparent; color: #001f01;
    border: 2px solid #001f01;
  }
  .load-more-btn.on-light:hover { background: #001f01; color: #fff; }
  .load-more-btn.on-dark {
    background: transparent; color: #FFD000;
    border: 2px solid #FFD000;
  }
  .load-more-btn.on-dark:hover { background: #FFD000; color: #001f01; }

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
  .footer-contact-row svg { width:15px; height:15px; flex-shrink:0; margin-top:2px; color:#FFD000; }
  .footer-divider { border:none; border-top:1px solid rgba(255,255,255,0.08); max-width:1100px; margin:0 auto 20px; }
  .footer-copy { text-align:center; font-size:0.78rem; color:rgba(255,255,255,0.3); max-width:1100px; margin:0 auto; }
`;

// ─── Data ─────────────────────────────────────────────────────────────────────
const eventsData = [
  { title: "LakaSKabataan: Palaro ng Lahi 2026",           date: "May 16, 2026",          desc: "Continuing our indigenous sports featuring traditional games to build youth participation.",                                                                                                                                                                 img: laronglahi2026Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0RcvnzArXw68ijLFoqeNCX5B7HB7iFUMMzp2pn5v7HAoBnZDGVk1jJB5anQgZAhWWl" },
  { title: "Sagala 2026",                                  date: "May 15, 2026",          desc: "Our traditional street pageantry and cultural heritage showcasing community elegance and active youth civic participation.",                                                                                                                                 img: sagala2026Photo,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02ShwZPtSLAvEikuopY23nLAUY8HDiavud3YsgtWQeokLcqXbVt3UsbSYtUDkxdRF4l" },
  { title: "2025 Sports League: Volleyball Edition",       date: "December 15, 2025",     desc: "Our premier end-of-year volleyball tournament matching up various local sectors for dynamic championship athletic displays.",                                                                                                                                img: volleyball2025Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0ZWQXWVxjznoJBot2MVc9ApbsYhoyMEqdwy99uMR9bye9dYaKpQ7hZNwfaf7NKHTCl" },
  { title: "2025 Katipunan ng Kabataan Assembly",          date: "November 16, 2025",     desc: "An essential general evaluation and strategy council evaluating yearly projects and casting community youth legislative roadmaps.",                                                                                                                          img: kkassembly2025Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02SmykWjtHeKpiUTDC12qxVEzZRuZAd3TNrqZwc2ry56KddeDz8jodFLtdSVB7BfPnl" },
  { title: "The Voice 2025: Fiesta 2025",                  date: "May 17, 2025",          desc: "Empowering Youth talents in singing and performing together with San Isidro audience.",                                                                                                                                                                     img: thevoicePhoto,        fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02W1PEqkeeZptxn73TSJrQfYFSynSF39kMvV86Nd4a7y1h4oWzVHRWFSHn3v49gcxul" },
  { title: "Sagala 2025",                                  date: "May 15, 2025",          desc: "Continuing traditional street pageantry and cultural heritage showcasing community elegance and active youth civic participation.",                                                                                                                          img: sagala2025Photo,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0td7DBDfreMiroe9HX2URpwBnzj1uqn8DpUuBBHP9tYDocntv5a8652UVqUc5Bxczl" },
  { title: "LakaSKabataan: Palaro ng Lahi 2025",           date: "May 14, 2025",          desc: "The return of our indigenous sports festival featuring traditional community games to preserve local culture and build active group bonds.",                                                                                                                  img: laronglahi2025Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0o9JhnDkbFNChZMQ5CLnhu3Nynz3EfL2MZCFEgSND2bb1uLCk5uDS8a8PRbxYTBuwl" },
  { title: "Paskuhan sa San Isidro 2024",                  date: "December 21, 2024",     desc: "A vibrant seasonal celebration filled with music, community activities, and bright lights to foster unity and joy during the holidays.",                                                                                                                     img: pasko2024Photo,       fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02sYrfWUaA3L55t7GcQSRPUbjWZpkf64D6N8WV9efWn6xAtdu41w8CpJL6Rj8Gx3Xel" },
  { title: "2024 Basketball League: Christmas Edition",    date: "December 14, 2024",     desc: "The annual festive sports tournament returning to gather basketball enthusiasts for an action-packed holiday cup promoting healthy lifestyles.",                                                                                                              img: basketball2024Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02RUjXCLWfqPCMkxdTzRorQLxghErDZLzGWYqkPfua4CXrHwKsuZ95LaJ55NzmwfYXl" },
  { title: "2024 Sports League: Volleyball Edition",       date: "November 09, 2024",     desc: "A high-energy volleyball conference promoting physical wellness, neighborhood unity, and collaborative team synergy among youth divisions.",                                                                                                                 img: volleyball2024Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0PyFu3DsMeR3bSWAM3aSRmMtWVES3LWwvAiYhS9UrTNTHRDT1apb6XEjBn9d6SjZGl" },
  { title: "Mobile Legends Tournament",                    date: "September 14, 2024",    desc: "An exciting competitive esports platform empowering local gamers to showcase tactical skills, strategic teamwork, and digital sportsmanship.",                                                                                                               img: mlPhoto,              fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid05yRkC87UHhVzbtSfZjiXg2naecoAWLVGH7KFhZjKQoEhNByZdj9cmr3eQ46TwwBul" },
  { title: "Sagala 2024",                                  date: "May 15, 2024",          desc: "A beautiful, traditional community cultural procession celebrating local artistry, devotion, and active participation of youth pageantry figures.",                                                                                                          img: sagala2024Photo,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02m8tQExJgB2QY8Hgh46ihuMshQ9LCLYWUxwbVuuCwh6wUf6d6EwLe1MmcmE8TjRfGl" },
  { title: "1st Katipunan ng Kabataan Assembly",           date: "April 22, 2024",        desc: "The foundational youth general assembly centered on identifying local priorities, collaborative action planning, and youth policy development.",                                                                                                             img: kkassemblyPhoto,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0YPD3Qk2PbhDFvsVxgarKrD4aQ85sNpPWYx4bvsEWdJpQrHLN1YmruE7ErVFaUBTxl" },
  { title: "Sangguniang Barangay Assembly 2024",           date: "March 18, 2024",        desc: "A vital community gathering designed to present local progress reports, discuss current ordinances, and address the immediate concerns of San Isidro residents.",                                                                                            img: sbassemblyPhoto,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02B4czSiG8EiwF2zePv91E6MP9qAsFpEYZgt8xZ7hPuucnPmgvLWoVPGL5fYygD6VDl" },
  { title: "Elected SK Treasurer and Secretary",           date: "February 04, 2024",     desc: "The official appointment and orientation of our dedicated SK Treasurer and Secretary to handle administrative and financial governance duties.",                                                                                                             img: sktreasandsecPhoto,   fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid025VFSXNrMVqD3YHpYnD1UzMpdLS9zeyaAZWxNuNPGGZkfYsSsGJYGYKQ5nJEzLir7l" },
  { title: "LakaSKabataan: Palaro ng Lahi 2024",           date: "January 06, 2024",      desc: "Celebrating cultural heritage and unity through active participation in traditional Filipino games, revitalizing community spirit among the youth.",                                                                                                         img: laronglahi2024Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02HTiXn9DCzsrZF1FFD742FouAC3qU53hcGD6X3CcxTdAsZ4pmWwYUBySJrGGzy2nul" },
  { title: "2023 Basketball League: Christmas Edition",    date: "December 24, 2023",     desc: "A festive holiday sports tournament bringing together local youth teams to foster camaraderie, sportsmanship, and healthy competition during the Christmas break.", img: basketball2023Photo,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0zznRyFSyB1C2sNYfhaBxky8CrAabQiiWtx4XyHo7aF2zhgXkd9GiGRz5zKyEUwSBl" },
  { title: "Paskong Kalinga 2023",                         date: "December 23, 2023",     desc: "A heart-warming holiday gift-giving and outreach program aimed at spreading joy, love, and essential support to families across the community.",                                                                                                            img: pasko2023Photo,       fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0268APusxBHT9Fnmcq4cHqG8LTpQ8HFwrx86ebGnFLfZBoFqQW7jn43jsf33GE2bo5l" },
  { title: "Oath Taking Ceremony of Elected SK Chairman and Barangay Captains", date: "November 20, 2023", desc: "The official swearing-in ceremony marking the formal assumption of duties and leadership commitment of our newly elected SK Chairman for San Isidro.", img: oathtakingPhoto, fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid08aaEZP2TK5HnpoWJaPs7NXZjwHCFDH3GmJ5vDjpWYj3JDpjN82NkDY71R8TagQt8l" },
];

const projectsData = [
  { title: "Gandang Nanay at Sayawan sa San Isidro 2026",               date: "May 14, 2026",       desc: "A lively cultural celebration paying tribute to our local mothers, paired with vibrant traditional dance performances and community fellowship.",                                                  img: gandangnanayPhoto,          fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid07fppfVVJumkbrbfU79Y2x3gvRuaXiSFCfubG45G3Qf43JBG8bP48JXoUvJGuSr8Ql" },
  { title: "Agri Village 2026",                                         date: "May 13, 2026",       desc: "A sustainable agricultural donation drive showcase highlighting local food production and youth involvement.",                                                                                      img: agriPhoto,                  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0p3cn9JGdwGdBKdTecfj7yasafSNK5ouWsy2tGLQ3HJh24W8fU5zrkvc9Djr7CxQbl" },
  { title: "Chess Tournament",                                          date: "December 15, 2025",  desc: "A strategic mind-sports event challenging local enthusiasts to showcase their analytical skills, patience, and tactical prowess over the board.",                                                  img: chessPhoto,                 fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02dWFyAn1DLMuMbLrSfTAXbMACNBuUWmL9ohmpufQv7kayYJ5SgEZL54xQjhQp8z88l" },
  { title: "Linggo ng Kabataan 2025: On-The-Spot Slogan Making Competition", date: "September 01, 2025", desc: "A creative visual arts competition designed to showcase youth advocacy, quick-thinking wit, and powerful messaging through graphic artistry.",                                           img: sloganPhoto,                fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02wHCfQj4bJRQ4DrU6FE3VZJVqG6xMuVyQTEKz9iRD1ptkdQaWDa2J3r8FeSaB4Q3Wl" },
  { title: "Arroz Caldo Project",                                       date: "October 25, 2024",   desc: "A targeted community feeding program bringing warm, nutritious meals to children and residents, due to Typhoon Kristine.",                                                                         img: arrozcaldoPhoto,            fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02wB5wyNoDKEQCwk5gCSeuVjSu61qHXceb6TtHjJjN77vmNNsPnAFzp6woCo6Hm3Uvl" },
  { title: "SK San Isidro Financial Independent",                       date: "July 04, 2024",      desc: "An empowerment program focused on financial literacy, independence, and sustainable budgeting skills.",                                                                                            img: financialindependentPhoto,  fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0dP3wwPT9ehppcccqSmxQVuojGCrEhZauUCvUpibeoWAZhxj3xydrj2rzU9gZF1fcl" },
  { title: "Clean and Green Project",                                   date: "June 23, 2024",      desc: "An environmental cleanliness initiative focused on waste management, community clean-ups, and greening efforts to maintain a healthy ecosystem.",                                                  img: cleanandgreenPhoto,         fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0Nhef2dBFvVrUqTPCZchM14TJBkp9RTA5tkVF61JvMPnhf3PTzC4q5Y8unhbHYifwl" },
  { title: "KK Profiling",                                              date: "February 25, 2024",  desc: "A comprehensive data gathering initiative to map and profile local youth, helping the SK formulate better, targeted policies and development programs.",                                            img: kkprofilingPhoto,           fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0z5bgYYtj4RB6EXUGqoHHDdnKoXJGd65iMpuZz4wQCrtp6huUG6QDgQu3zsaFBePAl" },
  { title: "Hair We Go: Libreng Gupit 2024",                            date: "January 29, 2024",   desc: "A community care initiative providing free haircuts to residents, promoting personal hygiene and grooming accessibility for all age groups.",                                                      img: librenggupit2024Photo,      fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl" },
  { title: "Eye Care and Health Screening Medical Mission",             date: "January 29, 2024",   desc: "A vital health initiative offering free basic eye check-ups, medical screenings, and consultations to safeguard the well-being of our constituents.",                                              img: eyecarePhoto,               fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0aHQEfEYzKi5KDgPXBJ8AKiJBi4AAvwBFm3dVkB3JWU2kFDLhJM1m6tiT48MomFfnl" },
];

const seminarsData = [
  { title: "Provincial Sangguniang Kabataan Youth Congress 2025",    date: "June 14 – 16, 2025",   desc: "SK San Isidro attended the Provincial SK Congress 2025 held at Awesome Hotel San Juan, La Union. The event address leadership challenges and connecting leaders across Laguna.", img: youthcongress },
  { title: "BCPC Election",                                          date: "November 03, 2024",    desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                              img: bcpcPhoto,          fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0QW47Z94hby1h1tJACrvZbpja2fLATPjR23DZDqYzoi34ghYNRBSeurozN8aQzzAXl" },
  { title: "2nd KK Assembly and Leadership Training & Seminar",      date: "November 10, 2024",    desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                              img: leadershipPhoto,    fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl" },
  { title: "Art of Branding Seminar",                                date: "November 10, 2024",    desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                              img: artofbrandingPhoto, fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl" },
  { title: "HIV and AIDS Seminar",                                   date: "November 10, 2024",    desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                              img: hivandaidsPhoto,    fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid09Soz5qqtCeqm3uugYuZg4hSNU8mMS5dFg26k6LobxCdURsuHBKKzUMyGrYW79AJTl" },
  { title: "1st Official SK Meeting",                                date: "November 26, 2023",    desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                              img: meetingPhoto,       fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rpNfbdypuaachSZ43kFmBQrCobvwt9HsyBBfhFwxqLmx3bJdLNErJk7uLmfrUNMSl" },
  { title: "Sangguniang Kabataan Mandatory Training",                date: "November 13 – 14, 2023", desc: "Empowering our out-of-school youth and students with basic AI ethics, prompt engineering, and digital graphic design skills.",                                                                                                            img: mandatoryPhoto,     fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0PokvUXmNEXMj5Uyu1fuDhaomDLxrdjEq8L2ofnK1Spwne98CaXiu6rN45piYVK4nl" },
];

const achievementsData = [
  { title: "Gawad Laguna 2026 Namumukod Tanging Kabataan sa Kolehiyo Nominee",          date: "May 16, 2026",       desc: "Celebrating the provincial-level nomination of SK Vince highlighting his exceptional leadership and student advocacy within the collegiate sector.",                                                     img: gawadPhoto,          fbLink: "https://www.facebook.com/photo/?fbid=1487171103441818&set=a.648416690650601" },
  { title: "Dangal ni Gat Tayaw Awardees",                                              date: "April 30, 2026",     desc: "Recognizing outstanding youth leaders and exceptional achievers from Lowland Liliw and honored at the prestigious Dangal ni Gat Tayaw.",                                                              img: dangalPhoto,         fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02rKS5ihLT3hmSSLdgkCfqek9MqhhqABhf1MDhXBXTfKZtk16oTQJcCwdFefCnEihvl" },
  { title: "Fully Compliant SK Councils for November 2025",                             date: "December 17, 2025",  desc: "The SK San Isidro is honored to be one of the five SK Councils recognized as fully compliant with the reporting requirements for November 2025.",                                                   img: fullcompliant2Photo, fbLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid0xeP2r7nTe4pA5amnwHVJkXLGNWmXAE4wA4kiqeaAJSTX1BVUbxaoPyyhsoVV99S1l&id=61550593866440" },
  { title: "SK Angel Dianne M. Tiquis Passed the Sept 2025 Licensure Examination for Teachers", date: "December 17, 2025", desc: "SK Angel successfully passed the September 2025 Licensure Examination for Professional Teachers.",                                                                                       img: lptPhoto,            fbLink: "https://www.facebook.com/photo/?fbid=1157542139900906&set=a.153869373601526" },
  { title: "Fully Compliant SK Councils for July – October 2025",                      date: "November 07, 2025",  desc: "The SK San Isidro is proud to be one of the 10 SK Councils recognized for the timely and consistent submission of monthly reports.",                                                                img: fullcompliant1Photo, fbLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid02zxVL2Y4SQYNUvTDrJT38prAzm2hBSQwuGBiVWhVhFbXhXJzZUDTRrarS8mbu8PeVl&id=61550593866440" },
  { title: "Liliw's Got Talent San Isidro Representative",                             date: "September 01, 2025", desc: "Commending our talented local representative for showcasing artistic skills, stage performance passion, and creative pride at the municipal talent stage.",                                           img: kuyaivanPhoto,       fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02muSmrsspnhQWqsndoxLCP3Q4rgh1eEZ5UW3XuB5sfuYR26722fVPiJgUjuQ76A5Ql" },
  { title: "SK Angel Tiquis Graduation",                                                date: "July 05, 2025",      desc: "Warmest congratulations to Angel Dianne M. Tiquis for graduating with a Bachelor's degree with the distinction of Magna Cum Laude.",                                                               img: magnaPhoto,          fbLink: "https://www.facebook.com/photo?fbid=1025522319769556&set=a.1025521919769596" },
  { title: "Liliw Federation Digital Poster Making Champion",                          date: "August 27, 2024",    desc: "Showcasing San Isidro's pride as our creative youth secure the championship title in the municipal-wide digital poster design competition.",                                                          img: digitalPhoto,        fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid02WvMJ4p4Ez9ZZSoWY9UXx9YWcGWJ48yg9gpvpZPf2xFDBWVaY87fv7rbyXg3Fc48al" },
  { title: "SK Mai Mai Fresco Graduation",                                              date: "July 09, 2024",      desc: "Celebrating the graduation of SK Treasurer Mai Mai Fresco, recognizing her hard work in balancing academic excellence with community leadership.",                                                  img: maiPhoto,            fbLink: "https://www.facebook.com/photo?fbid=777189201269537&set=a.153869373601526" },
  { title: "SK Althea Poonin Graduation",                                              date: "July 05, 2024",      desc: "Honoring SK Kagawad Althea Poonin for reaching her academic graduation milestone while consistently dedicating herself to youth public service.",                                                   img: theaPhoto,           fbLink: "https://www.facebook.com/photo?fbid=775097244812066&set=a.153869373601526" },
  { title: "Basic Bookkeeping Course for SK Treasurer Completion",                     date: "January 29, 2024",   desc: "A milestone in financial transparency as our SK Treasurer completes a specialized bookkeeping course to ensure accurate and reliable management of community funds.",                                img: bookPhoto,           fbLink: "https://www.facebook.com/photo/?fbid=683900127265112&set=a.153869373601526" },
  { title: "SK Secretary and Treasurer Mandatory Training Completion",                 date: "January 20, 2024",   desc: "Celebrating the successful completion of the official mandatory training for our SK Secretary and Treasurer, equipping them with essential governance and leadership skills.",                       img: sksecandtreasPhoto,  fbLink: "https://www.facebook.com/photo/?fbid=678775697777555&set=a.153869380268192" },
];

const upcomingData = [
  { title: "School Supplies Donation Drive 2026", date: "Tentative: May 17, 2026", desc: "Building camaraderie through sports. Registration for Sitio representatives will open soon!", img: schoolsuppliesPhoto, fbLink: "https://www.facebook.com/sksanisidroliliw/posts/pfbid0eUioYn6rjNYuBKDpigAinsPEoPU9KWgQonpq5hLBAhBGgT539b2EoSphRRhas9Ycl" },
];

const INITIAL = 3;

// ─── Main Component ───────────────────────────────────────────────────────────
const Activities = () => {
  const eventsRef       = useRef(null);
  const projectsRef     = useRef(null);
  const seminarsRef     = useRef(null);
  const achievementsRef = useRef(null);
  const upcomingRef     = useRef(null);

  const [eventsLimit,       setEventsLimit]       = useState(INITIAL);
  const [projectsLimit,     setProjectsLimit]     = useState(INITIAL);
  const [seminarsLimit,     setSeminarsLimit]     = useState(INITIAL);
  const [achievementsLimit, setAchievementsLimit] = useState(INITIAL);

  const scrollTo = (ref) => window.scrollTo({ top: ref.current.offsetTop - 90, behavior: 'smooth' });

  const [evRef,  evVis]  = useFadeIn(0);
  const [prRef,  prVis]  = useFadeIn(0);
  const [semRef, semVis] = useFadeIn(0);
  const [achRef, achVis] = useFadeIn(0);
  const [upRef,  upVis]  = useFadeIn(0);

  return (
    <main className="activities-page">
      <style>{globalCSS}</style>

      {/* ── STICKY HERO / NAV ─────────────────────────────────────────── */}
      <header className="act-hero">
        <h1 className="act-hero-title">Activities &amp; Programs</h1>
        <nav className="act-nav">
          {[
            { label: 'Events',       ref: eventsRef       },
            { label: 'Projects',     ref: projectsRef     },
            { label: 'Seminars',     ref: seminarsRef     },
            { label: 'Achievements', ref: achievementsRef },
            { label: 'Upcoming',     ref: upcomingRef     },
          ].map(({ label, ref }) => (
            <button key={label} className="nav-pill" onClick={() => scrollTo(ref)}>{label}</button>
          ))}
        </nav>
      </header>

      {/* ── 1. EVENTS ─────────────────────────────────────────────────── */}
      <section ref={eventsRef} className="act-section white-bg">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="act-section-head" ref={evRef} style={fadeStyle(evVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Activities</div>
            <h2 className="section-h2 dark-text">Community Events</h2>
          </div>
          <div className="card-grid">
            {eventsData.slice(0, eventsLimit).map((item, i) => (
              <ActivityCard key={i} {...item} isDark={false} />
            ))}
          </div>
          {eventsLimit < eventsData.length && (
            <div className="load-more-wrap">
              <button className="load-more-btn on-light" onClick={() => setEventsLimit(p => p + 3)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 2. PROJECTS ───────────────────────────────────────────────── */}
      <section ref={projectsRef} className="act-section light-bg">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="act-section-head" ref={prRef} style={fadeStyle(prVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Initiatives</div>
            <h2 className="section-h2 dark-text">Projects</h2>
          </div>
          <div className="card-grid">
            {projectsData.slice(0, projectsLimit).map((item, i) => (
              <ActivityCard key={i} {...item} isDark={false} />
            ))}
          </div>
          {projectsLimit < projectsData.length && (
            <div className="load-more-wrap">
              <button className="load-more-btn on-light" onClick={() => setProjectsLimit(p => p + 5)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 3. SEMINARS ───────────────────────────────────────────────── */}
      <section ref={seminarsRef} className="act-section white-bg">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="act-section-head" ref={semRef} style={fadeStyle(semVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Learning</div>
            <h2 className="section-h2 dark-text">Seminars &amp; Education</h2>
          </div>
          <div className="card-grid">
            {seminarsData.slice(0, seminarsLimit).map((item, i) => (
              <ActivityCard key={i} {...item} isDark={false} />
            ))}
          </div>
          {seminarsLimit < seminarsData.length && (
            <div className="load-more-wrap">
              <button className="load-more-btn on-light" onClick={() => setSeminarsLimit(p => p + 5)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. ACHIEVEMENTS ───────────────────────────────────────────── */}
      <section ref={achievementsRef} className="act-section dark-bg">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="act-section-head" ref={achRef} style={fadeStyle(achVis, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>Recognition</div>
            <h2 className="section-h2 light-text">Achievements &amp; Awards</h2>
          </div>
          <div className="card-grid">
            {achievementsData.slice(0, achievementsLimit).map((item, i) => (
              <ActivityCard key={i} {...item} isDark={true} />
            ))}
          </div>
          {achievementsLimit < achievementsData.length && (
            <div className="load-more-wrap">
              <button className="load-more-btn on-dark" onClick={() => setAchievementsLimit(p => p + 5)}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── 5. UPCOMING ───────────────────────────────────────────────── */}
      <section ref={upcomingRef} className="act-section light-bg">
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div className="act-section-head" ref={upRef} style={fadeStyle(upVis, 'up', 0)}>
            <div className="section-tag" style={{ justifyContent: 'center', display: 'flex' }}>Coming Soon</div>
            <h2 className="section-h2 dark-text">Upcoming Programs</h2>
          </div>
          <div className="card-grid">
            {upcomingData.map((item, i) => (
              <ActivityCard key={i} {...item} isDark={false} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

// ─── Activity Card ────────────────────────────────────────────────────────────
const ActivityCard = ({ title, date, img, desc, fbLink, isDark }) => (
  <div className={`act-card ${isDark ? 'card-dark' : 'card-light'}`}>
    <div className="card-img-wrap">
      <img src={img} alt={title} loading="lazy" />
    </div>
    <div className="card-body">
      <span className={`card-date ${isDark ? 'dark' : 'light'}`}>{date}</span>
      <h3 className={`card-title ${isDark ? 'dark' : 'light'}`}>{title}</h3>
      <p className={`card-desc ${isDark ? 'dark' : 'light'}`}>{desc}</p>
      {fbLink && (
        <a href={fbLink} target="_blank" rel="noopener noreferrer" className="card-fb-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
          View on Facebook
        </a>
      )}
    </div>
  </div>
);

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

export default Activities;
