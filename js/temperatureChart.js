import Chart from "chart.js/auto";

export const TemperatureChart = class {
  constructor() {
    this.elementSelector = '#temperature-chart';
    this.chart = null;
  }

  /**
   * Renders the component
   *
   * @param temperatures Temperatures to present
   */
  render(temperatures) {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(
      $(this.elementSelector),
      {
        type: 'line',
        data: {
          labels: temperatures.map(obj => (new Date(obj.id)).toUTCString()),
          datasets: [
            {label: 'Temperature', data: temperatures.map(obj => obj.temperature)}
          ]
        },
        options: {
          responsive: true,
          animation: {
            duration: 0
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              title: {
                display: true,
                text: 'temperature [' + String.fromCodePoint(8451) + ']'
              }
            }
          }
        }
      },
    )
  }
}
