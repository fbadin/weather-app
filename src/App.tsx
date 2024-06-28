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
import { Dashboard } from './pages/Dashboard';
import { EmployeeDetails } from './pages/EmployeeDetails';
import { CommonTemplate } from './templates/CommonTemplate';
import { store } from './state/store';

const App = () => {
  const [backBtnUrl, setBackBtnUrl] = React.useState<string>("");

  return (
    <Provider store={store}>
      <AppContext.Provider value={{ backBtnUrl, setBackBtnUrl }}>
        <div data-testid='app-root' className='h-app-root'>
          <BrowserRouter>
            <CommonTemplate>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/forecast/:cityId" element={<EmployeeDetails />} />
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
