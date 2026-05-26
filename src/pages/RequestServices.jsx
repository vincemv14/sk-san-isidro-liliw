import React, { useState } from 'react';
import ClearanceForm from '../components/ClearanceForm';
import { supabase } from '../supabaseClient';

const ServiceIcon = ({ iconPath }) => (
  <img src={iconPath} alt="Service Icon" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
);

// ==============================
// TRACK REQUEST — embedded from your TrackRequest.jsx
// ==============================
function TrackRequestSection() {
  const [refCode, setRefCode] = useState('');
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [searched, setSearched] = useState(false);

  const statusSteps = ['Pending', 'Processing', 'Ready for Pickup', 'Completed'];

  const statusColors = {
    'Pending':           { bg: '#fff8e1', color: '#795548', border: '#ffe082' },
    'Processing':        { bg: '#e3f2fd', color: '#1565c0', border: '#90caf9' },
    'Ready for Pickup':  { bg: '#f3e5f5', color: '#6a1b9a', border: '#ce93d8' },
    'Completed':         { bg: '#e8f5e9', color: '#2e7d32', border: '#a5d6a7' },
    'Rejected':          { bg: '#ffebee', color: '#b71c1c', border: '#ef9a9a' },
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!refCode.trim()) return;
    setLoading(true);
    setError('');
    setRequest(null);
    setSearched(true);

    const { data, error: fetchError } = await supabase
      .from('clearance_requests')
      .select('*')
      .ilike('reference_code', refCode.trim())   // ✅ your original .ilike for case-insensitive match
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
      hour: '2-digit', minute: '2-digit'
    });
  };

  return (
    <section id="track-request" style={{
      background: '#fff',
      padding: 'clamp(20px, 4vw, 40px)',
      borderRadius: '16px',
      border: '1px solid #eee',
      marginBottom: 'clamp(24px, 4vw, 40px)',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ textAlign: 'center', color: '#003f0e', marginBottom: '8px', fontSize: 'clamp(1.8rem, 4vw, 2rem)' }}>
        TRACK YOUR REQUEST
      </h2>
      <p style={{ textAlign: 'center', color: '#fff', background: '#002c02', borderRadius: '8px', padding: '10px 16px', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', marginBottom: '28px', opacity: 0.9 }}>
        Enter the reference code from your confirmation to check the status of your Barangay Service Request.
      </p>

      {/* Search Box — your exact layout from TrackRequest.jsx */}
      <form
        onSubmit={handleTrack}
        className="track-form"
        style={{ display: 'flex', gap: '10px', marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}
      >
        <input
          value={refCode}
          onChange={(e) => setRefCode(e.target.value.toUpperCase())}
          placeholder="e.g. BSI-524e152"
          style={{
            flex: '1',
            padding: '14px 16px',
            borderRadius: '10px',
            border: '1.5px solid #cbd5e0',
            fontSize: '1rem',
            fontFamily: 'monospace',
            letterSpacing: '1px',
            outline: 'none',
            width: '100%',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="submit"
          className="track-btn"
          disabled={loading}
          style={{
            padding: '14px 28px',
            background: '#006400',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '0.95rem',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {loading ? 'Searching...' : 'Track Request'}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div style={{ background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: '10px', padding: '16px 20px', color: '#b71c1c', marginBottom: '24px', fontSize: '0.9rem', maxWidth: '640px', margin: '0 auto 24px' }}>
          {error}
        </div>
      )}

      {/* Result Card — your exact card from TrackRequest.jsx */}
      {request && (
        <div style={{ maxWidth: '640px', margin: '0 auto', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>

          <div style={{ background: '#002c02', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <p style={{ color: '#ffd000', fontSize: '0.75rem', margin: '0 0 4px', letterSpacing: '1px', textTransform: 'uppercase' }}>Reference Code</p>
              <p style={{ color: '#fff', fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 'bold', margin: 0, letterSpacing: '2px' }}>{request.reference_code}</p>
            </div>
            {request.status && (
              <span style={{
                padding: '6px 16px', borderRadius: '99px', fontSize: '0.82rem', fontWeight: 'bold',
                background: statusColors[request.status]?.bg || '#eee',
                color: statusColors[request.status]?.color || '#333',
                border: `1px solid ${statusColors[request.status]?.border || '#ccc'}`
              }}>
                {request.status}
              </span>
            )}
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              {[
                { label: 'Full Name',      value: request.resident_name },
                { label: 'Service Type',   value: request.clearance_type },
                { label: 'Quantity',       value: request.quantity },
                { label: 'Total Fee',      value: `₱${request.total_price?.toFixed(2)}` },
                { label: 'Contact Number', value: request.contact_number },
                { label: 'Date Submitted', value: formatDate(request.created_at) },
              ].map((row) => (
                <div key={row.label}>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: '0 0 3px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{row.label}</p>
                  <p style={{ fontSize: '0.95rem', color: '#1e293b', fontWeight: '600', margin: 0 }}>{row.value || '—'}</p>
                </div>
              ))}
            </div>

            {request.status !== 'Rejected' && (
              <>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Request Progress</p>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '4px' }}>
                  {statusSteps.map((step, i) => {
                    const currentIdx = getStepIndex(request.status);
                    const isDone   = i <= currentIdx;
                    const isActive = i === currentIdx;
                    return (
                      <React.Fragment key={step}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '70px' }}>
                          <div style={{
                            width: '32px', height: '32px', borderRadius: '50%',
                            background: isDone ? '#006400' : '#e2e8f0',
                            border: isActive ? '3px solid #ffd000' : 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: isDone ? '#fff' : '#94a3b8',
                            fontWeight: 'bold', fontSize: '0.8rem', transition: 'all 0.3s'
                          }}>
                            {isDone ? '✓' : i + 1}
                          </div>
                          <p style={{ fontSize: '0.68rem', color: isDone ? '#006400' : '#94a3b8', textAlign: 'center', margin: '6px 0 0', fontWeight: isDone ? '600' : '400', lineHeight: 1.3 }}>
                            {step}
                          </p>
                        </div>
                        {i < statusSteps.length - 1 && (
                          <div style={{ flex: 1, height: '3px', background: i < currentIdx ? '#006400' : '#e2e8f0', minWidth: '20px' }} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </>
            )}

            {request.status === 'Rejected' && (
              <div style={{ background: '#ffebee', border: '1px solid #ef9a9a', borderRadius: '10px', padding: '16px 20px', color: '#b71c1c', fontSize: '0.9rem' }}>
                <strong>Your request was not approved.</strong> Please visit the Barangay Hall for more information.
              </div>
            )}
            {request.status === 'Completed' && (
              <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', borderRadius: '10px', padding: '16px 20px', color: '#2e7d32', fontSize: '0.9rem', marginTop: '16px' }}>
                <strong>Your document is ready!</strong> Please visit the Barangay Hall to claim it.
              </div>
            )}
            {request.status === 'Ready for Pickup' && (
              <div style={{ background: '#f3e5f5', border: '1px solid #ce93d8', borderRadius: '10px', padding: '16px 20px', color: '#6a1b9a', fontSize: '0.9rem', marginTop: '16px' }}>
                <strong>Your document is ready for pickup!</strong> Please visit the Barangay Hall.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Empty state */}
      {searched && !request && !error && !loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>
          <p style={{ fontSize: '2rem', margin: '0 0 8px' }}>🔍</p>
          <p>Enter your reference code above to check your request.</p>
        </div>
      )}
    </section>
  );
}

// ==============================
// MAIN PAGE
// ==============================
export default function RequestServices() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeCard, setActiveCard]   = useState(null);

  const definitions = [
    { title: "Obligation/Barangay Clearance",  desc: "Cleared of all financial liabilities.",       details: "Refers to the fact that the concerned person is cleared of all the obligations he may have incurred in the barangay, as a result of fines, contributions, and other financial liabilities.", icon: "/images/responsibility.png" },
    { title: "Business Clearance",             desc: "Authorization to engage in business.",         details: "Refers to the fact that the applicant is allowed to engage in business in the barangay pursuant to barangay ordinance.", icon: "/images/business.png" },
    { title: "Water/Electric Connection",      desc: "Certification for utility compliance.",        details: "Refers to compliance with requirements prior to water or electric connection.", icon: "/images/electric.png" },
    { title: "Building/Fence Clearance",       desc: "Zoning and safety standards.",                details: "Confirms compliance with zoning ordinances and building safety standards.", icon: "/images/building.png" },
    { title: "Compliance Clearance",           desc: "Certification of no violations.",             details: "Equivalent to a Certification of Good Moral Character – confirms no violations of local laws.", icon: "/images/compliance.png" },
    { title: "Economic/Civil Status",          desc: "For assistance or civil status.",             details: "Certifies economic condition or civil status (married, single, widow, etc.).", icon: "/images/economic.png" },
    { title: "Certification of Identity",      desc: "Verification of identity.",                   details: "Verifies identity, genealogy, paternity, or other personal record details.", icon: "/images/people.png" },
    { title: "Certification of Fact",          desc: "Official verification of regulations.",       details: "Refers to the existence of barangay ordinances, rules, or regulations.", icon: "/images/economic.png" }
  ];

  const feeSections = [
    {
      title: "Clearances & Applications",
      items: [
        { name: "Sari-Sari Store Clearance",              fee: "₱100.00" },
        { name: "Driver's License Application",           fee: "₱50.00" },
        { name: "Loan Application",                       fee: "₱50.00" },
        { name: "Local Employment Application",           fee: "₱50.00" },
        { name: "Police Clearance Application",           fee: "₱50.00" },
        { name: "Electric Connection Application",        fee: "₱50.00" },
        { name: "Water Connection Application",           fee: "₱50.00" },
        { name: "Internet Connection Application",        fee: "₱50.00" },
        { name: "Commercial Store",                       fee: "₱200.00" },
        { name: "Vehicle Service Center/Talyer/Vulcanizing", fee: "₱100.00" },
        { name: "Warehouse",                              fee: "₱500.00" },
        { name: "Space Rental/Apartment",                 fee: "₱100.00/door" },
        { name: "Construction Firm",                      fee: "₱500.00" },
        { name: "Gasoline Station",                       fee: "₱500.00" },
        { name: "Internet Cafe",                          fee: "₱100.00" },
        { name: "Computer Shop",                          fee: "₱100.00" },
        { name: "Junk Shop",                              fee: "₱500.00" },
        { name: "Other Clearances Not Mentioned",         fee: "₱50.00" }
      ]
    },
    {
      title: "Permits & Certifications",
      items: [
        { name: "Certification of Residency/Personal Identity",   fee: "₱0.00" },
        { name: "Certification of Economic Status/Indigence",     fee: "₱0.00" },
        { name: "Certification of Compliance",                    fee: "₱0.00" },
        { name: "Agreement/Deed of Sale and Similar Documents",   fee: "₱100.00" },
        { name: "Building Permit",                                fee: "₱100.00" },
        { name: "Fencing Permit",                                 fee: "₱100.00" }
      ]
    },
    {
      title: "Facility Rentals",
      items: [
        { name: "Basketball Court (Whole Day/Night with Electricity)", fee: "₱700.00" },
        { name: "Basketball Court (Night Time/2 hours)",               fee: "₱200.00" }
      ]
    }
  ];

  const steps = [
    { step: "01", title: "Intent",       desc: "Approach the Punong Barangay to state your purpose." },
    { step: "02", title: "Verification", desc: "Officials verify your request details." },
    { step: "03", title: "Inspection",   desc: "Ocular inspection may be conducted." },
    { step: "04", title: "Payment",      desc: "Pay at the Barangay Treasurer's office." },
    { step: "05", title: "Receipt",      desc: "Official receipt is issued." },
    { step: "06", title: "Processing",   desc: "Secretary prepares your document." },
    { step: "07", title: "Release",      desc: "Document signed and released." }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif' }}>

      <style>{`
        .service-card {
          padding: 24px; background: #fff; border-radius: 16px; border: 1px solid #eee;
          transition: all 0.3s ease; cursor: pointer; height: 100%; box-sizing: border-box;
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }
        .service-card:hover, .service-card.active { background: #002c02 !important; transform: translateY(-5px); }
        .service-card:hover h3, .service-card:hover p, .service-card:hover img,
        .service-card.active h3, .service-card.active p, .service-card.active img {
          color: #fff !important; filter: brightness(0) invert(1);
        }
        .service-card h3 { font-size: clamp(1rem, 3vw, 1.1rem); color: #002c02; margin: 12px 0 8px; transition: 0.3s; }
        .service-card p  { font-size: clamp(0.85rem, 2.5vw, 0.95rem); color: #666; transition: 0.3s; line-height: 1.5; }
        .service-card img { width: clamp(48px, 10vw, 64px); height: clamp(48px, 10vw, 64px); }
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
        .section-title { color: #003f0e; text-align: center; margin-bottom: 24px; font-size: clamp(1.4rem, 4vw, 2rem); font-weight: bold; }
        @media (max-width: 480px) {
          .grid-container { grid-template-columns: 1fr 1fr; gap: 12px; }
          .service-card { padding: 16px 12px; }
        }
        @media (max-width: 320px) { .grid-container { grid-template-columns: 1fr; } }
        @media (max-width: 600px) {
          .fee-row { flex-direction: column; align-items: flex-start; }
          .fee-cell { text-align: left !important; padding: 5px 0 !important; }
          .track-form { flex-direction: column !important; }
          .track-btn  { width: 100% !important; }
        }
      `}</style>

      {/* Header */}
      <section style={{ backgroundColor: '#002c02', padding: 'clamp(60px, 10vw, 120px) 5% clamp(40px, 6vw, 60px)', textAlign: 'center' }}>
        <h1 style={{ color: '#ffd000', fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 15px', fontWeight: '800' }}>
          BARANGAY REQUEST SERVICE PORTAL
        </h1>
        <p style={{ color: '#fff', opacity: 0.8, maxWidth: '700px', margin: '0 auto 28px', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
          Efficient, transparent, and accessible services for the residents of San Isidro.
        </p>
        {/* Quick-jump anchor buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#submit-request" style={{ padding: '10px 22px', background: '#ffd000', color: '#002c02', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.88rem', textDecoration: 'none' }}>
            Submit a Request
          </a>
          <a href="#track-request" style={{ padding: '10px 22px', background: 'transparent', color: '#ffd000', border: '1.5px solid #ffd000', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.88rem', textDecoration: 'none' }}>
            Track My Request
          </a>
        </div>
      </section>

      <div style={{ padding: 'clamp(30px, 6vw, 60px) 5%', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Services Grid */}
        <section style={{ marginBottom: 'clamp(40px, 8vw, 70px)' }}>
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="grid-container">
            {definitions.map((item, index) => (
              <div
                key={`service-${index}`}
                className={`service-card ${activeCard === index ? 'active' : ''}`}
                onClick={() => { setActiveCard(activeCard === index ? null : index); setActiveModal(item); }}
              >
                <ServiceIcon iconPath={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees Table */}
        <section style={{ maxWidth: '1000px', margin: '0 auto 70px auto' }}>
          <h2 className="section-title">SCHEDULE OF FEES AND CHARGES</h2>
          {feeSections.map((section, idx) => (
            <div key={`section-${idx}`} style={{ marginBottom: '30px', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: '#002c02', padding: '12px 20px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#ffd000', fontWeight: 'bold', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>{section.title}</span>
                <span style={{ color: '#ffd000', fontWeight: 'bold', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>Fee</span>
              </div>
              {section.items.map((row, i) => (
                <div key={`${idx}-row-${i}`} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 20px',
                  borderBottom: i === section.items.length - 1 ? 'none' : '1px solid #f1f5f9',
                  backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb'
                }}>
                  <span style={{ color: '#1e293b', fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', paddingRight: '12px' }}>{row.name}</span>
                  <span style={{ fontWeight: '600', color: '#1e293b', fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', whiteSpace: 'nowrap' }}>{row.fee}</span>
                </div>
              ))}
            </div>
          ))}
        </section>

        {/* Step-by-Step */}
        <section style={{
          backgroundColor: '#002c02', width: '100vw', position: 'relative',
          left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw',
          padding: 'clamp(40px, 6vw, 60px) 0', marginBottom: '60px'
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>
            <h2 style={{ color: '#ffd000', textAlign: 'center', marginBottom: 'clamp(24px, 4vw, 40px)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 'bold', letterSpacing: '1px' }}>
              STEP-BY-STEP REQUEST PROCESS
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(10px, 2vw, 16px)' }}>
              {steps.map((item, i) => (
                <div key={`step-${i}`} style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', padding: 'clamp(16px, 2.5vw, 24px)' }}>
                  <div style={{ color: '#ffd000', fontWeight: 'bold', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', marginBottom: '8px' }}>{item.step}</div>
                  <h3 style={{ color: '#ffffff', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', margin: '0 0 10px 0', fontWeight: '700' }}>{item.title}</h3>
                  <p style={{ color: '#dadada', fontSize: 'clamp(0.78rem, 1.8vw, 0.88rem)', margin: 0, lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Digital Request */}
        <section id="submit-request" style={{ background: '#fff', padding: 'clamp(20px, 4vw, 40px)', borderRadius: '16px', border: '1px solid #eee', marginBottom: 'clamp(24px, 4vw, 40px)', boxSizing: 'border-box' }}>
          <h2 style={{ textAlign: 'center', color: '#003f0e', marginBottom: '20px', fontSize: 'clamp(1.8rem, 4vw, 2rem)', fontWeight: 'bold' }}>
            SUBMIT DIGITAL REQUEST
          </h2>
          <ClearanceForm />
        </section>

        {/* Track Request — your exact TrackRequest.jsx logic, embedded here */}
        <TrackRequestSection />

      </div>

      {/* Service Info Modal */}
      {activeModal && (
        <div
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000, padding: 'clamp(12px, 4vw, 20px)', boxSizing: 'border-box' }}
          onClick={() => { setActiveModal(null); setActiveCard(null); }}
        >
          <div
            style={{ background: '#002c02', color: '#fff', padding: 'clamp(20px, 4vw, 30px)', borderRadius: '16px', maxWidth: '450px', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', maxHeight: '80vh', overflowY: 'auto', border: '0.5px solid #fdd835', boxSizing: 'border-box' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => { setActiveModal(null); setActiveCard(null); }} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', color: '#ffd000', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            <h2 style={{ color: '#ffd000', marginTop: '0', marginBottom: '15px', fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', paddingRight: '30px' }}>{activeModal.title}</h2>
            <p style={{ lineHeight: '1.6', margin: '0', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>{activeModal.details}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

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
        <p style={{ fontSize: '0.85rem' }}>📧 sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);
