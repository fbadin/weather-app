import * as React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { fetchForecast, ForecastResponse } from '../../api/forecast';
import { LOCATION_ID_TYPE } from '../../constants';

import { parseDate } from '../../lib/utils';
import { Button } from '../atoms/Button';
import { Panel } from '../atoms/Panel';
import TC from '../atoms/TableCell';

interface Props {
  cityId: LOCATION_ID_TYPE
}

const Forecast = ({ cityId }: Props) => {
  const [isLoading, setIsLoading] = React.useState <boolean> (false);
  const [selectedDate, setSelectedDate] = React.useState <string> (
    new Date()
    .toLocaleString('en-US', {
      timeZone: 'America/New_York', // Eastern Standard Time (EST)
      hour12: false, // 24-hour format
    })
  );

  React.useEffect(()=>{
    (async () => {
      const date = new Date(selectedDate)
      const forecastDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getUTCDate()}`;

      setIsLoading(true);

      const response = await fetchForecast(cityId, forecastDate);

      setIsLoading(false);

      if (response.error_message) {
        toast.error(response.error_message);
        return;
      }

      const weather = response.data as ForecastResponse;
      // dispatch(setWeather(weather))
    })();
  }, [])

  console.log('selectedDate', selectedDate)

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
                <tr>
                  <TC type='td'>15 Sep 11AM</TC>
                  <TC type='td'>24 °C</TC>
                  <TC type='td'>23 °C</TC>
                  <TC type='td'>25 °C</TC>
                  <TC type='td'>3 m/sec</TC>
                  <TC type='td'>light rain</TC>
                </tr>
              </tbody>
            </Table>

            <div className='flex gap-2'>
              <Button onClick={()=>null} variant='secondary'>{parseDate(selectedDate)}</Button>
            </div>
          </>
        )
      }
    </div>
  )
}

export { Forecast };