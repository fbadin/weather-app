/**
 * Converts a temperature from Kelvin to Celsius.
 *
 * @param {number} kelvin - The temperature in Kelvin.
 * @returns {number} - The temperature in Celsius.
 */
export function kelvinToCelsius(kelvin: number): number {
  return parseFloat((kelvin - 273.15).toFixed(1));
}