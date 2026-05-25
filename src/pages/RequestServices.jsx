import React, { useState } from 'react';
import ClearanceForm from '../components/ClearanceForm';

// Custom Icon Component
const ServiceIcon = ({ iconPath }) => (
  <img src={iconPath} alt="Service Icon" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
);

export default function RequestServices() {
  const [activeModal, setActiveModal] = useState(null);

  const definitions = [
    { title: "Obligation/Barangay Clearance", desc: "Cleared of all financial liabilities.", details: "Refers to the fact that the concerned person is cleared of all the obligations he may have incurred in the barangay, as a result of fines, contributions, and other financial liabilities.", icon: "/images/responsibility.png" },
    { title: "Business Clearance", desc: "Authorization to engage in business.", details: "Refers to the fact that the applicant is allowed to engage in business in the barangay pursuant to barangay ordinance.", icon: "/images/business.png" },
    { title: "Water/Electric Connection", desc: "Certification for utility compliance.", details: "Refers to compliance with requirements prior to water or electric connection.", icon: "/images/electric.png" },
    { title: "Building/Fence Clearance", desc: "Zoning and safety standards.", details: "Confirms compliance with zoning ordinances and building safety standards.", icon: "/images/building.png" },
    { title: "Compliance Clearance", desc: "Certification of no violations.", details: "Equivalent to a “Certification of Good Moral Character” – confirms no violations of local laws.", icon: "/images/compliance.png" },
    { title: "Economic/Civil Status", desc: "For assistance or civil status.", details: "Certifies economic condition or civil status (married, single, widow, etc.).", icon: "/images/economic.png"},
    { title: "Certification of Identity", desc: "Verification of identity.", details: "Verifies identity, genealogy, paternity, or other personal record details.", icon: "/images/people.png"},
    { title: "Certification of Fact", desc: "Official verification of regulations.", details: "Refers to the existence of barangay ordinances, rules, or regulations.", icon: "/images/economic.png"}
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif' }}>
      
      <style>{`
        .service-card { padding: 30px; background: #fff; border-radius: 16px; border: 1px solid #eee; transition: all 0.3s ease; cursor: pointer; height: 100%; box-sizing: border-box; }
        .service-card:hover { background: #002c02; transform: translateY(-5px); }
        
        /* Updated rule: Targets h3, p, and the image icon for white color/filter on hover */
        .service-card:hover h3, 
        .service-card:hover p, 
        .service-card:hover img { 
          color: #fff !important; 
          filter: brightness(0) invert(1); 
        }
        
        .grid-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        @media (max-width: 600px) { .fee-row { flex-direction: column; align-items: flex-start; } .fee-cell { text-align: left !important; padding: 5px 0 !important; } }
      `}</style>

      {/* Header */}
      <section style={{ backgroundColor: '#002c02', padding: '80px 5%', textAlign: 'center' }}>
        <h1 style={{ color: '#ffd000', fontSize: 'clamp(1.8rem, 5vw, 3rem)', margin: '0 0 15px', fontWeight: "bold" }}>BARANGAY SERVICE REQUEST PORTAL</h1>
        <p style={{ color: '#fff', opacity: 0.8, maxWidth: '700px', margin: '0 auto' }}>Efficient, transparent, and accessible services for the residents of San Isidro.</p>
      </section>

      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Services */}
        <section style={{ marginBottom: '70px' }}>
          <h2 style={{ color: '#003f0e', textAlign: 'center', marginBottom: '30px' }}>OUR SERVICES</h2>
          <div className="grid-container">
            {definitions.map((item, index) => (
              <div key={index} className="service-card" onClick={() => setActiveModal(item)}>
                <ServiceIcon iconPath={item.icon} />
                <h3 style={{ color: '#002c02', margin: '15px 0 10px', transition: '0.3s' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#666', transition: '0.3s' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      

        {/* Fees Table */}
<section style={{ marginBottom: '70px', padding: '0 5%', maxWidth: '1000px', margin: '0 auto 70px auto' }}>
  <h2 style={{ color: '#003f0e', textAlign: 'center', marginBottom: '40px' }}>SCHEDULE OF FEES AND CHARGES</h2>
  
  {[
    {
    "title": "Clearances & Applications",
    "items": [
      { "name": "Sari-Sari Store Clearance", "fee": "₱100.00" },
      { "name": "Driver's License Application", "fee": "₱50.00" },
      { "name": "Loan Application", "fee": "₱50.00" },
      { "name": "Local Employment Application", "fee": "₱50.00" },
      { "name": "Police Clearance Application", "fee": "₱50.00" },
      { "name": "Electric Connection Application", "fee": "₱50.00" },
      { "name": "Water Connection Application", "fee": "₱50.00" },
      { "name": "Internet Connection Application", "fee": "₱50.00" },
      { "name": "Commercial Store", "fee": "₱200.00" },
      { "name": "Vehicle Service Center/Talyer/Vulcanizing", "fee": "₱100.00" },
      { "name": "Warehouse", "fee": "₱500.00" },
      { "name": "Space Rental/Apartment", "fee": "₱100.00/door" },
      { "name": "Construction Firm", "fee": "₱500.00" },
      { "name": "Gasoline Station", "fee": "₱500.00" },
      { "name": "Internet Cafe", "fee": "₱100.00" },
      { "name": "Computer Shop", "fee": "₱100.00" },
      { "name": "Junk Shop", "fee": "₱500.00" },
      { "name": "Other Clearances Not Mentioned", "fee": "₱50.00" }
    ]},
    { "title": "Permits & Certifications",
    "items": [
      { "name": "Certification of Residency/Personal Identity", "fee": "₱0.00" },
      { "name": "Certification of Economic Status/Indigence", "fee": "₱0.00" },
      { "name": "Certification of Compliance", "fee": "₱0.00" },
      { "name": "Agreement/Deed of Sale and Similar Documents", "fee": "₱100.00" },
      { "name": "Building Permit", "fee": "₱100.00" },
      { "name": "Fencing Permit", "fee": "₱100.00" }
    ]},
    { title: "Facility Rentals", items: [
      { name: "Basketball Court Use By Private Organization and Outsiders (Whole Day/Night with Electricity)", fee: "₱700.00" },
      { name: "Basketball Court (Night Time/2 hours)", fee: "₱200.00" }
    ]}
  ].map((section, idx) => (
    <div key={idx} style={{ marginBottom: '30px', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
      {/* Dark Header Strip */}
      <div style={{ background: '#002c02', padding: '12px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ color: '#ffd000', fontWeight: 'bold' }}>{section.title}</span>
        <span style={{ color: '#ffd000', fontWeight: 'bold' }}>Fee</span>
      </div>
      
      {/* Fee Rows */}
      {section.items.map((row, i) => (
        <div key={i} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          padding: '12px 20px', 
          borderBottom: i === section.items.length - 1 ? 'none' : '1px solid #f1f5f9',
          backgroundColor: '#ffffff'
        }}>
          <span style={{ color: '#1e293b', fontSize: '0.95rem' }}>{row.name}</span>
          <span style={{ fontWeight: '600', color: '#1e293b' }}>{row.fee}</span>
        </div>
      ))}
    </div>
  ))}
</section>

      {/* STEP-BY-STEP PROCESS - Full Width Section */}
<section style={{ 
  backgroundColor: '#002c02', 
  width: '100vw', 
  position: 'relative', 
  left: '50%', 
  right: '50%', 
  marginLeft: '-50vw', 
  marginRight: '-50vw',
  padding: '60px 0', 
  marginBottom: '60px' 
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
    <h2 style={{ color: '#ffd000', marginBottom: '40px', textAlign: 'center' }}>STEP-BY-STEP REQUEST PROCESS</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
      {[
        { step: "01", title: "Intent", desc: "Approach the Punong Barangay to state your purpose." },
        { step: "02", title: "Verification", desc: "Officials verify your request details." },
        { step: "03", title: "Inspection", desc: "Ocular inspection may be conducted." },
        { step: "04", title: "Payment", desc: "Pay at the Barangay Treasurer's office." },
        { step: "05", title: "Receipt", desc: "Official receipt is issued." },
        { step: "06", title: "Processing", desc: "Secretary prepares your document." },
        { step: "07", title: "Release", desc: "Document signed and released." }
      ].map((item, i) => (
        <div key={i} style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ color: '#ffd000', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '5px' }}>{item.step}</div>
          <h3 style={{ color: '#fff', fontSize: '1.1rem', margin: '0 0 10px 0' }}>{item.title}</h3>
          <p style={{ color: '#cfcfcf', fontSize: '0.85rem', margin: 0 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Digital Form */}
        <section style={{ background: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid #eee', marginBottom: '60px' }}>
          <h2 style={{ textAlign: 'center', color: '#003f0e', marginBottom: '20px' }}>SUBMIT DIGITAL REQUEST</h2>
          <ClearanceForm />
        </section>
      </div>

      {activeModal && (
  <div 
    style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      background: 'rgba(0,0,0,0.85)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 10000, 
      padding: '20px' 
    }} 
    onClick={() => setActiveModal(null)}
  >
    <div 
      style={{ 
        background: '#002c02', 
        color: '#fff', 
        padding: '30px', 
        borderRadius: '16px', 
        maxWidth: '450px', 
        width: '100%', // Added to ensure it fills available space
        position: 'relative',
        display: 'flex',       // Added to manage vertical stacking
        flexDirection: 'column', // Added to manage vertical stacking
        maxHeight: '80vh',     // Prevents modal from being taller than screen
        overflowY: 'auto',
        border: '0.5px solid #fdd835'     // Allows scrolling if text is very long
      }} 
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={() => setActiveModal(null)} 
        style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '15px', 
          background: 'none', 
          border: 'none', 
          color: '#ffd000', 
          fontSize: '24px', 
          cursor: 'pointer' 
        }}
      >&times;</button>
      
      {/* Ensure clear spacing between elements */}
      <h2 style={{ color: '#ffd000', marginTop: '0', marginBottom: '15px', fontSize: '1.5rem' }}>
        {activeModal.title}
      </h2>
      <p style={{ lineHeight: '1.6', margin: '0', fontSize: '1rem' }}>
        {activeModal.details}
      </p>
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
        <p style={{ fontSize: '0.85rem' }}>📧 @sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);
