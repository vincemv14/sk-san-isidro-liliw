import React, { useState, useEffect } from 'react';

// Custom Icon Component
const ServiceIcon = ({ name }) => {
  const icons = {
    "Obligation": <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    "Business": <path d="M3 3h18v18H3zM9 3v18M15 3v18" />,
    "Utility": <path d="M12 2v20M2 12h20" />,
    "Building": <path d="M3 21h18M5 21V7l7-4 7 4v14" />,
    "GoodMoral": <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />,
    "Economic": <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
    "Identity": <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    "Fact": <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  };
  return (
    <svg className="icon-svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#002c02" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[name] || icons["Fact"]}
    </svg>
  );
};

const RequestServices = () => {
  // FIXED: Initialized activeModal state
  const [activeModal, setActiveModal] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  const servicePrices = {
    "sari-sari": 100, "commercial": 200, "drivers": 50, "loan": 50,
    "employment": 50, "police": 50, "utility": 50, "vehicle": 100,
    "warehouse": 500, "space": 100, "internet-cafe": 100, "other": 50,
    "residency": 0, "deed": 100, "building": 100, "fencing": 100
  };

  useEffect(() => {
    const price = servicePrices[selectedService] || 0;
    setTotal(price * quantity);
  }, [selectedService, quantity]);

  // FIXED: Added 'details' to definitions
  const definitions = [
    { title: "Obligation/Barangay Clearance", desc: "Cleared of all financial liabilities or fines.", details: "Refers to the fact that the concerned person is cleared of all the obligations he may have incurred in the barangay, as a result of fines, contributions, and other financial liabilities lawfully imposed by the barangay, or by the Lupon Tagapamayapa.", icon: "Obligation" },
    { title: "Business Clearance", desc: "Authorization to engage in business within the Barangay.", details: "Refers to the fact that the applicant is allowed to engage in business in the barangay pursuant to barangay ordinance, existing law, and subject to the compliance of the requirements compelled by the city ordinance", icon: "Business" },
    { title: "Utility Connection", desc: "Certification for water or electric connection requirements.", details: "Refers to the fact that the applicant for water or electric connection has complied with the requirements prior to the connection for water or electricity, and that he is cleared from such requirements imposed by lawful authorities.", icon: "Utility" },
    { title: "Building/Fence Permit", desc: "Confirms compliance with zoning and safety standards.", details: "Refers to the fact that the applicant for building permit has complied with the zoning ordinance of the municipality, and that the building to be constructed does not endanger the health of the neighboring residents or destroy the environmental impact of society", icon: "Building" },
    { title: "Compliance Barangay Clearance", desc: "Certification of no violations of local laws.", details: "Refers to the fact that the applicant has not violated any law or ordinance implemented by the duly constituted authorities. It is equivalent to a “Certification of Good Moral Character.", icon: "GoodMoral" },
    { title: "Economic/Civil Status", desc: "Certification for economic assistance or civil status.", details: "Refers to the economic condition of a person so as to avail of any favor, upon certification by the Punong Barangay and civil status of a person in any of the following conditions: married, single, widow, widower, separated in fact, or separated by law", icon: "Economic" },
    { title: "Personal Identity", desc: "Verification of identity, genealogy, or record.", icon: "Identity", details: "Refers to the identity of a person in any of the following conditions: genealogy, paternity, deceased, missing, unknown, bad record, good record, reputation, honor, and any condition which points to a person's identity" },
    { title: "Fact/Regulation", desc: "Official verification of Barangay regulations.", icon: "Fact", details: "Refers to the existence of barangay ordinances, rules, or regulations which should be observed or complied with by the affected party" }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ 
  backgroundColor: '#002c02', 
  padding: 'clamp(60px, 10vw, 120px) 5% clamp(40px, 6vw, 60px)', 
  textAlign: 'center',
  width: '100%',
  boxSizing: 'border-box' // Essential to prevent layout overflow
}}>
  <h1 style={{ 
    color: '#ffd000', 
    margin: '0 0 15px 0', 
    fontSize: 'clamp(1.8rem, 5vw, 3rem)', // Scales smoothly
    fontWeight: '800',
    lineHeight: '1.2'
  }}>
    BARANGAY SERVICE REQUEST PORTAL
  </h1>
  <p style={{ 
    color: '#ffffff', 
    fontSize: 'clamp(0.9rem, 2vw, 1.25rem)', 
    margin: '0 auto', 
    maxWidth: '700px', // Prevents text from being too wide on desktop
    lineHeight: '1.6', 
    opacity: '0.9' 
  }}>
    Efficient, transparent, and accessible services for the residents of San Isidro.
  </p>
