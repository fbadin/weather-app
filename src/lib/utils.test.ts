import {
  kelvinToCelsius,
  parseDate,
  formatDate,
  formatUnixDate
} from './utils';

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

describe('formatDate', () => {
  test('formats a date correctly', () => {
    const date = new Date('2024-06-29T21:53:26Z');
    expect(formatDate(date)).toBe('2024-06-29');
  });

  test('pads single digit month and day with leading zeros', () => {
    const date = new Date('2024-01-05T00:00:00Z');
    expect(formatDate(date)).toBe('2024-01-05');
  });

  test('handles end of month correctly', () => {
    const date = new Date('2024-02-28T00:00:00Z');
    expect(formatDate(date)).toBe('2024-02-28');
  });

  test('formats date correctly at end of year', () => {
    const date = new Date('2024-12-31T00:00:00Z');
    expect(formatDate(date)).toBe('2024-12-31');
  });

  test('handles leap year correctly', () => {
    const date = new Date('2024-02-29T00:00:00Z'); // 2024 is a leap year
    expect(formatDate(date)).toBe('2024-02-29');
  });
});

describe('formatUnixDate', () => {
  test('formats Unix datetime correctly', () => {
    const unixTime = Date.UTC(2024, 8, 15, 11, 0, 0) / 1000; // 15 Sep 2024 11:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('15 Sep 11AM');
  });

  test('formats Unix datetime correctly for PM time', () => {
    const unixTime = Date.UTC(2024, 8, 15, 15, 0, 0) / 1000; // 15 Sep 2024 15:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('15 Sep 3PM');
  });

  test('formats Unix datetime correctly for midnight', () => {
    const unixTime = Date.UTC(2024, 8, 15, 0, 0, 0) / 1000; // 15 Sep 2024 00:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('15 Sep 12AM');
  });

  test('formats Unix datetime correctly for noon', () => {
    const unixTime = Date.UTC(2024, 8, 15, 12, 0, 0) / 1000; // 15 Sep 2024 12:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('15 Sep 12PM');
  });

  test('pads single digit day correctly', () => {
    const unixTime = Date.UTC(2024, 8, 5, 11, 0, 0) / 1000; // 5 Sep 2024 11:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('5 Sep 11AM');
  });

  test('formats specific Unix timestamp 1719878400 correctly', () => {
    const unixTime = 1719878400; // 2 Jul 2024 00:00:00 UTC in seconds
    expect(formatUnixDate(unixTime)).toBe('2 Jul 12AM');
  });
});