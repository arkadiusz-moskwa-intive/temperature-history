import '../css/style.css'
import {WeatherApi} from "./weatherApi.js";
import {TemperatureStore} from "./temperatureStore.js";

const city = 'Warsaw';

document.querySelector('#app').innerHTML = `
    <h1>Temperature in ${city}</h1>
    <div id="content">
        <div>
            <h2>Current temperature: <span id="current-temperature" class="temperature"></span></h2>
        </div>
        <div id="chart-body">
            <canvas id="temperature-chart"></canvas>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Temperature</th>
                        <th>Time</th>
                    </tr>            
                </thead>
                <tbody id="temperature-data"></tbody>
            </table>
        </div>
    </div>
    
`;


const api = new WeatherApi(import.meta.env.VITE_WEATHER_API_KEY);
const store = new TemperatureStore('temperature-store');
store.render();
const requestTimeout = 10000; // we want to request the API every 10 seconds
window.setInterval(async () => {
  const {temperature} = await api.getFor(city);
  store.add({temperature});
  store.render();
}, requestTimeout);


