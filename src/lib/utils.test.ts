import { kelvinToCelsius } from './utils';

describe('kelvinToCelsius', () => {
  it('should convert 0K to -273.15°C', () => {
    expect(kelvinToCelsius(0)).toBeCloseTo(-273.1);
  });

  it('should convert 273.15K to 0°C', () => {
    expect(kelvinToCelsius(273.15)).toBeCloseTo(0);
  });

  it('should convert 294.35K to 21.2°C', () => {
    expect(kelvinToCelsius(294.35)).toBeCloseTo(21.2);
  });
});