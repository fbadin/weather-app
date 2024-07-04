import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { Weather } from './Weather'; // Adjust the import path as needed
import { kelvinToCelsius } from '../../lib/utils'; // Adjust the import path as needed

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockedUseSelector = jest.mocked(useSelector);

describe('Weather Component', () => {
  const mockState = {
    weather: {
      weather: [
        { main: 'Clear', description: 'clear sky' }
      ],
      main: { temp: 300 },
      wind: { speed: 5 }
    }
  };

  const mockEmptyState = {
    weather: null
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render weather details when weather data is available', async () => {
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockState }));

    render(<Weather showForecast={false} onShowForecastClick={() => {}} />);

    const celsiusTemp = kelvinToCelsius(mockState.weather.main.temp);

    expect(screen.getByTestId('weather-container')).toBeVisible();
    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
    expect(screen.getByText(`${celsiusTemp} °C`)).toBeInTheDocument();
    expect(screen.getByText('Wind 5 m/sec')).toBeInTheDocument();
  });

  it('should not render weather details when weather data is not available', () => {
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockEmptyState }));

    render(<Weather showForecast={false} onShowForecastClick={() => {}} />);

    expect(screen.queryByTestId('weather-container')).toBeNull();
  });

  it('should render "SEE FORECAST" button when showForecast is false', () => {
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockState }));

    render(<Weather showForecast={false} onShowForecastClick={() => {}} />);

    expect(screen.getByText('SEE FORECAST')).toBeInTheDocument();
  });

  it('should render "CLOSE FORECAST" button when showForecast is true', () => {
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockState }));

    render(<Weather showForecast={true} onShowForecastClick={() => {}} />);

    expect(screen.getByText('CLOSE FORECAST')).toBeInTheDocument();
  });

  it('should call onShowForecastClick when the button is clicked', () => {
    mockedUseSelector.mockImplementation(callback => callback({ weather: mockState }));
    const mockOnShowForecastClick = jest.fn();

    render(<Weather showForecast={false} onShowForecastClick={mockOnShowForecastClick} />);

    fireEvent.click(screen.getByTestId('see-forecast-button'));

    expect(mockOnShowForecastClick).toHaveBeenCalled();
  });
});
