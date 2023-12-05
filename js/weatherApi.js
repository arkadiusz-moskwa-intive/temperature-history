export const weatherApi = class {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.weatherapi.com/v1'
  }

  async getFor(city) {
    return await fetch(this.baseUrl + '/current.json?' + new URLSearchParams({
      key: this.apiKey,
      q: city
    }))
      .then(response => response.json())
      .then( ({ current: { temp_c } }) => {
        return temp_c;
      });
  }
}
