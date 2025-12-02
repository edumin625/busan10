import { GoogleGenAI } from "@google/genai";
import { ThemeStrategy } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateThemeInfographic = async (theme: ThemeStrategy): Promise<string | null> => {
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

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;

  } catch (error) {
    console.error("Error generating infographic:", error);
    return null;
  }
};