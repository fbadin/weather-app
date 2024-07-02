import React, { SyntheticEvent } from 'react';
import { Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { LOCATIONS, CITY_ID } from '../../constants';
import { fetchWeather, WeatherResponse } from '../../api/weather';
import { Weather } from '../molecules/Weather';
import { setWeather } from '../../state/weather/actions';
import { Forecast } from '../organisms/Forecast';

const LandingPage = () => {
  const [cityId, setCityId] = React.useState <CITY_ID | undefined> ();
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

  const onLocationSelect = (eventKey: string | null, event: SyntheticEvent<unknown, Event>) => {
    event.preventDefault();
    event.persist();
    event.stopPropagation();

    if (!eventKey) {
      setCityId(undefined);
      return;
    }
    setCityId(parseInt(eventKey) as CITY_ID)
  }

  const renderCityFilterLabel = (): string => {
    if (cityId === undefined) {
      return 'Select the city to see forecast';
    }
    const location = LOCATIONS.find(l => l.id === cityId);
    return `${location?.name}, ${location?.country}`
  }

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
            {renderCityFilterLabel()}
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

      <Forecast
        showForecast={showForecast}
        cityId={cityId as CITY_ID}
      />
    </div>
  )
}

export { LandingPage };