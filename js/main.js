import '../css/style.css'
import { WeatherApi } from "./weatherApi.js";
import { TemperatureStore } from "./temperatureStore.js";
import $ from 'jquery';

window.$ = $;

$(document).ready(() => {
  $('#app').html(`
    <section>
        <h1>Temperature history</h1>
        <table>
            <thead>
                <tr>
                    <th>Temperature</th>
                    <th>Time</th>
                </tr>            
            </thead>
            <tbody id="temperature-data"></tbody>
        </table>
    </section>
  `);


  const api = new WeatherApi(import.meta.env.VITE_WEATHER_API_KEY);
  const store = new TemperatureStore('temperature-store');
  store.render();
  const requestTimeout = 10000; // we want to request the API every 10 seconds
  window.setInterval(async () => {
    const {temperature, lastUpdated }  = await api.getFor('Wroclaw');
    store.add({ temperature, lastUpdated });
    store.render();
  }, requestTimeout);

})

