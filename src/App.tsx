import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppContext } from './contexts/appContext';
import { LandingPage } from './components/pages/LandingPage';
import { CommonTemplate } from './components/templates/CommonTemplate';
import { store } from './state/store';
import { ForecastResponse } from './api/forecast';

const App = () => {
  const [forecast, setForecast] = React.useState<ForecastResponse>();

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ forecast, setForecast }}>
        <div data-testid='app-root' className='h-app-root'>
          <BrowserRouter>
            <CommonTemplate>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* Catch-all route for undefined paths */}
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </CommonTemplate>
          </BrowserRouter>
        </div>
        <ToastContainer />
      </AppContext.Provider>
    </Provider>
  );
}

export default App;
