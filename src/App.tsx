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

import { AppContextProvider } from './contexts/appContext';
import { LandingPage } from './components/pages/LandingPage';
import { CommonTemplate } from './components/templates/CommonTemplate';
import { store } from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
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
      </AppContextProvider>
    </Provider>
  );
}

export default App;
