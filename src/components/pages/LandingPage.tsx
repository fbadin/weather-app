import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { AppContext } from '../../contexts/appContext';
import { URLS } from '../../routes';
import { LOCATIONS, LOCATION_ID_TYPE } from '../../constants';
import { fetchWeather, WeatherResponse } from '../../api/weather';
import { Weather } from '../molecules/Weather';
import { setWeather } from '../../state/weather/actions';
import { Forecast } from '../organisms/Forecast';

const LandingPage = () => {
  const [cityId, setCityId] = React.useState <LOCATION_ID_TYPE | undefined> ();
  const [showForecast, setShowForecast] = React.useState <boolean> (false);
  const dispatch = useDispatch();

  React.useEffect(()=>{
    if (!cityId) {
      return;
    }

    (async () => {
      const response = await fetchWeather(cityId);

      if (response.error_message) {
        toast.error(response.error_message);
        return;
      }

      const weather = response.data as WeatherResponse;
      dispatch(setWeather(weather))
    })();
  }, [dispatch, cityId]);

  const onLocationSelect = (eventKey: any, event: any) => {
    event.preventDefault();
    event.persist();
    event.stopPropagation();
    setCityId(parseInt(eventKey) as LOCATION_ID_TYPE)
  }

  const departmentFilterLabel = cityId === undefined ? 'Select the city to see forecast' : (()=>{
    const location = LOCATIONS.find(l => l.id === cityId);
    return `${location?.name}, ${location?.country}`
  })();

  return (
    <div data-testid='landing-page'>
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl text-blue-500">Weather Forecast</h1>
      </div>

      <div className='flex items-center justify-between flex-col gap-2 mt-3 sm:flex-row sm:mt-0'>
        <Dropdown onSelect={onLocationSelect}
          data-testid="cities-filter-dropdown"
        >
          <Dropdown.Toggle className='bg-dark-2 border'>
            {departmentFilterLabel}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              LOCATIONS.map((location) => {
                return (
                  <Dropdown.Item
                    key={location.id}
                    eventKey={location.id}
                    active={cityId === location.id}
                    data-testid={`cities-filter-button-${location.id}`}
                  >
                    {location.name}, {location.country}
                  </Dropdown.Item>
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Weather
        showForecast={showForecast}
        onShowForecastClick={() => setShowForecast(!showForecast)}
      />

      {showForecast && <Forecast cityId={cityId as LOCATION_ID_TYPE} />}
    </div>
  )
}

export { LandingPage };