import React, { useState, useEffect, useRef } from 'react';
import ClearanceForm from '../components/ClearanceForm';
import { supabase } from '../supabaseClient';

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
    : direction === 'up'   ? 'translateY(28px)'
    : direction === 'left' ? 'translateX(-20px)'
    : 'translateX(20px)',
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
});

// ─── Global CSS ───────────────────────────────────────────────────────────────
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .rs-page { font-family: 'DM Sans', sans-serif; overflow-x: hidden; background: #f4f7f4; }

  /* ── Hero ── */
  .rs-hero {
    background: #001401;
    padding: clamp(60px, 9vw, 110px) clamp(20px, 7%, 10%) clamp(48px, 7vw, 80px);
    text-align: center; position: relative; overflow: hidden;
  }
  .rs-hero::before {
    content: ''; position: absolute; top: -80px; right: -80px;
    width: clamp(220px, 38vw, 460px); height: clamp(220px, 38vw, 460px);
    background: radial-gradient(circle, rgba(255,208,0,0.07) 0%, transparent 70%);
    border-radius: 50%; pointer-events: none;
  }
  .rs-hero-badge {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,208,0,0.1); border: 1px solid rgba(255,208,0,0.3);
    color: #FFD000; font-size: 11px; font-weight: 600;
    padding: 5px 14px; border-radius: 100px;
    letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 20px;
  }
  .rs-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.7rem, 4.5vw, 3rem);
    color: #fff; font-weight: 700;
    margin-bottom: 16px; line-height: 1.15; position: relative; z-index: 1;
  }
  .rs-hero-title span { color: #FFD000; }
  .rs-hero-sub {
    color: rgba(255,255,255,0.68);
    font-size: clamp(0.88rem, 2vw, 1rem);
    line-height: 1.8; max-width: 620px;
    margin: 0 auto 32px; position: relative; z-index: 1;
  }
  .rs-hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; position: relative; z-index: 1; }
  .rs-btn-gold {
    padding: 12px 28px; background: #FFD000; color: #001401;
    border: none; border-radius: 8px; font-family: 'DM Sans', sans-serif;
    font-weight: 700; font-size: 0.84rem; text-decoration: none;
    text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.2s, transform 0.15s; display: inline-block;
  }
  .rs-btn-gold:hover { background: #ffe033; transform: translateY(-2px); }
  .rs-btn-ghost {
    padding: 12px 28px; background: transparent; color: #FFD000;
    border: 1.5px solid rgba(255,208,0,0.55); border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600; font-size: 0.84rem; text-decoration: none;
    text-transform: uppercase; letter-spacing: 0.06em;
    transition: background 0.2s, border-color 0.2s, transform 0.15s; display: inline-block;
  }
  .rs-btn-ghost:hover { background: rgba(255,208,0,0.1); border-color: #FFD000; transform: translateY(-2px); }

  /* ── Shared section base ── */
  .rs-section { padding: clamp(56px, 7vw, 96px) clamp(20px, 6%, 8%); width: 100%; }
  .rs-section.white-bg  { background: #fff; }
  .rs-section.light-bg  { background: #f4f7f4; }
  .rs-section.dark-bg   { background: #001401; }

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
    font-size: clamp(1.5rem, 3.5vw, 2.3rem);
    font-weight: 700; line-height: 1.2; margin-bottom: 8px;
  }
  .section-h2.dark-text  { color: #001f01; }
  .section-h2.light-text { color: #fff; }
  .section-sub { font-size: clamp(0.82rem, 1.8vw, 0.96rem); line-height: 1.6; margin-bottom: 36px; text-align: center }
  .section-sub.green { color: #64748b; }
  .section-sub.light { color: rgba(255,255,255,0.5); }

  /* ── Services grid ── */
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: clamp(12px, 2vw, 18px);
  }
  @media (max-width: 480px) { .service-grid { grid-template-columns: 1fr 1fr; gap: 10px; } }

  .service-card {
    padding: clamp(18px, 3vw, 26px) clamp(14px, 2.5vw, 20px);
    background: #fff; border-radius: 14px;
    border: 1px solid #e8eef0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);
    cursor: pointer; text-align: center;
    display: flex; flex-direction: column; align-items: center;
    transition: background 0.25s, transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .service-card:hover, .service-card.active {
    background: #001f01; border-color: #001f01;
    transform: translateY(-5px); box-shadow: 0 10px 28px rgba(0,0,0,0.15);
  }
  .service-card-img { width: clamp(44px, 9vw, 58px); height: clamp(44px, 9vw, 58px); object-fit: contain; margin-bottom: 14px; transition: filter 0.25s; }
  .service-card:hover .service-card-img,
  .service-card.active .service-card-img { filter: brightness(0) invert(1); }
  .service-card-title {
    font-size: clamp(0.84rem, 1.8vw, 0.96rem); font-weight: 700;
    color: #001f01; margin-bottom: 6px; line-height: 1.3;
    transition: color 0.25s;
  }
  .service-card:hover .service-card-title,
  .service-card.active .service-card-title { color: #fff; }
  .service-card-desc {
    font-size: clamp(0.75rem, 1.5vw, 0.82rem); color: #64748b;
    line-height: 1.5; transition: color 0.25s;
  }
  .service-card:hover .service-card-desc,
  .service-card.active .service-card-desc { color: rgba(255,255,255,0.65); }

  /* ── Fee table ── */
  .fee-section-wrap { margin-bottom: 20px; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
  .fee-section-head {
    background: #001f01; padding: 13px 20px;
    display: flex; justify-content: space-between;
  }
  .fee-section-head span { color: #FFD000; font-weight: 700; font-size: clamp(0.8rem, 1.8vw, 0.9rem); }
  .fee-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 11px 20px; font-size: clamp(0.78rem, 1.7vw, 0.9rem);
    border-bottom: 1px solid #f1f5f9;
  }
  .fee-row:last-child { border-bottom: none; }
  .fee-row.even { background: #fff; }
  .fee-row.odd  { background: #f9fafb; }
  .fee-name { color: #334155; padding-right: 16px; }
  .fee-amount { font-weight: 700; color: #001f01; white-space: nowrap; }

  /* ── Steps ── */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: clamp(10px, 2vw, 16px);
  }
  .step-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 12px; padding: clamp(16px, 2.5vw, 24px);
    transition: background 0.2s, border-color 0.2s;
  }
  .step-card:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,208,0,0.3); }
  .step-num { color: #FFD000; font-weight: 700; font-size: clamp(1rem, 2.5vw, 1.25rem); margin-bottom: 8px; }
  .step-title { color: #fff; font-size: clamp(0.88rem, 1.8vw, 1rem); font-weight: 700; margin-bottom: 8px; }
  .step-desc { color: rgba(255,255,255,0.6); font-size: clamp(0.76rem, 1.5vw, 0.84rem); line-height: 1.6; }

  /* ── Submit / Track cards ── */
  .form-card {
    background: #fff; border-radius: 16px;
    border: 1px solid #e8eef0;
    padding: clamp(24px, 4vw, 44px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }
  .form-card-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    color: #001f01; font-weight: 700; margin-bottom: 6px;
  }
  .form-card-sub { font-size: clamp(0.82rem, 1.8vw, 0.92rem); color: #64748b; margin-bottom: 28px; line-height: 1.6; text-align: center}

  /* ── Track input ── */
  .track-form { display: flex; gap: 10px; max-width: 640px; margin: 0 auto 28px; }
  @media (max-width: 520px) { .track-form { flex-direction: column; } }
  .track-input {
    flex: 1; padding: 13px 16px; border-radius: 10px;
    border: 1.5px solid #cbd5e1; font-size: 0.96rem;
    font-family: monospace; letter-spacing: 1px;
    outline: none; width: 100%;
    transition: border-color 0.2s;
  }
  .track-input:focus { border-color: #064e3b; }
  .track-btn {
    padding: 13px 26px; background: #001f01; color: #FFD000;
    border: none; border-radius: 10px; font-family: 'DM Sans', sans-serif;
    font-weight: 700; font-size: 0.9rem; cursor: pointer; white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
  }
  .track-btn:hover:not(:disabled) { background: #064e3b; transform: translateY(-1px); }
  .track-btn:disabled { opacity: 0.6; cursor: not-allowed; }

  /* ── Track result card ── */
  .track-result {
    max-width: 640px; margin: 0 auto;
    background: #fff; border: 1px solid #e2e8f0;
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  .track-result-header {
    background: #001f01; padding: 18px 24px;
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
  }
  .track-ref-label { color: #FFD000; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
  .track-ref-code  { color: #fff; font-family: monospace; font-size: 1.2rem; font-weight: 700; letter-spacing: 2px; }
  .track-result-body { padding: 24px; }
  .track-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 28px; }
  .track-info-label { font-size: 0.72rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 3px; }
  .track-info-value { font-size: 0.92rem; color: #1e293b; font-weight: 600; }
  .track-progress-label { font-size: 0.76rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
  .track-steps-row { display: flex; align-items: center; flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; }
  .track-step-dot {
    display: flex; flex-direction: column; align-items: center; min-width: 70px;
  }
  .track-step-circle {
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.8rem; transition: all 0.3s;
  }
  .track-step-line { flex: 1; height: 3px; min-width: 20px; }
  .track-step-text { font-size: 0.66rem; text-align: center; margin-top: 6px; line-height: 1.3; font-weight: 600; }
  .track-alert {
    border-radius: 10px; padding: 14px 18px;
    font-size: 0.88rem; margin-top: 16px; line-height: 1.5;
  }

  /* ── Status badge ── */
  .status-badge { padding: 5px 14px; border-radius: 100px; font-size: 0.78rem; font-weight: 700; border: 1px solid; }

  /* ── Modal ── */
  .rs-modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.82);
    display: flex; align-items: center; justify-content: center;
    padding: 20px; z-index: 11000; backdrop-filter: blur(3px);
  }
  .rs-modal-box {
    background: #001f01; color: #fff;
    border: 1px solid rgba(255,208,0,0.45);
    border-radius: 18px; max-width: 460px; width: 100%;
    max-height: 85vh; overflow-y: auto;
    padding: clamp(22px, 4vw, 36px);
    position: relative;
    box-shadow: 0 24px 60px rgba(0,0,0,0.5);
  }
  .rs-modal-close {
    position: absolute; top: 14px; right: 18px;
    background: none; border: none; color: rgba(255,255,255,0.6);
    font-size: 1.6rem; cursor: pointer; line-height: 1; transition: color 0.2s;
  }
  .rs-modal-close:hover { color: #fff; }
  .rs-modal-title { color: #FFD000; font-size: clamp(1.1rem, 3vw, 1.35rem); font-weight: 700; margin-bottom: 14px; padding-right: 28px; line-height: 1.3; }
  .rs-modal-body  { color: rgba(255,255,255,0.8); font-size: clamp(0.88rem, 2vw, 0.97rem); line-height: 1.75; }

  /* ── Error ── */
  .track-error {
    background: #ffebee; border: 1px solid #ef9a9a;
    border-radius: 10px; padding: 14px 18px;
    color: #b71c1c; font-size: 0.88rem;
    max-width: 640px; margin: 0 auto 20px;
  }

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
const definitions = [
  { title: "Obligation/Barangay Clearance",  desc: "Cleared of all financial liabilities.",       details: "Refers to the fact that the concerned person is cleared of all the obligations he may have incurred in the barangay, as a result of fines, contributions, and other financial liabilities.", icon: "/images/responsibility.png" },
  { title: "Business Clearance",             desc: "Authorization to engage in business.",         details: "Refers to the fact that the applicant is allowed to engage in business in the barangay pursuant to barangay ordinance.", icon: "/images/business.png" },
  { title: "Water/Electric Connection",      desc: "Certification for utility compliance.",        details: "Refers to compliance with requirements prior to water or electric connection.", icon: "/images/electric.png" },
  { title: "Building/Fence Clearance",       desc: "Zoning and safety standards.",                details: "Confirms compliance with zoning ordinances and building safety standards.", icon: "/images/building.png" },
  { title: "Compliance Clearance",           desc: "Certification of no violations.",             details: "Equivalent to a Certification of Good Moral Character – confirms no violations of local laws.", icon: "/images/compliance.png" },
  { title: "Economic/Civil Status",          desc: "For assistance or civil status.",             details: "Certifies economic condition or civil status (married, single, widow, etc.).", icon: "/images/economic.png" },
  { title: "Certification of Identity",      desc: "Verification of identity.",                   details: "Verifies identity, genealogy, paternity, or other personal record details.", icon: "/images/people.png" },
  { title: "Certification of Fact",          desc: "Official verification of regulations.",       details: "Refers to the existence of barangay ordinances, rules, or regulations.", icon: "/images/economic.png" },
];

const feeSections = [
  {
    title: "Clearances & Applications",
    items: [
      { name: "Sari-Sari Store Clearance",                          fee: "₱100.00" },
      { name: "Driver's License Application",                       fee: "₱50.00"  },
      { name: "Loan Application",                                   fee: "₱50.00"  },
      { name: "Local Employment Application",                       fee: "₱50.00"  },
      { name: "Police Clearance Application",                       fee: "₱50.00"  },
      { name: "Electric Connection Application",                    fee: "₱50.00"  },
      { name: "Water Connection Application",                       fee: "₱50.00"  },
      { name: "Internet Connection Application",                    fee: "₱50.00"  },
      { name: "Commercial Store",                                   fee: "₱200.00" },
      { name: "Vehicle Service Center/Talyer/Vulcanizing",          fee: "₱100.00" },
      { name: "Warehouse",                                          fee: "₱500.00" },
      { name: "Space Rental/Apartment",                             fee: "₱100.00/door" },
      { name: "Construction Firm",                                  fee: "₱500.00" },
      { name: "Gasoline Station",                                   fee: "₱500.00" },
      { name: "Internet Cafe",                                      fee: "₱100.00" },
      { name: "Computer Shop",                                      fee: "₱100.00" },
      { name: "Junk Shop",                                          fee: "₱500.00" },
      { name: "Other Clearances Not Mentioned",                     fee: "₱50.00"  },
    ],
  },
  {
    title: "Permits & Certifications",
    items: [
      { name: "Certification of Residency/Personal Identity",       fee: "₱0.00"   },
      { name: "Certification of Economic Status/Indigence",         fee: "₱0.00"   },
      { name: "Certification of Compliance",                        fee: "₱0.00"   },
      { name: "Agreement/Deed of Sale and Similar Documents",       fee: "₱100.00" },
      { name: "Building Permit",                                    fee: "₱100.00" },
      { name: "Fencing Permit",                                     fee: "₱100.00" },
    ],
  },
  {
    title: "Facility Rentals",
    items: [
      { name: "Basketball Court (Whole Day/Night with Electricity)", fee: "₱700.00" },
      { name: "Basketball Court (Night Time/2 hours)",               fee: "₱200.00" },
    ],
  },
];

const steps = [
  { step: "01", title: "Intent",       desc: "Approach the Punong Barangay to state your purpose." },
  { step: "02", title: "Verification", desc: "Officials verify your request details." },
  { step: "03", title: "Inspection",   desc: "Ocular inspection may be conducted." },
  { step: "04", title: "Payment",      desc: "Pay at the Barangay Treasurer's office." },
  { step: "05", title: "Receipt",      desc: "Official receipt is issued." },
  { step: "06", title: "Processing",   desc: "Secretary prepares your document." },
  { step: "07", title: "Release",      desc: "Document signed and released." },
];

const statusColors = {
  'Pending':          { bg: '#fff8e1', color: '#795548', border: '#ffe082' },
  'Processing':       { bg: '#e3f2fd', color: '#1565c0', border: '#90caf9' },
  'Ready for Pickup': { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8' },
  'Completed':        { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7' },
  'Rejected':         { bg: '#ffebee', color: '#b71c1c', border: '#ef9a9a' },
};

const statusSteps = ['Pending', 'Processing', 'Ready for Pickup', 'Completed'];

// ─── Track Request Section ────────────────────────────────────────────────────
function TrackRequestSection() {
  const [refCode,  setRefCode]  = useState('');
  const [request,  setRequest]  = useState(null);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const [searched, setSearched] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!refCode.trim()) return;
    setLoading(true); setError(''); setRequest(null); setSearched(true);

    const { data, error: fetchError } = await supabase
      .from('clearance_requests')
      .select('*')
      .ilike('reference_code', refCode.trim())
      .single();

    if (fetchError || !data) {
      setError('No request found for that reference code. Please check and try again.');
    } else {
      setRequest(data);
    }
    setLoading(false);
  };

  const getStepIndex = (status) => statusSteps.indexOf(status);

  const formatDate = (dateStr) => {
    if (!dateStr) return '—';
    return new Date(dateStr).toLocaleString('en-PH', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  const [trackRef, trackVis] = useFadeIn(0);

  return (
    <div id="track-request" ref={trackRef}>
      <div className="form-card" style={fadeStyle(trackVis, 'up', 0)}>
        <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>Track Status</div>
        <h2 className="form-card-title">Track Your Request</h2>
        <p className="form-card-sub">
          Enter the reference code from your confirmation to check the status of your Barangay Service Request.
        </p>

        <form className="track-form" onSubmit={handleTrack}>
          <input
            className="track-input"
            value={refCode}
            onChange={(e) => setRefCode(e.target.value.toUpperCase())}
            placeholder="e.g. BSI-524e152"
          />
          <button className="track-btn" type="submit" disabled={loading}>
            {loading ? 'Searching…' : 'Track Request'}
          </button>
        </form>

        {error && <div className="track-error">{error}</div>}

        {request && (
          <div className="track-result">
            <div className="track-result-header">
              <div>
                <div className="track-ref-label">Reference Code</div>
                <div className="track-ref-code">{request.reference_code}</div>
              </div>
              {request.status && (
                <span
                  className="status-badge"
                  style={{
                    background: statusColors[request.status]?.bg || '#eee',
                    color:      statusColors[request.status]?.color || '#333',
                    borderColor: statusColors[request.status]?.border || '#ccc',
                  }}
                >
                  {request.status}
                </span>
              )}
            </div>

            <div className="track-result-body">
              <div className="track-info-grid">
                {[
                  { label: 'Full Name',      value: request.resident_name },
                  { label: 'Service Type',   value: request.clearance_type },
                  { label: 'Quantity',       value: request.quantity },
                  { label: 'Total Fee',      value: `₱${request.total_price?.toFixed(2)}` },
                  { label: 'Contact Number', value: request.contact_number },
                  { label: 'Date Submitted', value: formatDate(request.created_at) },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="track-info-label">{row.label}</div>
                    <div className="track-info-value">{row.value || '—'}</div>
                  </div>
                ))}
              </div>

              {request.status !== 'Rejected' && (
                <>
                  <div className="track-progress-label">Request Progress</div>
                  <div className="track-steps-row">
                    {statusSteps.map((step, i) => {
                      const currentIdx = getStepIndex(request.status);
                      const isDone   = i <= currentIdx;
                      const isActive = i === currentIdx;
                      return (
                        <React.Fragment key={step}>
                          <div className="track-step-dot">
                            <div
                              className="track-step-circle"
                              style={{
                                background: isDone ? '#064e3b' : '#e2e8f0',
                                border: isActive ? '3px solid #FFD000' : 'none',
                                color: isDone ? '#fff' : '#94a3b8',
                              }}
                            >
                              {isDone ? '✓' : i + 1}
                            </div>
                            <div
                              className="track-step-text"
                              style={{ color: isDone ? '#064e3b' : '#94a3b8' }}
                            >
                              {step}
                            </div>
                          </div>
                          {i < statusSteps.length - 1 && (
                            <div
                              className="track-step-line"
                              style={{ background: i < currentIdx ? '#064e3b' : '#e2e8f0' }}
                            />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </>
              )}

              {request.status === 'Rejected' && (
                <div className="track-alert" style={{ background: '#ffebee', border: '1px solid #ef9a9a', color: '#b71c1c' }}>
                  <strong>Your request was not approved.</strong> Please visit the Barangay Hall for more information.
                </div>
              )}
              {request.status === 'Completed' && (
                <div className="track-alert" style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', color: '#2e7d32' }}>
                  <strong>Your document is completed!</strong> Thank you for your request.
                </div>
              )}
              {request.status === 'Ready for Pickup' && (
                <div className="track-alert" style={{ background: '#f3e5f5', border: '1px solid #ce93d8', color: '#6a1b9a' }}>
                  <strong>Your document is ready for pickup!</strong> Please visit the Barangay Hall.
                </div>
              )}
            </div>
          </div>
        )}

        {searched && !request && !error && !loading && (
          <div style={{ textAlign: 'center', padding: '36px', color: '#94a3b8' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
            <p>Enter your reference code above to check your request.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RequestServices() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCard,  setActiveCard]  = useState(null);

  const [heroRef,    heroVis]    = useFadeIn(0);
  const [svcRef,     svcVis]     = useFadeIn(0);
  const [feeRef,     feeVis]     = useFadeIn(0);
  const [stepsRef,   stepsVis]   = useFadeIn(0);
  const [submitRef,  submitVis]  = useFadeIn(0);

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  return (
    <div className="rs-page">
      <style>{globalCSS}</style>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="rs-hero" ref={heroRef}>
        <div style={fadeStyle(heroVis, 'up', 0)}>
          <div className="rs-hero-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Barangay Services
          </div>
        </div>
        <div style={fadeStyle(heroVis, 'up', 110)}>
          <h1 className="rs-hero-title">
            Request <span>Service Portal</span>
          </h1>
        </div>
        <div style={fadeStyle(heroVis, 'up', 210)}>
          <p className="rs-hero-sub">
            Efficient, transparent, and accessible services for the residents of Barangay San Isidro.
          </p>
        </div>
        <div style={fadeStyle(heroVis, 'up', 300)}>
          <div className="rs-hero-btns">
            <a href="#submit-request" className="rs-btn-gold">Submit a Request</a>
            <a href="#track-request"  className="rs-btn-ghost">Track My Request</a>
          </div>
        </div>
      </section>

      {/* ── 1. OUR SERVICES (light) ───────────────────────────────────── */}
      <section className="rs-section light-bg" ref={svcRef}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={fadeStyle(svcVis, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>What We Offer</div>
            <h2 className="section-h2 dark-text">Our Services</h2>
            <p className="section-sub green">Click any service to learn more about it.</p>
          </div>
          <div className="service-grid">
            {definitions.map((item, i) => (
              <div
                key={i}
                className={`service-card${activeCard === i ? ' active' : ''}`}
                style={fadeStyle(svcVis, 'up', 80 + i * 40)}
                onClick={() => { setActiveCard(activeCard === i ? null : i); setActiveModal(item); }}
              >
                <img src={item.icon} alt={item.title} className="service-card-img" />
                <div className="service-card-title">{item.title}</div>
                <div className="service-card-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. FEES (white) ───────────────────────────────────────────── */}
      <section className="rs-section white-bg" ref={feeRef}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={fadeStyle(feeVis, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>Transparency</div>
            <h2 className="section-h2 dark-text">Schedule of Fees &amp; Charges</h2>
            <p className="section-sub green">Official rates approved by the Sangguniang Barangay.</p>
          </div>
          {feeSections.map((section, si) => (
            <div key={si} className="fee-section-wrap" style={fadeStyle(feeVis, 'up', 80 + si * 80)}>
              <div className="fee-section-head">
                <span>{section.title}</span>
                <span>Fee</span>
              </div>
              {section.items.map((row, ri) => (
                <div key={ri} className={`fee-row ${ri % 2 === 0 ? 'even' : 'odd'}`}>
                  <span className="fee-name">{row.name}</span>
                  <span className="fee-amount">{row.fee}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. STEP-BY-STEP (dark) ────────────────────────────────────── */}
      <section className="rs-section dark-bg" ref={stepsRef}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={fadeStyle(stepsVis, 'up', 0)}>
            <div className="section-tag light" style={{ justifyContent: 'center', display: 'flex' }}>How It Works</div>
            <h2 className="section-h2 light-text">Step-by-Step Request Process</h2>
            <p className="section-sub light">Follow these steps to complete your barangay service request.</p>
          </div>
          <div className="steps-grid">
            {steps.map((item, i) => (
              <div key={i} className="step-card" style={fadeStyle(stepsVis, 'up', 80 + i * 55)}>
                <div className="step-num">{item.step}</div>
                <div className="step-title">{item.title}</div>
                <div className="step-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SUBMIT + TRACK (light) ─────────────────────────────────── */}
      <section className="rs-section light-bg" ref={submitRef}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '28px' }}>

          {/* Submit Digital Request */}
          <div id="submit-request" className="form-card" style={fadeStyle(submitVis, 'up', 0)}>
            <div className="section-tag green" style={{ justifyContent: 'center', display: 'flex' }}>Online</div>
            <h2 className="form-card-title">Submit Digital Request</h2>
            <p className="form-card-sub">Fill out the form below to submit your barangay service request online. Please submit only when necessary. For payments and official receipts, contact Secretary Lendel Almares or Treasurer Jhommel Montevirgen.</p>
            <ClearanceForm />
          </div>

          {/* Track Request */}
          <TrackRequestSection />
        </div>
      </section>

      {/* ── SERVICE DETAIL MODAL ──────────────────────────────────────── */}
      {activeModal && (
        <div className="rs-modal-overlay" onClick={() => { setActiveModal(null); setActiveCard(null); }}>
          <div className="rs-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="rs-modal-close" onClick={() => { setActiveModal(null); setActiveCard(null); }}>×</button>
            <div className="rs-modal-title">{activeModal.title}</div>
            <div className="rs-modal-body">{activeModal.details}</div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

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
