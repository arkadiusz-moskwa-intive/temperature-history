export const TemperatureStore = class extends EventTarget {
  constructor(localStorageKey) {
    super();
    this.localStorageKey = localStorageKey;
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
    window.dispatchEvent(new CustomEvent('save'));
  }

  /**
   * Adds given temperature to the local storage. Additionally, ensures only 100 records are kept in storage
   *
   * @param {number} temperature Temperature record to add
   * @param {number} lastUpdated When was the data last updated according to external API
   */
  add({ temperature, lastUpdated }) {
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

  render() {
    const tableBody = document.getElementById('temperature-data');
    tableBody.innerHTML = '';
    this.temperatures.forEach((data) => {
      const row = document.createElement('tr');
      const date = new Date(data.id);
      row.innerHTML = `
        <tr>
            <td>${data.temperature}</td>
            <td>${date.toUTCString()}</td>
        </tr>
      `;
      tableBody.insertAdjacentElement('beforeend', row);
    });
  }
}
