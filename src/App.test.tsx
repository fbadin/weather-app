import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App without crashing', async ()=>{
    await act(async () => {
      render(<App />);
    });

    const bodyFirstChild = screen.getByTestId('app-root');
    expect(bodyFirstChild).toBeInTheDocument();
  });

  it('renders the navbar and common template', async ()=>{
    await act(async () => {
      render(<App />);
    });

    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument();

    const CommonTemplate = screen.getByTestId('main');
    expect(CommonTemplate).toBeInTheDocument();
    expect(CommonTemplate).toHaveClass('bg-dark-2 text-dark-gray min-h-full mt-16')
  })

  it('renders the LandingPage as a main route', async ()=>{
    await act(async () => {
      render(<App />);
    });

    const LandingPage = screen.getByTestId('landing-page');
    expect(LandingPage).toBeInTheDocument();
  });

  it('renders the app title', async ()=>{
    await act(()=> render(<App />));
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument()
  })
})

