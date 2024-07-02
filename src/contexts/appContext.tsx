import * as React from 'react';
import { ForecastResponse } from '../api/forecast';

type Context = {
	forecast: ForecastResponse | undefined;
	setForecast: (forecast: ForecastResponse) => void;
}

const AppContext = React.createContext<undefined | Context>(undefined);

export { AppContext };