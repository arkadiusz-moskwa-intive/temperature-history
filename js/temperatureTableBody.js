export const TemperatureTableBody = class {
  constructor() {
    this.elementSelector = '#temperature-data';
  }

  _getElement() {
    return $(this.elementSelector);
  }

  /**
   * Renders the component
   *
   * @param temperatures Temperature data to present
   */
  render(temperatures) {
    const element = this._getElement();
    element.empty();
    temperatures.forEach((data) => {
      const date = new Date(data.id);
      element.append(`
        <tr>
            <td class="temperature">${data.temperature}</td>
            <td>${date.toUTCString()}</td>
        </tr>
      `)
    });
  }
}
