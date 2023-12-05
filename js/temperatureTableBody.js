export const TemperatureTableBody = class {
  constructor() {
    this.element = $('#temperature-data');
  }

  /**
   * Renders the component
   *
   * @param temperatures Temperature data to present
   */
  render(temperatures) {
    this.element.empty();
    temperatures.forEach((data) => {
      const date = new Date(data.id);
      this.element.append(`
        <tr>
            <td class="temperature">${data.temperature}</td>
            <td>${date.toUTCString()}</td>
        </tr>
      `)
    });
  }
}
