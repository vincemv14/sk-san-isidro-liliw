import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Para sa mabilis na paglipat ng pahina
import Fuse from 'fuse.js';
import kuyaIsidroAvatar from '../assets/kuyaisidro.png'; 
import { botKnowledge } from '../components/botKnowledge'; // Import ng pinagsama-samang kaalaman ng site

const CommunityChatbot = () => {
  const navigate = useNavigate(); // Hook para sa routing at navigation
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Magandang araw, Ka-Isidro! 👋 Ako ang iyong Kuya Isidro virtual assistant. Ano ang maipaglilingkod ko sa iyo ngayon?", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const brandGreen = '#002c02';
  const brandGold = '#ffd000';

  // Awtomatikong mag-i-scroll pababa kapag may bagong mensahe
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Fuzzy Search Engine gamit ang Fuse.js
  const getBotResponse = (userText) => {
    const text = userText.toLowerCase().trim();

    // Sasaluhin muna ang mga karaniwang pagbati (Greetings)
    if (/^(hello|hi|gandang araw|kamusta|magandang umaga|magandang hapon)/.test(text)) {
      return {
        text: "Magandang araw din sa iyo, Ka-Isidro! 😊 Sana ay maayos ang iyong araw ngayon dito sa Liliw. Ano ba ang maitutulong ko ngayon? Magtanong ka lang tungkol sa mga nilalaman ng ating website tulad ng budget disclosure, clearance requirements, o liga!",
        route: null
      };
    }

    // Pag-configure kay Fuse.js gamit ang itinamang 'botKnowledge' array data
    const fuse = new Fuse(botKnowledge, {
      keys: ['keys'],
      threshold: 0.4, // Mas mababa = mas strikto, mas mataas = mas maluwag sa typos
    });

    const result = fuse.search(text);

    if (result.length > 0) {
      // Ika-capture ang pinakamalapit na match at ibabalik ang kumpletong detalye nito
      return {
        text: result[0].item.answer,
        route: result[0].item.route,
        pageName: result[0].item.page
      };
    }

    // Witty Fallback kapag walang nahanap na tugmang keyword
    return {
      text: "Pasensya na, Ka-Isidro, hindi ko pa yata lubos na kabisado ang eksaktong detalye sa tanong na 'yan sa ating website. 😅 Patuloy pa akong nag-aaral! Maaari mo ring bisitahin ang ating 'Disclosure Board' o 'Homepage' para maghanap ng manual.",
      route: null
    };
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate net thinking delay (700ms) para mas natural tingnan
    setTimeout(() => {
      const botReplyData = getBotResponse(userMessage.text);
      
      const botReply = { 
        id: Date.now() + 1, 
        text: botReplyData.text, 
        route: botReplyData.route,
        pageName: botReplyData.pageName,
        sender: 'bot' 
      };
      setMessages((prev) => [...prev, botReply]);
    }, 700);
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 1000, fontFamily: 'sans-serif' }}>
      
      {/* FLOATING ACTION TOGGLE BUTTON */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: brandGreen,
          border: 'none',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? <span style={{ fontSize: '24px', color: brandGold }}>❌</span> : (
          <img 
            src={kuyaIsidroAvatar} 
            alt="Kuya Isidro Icon" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        )}
      </button>

      {/* CHAT WINDOW INTERFACE */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '75px',
          right: '0',
          width: 'clamp(300px, 80vw, 360px)',
          height: '450px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          
          // ---- INUPDATE NA BORDER AT FLOATING SHADOW ----
          border: '1px solid #aaaaaa', 
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
          // ----------------------------------------------

          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          
          {/* HEADER BAR */}
          <div style={{ backgroundColor: brandGreen, padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative', width: '40px', height: '40px' }}>
              <img 
                src={kuyaIsidroAvatar} 
                alt="Kuya Isidro Avatar" 
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${brandGold}` }} 
              />
              {/* Online Green Badge */}
              <div style={{ position: 'absolute', bottom: '0', right: '0', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e', border: '2px solid #002c02' }}></div>
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 'bold', color: brandGold }}>Kuya Isidro Bot</h4>
              <small style={{ opacity: 0.7, fontSize: '0.75rem' }}>Kasama't kaagapay ng mga Kabataan</small>
            </div>
          </div>

          {/* MESSAGES HUB */}
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.sender === 'user' ? brandGreen : '#e2e8f0',
                  color: msg.sender === 'user' ? '#ffffff' : '#0f172a',
                  padding: '10px 14px',
                  borderRadius: msg.sender === 'user' ? '14px 14px 0 14px' : '14px 14px 14px 0',
                  maxWidth: '80%',
                  fontSize: '0.88rem',
                  lineHeight: '1.4',
                  wordBreak: 'break-word',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                {/* Text answer container */}
                <div>{msg.text}</div>
                
                {/* DYNAMIC SHORTCUT LINKS REDIRECTION */}
                {msg.sender === 'bot' && msg.route && (
                  <button
                    onClick={() => {
                      if (msg.route.startsWith('#')) {
                        // KUNG ANCHOR LINK (e.g., #services): Swabeng bababa ang scroll sa part na yan ng page
                        const element = document.getElementById(msg.route.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        // KUNG ROUTE LINK (e.g., /disclosure): Gagamitin ang React Router para lumipat ng page
                        navigate(msg.route);
                      }
                    }}
                    style={{
                      marginTop: '4px',
                      alignSelf: 'flex-start',
                      backgroundColor: brandGold,
                      color: brandGreen,
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    Tingnan sa {msg.pageName} →
                  </button>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* MESSAGE BOX TEXT INPUT FORM */}
          <form onSubmit={handleSendMessage} style={{ display: 'flex', padding: '10px', borderTop: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Magtanong kay Kuya Isidro..."
              style={{
                flex: 1,
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                outline: 'none',
                fontSize: '0.85rem'
              }}
            />
            <button 
              type="submit"
              style={{
                marginLeft: '8px',
                backgroundColor: brandGreen,
                color: brandGold,
                border: 'none',
                padding: '0 16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              Ipadala
            </button>
          </form>

        </div>
      )}
    </div>
  );
};

export default CommunityChatbot;