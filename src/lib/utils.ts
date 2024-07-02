import { MONTHS } from "../constants";

/**
 * Converts a temperature from Kelvin to Celsius.
 *
 * @param {number} kelvin - The temperature in Kelvin.
 * @returns {number} - The temperature in Celsius.
 */
export function kelvinToCelsius(kelvin: number): number {
  return parseFloat((kelvin - 273.15).toFixed(1));
}

/**
 * Converts a Date String to format DD MM
 *
 * @param {string} dateString - The Date
 * @returns {string} - The date in format DD MM
 */
export const parseDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getUTCDate()} ${MONTHS[date.getMonth()]}`;
};

/**
 * Formats a Date to YYYY-MM-DD
 *
 * @param {Date} date - The Date
 * @returns {string} - The date in format YYYY-MM-DD
 */
export const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getUTCDate().toString().padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * Formats a Unix datetime to 'DD MMM hA'
 *
 * @param {number} unixTime - The Unix datetime in milliseconds
 * @returns {string} - The formatted date
 */
export const formatUnixDate = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);

  const day = date.getUTCDate();
  const month = date.toLocaleString('default', { month: 'short', timeZone: 'UTC' });
  let hours = date.getUTCHours();
  const period = hours >= 12 ? 'PM' : 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${day} ${month} ${hours}${period}`;
};