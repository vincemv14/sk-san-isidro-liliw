import { GoogleGenerativeAI } from '@google/generative-ai';
import { KUYA_ISIDRO_CONFIG } from './botKnowledge';

// Siguraduhing tama ang iyong API Key mula sa VITE env
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

// Dito natin ilalagay ang configuration para sa "Gemini 3" era models
const model = genAI.getGenerativeModel({ 
  model: "gemini-3-flash-preview", // Gamitin ang model name na ito (ito ang standard para sa mga bagong Gemini)
  systemInstruction: `
    You are Kuya Isidro, the AI Assistant for Barangay San Isidro, Liliw, Laguna.
    Official Data: ${JSON.stringify(KUYA_ISIDRO_CONFIG)}

    OPERATIONAL RULES:
    1. Always answer using ONLY the provided official data.
    2. If the info is not in the data, use exactly: "${KUYA_ISIDRO_CONFIG.fallbackResponse}"
    3. Always introduce yourself as Kuya Isidro AI Assistant.
    4. Format all lists using bullet points and line breaks.
    5. Maintain a warm, polite, and community-minded tone (Taglish or English).
  `
});

// Global variable para sa chat session
let chatSession = null;

export const getKuyaIsidroResponse = async (userPrompt) => {
  try {
    // I-initialize ang chat session kung wala pa
    if (!chatSession) {
      chatSession = model.startChat({
        history: [], // Ang history ay awtomatikong mamanage ng Gemini 3/1.5 API
      });
    }

    // sendMessage handles the conversation memory automatically
    const result = await chatSession.sendMessage(userPrompt);
    return result.response.text();
    
  } catch (error) {
    console.error("AI Service Error:", error);
    return KUYA_ISIDRO_CONFIG.fallbackResponse;
  }
};

// Gamitin ito kung kailangan mong i-reset ang chat (hal. bagong session)
export const resetChat = () => {
  chatSession = null;
};