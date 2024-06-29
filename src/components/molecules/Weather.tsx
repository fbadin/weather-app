import * as React from 'react';
import * as Redux from 'react-redux';
import { kelvinToCelsius } from '../../lib/utils';
import { RootState } from '../../state/store';

const Weather = () => {
  const weatherStore = Redux.useSelector((state: RootState) => state.weather);

  if (!weatherStore.weather) {
    return null;
  }

  const weatherResponse = weatherStore.weather;
  const weather = weatherResponse.weather;
  const { main, description } = weather[0];
  const celciusTemp = kelvinToCelsius(weatherResponse.main.temp);
  const wind = weatherResponse.wind.speed;

  return (
    <div data-testid='weather-container' className='mt-3'>
      <div>
        <div className='text-2xl'>{main}</div>
        <div>{description}</div>
      </div>

      <div className='mt-2'>
        <div className='text-2xl'>{celciusTemp} °C</div>
        <div>Wind {wind} m/sec</div>
      </div>
    </div>
  )
}

export { Weather };