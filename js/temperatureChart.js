import Chart from "chart.js/auto";

export const TemperatureChart = class {
  constructor() {
    this.element = document.getElementById('temperature-chart').getContext('2d');
    this.chart = null;
  }

  /**
   * Renders the component
   *
   * @param temperatures Temperatures to present
   * @param lastEpoch Used to calculate difference in seconds on the chart
   */
  render(temperatures, lastEpoch) {
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart(
      this.element,
      {
        type: 'line',
        data: {
          labels: temperatures.map(obj => Math.round((lastEpoch - obj.id) / 1000)),
          datasets: [
            {label: 'Temperature', data: temperatures.map(obj => obj.temperature)}
          ]
        },
        options: {
          responsive: true,
          animation: {
            duration: 0
          },
          maintainAspectRatio: false
        }
      },
    )
  }
}
