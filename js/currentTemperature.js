export const CurrentTemperature = class {
  constructor() {
    this.element = document.getElementById('current-temperature')
  }

  /**
   * Renders the component
   *
   * @param temperature Current temperature
   */
  render(temperature) {
    this.element.innerHTML = temperature;
  }
}
