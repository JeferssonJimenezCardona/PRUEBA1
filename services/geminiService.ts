import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// NOTE: In a real production build, use process.env.API_KEY.
// Since this is a client-side demo instructions, we assume the environment variable is injected.
const apiKey = process.env.API_KEY || ''; 

let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  if (!aiClient) {
    return "Error: API Key no configurada. Por favor configura process.env.API_KEY.";
  }

  try {
    // Construct a simplistic prompt context based on history for this stateless call 
    // or implement full chat history management.
    // For this specific 'Tutor' implementation, we generate content directly.
    
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, no pude generar una respuesta.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hubo un error al conectar con el tutor de IA. Verifica tu conexión o cuota.";
  }
};