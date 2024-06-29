import * as React from 'react';
import { ArrowLeft, Cloud } from 'react-bootstrap-icons';

import { AppContext } from '../../contexts/appContext';
import logo from '../assets/logo192.png'
import { useLocation } from 'react-router-dom';
import { URLS } from '../../routes';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const appContext = React.useContext(AppContext);
  const location = useLocation();

  const showBackLink = location.pathname.includes(URLS.EMPLOYEE_DETAILS(null));

  return (
    <header data-testid='navbar' className="text-dark-gray">
      <nav data-testid='nav' className="absolute top-0 left-0 w-full min-w-full h-16 px-4 py-2 flex gap-4 justify-between items-center bg-dark-1">
        <div>
          {
            showBackLink && (
              <Link
                to={appContext?.backBtnUrl || URLS.LANDING_PAGE}
                aria-label="Back to Home"
                className="hover:text-blue-500"
              >
                <ArrowLeft size={32} fontWeight={600} />
              </Link>
            )
          }
        </div>
        <div>
          <Link to={URLS.LANDING_PAGE}
            aria-label="Back to Home"
          >
            <Cloud size={48} fontWeight={600} className='text-blue-500' />
          </Link>
        </div>
      </nav>
    </header>
  )
}

export { NavBar };