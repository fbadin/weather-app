export const URLS = Object.freeze({
  LANDING_PAGE: `/`,
});

export const API_URLS = Object.freeze({
  WEATHER: (cityId: number) => `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=538882fc8387290c6cee83f313a6acf5`,
  FORECAST: (cityId: number) => `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=538882fc8387290c6cee83f313a6acf5`
});