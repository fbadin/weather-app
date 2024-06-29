import { UnknownAction } from "@reduxjs/toolkit";
import { WeatherResponse } from "../../api/weather";

export const ACTIONS = {
  SET_WEATHER: "SET_WEATHER"
} as const;

export type ACTION_TYPES = keyof typeof ACTIONS;

export type SetWeatherAction = {
  type: typeof ACTIONS.SET_WEATHER;
  payload: WeatherResponse;
} & UnknownAction;

export const setWeather = (weather: WeatherResponse): SetWeatherAction => ({
  type: ACTIONS.SET_WEATHER,
  payload: weather
});
