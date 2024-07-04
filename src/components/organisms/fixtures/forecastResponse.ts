import { ForecastResponse } from "../../../api/forecast";

export const mockForecastResponse: ForecastResponse = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
      {
          "dt": 1720029600,
          "main": {
              "temp": 300.69,
              "feels_like": 301.59,
              "temp_min": 300.69,
              "temp_max": 302.25,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 996,
              "humidity": 56,
              "temp_kf": -1.56
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 95
          },
          "wind": {
              "speed": 6.29,
              "deg": 209,
              "gust": 10.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-03 18:00:00"
      },
      {
          "dt": 1720040400,
          "main": {
              "temp": 300.24,
              "feels_like": 301.74,
              "temp_min": 300.24,
              "temp_max": 300.41,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 65,
              "temp_kf": -0.17
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 89
          },
          "wind": {
              "speed": 5.71,
              "deg": 237,
              "gust": 9.3
          },
          "visibility": 10000,
          "pop": 0.99,
          "rain": {
              "3h": 0.5
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-03 21:00:00"
      },
      {
          "dt": 1720051200,
          "main": {
              "temp": 298.64,
              "feels_like": 299.23,
              "temp_min": 298.64,
              "temp_max": 298.64,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 92
          },
          "wind": {
              "speed": 3.84,
              "deg": 252,
              "gust": 9.22
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 1.02
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-04 00:00:00"
      },
      {
          "dt": 1720062000,
          "main": {
              "temp": 295.41,
              "feels_like": 296.04,
              "temp_min": 295.41,
              "temp_max": 295.41,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 45
          },
          "wind": {
              "speed": 2.02,
              "deg": 233,
              "gust": 4.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-04 03:00:00"
      },
      {
          "dt": 1720072800,
          "main": {
              "temp": 293.84,
              "feels_like": 294.39,
              "temp_min": 293.84,
              "temp_max": 293.84,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 996,
              "humidity": 93,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03n"
              }
          ],
          "clouds": {
              "all": 38
          },
          "wind": {
              "speed": 2.15,
              "deg": 250,
              "gust": 6.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-04 06:00:00"
      },
      {
          "dt": 1720083600,
          "main": {
              "temp": 292.74,
              "feels_like": 292.9,
              "temp_min": 292.74,
              "temp_max": 292.74,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 996,
              "humidity": 82,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 58
          },
          "wind": {
              "speed": 2.17,
              "deg": 285,
              "gust": 7.13
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-04 09:00:00"
      },
      {
          "dt": 1720094400,
          "main": {
              "temp": 294.78,
              "feels_like": 294.83,
              "temp_min": 294.78,
              "temp_max": 294.78,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 997,
              "humidity": 70,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 72
          },
          "wind": {
              "speed": 1.8,
              "deg": 293,
              "gust": 3.26
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-04 12:00:00"
      },
      {
          "dt": 1720105200,
          "main": {
              "temp": 299.93,
              "feels_like": 300.36,
              "temp_min": 299.93,
              "temp_max": 299.93,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 997,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 2.44,
              "deg": 268,
              "gust": 4.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-04 15:00:00"
      },
      {
          "dt": 1720116000,
          "main": {
              "temp": 302.56,
              "feels_like": 301.99,
              "temp_min": 302.56,
              "temp_max": 302.56,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 996,
              "humidity": 38,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 80
          },
          "wind": {
              "speed": 3.86,
              "deg": 264,
              "gust": 5.08
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-04 18:00:00"
      },
      {
          "dt": 1720126800,
          "main": {
              "temp": 302.34,
              "feels_like": 301.86,
              "temp_min": 302.34,
              "temp_max": 302.34,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 39,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 4.35,
              "deg": 281,
              "gust": 5.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-04 21:00:00"
      },
      {
          "dt": 1720137600,
          "main": {
              "temp": 298.57,
              "feels_like": 298.76,
              "temp_min": 298.57,
              "temp_max": 298.57,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 996,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.52,
              "deg": 319,
              "gust": 5.93
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-05 00:00:00"
      },
      {
          "dt": 1720148400,
          "main": {
              "temp": 295.35,
              "feels_like": 295.61,
              "temp_min": 295.35,
              "temp_max": 295.35,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 996,
              "humidity": 76,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 1.82,
              "deg": 341,
              "gust": 4.62
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-05 03:00:00"
      },
      {
          "dt": 1720159200,
          "main": {
              "temp": 293.46,
              "feels_like": 293.61,
              "temp_min": 293.46,
              "temp_max": 293.46,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 996,
              "humidity": 79,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 79
          },
          "wind": {
              "speed": 1.64,
              "deg": 7,
              "gust": 3.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-05 06:00:00"
      },
      {
          "dt": 1720170000,
          "main": {
              "temp": 292.22,
              "feels_like": 292.27,
              "temp_min": 292.22,
              "temp_max": 292.22,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 80,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 0
          },
          "wind": {
              "speed": 1.81,
              "deg": 354,
              "gust": 2.49
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-05 09:00:00"
      },
      {
          "dt": 1720180800,
          "main": {
              "temp": 294.33,
              "feels_like": 294.28,
              "temp_min": 294.33,
              "temp_max": 294.33,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 996,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "clouds": {
              "all": 18
          },
          "wind": {
              "speed": 1.5,
              "deg": 66,
              "gust": 2.21
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-05 12:00:00"
      },
      {
          "dt": 1720191600,
          "main": {
              "temp": 296.8,
              "feels_like": 296.74,
              "temp_min": 296.8,
              "temp_max": 296.8,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 58,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 100
          },
          "wind": {
              "speed": 3.48,
              "deg": 116,
              "gust": 3.69
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-05 15:00:00"
      },
      {
          "dt": 1720202400,
          "main": {
              "temp": 299.16,
              "feels_like": 299.16,
              "temp_min": 299.16,
              "temp_max": 299.16,
              "pressure": 1009,
              "sea_level": 1009,
              "grnd_level": 994,
              "humidity": 50,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 3.79,
              "deg": 114,
              "gust": 3.61
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-05 18:00:00"
      },
      {
          "dt": 1720213200,
          "main": {
              "temp": 299.8,
              "feels_like": 299.8,
              "temp_min": 299.8,
              "temp_max": 299.8,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 992,
              "humidity": 48,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 98
          },
          "wind": {
              "speed": 3.34,
              "deg": 111,
              "gust": 4.23
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-05 21:00:00"
      },
      {
          "dt": 1720224000,
          "main": {
              "temp": 296.22,
              "feels_like": 296.25,
              "temp_min": 296.22,
              "temp_max": 296.22,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 990,
              "humidity": 64,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 3.62,
              "deg": 113,
              "gust": 8.11
          },
          "visibility": 10000,
          "pop": 0.26,
          "rain": {
              "3h": 0.19
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-06 00:00:00"
      },
      {
          "dt": 1720234800,
          "main": {
              "temp": 293.15,
              "feels_like": 293.56,
              "temp_min": 293.15,
              "temp_max": 293.15,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 989,
              "humidity": 90,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 42
          },
          "wind": {
              "speed": 2.02,
              "deg": 95,
              "gust": 4.13
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 0.66
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-06 03:00:00"
      },
      {
          "dt": 1720245600,
          "main": {
              "temp": 292.38,
              "feels_like": 292.94,
              "temp_min": 292.38,
              "temp_max": 292.38,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 988,
              "humidity": 99,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10n"
              }
          ],
          "clouds": {
              "all": 37
          },
          "wind": {
              "speed": 1.94,
              "deg": 202,
              "gust": 7.91
          },
          "visibility": 9691,
          "pop": 1,
          "rain": {
              "3h": 2.31
          },
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-06 06:00:00"
      },
      {
          "dt": 1720256400,
          "main": {
              "temp": 293.02,
              "feels_like": 293.39,
              "temp_min": 293.02,
              "temp_max": 293.02,
              "pressure": 1004,
              "sea_level": 1004,
              "grnd_level": 988,
              "humidity": 89,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 82
          },
          "wind": {
              "speed": 4.28,
              "deg": 244,
              "gust": 9.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-06 09:00:00"
      },
      {
          "dt": 1720267200,
          "main": {
              "temp": 292.88,
              "feels_like": 293.02,
              "temp_min": 292.88,
              "temp_max": 292.88,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 990,
              "humidity": 81,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 4.18,
              "deg": 234,
              "gust": 11.12
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-06 12:00:00"
      },
      {
          "dt": 1720278000,
          "main": {
              "temp": 295.91,
              "feels_like": 296.04,
              "temp_min": 295.91,
              "temp_max": 295.91,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 990,
              "humidity": 69,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 37
          },
          "wind": {
              "speed": 5.49,
              "deg": 221,
              "gust": 8.79
          },
          "visibility": 10000,
          "pop": 0.83,
          "rain": {
              "3h": 0.35
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-06 15:00:00"
      },
      {
          "dt": 1720288800,
          "main": {
              "temp": 296.99,
              "feels_like": 297.02,
              "temp_min": 296.99,
              "temp_max": 296.99,
              "pressure": 1006,
              "sea_level": 1006,
              "grnd_level": 991,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 50
          },
          "wind": {
              "speed": 5.76,
              "deg": 246,
              "gust": 8.95
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 1.64
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-06 18:00:00"
      },
      {
          "dt": 1720299600,
          "main": {
              "temp": 296.91,
              "feels_like": 296.93,
              "temp_min": 296.91,
              "temp_max": 296.91,
              "pressure": 1007,
              "sea_level": 1007,
              "grnd_level": 991,
              "humidity": 61,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "clouds": {
              "all": 45
          },
          "wind": {
              "speed": 5.9,
              "deg": 254,
              "gust": 9.2
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
              "3h": 0.81
          },
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-06 21:00:00"
      },
      {
          "dt": 1720310400,
          "main": {
              "temp": 295.29,
              "feels_like": 295.34,
              "temp_min": 295.29,
              "temp_max": 295.29,
              "pressure": 1008,
              "sea_level": 1008,
              "grnd_level": 992,
              "humidity": 68,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 37
          },
          "wind": {
              "speed": 3.64,
              "deg": 253,
              "gust": 7.33
          },
          "visibility": 10000,
          "pop": 0.73,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-07 00:00:00"
      },
      {
          "dt": 1720321200,
          "main": {
              "temp": 292.59,
              "feels_like": 292.52,
              "temp_min": 292.59,
              "temp_max": 292.59,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 994,
              "humidity": 74,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 5
          },
          "wind": {
              "speed": 3.58,
              "deg": 262,
              "gust": 8.22
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-07 03:00:00"
      },
      {
          "dt": 1720332000,
          "main": {
              "temp": 291.01,
              "feels_like": 290.81,
              "temp_min": 291.01,
              "temp_max": 291.01,
              "pressure": 1010,
              "sea_level": 1010,
              "grnd_level": 994,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 13
          },
          "wind": {
              "speed": 3.61,
              "deg": 247,
              "gust": 9.11
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-07 06:00:00"
      },
      {
          "dt": 1720342800,
          "main": {
              "temp": 291.35,
              "feels_like": 291.18,
              "temp_min": 291.35,
              "temp_max": 291.35,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 995,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04n"
              }
          ],
          "clouds": {
              "all": 79
          },
          "wind": {
              "speed": 4.55,
              "deg": 269,
              "gust": 10.6
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-07 09:00:00"
      },
      {
          "dt": 1720353600,
          "main": {
              "temp": 292.18,
              "feels_like": 292.1,
              "temp_min": 292.18,
              "temp_max": 292.18,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 998,
              "humidity": 75,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 78
          },
          "wind": {
              "speed": 4.47,
              "deg": 291,
              "gust": 9.04
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-07 12:00:00"
      },
      {
          "dt": 1720364400,
          "main": {
              "temp": 297.14,
              "feels_like": 296.98,
              "temp_min": 297.14,
              "temp_max": 297.14,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 999,
              "humidity": 53,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 31
          },
          "wind": {
              "speed": 3.86,
              "deg": 306,
              "gust": 6.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-07 15:00:00"
      },
      {
          "dt": 1720375200,
          "main": {
              "temp": 300.26,
              "feels_like": 300.2,
              "temp_min": 300.26,
              "temp_max": 300.26,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 999,
              "humidity": 42,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 37
          },
          "wind": {
              "speed": 3.14,
              "deg": 318,
              "gust": 4.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-07 18:00:00"
      },
      {
          "dt": 1720386000,
          "main": {
              "temp": 300.26,
              "feels_like": 300.15,
              "temp_min": 300.26,
              "temp_max": 300.26,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 999,
              "humidity": 41,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 81
          },
          "wind": {
              "speed": 2.9,
              "deg": 298,
              "gust": 4.15
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-07 21:00:00"
      },
      {
          "dt": 1720396800,
          "main": {
              "temp": 298.32,
              "feels_like": 298.22,
              "temp_min": 298.32,
              "temp_max": 298.32,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1000,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 85
          },
          "wind": {
              "speed": 0.5,
              "deg": 314,
              "gust": 1.64
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-08 00:00:00"
      },
      {
          "dt": 1720407600,
          "main": {
              "temp": 294.99,
              "feels_like": 294.93,
              "temp_min": 294.99,
              "temp_max": 294.99,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1001,
              "humidity": 65,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 7
          },
          "wind": {
              "speed": 1.64,
              "deg": 337,
              "gust": 1.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-08 03:00:00"
      },
      {
          "dt": 1720418400,
          "main": {
              "temp": 293.32,
              "feels_like": 293.27,
              "temp_min": 293.32,
              "temp_max": 293.32,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1001,
              "humidity": 72,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01n"
              }
          ],
          "clouds": {
              "all": 3
          },
          "wind": {
              "speed": 1.16,
              "deg": 295,
              "gust": 1.06
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-08 06:00:00"
      },
      {
          "dt": 1720429200,
          "main": {
              "temp": 292,
              "feels_like": 291.98,
              "temp_min": 292,
              "temp_max": 292,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1001,
              "humidity": 78,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02n"
              }
          ],
          "clouds": {
              "all": 14
          },
          "wind": {
              "speed": 0.4,
              "deg": 210,
              "gust": 0.34
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "n"
          },
          "dt_txt": "2024-07-08 09:00:00"
      },
      {
          "dt": 1720440000,
          "main": {
              "temp": 293.88,
              "feels_like": 293.86,
              "temp_min": 293.88,
              "temp_max": 293.88,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1001,
              "humidity": 71,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 802,
                  "main": "Clouds",
                  "description": "scattered clouds",
                  "icon": "03d"
              }
          ],
          "clouds": {
              "all": 39
          },
          "wind": {
              "speed": 2.3,
              "deg": 153,
              "gust": 3.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-08 12:00:00"
      },
      {
          "dt": 1720450800,
          "main": {
              "temp": 297.79,
              "feels_like": 297.64,
              "temp_min": 297.79,
              "temp_max": 297.79,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1000,
              "humidity": 51,
              "temp_kf": 0
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "clouds": {
              "all": 99
          },
          "wind": {
              "speed": 3.26,
              "deg": 152,
              "gust": 5.11
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
              "pod": "d"
          },
          "dt_txt": "2024-07-08 15:00:00"
      }
  ]
}