import { render, screen, fireEvent } from '@testing-library/react';
import { AppContext } from '../../contexts/appContext';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';

import { LandingPage } from './LandingPage';
import { URLS } from '../../routes';
import * as ACTIONS from '../../state/weather/actions';
import { store } from '../../state/store';
import { ApiResponse } from '../../lib/api';
import { fetchWeather } from '../../api/weather';

const employeesData: {} = {
  employees: [
    { id: '1', name: 'John Snow', position: 'Software Developer', department: 'Engineering' },
  ],
}

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

jest.mock('../api/employees', ()=>({
  ...jest.requireActual('../api/employees'),
  fetchEmployees: jest.fn()
}))

jest.mock('../state/employees/actions', ()=>({
  ...jest.requireActual('../state/employees/actions'),
  setUsers: jest.fn()
}))

jest.useFakeTimers();

const mockSetBackBtnUrl = jest.fn();

const mockAppContextValue = {
  backBtnUrl: URLS.LANDING_PAGE,
  setBackBtnUrl: mockSetBackBtnUrl,
};

const renderLandingPage = async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <AppContext.Provider value={mockAppContextValue}>
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
        </AppContext.Provider>
      </Provider>
    );
  });
};

describe('LandingPage', () => {
  let fetchWeather: jest.Mock<Promise<ApiResponse<{}>>>;

  beforeEach(() => {
    (ACTIONS.setWeather as jest.Mock).mockImplementation(()=>({ type: 'SET_WEATHER', payload: employeesData }))

    const fetchEmployeesLib = fetchWeather as unknown as jest.Mock;
    fetchWeather = jest.fn().mockImplementation(()=>({ data: employeesData }));
    fetchEmployeesLib.mockImplementation(fetchWeather);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the LandingPage component', async () => {
    await renderLandingPage();
    expect(screen.getByTestId('landing-page')).toBeInTheDocument();
    expect(ACTIONS.setWeather).toHaveBeenCalledWith(employeesData);
  });

  it('sets the back button URL on mount', async () => {
    await renderLandingPage();
    expect(mockSetBackBtnUrl).toHaveBeenCalledWith(URLS.LANDING_PAGE);
  });

  it('handles sorting button click', async () => {
    await renderLandingPage();
    const sortButton = screen.getByTestId('sort-button');
    fireEvent.click(sortButton);
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(fetchWeather).toHaveBeenCalledWith("", "All", "asc");
  });

  it('handles department filter selection', async () => {
    await renderLandingPage();
    const dropdownToggle = screen.getByRole('button', { name: /filter by department/i });
    fireEvent.click(dropdownToggle);
    const engineeringOption = screen.getByRole('button', { name: 'Engineering' });
    fireEvent.click(engineeringOption);
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(fetchWeather).toHaveBeenCalledWith("", "Engineering", "none");
  });

  it('displays zero state when no employees are found', async () => {
    (ACTIONS.setWeather as jest.Mock).mockImplementation(()=>({ type: 'SET_WEATHER', payload: { employees: []}}))
    await renderLandingPage();

    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(await screen.findByText('There are no employees found')).toBeInTheDocument();
  });

  it('handles search input', async () => {
    await renderLandingPage();
    const searchInput = screen.getByPlaceholderText('Search by name or position');
    fireEvent.change(searchInput, { target: { value: 'John' } });
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(fetchWeather).toHaveBeenCalledWith("John", "All", "none");
  });
});
