import React from 'react';

const About = () => {

  const headingStyle = {
    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '25px',
    display: 'inline-block',
    borderBottom: '4px solid #ffd000'
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <div style={{ flex: 1 }}>

        {/* 1. INTRODUCTION */}
        <section style={{
          backgroundColor: '#002c02',
          color: 'white',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ ...headingStyle, color: '#ffffff' }}>INTRODUCTION</h2>
            <p style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
              lineHeight: '1.8',
              opacity: 0.9,
              marginTop: '10px'
            }}>
              Welcome to the heart of Liliw, Laguna. Barangay San Isidro stands as a
              beacon of heritage and progress. As a key player in the Tsinelas Capital,
              our community is built on a foundation of unity, transparency, and a
              drive toward digital innovation.
            </p>
          </div>
        </section>

        {/* 2. GEOGRAPHY */}
        <section style={{
          backgroundColor: '#ffffff',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'flex',
            gap: '40px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <div style={{ flex: '1 1 280px' }}>
              <h2 style={{ ...headingStyle, color: '#003f0e', borderBottomColor: '#538b56' }}>GEOGRAPHY</h2>
              <p style={{
                color: '#334155',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                lineHeight: '1.7',
                marginTop: '10px'
              }}>
                Barangay San Isidro is situated in the scenic municipality of Liliw, Laguna.
                Known for its cool climate and proximity to Mt. Banahaw, our geography provides
                a lush, green environment that supports both our traditional tsinelas industry
                and local agriculture.
              </p>
            </div>

            {/* GOOGLE MAPS EMBED */}
            <div style={{
              flex: '1 1 280px',
              height: 'clamp(250px, 40vw, 400px)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <iframe
                title="Barangay San Isidro Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15469.761427503468!2d121.42875185!3d14.1249767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ba0f488663d%3A0x6b865586616e0331!2sSan%20Isidro%2C%20Liliw%2C%20Laguna!5e0!3m2!1sen!2sph!4v1715690000000!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 3. POPULATION */}
        <section style={{
          backgroundColor: '#001a01',
          color: 'white',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, color: '#ffffff' }}>POPULATION</h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              maxWidth: '800px',
              margin: '10px auto 40px',
              lineHeight: '1.7',
              opacity: 0.9
            }}>
              San Isidro is home to a vibrant community. Our population
              is composed of dedicated professionals, skilled artisans, and a
              dynamic youth sector committed to service.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <StatCard value="531+" label="Total Residents" isDarkSection={true} />
              <StatCard value="120+" label="Households" isDarkSection={true} />
              <StatCard value="45%" label="Youth Population" isDarkSection={true} />
            </div>
          </div>
        </section>

        {/* 4. AREA */}
        <section style={{
          backgroundColor: '#ffffff',
          color: '#334155',
          padding: 'clamp(50px, 8vh, 80px) 5%',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ ...headingStyle, color: '#003f0e', borderBottomColor: '#538b56' }}>AREA</h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              maxWidth: '800px',
              margin: '10px auto 40px',
              color: '#334155',
              lineHeight: '1.7',
              opacity: 0.9
            }}>
              The geographical area encompasses distinct agricultural lands and residential zones 
              that form the cornerstone of local development plans and community layout maps.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <StatCard value="75.37 ha" label="Area" isDarkSection={false} />
              <div style={{ display: 'none' }}><StatCard value="120+" label="Households" isDarkSection={false} /></div> {/* Preserved layout structure safely */}
              <StatCard value="92.17%" label="Agricultural Area" isDarkSection={false} />
              <StatCard value="5.89 ha" label="Residential" isDarkSection={false} />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

// --- Sub-components ---
// Fixed the tag nesting compilation error and simplified into a clean, reusable component
const StatCard = ({ value, label, isDarkSection }) => (
  <div style={{
    background: isDarkSection ? 'rgba(255,255,255,0.05)' : '#f8fafc',
    padding: 'clamp(20px, 4vw, 30px)',
    borderRadius: '15px',
    flex: '1 1 140px',
    maxWidth: '250px',
    border: isDarkSection ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
    boxSizing: 'border-box',
    textAlign: 'center'
  }}>
    <h3 style={{
      color: isDarkSection ? '#ffd000' : '#003f0e',
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      margin: '0 0 10px 0',
      fontWeight: 'bold'
    }}>
      {value}
    </h3>
    <span style={{
      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: isDarkSection ? '#cbd5e1' : '#64748b',
      fontWeight: '600',
      display: 'block'
    }}>
      {label}
    </span>
  </div>
);

// --- Footer ---
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
        <p style={{ fontSize: '0.85rem' }}>📧 contact@sangguniangkabataanngsanisidro@gmail.com</p>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.8rem', opacity: 0.6 }}>
      © 2026 Barangay San Isidro. Designed and Developed by SK Vince M. Villanueva.
    </div>
  </footer>
);

export default About;