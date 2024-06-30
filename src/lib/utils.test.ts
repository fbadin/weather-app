import { kelvinToCelsius, parseDate } from './utils';

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

describe('parseDate function', () => {
  test('formats date correctly', () => {
    const dateString = '2024-06-29T12:00:00Z'; // Example date string
    const formattedDate = parseDate(dateString);
    expect(formattedDate).toBe('29 JUN');
  });

  test('handles different date formats', () => {
    const dateString = '2024-09-15T00:00:00Z'; // Another example date string
    const formattedDate = parseDate(dateString);
    expect(formattedDate).toBe('15 SEP');
  });
});