</section>

      <div style={{ padding: '60px 10%' }}>
        <style>{`.service-card { padding: 30px; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: all 0.3s ease; border: 1px solid #eee; } .service-card:hover { background: #002c02; } .service-card:hover h3, .service-card:hover p { color: #ffffff !important; } .service-card:hover .icon-svg { stroke: #ffffff; }`}</style>

        <section style={{ marginBottom: '70px' }}>
          <h2 style={{ color: '#003f0e', marginBottom: '30px', textAlign: 'center' }}>UNDERSTANDING OUR SERVICES</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
            {definitions.map((item, index) => (
              <div key={index} className="service-card" onClick={() => setActiveModal(item)} style={{ cursor: 'pointer' }}>
                <div className="icon-wrapper" style={{ marginBottom: '15px' }}><ServiceIcon name={item.icon} /></div>
                <h3 style={{ color: '#002c02', fontSize: '1.25rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>{item.desc}</p>
                <div style={{ color: '#002c02', fontWeight: 'bold', marginTop: '10px', fontSize: '0.85rem' }}>Click to See Details →</div>
              </div>
            ))}
          </div>
        </section>

      {activeModal && (
  <div 
    style={{ 
      position: 'fixed', 
      top: 0, left: 0, 
      width: '100%', height: '100%', 
      background: 'rgba(0,0,0,0.85)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      zIndex: 9999,
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
        border: '1px solid #ffd000', 
        maxWidth: '450px', 
        width: '100%', 
        position: 'relative',
        textAlign: 'center' // Centering content helps with visual balance
      }} 
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button 
        style={{ 
          position: 'absolute', 
          top: '10px', right: '15px', 
          background: 'none', 
          border: 'none', 
          color: '#ffd000', 
          fontSize: '24px', 
          cursor: 'pointer' 
        }} 
        onClick={() => setActiveModal(null)}
      >
        &times;
      </button>

      {/* Title with word-break to prevent overlap */}
      <h2 style={{ 
        color: '#ffd000', 
        margin: '0 0 20px 0', 
        fontSize: '1.5rem', 
        wordBreak: 'break-word', 
        lineHeight: '1.2' 
      }}>
        {activeModal.title}
      </h2>
      
      {/* Description with clear margins */}
      <p style={{ 
        fontSize: '1rem', 
        lineHeight: '1.5', 
        color: '#e0e0e0',
        margin: '0',
        textAlign: 'left'
      }}>
        {activeModal.details}
      </p>
    </div>
  </div>
)}
        <section style={{ backgroundColor: '#002c02', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ color: '#ffd000', marginBottom: '50px', fontSize: '2.5rem', textAlign: 'center' }}>STEP-BY-STEP REQUEST PROCESS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', justifyItems: 'center' }}>
              {[
                { step: "01", title: "Intent", desc: "Approach the Punong Barangay to state your purpose." },
                { step: "02", title: "Verification", desc: "Officials will verify the authenticity of your request." },
                { step: "03", title: "Inspection", desc: "Research or ocular inspection may be conducted." },
                { step: "04", title: "Payment", desc: "Direct to the Barangay Treasurer to pay the fee." },
                { step: "05", title: "Receipt", desc: "The Treasurer issues an official receipt." },
                { step: "06", title: "Processing", desc: "The Secretary prepares the document." },
                { step: "07", title: "Release", desc: "The Punong Barangay signs and releases the document." }
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#333f36', padding: '25px', borderRadius: '16px', width: '100%', maxWidth: '350px', boxSizing: 'border-box' }}>
                  <div style={{ color: '#ffd000', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '8px' }}>{item.step}</div>
                  <h3 style={{ color: '#ffffff', margin: '0 0 10px 0', fontSize: '1.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#e0e0e0', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '60px 5%' }}>
          <h2 style={{ color: '#003f0e', marginBottom: '40px', textAlign: 'center', fontSize: '2rem' }}>SCHEDULE OF FEES AND CHARGES</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: "Clearances & Applications", data: [
                { name: "Sari-Sari Store", fee: "₱100.00" }, { name: "Commercial Store", fee: "₱200.00" },
                { name: "Driver's License/Loan/Employment/Police Clearance", fee: "₱50.00" },
                { name: "Utility Applications", fee: "₱50.00" }, { name: "Vehicle Service/Internet Cafe/Computer Shop", fee: "₱100.00" },
                { name: "Warehouse/Construction/Gasoline/Junk Shop", fee: "₱500.00" }, { name: "Space Rental/Apartment", fee: "₱100.00/door" },
                { name: "Other Clearances", fee: "₱50.00" }
              ]},
              { title: "Permits & Certifications", data: [
                { name: "Residency/ID/Economic Status/Compliance", fee: "₱0.00" }, { name: "Agreement/Deed of Sale", fee: "₱100.00" },
                { name: "Building Permit", fee: "₱100.00" }, { name: "Fencing Permit", fee: "₱100.00" }
              ]},
              { title: "Facility Rentals", data: [
                { name: "Basketball Court (Whole Day/Night w/ Elec)", fee: "₱700.00" }, { name: "Basketball Court (Night Time/2 hrs)", fee: "₱200.00" }
              ]}
            ].map((section, idx) => (
              <table key={idx} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', tableLayout: 'fixed' }}>
                <thead>
                  <tr style={{ background: '#002c02', color: '#ffd000' }}>
                    <th style={{ padding: '15px', textAlign: 'left', width: '70%' }}>{section.title}</th>
                    <th style={{ padding: '15px', textAlign: 'right', width: '30%' }}>Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {section.data.map((item, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#f9fff9' : '#ffffff', borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '15px', wordWrap: 'break-word', fontSize: '0.9rem' }}>{item.name}</td>
                      <td style={{ padding: '15px', textAlign: 'right', fontWeight: 'bold', color: '#002c02', fontSize: '0.9rem' }}>{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#002c02', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '80px 20px', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1500px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ color: '#ffd000', marginBottom: '10px', fontSize: '2rem' }}>SUBMIT OFFICIAL REQUEST</h2>
            <p style={{ color: '#ffffff', marginBottom: '30px' }}>Please check the fees above, calculate your total, and fill out the form below.</p>
            <div style={{ background: '#fff', padding: '10px', borderRadius: '16px', overflow: 'hidden' }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfCstpIz8Q-54BeKiuaZTiAQQA2tyx1K0mlMr9L7o2GcLv2Zw/viewform" 
                width="100%" height="1000" frameBorder="0" title="Barangay Request Form"
              >Loading…</iframe>
            </div>
            <p style={{ color: '#ffd000', marginTop: '25px', fontSize: '0.9rem', lineHeight: '1.6' }}>
              *Note: Payment must be coordinated with SB Treasurer <strong>Jhommel Montevirgen</strong> or SB Secretary <strong>Lendel Almares</strong>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer style={{ backgroundColor: '#002c02', padding: '60px 10%', color: '#ffffff' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
      <div style={{ flex: '1 1 300px' }}>
        <h2 style={{ color: '#ffd000', margin: '0 0 15px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>BARANGAY SAN ISIDRO</h2>
        <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>Official Community Portal for a progressive and transparent San Isidro Liliw, Laguna.</p>
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

export default RequestServices;