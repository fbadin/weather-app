import { API_URLS } from "../routes"
import { api } from "../lib/api"

export const fetchForecast = (cityId: number) => {
  return api.get<{}>(API_URLS.FORECAST(cityId));
}