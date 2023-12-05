import '../css/style.css'
import { WeatherApi } from "./weatherApi.js";
import { TemperatureStore } from "./temperatureStore.js";

document.querySelector('#app').innerHTML = `
  <section>
    <h1>Temperature history</h1>
    <div id="current-temperature"></div>
  </section>
`

const api = new WeatherApi(import.meta.env.VITE_WEATHER_API_KEY);
const store = new TemperatureStore('temperature-store');
const requestTimeout = 10000; // we want to request the API every 10 seconds
window.setInterval(async () => {
  const {temperature, lastUpdated }  = await api.getFor('Wroclaw');
  store.add({ temperature, lastUpdated });
}, requestTimeout);
