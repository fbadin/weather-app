export const LOCATIONS = [
  {
    id: 6167865,
    name: "Toronto",
    country: "CA"
  },
  {
    id: 6094817,
    name: "Ottawa",
    country: "CA"
  },
  {
    id: 1850147,
    name: "Tokyo",
    country: "JP"
  }
] as const;

export type CITY_ID = typeof LOCATIONS[number]['id'];

export const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"] as const;

export const DAY_IN_MILLISECONDS = 8_640_0000;

