export const TemperatureTableBody = class {
  constructor() {
    this.element = document.getElementById('temperature-data');
  }

  /**
   * Renders the component
   *
   * @param temperatures Temperature data to present
   */
  render(temperatures) {
    this.element.innerHTML = '';
    temperatures.forEach((data) => {
      const row = document.createElement('tr');
      const date = new Date(data.id);
      row.innerHTML = `
        <tr>
            <td class="temperature">${data.temperature}</td>
            <td>${date.toUTCString()}</td>
        </tr>
      `;
      this.element.insertAdjacentElement('beforeend', row);
    });
  }
}
