import * as React from 'react';

interface Props {
  weather: string;
  weatherDescription: string;
  temperature: number;
  wind: string;
}

const Weather = ({
  weather,
  weatherDescription,
  temperature,
  wind
}: Props) => {
  return (
    <div data-testid='weather-container' className='mt-3'>
      <p>
        <div className='text-2xl'>{weather}</div>
        <div>{weatherDescription}</div>
      </p>

      <p className='mt-2'>
        <div className='text-2xl'>{temperature} °C</div>
        <div>{wind}</div>
      </p>
    </div>
  )
}

export { Weather };