import React from 'react';

const Contact = () => {
  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  const emergencyNumbers = [
    { 
      label: "Liliw MPS (Police)", 
      numbers: ["0906 360 4119", "0998 598 5647", "5035-904"]
    },
    { 
      label: "Liliw BFP (Fire)", 
      numbers: ["0956 769 0379", "503-1756"]
    },
    { 
      label: "Liliw RHU (Medical)", 
      numbers: ["(049) 5633-055"]
    },
    { 
      label: "Liliw MDRRMO", 
      numbers: ["0945 135 0537", "(049) 5033-621", "0953 611 0440 (Lowland)"]
    },
    { 
      label: "Mayor's Office", 
      numbers: ["563-1001 local 103"]
    },
  ];

  const socialLinks = [
    { platform: "Facebook", name: "SK San Isidro - Liliw", link: "https://facebook.com/sksanisidroliliw", color: "#1877F2" },
    { platform: "Instagram", name: "@sksanisidro", link: "https://instagram.com", color: "#E4405F" }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{
        backgroundColor: brandGreen,
        padding: 'clamp(60px, 10vw, 120px) 5% clamp(40px, 6vw, 60px)',
        color: 'white',
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h1 style={{
          fontSize: 'clamp(1.6rem, 5vw, 3rem)',
          color: brandGold,
          fontWeight: '800',
          margin: '0 0 15px',
        }}>
          GET IN TOUCH
        </h1>
        <p style={{
          opacity: 0.8,
          maxWidth: '700px',
          margin: '0 auto',
          fontSize: 'clamp(0.88rem, 2.5vw, 1rem)',
          lineHeight: '1.7',
        }}>
          We are here to serve. Reach out for emergencies, inquiries about youth programs, or community concerns.
        </p>
      </section>

      {/* EMERGENCY HOTLINES */}
      <section style={{
        padding: 'clamp(50px, 8vw, 80px) 5% clamp(30px, 5vw, 40px)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 2rem)',
          color: brandGreen,
          textAlign: 'center',
          marginBottom: 'clamp(24px, 4vw, 40px)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
          Emergency Hotlines
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: 'clamp(12px, 2.5vw, 20px)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {emergencyNumbers.map((item, index) => (
            <div key={index} style={{
              padding: 'clamp(16px, 3vw, 25px)',
              borderRadius: '16px',
              backgroundColor: '#dddddda6',
              border: '1px solid #e2e8f0',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}>
              <h4 style={{
                margin: '0 0 12px 0',
                color: brandGreen,
                fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>
                {item.label}
              </h4>
              {item.numbers.map((num, i) => (
                <p key={i} style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
                  fontWeight: 'bold',
                  color: '#0f172a',
                  margin: '4px 0',
                  lineHeight: '1.4',
                }}>
                  {num}
                </p>
              ))}
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: 'clamp(16px, 3vw, 24px)',
          fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
          color: '#94a3b8',
          fontStyle: 'italic',
        }}>
          Please use these numbers for urgent emergencies only.
        </p>
      </section>

      {/* SOCIAL MEDIA */}
      <section style={{
        padding: 'clamp(40px, 7vw, 60px) 5%',
        backgroundColor: '#f8fafc',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 2rem)',
          color: brandGreen,
          textAlign: 'center',
          marginBottom: 'clamp(24px, 4vw, 40px)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
          Connect with Us
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(12px, 2.5vw, 20px)',
          justifyContent: 'center',
        }}>
          {socialLinks.map((soc, index) => (
            <a
              key={index}
              href={soc.link}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: 'clamp(14px, 2.5vw, 20px) clamp(20px, 4vw, 40px)',
                backgroundColor: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                border: '1px solid #e2e8f0',
                transition: '0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span style={{
                fontWeight: 'bold',
                color: soc.color,
                fontSize: 'clamp(0.85rem, 2vw, 1rem)',
              }}>
                {soc.platform}
              </span>
              <span style={{
                color: '#475569',
                fontSize: 'clamp(0.82rem, 2vw, 0.95rem)',
              }}>
                {soc.name}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* OFFICES */}
      <section style={{
        padding: 'clamp(50px, 8vw, 80px) 5% clamp(60px, 10vw, 120px)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 2rem)',
          color: brandGreen,
          textAlign: 'center',
          marginBottom: 'clamp(24px, 4vw, 40px)',
          textTransform: 'uppercase',
          fontWeight: 'bold',
        }}>
          Our Offices
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(16px, 3vw, 40px)',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          <div style={{
            padding: 'clamp(24px, 4vw, 40px)',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            backgroundColor: "#dddddda6'",
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
          }}>
            <h3 style={{
              color: brandGreen,
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              marginBottom: '12px',
            }}>
              SK San Isidro Office
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: '1.7',
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              margin: '0 0 12px',
            }}>
              📍 2nd Floor, Barangay Hall Building<br />
              San Isidro, Liliw, Laguna<br />
              Philippines, 4004
            </p>
            <p style={{
              fontWeight: 'bold',
              fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
              color: '#0f172a',
              margin: 0,
            }}>
              Office Hours: Mon–Fri (8:00 AM – 5:00 PM)
            </p>
          </div>

          <div style={{
            padding: 'clamp(24px, 4vw, 40px)',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            backgroundColor: 'white',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
            boxSizing: 'border-box',
          }}>
            <h3 style={{
              color: brandGreen,
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              marginBottom: '12px',
            }}>
              Sangguniang Barangay
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: '1.7',
              fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
              margin: '0 0 12px',
            }}>
              For Barangay Clearances, Indigency, and Blotter concerns,
              please visit the main Barangay Hall Ground Floor.
            </p>
            <p style={{
              fontWeight: 'bold',
              fontSize: 'clamp(0.82rem, 2vw, 0.9rem)',
              color: '#0f172a',
              margin: 0,
            }}>
              Contact: (049) XXX-XXXX
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const Footer = () => (
  <footer style={{
    backgroundColor: '#002c02',
    padding: 'clamp(40px, 6vh, 60px) 5%',
    color: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
  }}>
    <div style={{ textAlign: 'center' }}>
      <h2 style={{
        color: '#ffd000',
        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
        margin: '0 0 8px',
      }}>
        BARANGAY SAN ISIDRO
      </h2>
      <p style={{
        opacity: 0.6,
        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
        margin: 0,
      }}>
        Liliw, Laguna • Service with Transparency
      </p>
      <div style={{
        marginTop: '30px',
        fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
        opacity: 0.3,
      }}>
        © 2026 Designed and Developed by SK Vince M. Villanueva.
      </div>
    </div>
  </footer>
);

export default Contact;