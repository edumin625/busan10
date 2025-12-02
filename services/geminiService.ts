import { GoogleGenAI } from "@google/genai";
import { ThemeStrategy } from "../types";

// Declare process to avoid TypeScript errors when accessing process.env.API_KEY
// The actual value is replaced by Vite during the build process.
declare const process: { env: { [key: string]: string | undefined } };

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateThemeInfographic = async (theme: ThemeStrategy): Promise<string> => {
  try {
    const prompt = `
      Create a high-quality, flat-design infographic style poster for a tourism campaign.
      
      Theme Title: ${theme.title}
      Keywords: ${theme.keyword} (${theme.keywordKr})
      Key Locations to visualize: ${theme.locations.join(', ')}.
      Target Audience Vibe: ${theme.target}.
      
      Style: Modern, cinematic lighting, vibrant colors matching a '${theme.keyword}' vibe.
      The image should look like a professional travel brochure cover or a high-end Instagram travel post.
      No text overlay, just the visual essence of the locations combined artistically.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
            aspectRatio: "1:1",
        }
      }
    });

    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
        const parts = candidates[0].content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData) {
                    return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
                }
            }
        }
    }
    throw new Error("이미지 데이터가 반환되지 않았습니다.");

  } catch (error) {
    console.error("Error generating infographic:", error);
    throw error;
  }
};