import { API_URLS } from "../routes"
import { api } from "../lib/api"

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
};

type WeatherEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: WeatherDescription[];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  rain?: { "3h": number };
  sys: { pod: string };
  dt_txt: string;
};

type WeatherDescription = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export const fetchForecast = (cityId: number, date: string) => {
  // Regular expression to match YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  // Check if the date matches the required format
  if (!dateRegex.test(date)) {
    throw new Error('Invalid date format. Expected YYYY-MM-DD.');
  }

  return api.get<ForecastResponse>(API_URLS.FORECAST(cityId, date));
}