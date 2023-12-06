# Temperature history
Sample application showing current temperature and history over time

# Requirements
This application uses [Weather API](https://www.weatherapi.com/) for its data, so you need an account to use the free API.

# Setup

- Run `npm install`
- Copy `.env` to `.env.local` and provide your API key under `VITE_WEATHER_API_KEY`

# Optional

- You can change the request interval via `VITE_REQUEST_INTERVAL` env variable
- You can change the city being queried via `VITE_REQUEST_CITY` env variable

# Usage

- To run a development instance run `npm run start`
- To build production ready app run `npm run build`
- To preview production ready app run `npm run preview`
- To run the test suite run `npm run cy:e2e`

# Development notes
App was written/built using `Node 20.10.0` and `npm 10.2.4`
