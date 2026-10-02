import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Wanderly AI server is running.",
  });
});

app.post("/api/generate-itinerary", async (req, res) => {
  try {
    const {
      destination,
      days,
      interests,
      travelStyle,
    } = req.body;

    if (!destination || !days) {
      return res.status(400).json({
        success: false,
        message: "Destination and number of days are required.",
      });
    }

    const prompt = `
You are Wanderly, an AI travel assistant focused only on travel within India.

Create a practical ${days}-day travel itinerary for:

Destination: ${destination}
Interests: ${interests || "General sightseeing"}
Travel style: ${travelStyle || "Balanced"}

Requirements:
- Create a realistic day-by-day itinerary.
- Include morning, afternoon and evening.
- Include notable places and experiences.
- Keep the schedule practical rather than overcrowded.
- Consider reasonable travel time between nearby attractions.
- Include local food or cultural experiences where appropriate.
- Do not invent specific hotel availability, ticket prices or real-time information.
- Do not make unsupported claims.
- Keep the response concise and useful.

Return ONLY valid JSON in this exact structure:

{
  "destination": "string",
  "summary": "string",
  "days": [
    {
      "day": 1,
      "title": "string",
      "morning": "string",
      "afternoon": "string",
      "evening": "string"
    }
  ]
}
`;

    const models = [
      "gemini-3.8-flash",
      "gemini-3.7-flash",
    ];

    let response = null;
    let lastError = null;

    for (const model of models) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          console.log(
            `Gemini request: ${model} | attempt ${attempt}/2`
          );

          response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
              responseMimeType: "application/json",
              thinkingConfig: {
                thinkingLevel: "low",
              },
            },
          });

          console.log(
            `Gemini success using ${model}`
          );

          break;
        } catch (error) {
          lastError = error;

          const status = error?.status;
          const message = error?.message || "";

          const temporaryError =
            status === 503 ||
            status === 429 ||
            message.includes("UNAVAILABLE") ||
            message.includes("high demand") ||
            message.includes("RESOURCE_EXHAUSTED");

          console.error(
            `${model} attempt ${attempt} failed:`,
            message
          );

          if (!temporaryError) {
            throw error;
          }

          if (attempt < 2) {
            console.log(
              `${model} temporarily unavailable. Retrying...`
            );

            await wait(2000);
          }
        }
      }

      if (response) {
        break;
      }

      console.log(
        `${model} unavailable. Trying fallback model...`
      );
    }

    if (!response) {
      throw lastError || new Error("No response from Gemini.");
    }

    const text = response.text;

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    let itinerary;

    try {
      itinerary = JSON.parse(text);
    } catch (parseError) {
      console.error(
        "Gemini returned invalid JSON:",
        text
      );

      throw new Error(
        "Gemini returned an invalid itinerary format."
      );
    }

    res.json({
      success: true,
      itinerary,
    });

  } catch (error) {
    console.error("Gemini error:", error);

    const status = error?.status;

    if (status === 503) {
      return res.status(503).json({
        success: false,
        message:
          "Gemini is temporarily busy. Please try again in a moment.",
      });
    }

    if (status === 429) {
      return res.status(429).json({
        success: false,
        message:
          "Gemini request limit reached. Please try again shortly.",
      });
    }

    res.status(500).json({
      success: false,
      message:
        "Unable to generate itinerary right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(
    `Wanderly AI server running on http://localhost:${PORT}`
  );
});