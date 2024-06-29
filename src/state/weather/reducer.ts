import { UnknownAction } from 'redux';
import { WeatherResponse } from '../../api/weather';
import { ACTIONS, ACTION_TYPES } from './actions';

type WeatherReducerType = {
  weather: WeatherResponse | undefined
}

export const initialState: WeatherReducerType = {
  weather: undefined
};

type REDUCER_ACTIONS = { type: ACTION_TYPES, payload: any };

export function employeesReducer(state: WeatherReducerType = initialState, action: UnknownAction | REDUCER_ACTIONS): WeatherReducerType {
  switch (action.type) {
    case ACTIONS.SET_WEATHER:
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
}

export default employeesReducer;
