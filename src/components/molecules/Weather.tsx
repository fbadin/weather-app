import * as Redux from 'react-redux';
import { kelvinToCelsius } from '../../lib/utils';
import { RootState } from '../../state/store';
import { Button } from '../atoms/Button';

interface Props {
  showForecast: boolean;
  onShowForecastClick: () => void
}

const Weather = ({ showForecast, onShowForecastClick }: Props) => {
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
    <div data-testid='weather-container' className='mt-4'>
      <div>
        <div className='text-2xl'>{main}</div>
        <div>{description}</div>
      </div>

      <div className='mt-2'>
        <div className='text-2xl'>{celciusTemp} °C</div>
        <div>Wind {wind} m/sec</div>
      </div>

      <div className='mt-4'>
        <Button onClick={onShowForecastClick} dataTestId='see-forecast-button'>
          { showForecast ? 'CLOSE FORECAST' : 'SEE FORECAST' }
        </Button>
      </div>
    </div>
  )
}

export { Weather };