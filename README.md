# Wanderly

Wanderly is an India-focused travel discovery app built with React, Vite, React Router, Express, and Google's Gemini API.

## Features

- Explore and search Indian destinations with regional filters
- Destination detail pages with places to visit and live weather
- AI-generated day-by-day itineraries with interests and travel-style options
- Responsive destination discovery and trip-planning interface

## Requirements

- Node.js 20.19+ or 22.12+ (required by current Vite)
- npm
- A Google Gemini API key for AI itinerary generation

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file:

   **Windows PowerShell**
   ```powershell
   Copy-Item .env.example .env
   ```

   **macOS/Linux**
   ```bash
   cp .env.example .env
   ```

3. Open `.env` and replace the placeholder with your Gemini API key:

   ```env
   GEMINI_API_KEY=your_actual_key
   ```

4. Start the frontend and API server:

   ```bash
   npm run dev
   ```

5. Open the Vite URL printed in the terminal (usually http://localhost:5173).

The frontend sends `/api` requests through Vite's development proxy to the Express server at `http://localhost:5000`. The API health check is available at `http://localhost:5000/api/health`.

## Production build

```bash
npm run build
npm run lint
```

The Express server requires `GEMINI_API_KEY` in its runtime environment. For deployment, configure that variable in the hosting provider's server environment. Do not put the key in a `VITE_*` variable, because Vite variables are exposed to browser code.

## Troubleshooting

- **AI setup message:** Confirm that `.env` exists at the project root and contains a valid `GEMINI_API_KEY`; restart the server after changing it.
- **API unavailable:** Keep both Vite and Express running via `npm run dev`, and check `http://localhost:5000/api/health`.
- **Gemini quota/model errors:** Check your Google AI project, API access, quota, and the server terminal logs.
