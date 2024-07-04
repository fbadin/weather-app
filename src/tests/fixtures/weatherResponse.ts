import { WeatherResponse } from "../../api/weather";

export const mockWeatherResponse: WeatherResponse = {
  "coord": {
      "lon": -79.4163,
      "lat": 43.7001
  },
  "weather": [
      {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 301.55,
      "feels_like": 303.08,
      "temp_min": 298.98,
      "temp_max": 303.42,
      "pressure": 1012,
      "humidity": 59,
      "sea_level": 1012,
      "grnd_level": 996
  },
  "visibility": 10000,
  "wind": {
      "speed": 2.57,
      "deg": 120
  },
  "clouds": {
      "all": 75
  },
  "dt": 1720109872,
  "sys": {
      "type": 2,
      "id": 2095531,
      "country": "CA",
      "sunrise": 1720086102,
      "sunset": 1720141337
  },
  "timezone": -14400,
  "id": 6167865,
  "name": "Toronto",
  "cod": 200
}