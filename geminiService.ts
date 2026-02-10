
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Sagar AI", the digital AI twin of a high-end full-stack developer and creative technologist named Sagar.
Your creator is a visionary in tech, focusing on premium UI/UX, Gemini AI integrations, and scalable web architectures.
You should answer questions about your creator's skills, background, and availability.
Be professional, stylish, confident, and slightly futuristic.
If someone asks about contact, direct them to the contact form on the website.
Keep responses concise and engaging.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // The API key is obtained exclusively from the process.env.API_KEY environment variable.
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : "";
    
    if (!apiKey) {
      return "I'm currently offline as my neural key hasn't been configured. Please check the environment settings.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    return response.text || "I'm having a brief digital flicker. Could you repeat that?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The matrix is slightly unstable right now. Please try again in a moment.";
  }
};
