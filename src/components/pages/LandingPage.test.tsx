import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useDispatch, useSelector } from 'react-redux';
import {  Dispatch, UnknownAction } from 'redux';

// import { toast } from 'react-toastify';
import { fetchWeather, WeatherResponse } from '../../api/weather';
import { CITY_ID, LOCATIONS } from '../../constants';
import { setWeather } from '../../state/weather/actions';
import { mockWeatherResponse } from '../../tests/fixtures/weatherResponse';
import { LandingPage } from './LandingPage';

jest.mock('react-redux', ()=>({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockedUseDispatch = jest.mocked(useDispatch);
const mockedUseSelector = jest.mocked(useSelector);

const mockState = {
  weather: {
    weather: [
      { main: 'Clear', description: 'clear sky' }
    ],
    main: { temp: 300 },
    wind: { speed: 5 }
  }
};

jest.mock('../../api/weather', () => ({
  fetchWeather: jest.fn(),
}));

const mockedFetchWeather = jest.mocked(fetchWeather);
const mockedDispatchFunction = jest.fn();

const renderComponent = () => {
  render(
    <LandingPage />
  );
};

describe('LandingPage', () => {
  let cityId: CITY_ID;

  beforeEach(() => {
    cityId = LOCATIONS[0].id;
    mockedFetchWeather.mockImplementation(() => {
      return Promise.resolve({
        data: mockWeatherResponse,
        error_message: ''
      })
    });
    mockedUseDispatch.mockImplementation(() => ((mockedDispatchFunction) as Dispatch<UnknownAction>));
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockState }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component correctly', () => {
    renderComponent();

    expect(screen.getByTestId('landing-page')).toBeInTheDocument();
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
    expect(screen.getByTestId('cities-filter-dropdown')).toBeInTheDocument();
  });

  it('selects a city from the dropdow', async () => {
    renderComponent();

    const dropdownInitialButton = screen.getByText('Select the city to see forecast')
    expect(dropdownInitialButton).toBeInTheDocument()
    fireEvent.click(dropdownInitialButton);

    await waitFor(()=>{
      const dropdownButton = screen.getByTestId(`cities-filter-button-${cityId}`);
      expect(dropdownButton).toBeInTheDocument();
      fireEvent.click(dropdownButton);
    })

    expect(mockedFetchWeather).toHaveBeenCalledWith(cityId);
    expect(mockedDispatchFunction).toHaveBeenCalledWith(setWeather(mockWeatherResponse))
  });

  it('displays weather data and button to show Forecast', async () => {
    renderComponent();

    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
    expect(screen.getByText('26.9 °C')).toBeInTheDocument(); // assuming kelvinToCelsius conversion
    expect(screen.getByText('Wind 5 m/sec')).toBeInTheDocument();
    expect(screen.getByText('SEE FORECAST')).toBeInTheDocument();
  });
});
