/**
 * Helper method to fetch current temperature for given city and add it to the temperature storage
 *
 * @param {WeatherApi} api
 * @param {TemperatureStore} store
 * @param {string} city
 */
export const fetchCurrentTemperature = async (api, store, city) => {
  const {temperature} = await api.getFor(city);
  store.add({temperature});
  store.render();
}
