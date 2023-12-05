import '../css/style.css'
import {weatherApi} from "./weatherApi.js";

document.querySelector('#app').innerHTML = `
  <section>
    <h1>Temperature history</h1>
    <div>
        <button>Test</button>
    </div>
    <div id="current-temperature"></div>
    <p>
      Click on the Vite logo to learn more
    </p>
  </section>
`

const api = new weatherApi(import.meta.env.VITE_WEATHER_API_KEY);
document.querySelector('button').addEventListener('click', async () => {
  const temperature = await api.getFor('Wroclaw');
  document.querySelector('#current-temperature').innerHTML = `Current temperature is ${temperature} Celsius`;
})
