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

export const fetchForecast = (cityId: number) => {
  return api.get<ForecastResponse>(API_URLS.FORECAST(cityId));
}