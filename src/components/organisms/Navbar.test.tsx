import { render, screen } from '@testing-library/react';
import * as router from 'react-router';
import { URLS } from '../../routes';

import { NavBar } from './NavBar';

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react')
  return {
    ...ActualReact,
    useContext: () => ({
      backBtnUrl: URLS.LANDING_PAGE
    }),
  }
});

describe('NavBar component', () => {
  it('render nav classes', ()=>{
    jest.spyOn(router, 'useLocation')
      .mockReturnValue({ pathname: URLS.LANDING_PAGE, search: '', state: {}, hash: '' } as any);

    render(
      <NavBar />
    );

    const nav = screen.getByTestId('nav');
    expect(nav).toHaveClass('absolute top-0 left-0 w-full min-w-full h-16 px-4 py-2 flex gap-4 justify-between items-center bg-dark-1')
  });

  it('renders logo without back link', () => {
    jest.spyOn(router, 'useLocation')
      .mockReturnValue({ pathname: URLS.LANDING_PAGE, search: '', state: {}, hash: '' } as any);

    render(
      <NavBar />
    );

    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    const backLink = screen.queryByLabelText('Back to LandingPage');
    expect(backLink).not.toBeInTheDocument();
  });


});
