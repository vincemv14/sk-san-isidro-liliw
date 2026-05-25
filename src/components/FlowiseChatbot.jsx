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
      {/* Chat Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 1000,
          background: "#006400", color: "#fff", border: "none",
          borderRadius: "50%", width: "56px", height: "56px",
          fontSize: "24px", cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}
      >
        {open ? "✕" : <img src="/kuyaisidro.png" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "90px", right: "24px", zIndex: 1000,
          width: "340px", height: "480px", background: "#fff",
          borderRadius: "16px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          display: "flex", flexDirection: "column", overflow: "hidden",
          border: "1px solid #7070703b"
        }}>
          {/* Header */}
          <div style={{
  background: "#006400", color: "#fff",
  padding: "16px", fontWeight: "bold",
  display: "flex", alignItems: "center", gap: "10px"
}}>
  <img src="/kuyaisidro.png" style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fff" }} />
  Kuya Isidro Chatbot
</div>
          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "12px",
            display: "flex", flexDirection: "column", gap: "10px"
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                background: msg.role === "user" ? "#006400" : "#f1f5f9",
                color: msg.role === "user" ? "#fff" : "#1a202c",
                padding: "10px 14px", borderRadius: "12px",
                maxWidth: "80%", fontSize: "0.875rem", lineHeight: "1.5",
                whiteSpace: "pre-wrap"
              }}>
                {msg.content}
              </div>
            ))}
            {loading && (
              <div style={{
                alignSelf: "flex-start", background: "#f1f5f9",
                padding: "10px 14px", borderRadius: "12px",
                fontSize: "0.875rem", color: "#666"
              }}>
                ⏳ Typing...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "12px", borderTop: "1px solid #e2e8f0",
            display: "flex", gap: "8px"
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !loading && sendMessage()}
              placeholder="Mag-type ng tanong..."
              style={{
                flex: 1, padding: "10px", borderRadius: "8px",
                border: "1px solid #cbd5e0", fontSize: "0.875rem",
                outline: "none"
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                background: loading ? "#ccc" : "#006400",
                color: "#fff", border: "none",
                borderRadius: "8px", padding: "10px 14px",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "bold", fontSize: "16px"
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}