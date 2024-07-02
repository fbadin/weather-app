import * as React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { fetchForecast, ForecastResponse } from '../../api/forecast';
import { DAY_IN_MILLISECONDS, CITY_ID } from '../../constants';
import { AppContext } from '../../contexts/appContext';

import { formatDate, formatUnixDate, kelvinToCelsius, parseDate } from '../../lib/utils';
import { Button } from '../atoms/Button';
import { Panel } from '../atoms/Panel';
import TC from '../atoms/TableCell';

interface Props {
  showForecast: boolean;
  cityId: CITY_ID
}

const Forecast: React.FC<Props> = ({ showForecast, cityId }) => {
  const [isLoading, setIsLoading] = React.useState <boolean> (false);
  const options = { timeZone: 'America/Toronto' };
  const formatter = new Intl.DateTimeFormat([], options);
  const tomorrowDate = new Date(new Date(formatter.format(new Date())).getTime() + DAY_IN_MILLISECONDS);
  const [selectedDate, setSelectedDate] = React.useState <Date> (tomorrowDate);
  const appContext = React.useContext(AppContext);
  const appContextRef = React.useRef(appContext);

  React.useEffect(()=>{
    if (!showForecast || !cityId) {
      return;
    }

    (async () => {
      setIsLoading(true);

      const response = await fetchForecast(cityId);

      setIsLoading(false);

      if (response.error_message) {
        toast.error(response.error_message);
        return;
      }

      const forecast = response.data as ForecastResponse;
      appContextRef.current?.setForecast(forecast);
    })();
  }, [showForecast, cityId]);

  const renderDateButtons = () => {
    const initialDate = new Date(tomorrowDate)
    const initialDateTime = initialDate.getTime();
    const selectedDateFormatted = formatDate(selectedDate);
    const buttons = [];

    for (let i = 0; i < 5; i++) {
      const buttonDate = new Date(initialDateTime + i * DAY_IN_MILLISECONDS);
      const buttonDateFormatted = formatDate(buttonDate);
      const selected = selectedDateFormatted === buttonDateFormatted;

      buttons.push(
        <Button
          key={i}
          variant={selected ? 'primary' : 'secondary'}
          onClick={() => setSelectedDate(buttonDate)}
        >
          {parseDate(buttonDate.toISOString())}
        </Button>
      );
    }
    return buttons;
  };

  if (!showForecast) {
    return null;
  }

  const selectedFormattedDate = formatDate(selectedDate);
  const forecastList = appContext?.forecast?.list.filter((forecast)=>{
    const forecastFormattedDate = formatDate(new Date(forecast.dt * 1000));
    return selectedFormattedDate === forecastFormattedDate;
  }) || [];

  return (
    <div data-testid='component-container' className='mt-4'>
      {
        isLoading ? (
          <Panel className="mt-4">
            <div className='w-full flex justify-center'>
              <Spinner animation="border" variant="primary" aria-label='Loading Spinner' />
            </div>
          </Panel>
        ) : (
          <>
            <Table
              striped
              borderless
              hover
              responsive
              size="sm">
              <thead>
                <tr>
                  <TC type='th'>Date</TC>
                  <TC type='th'>Temp</TC>
                  <TC type='th'>Min Temp</TC>
                  <TC type='th'>Max Temp</TC>
                  <TC type='th'>Wind</TC>
                  <TC type='th'>Description</TC>
                </tr>
              </thead>
              <tbody>
                {
                  forecastList.map((forecast)=>{
                    return (
                      <tr key={forecast.dt}>
                        <TC type='td'>{formatUnixDate(forecast.dt)}</TC>
                        <TC type='td'>{kelvinToCelsius(forecast.main.temp)} °C</TC>
                        <TC type='td'>{kelvinToCelsius(forecast.main.temp_min)} °C</TC>
                        <TC type='td'>{kelvinToCelsius(forecast.main.temp_max)} °C</TC>
                        <TC type='td'>{forecast.wind.speed} m/sec</TC>
                        <TC type='td'>{forecast.weather[0].description}</TC>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>

            <div className='flex gap-2'>
              {renderDateButtons()}
            </div>
          </>
        )
      }
    </div>
  )
}

export { Forecast };