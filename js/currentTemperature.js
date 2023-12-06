export const CurrentTemperature = class {
  constructor() {
    this.elementSelector = '#current-temperature';
  }

  /**
   * Renders the component
   *
   * @param temperature Current temperature
   */
  render(temperature) {
    $(this.elementSelector).html(temperature);
  }
}
