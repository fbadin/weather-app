import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { NavBar } from './NavBar';
import { URLS } from '../../routes';

describe('NavBar Component', () => {
  it('should render the navbar', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeVisible();
  });

  it('should render the nav element', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const navElement = screen.getByTestId('nav');
    expect(navElement).toBeVisible();
  });

  it('should have a link to the landing page', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const linkElement = screen.getByRole('link', { name: /back to home/i });
    expect(linkElement).toHaveAttribute('href', URLS.LANDING_PAGE);
  });

  it('should have a Cloud icon with correct attributes', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const iconElement = screen.getByTestId('nav').querySelector('svg');
    expect(iconElement).toHaveClass('text-blue-500');
    expect(iconElement).toHaveAttribute('height', '48');
    expect(iconElement).toHaveAttribute('width', '48');
  });

  it('should navigate to the landing page when the Cloud icon is clicked', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const linkElement = screen.getByRole('link', { name: /back to home/i });
    expect(linkElement).toHaveAttribute('href', URLS.LANDING_PAGE);
  });
});
