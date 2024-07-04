import * as React from 'react';
import { ForecastResponse } from '../api/forecast';

type Context = {
	forecast: ForecastResponse | undefined;
	setForecast: (forecast: ForecastResponse) => void;
}

export const AppContext = React.createContext<undefined | Context>(undefined);
interface Props {
	children: React.ReactNode;
}

export const AppContextProvider: React.FC<Props> = ({ children }) => {
	const [forecast, setForecast] = React.useState<ForecastResponse>();

	return (
		<AppContext.Provider value={{ forecast, setForecast }}>
			{children}
		</AppContext.Provider>
	)
}