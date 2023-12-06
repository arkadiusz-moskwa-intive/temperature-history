import {CurrentTemperature} from "./currentTemperature.js";
import {TemperatureTableBody} from "./temperatureTableBody.js";
import {TemperatureChart} from "./temperatureChart.js";

export const TemperatureStore = class {
  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;
    this.currentTemperature = new CurrentTemperature();
    this.temperatureTableBody = new TemperatureTableBody();
    this.temperatureChart = new TemperatureChart();
    this._readStorage();
  }

  /**
   * Reads local storage for previously existing data
   *
   * @private
   */
  _readStorage() {
    this.temperatures = JSON.parse(window.localStorage.getItem(this.localStorageKey) || '[]');
  }

  /**
   * Saves current data to local storage under defined storage key
   *
   * @private
   */
  _save() {
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.temperatures));
  }

  /**
   * Gets the last reading of temperature
   *
   * @returns {number|null}
   * @private
   */
  _getLastTemperature() {
    const lastElement = this.temperatures.slice(-1).pop();

    if (!lastElement) {
      return null;
    }

    return lastElement.temperature;
  }

  /**
   * Adds given temperature to the local storage. Additionally, ensures only 100 records are kept in storage
   *
   * @param {number} temperature Temperature record to add
   */
  add({ temperature }) {
    // We want to keep only 100 records in the local storage
    if (this.temperatures.length === 100) {
      this.temperatures.shift();
    }

    this.temperatures.push({
      temperature,
      id: Date.now()
    });
    this._save();
  }

  /**
   * Renders all required components
   */
  render() {
    this.currentTemperature.render(this._getLastTemperature());
    this.temperatureTableBody.render(this.temperatures);
    this.temperatureChart.render(this.temperatures);
  }
}
