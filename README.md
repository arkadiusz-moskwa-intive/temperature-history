# Temperature history
Sample application showing current temperature and history over time

# Requirements
This application uses [Weather API](https://www.weatherapi.com/) for its data, so you need an account to use the free API.

# Setup

- Run `npm install`
- Copy `.env` to `.env.local` and provide your API key under `VITE_WEATHER_API_KEY`

# Optional

- You can change the request interval via `VITE_REQUEST_INTERVAL` env variable
- You can change the city being quered via `VITE_REQUEST_CITY` env variable

# Usage

- To run a development instance run `npm run dev`
- To build production ready app run `npm run build`
- To preview production ready app run `npm run preview`
