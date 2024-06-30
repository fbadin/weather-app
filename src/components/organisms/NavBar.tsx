import * as React from 'react';
import { ArrowLeft, Cloud } from 'react-bootstrap-icons';

import { AppContext } from '../../contexts/appContext';
import logo from '../assets/logo192.png'
import { useLocation } from 'react-router-dom';
import { URLS } from '../../routes';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header data-testid='navbar' className="text-dark-gray">
      <nav data-testid='nav'
        className="
          bg-dark-1
            absolute top-0 left-0 w-full min-w-full h-16 px-4 py-2
            flex gap-4 justify-end items-center
          "
      >
        <Link to={URLS.LANDING_PAGE}
          aria-label="Back to Home"
        >
          <Cloud size={48} fontWeight={600} className='text-blue-500' />
        </Link>
      </nav>
    </header>
  )
}

export { NavBar };