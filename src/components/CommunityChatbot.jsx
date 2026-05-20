import React, { useState, useRef, useEffect } from 'react';
import { getKuyaIsidroResponse } from './aiService';
import './Chatbot.css';

export default function CommunityChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', parts: [{ text: "Mabuhay! Ako si Kuya Isidro. Paano ko po kayo matutulungan ngayon?" }] }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

 const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    // I-update ang UI para ipakita ang tanong ng user
    setMessages((prev) => [...prev, { role: 'user', parts: [{ text: userText }] }]);
    setIsLoading(true);

    try {
      const responseText = await getKuyaIsidroResponse(userText, messages);
      
      // 1. Alisin ang '**' para maging normal ang text
      // 2. Palitan ang '*' ng '\n' para maging listahan ang sagot
      const cleanResponse = responseText
        .replace(/\*\*/g, '')
        .replace(/\*/g, '\n');
      
      setMessages((prev) => [...prev, { role: 'model', parts: [{ text: cleanResponse }] }]);
    } catch (error) {
      console.error("AI Service Error:", error);
      setMessages((prev) => [...prev, { 
        role: 'model', 
        parts: [{ text: "Paumanhin, may kaunting aberya sa koneksyon. Maaari mo bang subukan ulit?" }] 
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="chat-wrapper">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <img src="/kuyaisidro.png" alt="Kuya Isidro" className="chat-avatar" />
              <h3 className="font-bold">Kuya Isidro AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
          </div>
          
          <div className="chat-body">
  {messages.map((m, i) => (
    <div 
      key={i} 
      className={`message ${m.role === 'user' ? 'user-msg' : 'bot-msg'}`}
      // Ang 'white-space: pre-wrap' ay mahalaga para mabasa ang \n at ipakita bilang bagong linya
      style={{ whiteSpace: 'pre-wrap' }} 
    >
      {m.parts[0].text}
    </div>
  ))}
            
            {isLoading && (
              <div className="loading-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <form onSubmit={handleSendMessage} className="chat-input-area">
            <input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Magtanong kay Kuya..." 
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>Ipadala</button>
          </form>
        </div>
      )}

      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
  {isOpen ? (
    <span style={{ fontSize: '24px', fontWeight: 'bold' }}>✕</span>
  ) : (
    <img 
      src="/kuyaisidro.png" 
      alt="Kuya Isidro" 
    />
  )}
</button>
    </div>
  );
}