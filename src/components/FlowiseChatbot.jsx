import { useState, useRef, useEffect } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default function FlowiseChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Magiliw na araw! Ako si Kuya Isidro Chatbot, ang AI assistant ng Barangay San Isidro, Liliw, Laguna. Paano kita matutulungan?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...updatedMessages, { role: "assistant", content: "Sorry, may error. Subukan ulit." }]);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .chatbot-window {
          position: fixed;
          /* Default: desktop */
          bottom: 90px;
          right: 24px;
          width: 360px;
          height: 500px;
          z-index: 9999;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .chatbot-window {
            width: calc(100vw - 32px);
            right: 16px;
            bottom: 80px;
            height: 420px;
          }
        }

        /* Galaxy Fold and very small screens */
        @media (max-width: 320px) {
          .chatbot-window {
            width: calc(100vw - 24px);
            right: 12px;
            bottom: 72px;
            height: 380px;
          }
          .chatbot-toggle {
            width: 46px !important;
            height: 46px !important;
            bottom: 14px !important;
            right: 12px !important;
          }
        }

        .chatbot-msg {
          padding: 10px 13px;
          border-radius: 14px;
          font-size: clamp(0.78rem, 2.5vw, 0.875rem);
          line-height: 1.55;
          white-space: pre-wrap;
          max-width: 82%;
          word-break: break-word;
        }

        .chatbot-input {
          flex: 1;
          min-width: 0;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1.5px solid #d1d5db;
          font-size: clamp(0.78rem, 2.5vw, 0.875rem);
          outline: none;
          background: #f9fafb;
          transition: border 0.2s;
          box-sizing: border-box;
        }
        .chatbot-input:focus { border-color: #006400; background: #fff; }

        .chatbot-send {
          background: #006400;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 10px 14px;
          cursor: pointer;
          font-size: 15px;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .chatbot-send:hover:not(:disabled) { background: #004d00; }
        .chatbot-send:disabled { background: #9ca3af; cursor: not-allowed; }

        .typing-dot {
          width: 7px; height: 7px;
          background: #006400;
          border-radius: 50%;
          display: inline-block;
          animation: bounce 1.2s infinite ease-in-out;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
          40%            { transform: scale(1.1); opacity: 1; }
        }

        .chatbot-toggle {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          background: #006400;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 54px;
          height: 54px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(0,100,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .chatbot-toggle:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 24px rgba(0,100,0,0.5);
        }
      `}</style>

      {/* ✅ Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setOpen(!open)} title="Chat with Kuya Isidro">
        {open
          ? <span style={{ fontSize: '20px', fontWeight: 'bold' }}>✕</span>
          : <img src="/kuyaisidro.png" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover' }} alt="Kuya Isidro" />
        }
      </button>

      {/* ✅ Chat Window */}
      {open && (
        <div className="chatbot-window" style={{
          background: '#fff',
          borderRadius: '18px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
        }}>

          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #006400 0%, #004d00 100%)',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img
                src="/kuyaisidro.png"
                style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.6)' }}
                alt="Kuya Isidro"
              />
              {/* Online dot */}
              <span style={{
                position: 'absolute', bottom: '1px', right: '1px',
                width: '10px', height: '10px',
                background: '#4ade80', borderRadius: '50%',
                border: '2px solid #006400'
              }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ color: '#fff', fontWeight: '700', margin: 0, fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', lineHeight: 1.2 }}>
                Kuya Isidro Chatbot
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.72rem' }}>
                Barangay San Isidro · Online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', borderRadius: '8px', width: '28px', height: '28px', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '14px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: '#f8fafc',
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                gap: '7px',
              }}>
                {/* Avatar — only for assistant */}
                {msg.role === 'assistant' && (
                  <img
                    src="/kuyaisidro.png"
                    style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, marginBottom: '2px' }}
                    alt="Kuya Isidro"
                  />
                )}
                <div
                  className="chatbot-msg"
                  style={{
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #006400, #004d00)'
                      : '#ffffff',
                    color: msg.role === 'user' ? '#fff' : '#1a202c',
                    boxShadow: msg.role === 'user'
                      ? '0 2px 8px rgba(0,100,0,0.2)'
                      : '0 1px 4px rgba(0,0,0,0.08)',
                    borderBottomRightRadius: msg.role === 'user' ? '4px' : '14px',
                    borderBottomLeftRadius:  msg.role === 'user' ? '14px' : '4px',
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '7px' }}>
                <img src="/kuyaisidro.png" style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} alt="" />
                <div style={{ background: '#fff', padding: '12px 16px', borderRadius: '14px', borderBottomLeftRadius: '4px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                  <span className="typing-dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            gap: '8px',
            background: '#fff',
            flexShrink: 0,
          }}>
            <input
              className="chatbot-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !loading && sendMessage()}
              placeholder="Mag-type ng tanong..."
            />
            <button className="chatbot-send" onClick={sendMessage} disabled={loading}>
              ➤
            </button>
          </div>

        </div>
      )}
    </>
  );
}
