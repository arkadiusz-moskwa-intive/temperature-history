export const CurrentTemperature = class {
  constructor() {
    this.element = $('#current-temperature')
  }

  /**
   * Renders the component
   *
   * @param temperature Current temperature
   */
  render(temperature) {
    this.element.html(temperature);
  }
}
