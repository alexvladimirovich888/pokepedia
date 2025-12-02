import { GoogleGenAI } from "@google/genai";
import { useState, useCallback } from "react";

export const useGemini = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const askGemini = useCallback(async (pokemonName: string, userQuestion: string) => {
    setLoading(true);
    setError(null);
    setResponse(null);

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        setError("API Key is missing. Please check your configuration.");
        setLoading(false);
        return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
        You are Professor Oak, a Pokémon expert. 
        The user is asking about the Pokémon "${pokemonName}".
        Question: "${userQuestion}"
        
        Answer in a concise, encyclopedic, yet friendly tone suitable for a Wiki.
        Keep it under 150 words.
      `;

      // Use gemini-3-pro-preview as requested for complex/enhanced queries or 2.5-flash for speed.
      // Instructions said "If the user does not specify... use 'gemini-3-pro-preview' for Complex Text Tasks".
      // A dedicated encyclopedia query might be considered complex reasoning about lore.
      const result = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
      });

      setResponse(result.text || "No response generated.");
    } catch (err: any) {
      console.error(err);
      setError("Failed to fetch data from the Professor. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { askGemini, loading, error, response };
};
