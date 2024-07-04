import * as React from 'react'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { toast } from 'react-toastify';
import { fetchForecast } from '../../api/forecast';
import { AppContext } from '../../contexts/appContext';
import { Forecast } from './Forecast';
import { ForecastResponse } from '../../api/forecast';
import { LOCATIONS } from '../../constants';
import { mockForecastResponse } from '../../tests/fixtures/forecastResponse';
const cityId = LOCATIONS[0].id;

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('../../api/forecast', ()=>({
  ...jest.requireActual('../../api/forecast'),
  fetchForecast: jest.fn()
}));

const mockedFetchForecast = jest.mocked(fetchForecast);

const mockAppContext: {
	forecast: ForecastResponse | undefined;
	setForecast: (forecast: ForecastResponse) => void;
} = {
  forecast: mockForecastResponse,
  setForecast: jest.fn(),
}

jest.useFakeTimers();

const renderWeather = (error_message: string | undefined) => {
  mockedFetchForecast.mockImplementation(() => {
    return Promise.resolve({
      data: mockForecastResponse,
      error_message: error_message
    })
  });

  render(
    <AppContext.Provider value={mockAppContext}>
      <Forecast showForecast={true} cityId={cityId} />
    </AppContext.Provider>
  );
}

describe('Forecast Component', () => {

  const originalDate = new Date();

  beforeEach(() => {
    jest.setSystemTime(new Date(2024, 6, 3).getTime()); // Set the date to July 3, 2024
  });

  afterEach(() => {
    jest.setSystemTime(originalDate); // Restore the original date
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={mockAppContext}>
        <Forecast showForecast={false} cityId={cityId} />
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('component-container')).toBeNull();
  });

  it('displays loading spinner when fetching forecast data', async () => {
    renderWeather(undefined);

    expect(screen.getByLabelText('Loading Spinner')).toBeInTheDocument();

    await waitFor(() => expect(mockedFetchForecast).toHaveBeenCalledTimes(1));
  });

  it('displays forecast data when available', async () => {
    renderWeather(undefined);

    await waitFor(() => {
      expect(mockedFetchForecast).toHaveBeenCalledTimes(1);
      expect(screen.getByText('4 Jul 12AM')).toBeInTheDocument();
      expect(screen.getByText('3.84 m/sec')).toBeInTheDocument();
      expect(screen.getByText('light rain')).toBeInTheDocument()
    });
  });

  it('renders date buttons and handles click', async () => {
    renderWeather(undefined);

    await waitFor(() => expect(fetchForecast).toHaveBeenCalledTimes(1));

    await waitFor(()=>{
      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(5);
      fireEvent.click(buttons[1]);
    })

    await waitFor(() => expect(mockAppContext.setForecast).toHaveBeenCalledTimes(1)); // only on first render
  });

  it('handles API error gracefully', async () => {
    renderWeather('Error fetching forecast')

    await waitFor(()=>{
      expect(mockedFetchForecast).toHaveBeenCalledTimes(1)
      expect(toast.error).toHaveBeenCalledWith('Error fetching forecast');
    })
  });
});
