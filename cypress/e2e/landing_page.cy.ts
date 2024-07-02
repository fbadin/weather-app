/// <reference types="Cypress" />

import { CITY_ID, LOCATIONS } from '../../src/constants';
import { API_URLS } from '../../src/routes';

describe('Landing Page', () => {
  let cityId: CITY_ID;

  beforeEach(()=>{
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl as string);
    cityId = LOCATIONS[0].id;
  })

  it('displays the landing page', () => {
    cy.get('[data-testid="landing-page"]').should('be.visible');
  });

  it('displays the app title', () => {
    cy.get('h1').should('contain', 'Weather Forecast');
  });

  it('displays the dropdown with default text', () => {
    cy.get('[data-testid="cities-filter-dropdown"]').within(() => {
      cy.get('.dropdown-toggle').should('contain', 'Select the city to see forecast');
    });
  });

  it('displays the dropdown menu when clicked', () => {
    cy.get('[data-testid="cities-filter-dropdown"]').click();
    cy.get('.dropdown-menu').should('be.visible');
  });

  it('changes the dropdown label when a city is selected', () => {
    const cityName = LOCATIONS[0].name;
    const countryName = LOCATIONS[0].country;

    cy.get('[data-testid="cities-filter-dropdown"]').click();
    cy.get(`[data-testid="cities-filter-button-${cityId}"]`).click();
    cy.get('[data-testid="cities-filter-dropdown"] .dropdown-toggle').should('contain', `${cityName}, ${countryName}`);
  });

  it('shows an error toast if the weather fetch fails', () => {
    cy.intercept('GET', API_URLS.WEATHER(cityId), {
      statusCode: 500,
      body: { error_message: 'Failed to fetch weather data' }
    }).as('fetchWeather');

    cy.get('[data-testid="cities-filter-dropdown"]').click();
    cy.get(`[data-testid="cities-filter-button-${cityId}"]`).click();

    cy.wait('@fetchWeather');
    cy.get('.Toastify__toast-body').should('contain', 'Internal Server Error');
  });

  it('renders the weather when city is selected', () => {
    cy.fixture('weather.json').then((weatherData) => {
      cy.intercept('GET', API_URLS.WEATHER(cityId), {
        statusCode: 200,
        body: weatherData
      }).as('fetchWeather');

      cy.get('[data-testid="cities-filter-dropdown"]').click();
      cy.get(`[data-testid="cities-filter-button-${cityId}"]`).click();

      cy.wait('@fetchWeather');

      cy.get('div').should('contain', 'Clouds');
      cy.get('div').should('contain', 'broken clouds');
      cy.get('div').should('contain', '21.6 °C');
      cy.get('div').should('contain', 'Wind 3.09 m/sec');
    });
  });

  it.only('renders the forecast when "SEE FORECAST" button is clicked', () => {
    cy.fixture('weather.json').then((weatherData) => {
      cy.intercept('GET', API_URLS.WEATHER(cityId), {
        statusCode: 200,
        body: weatherData
      }).as('fetchWeather');

      cy.fixture('forecast.json').then((forecastData) => {
        cy.intercept('GET', API_URLS.FORECAST(cityId), {
          statusCode: 200,
          body: forecastData
        }).as('fetchWeather');

        cy.get('[data-testid="cities-filter-dropdown"]').click();
        cy.get(`[data-testid="cities-filter-button-${cityId}"]`).click();

        cy.wait('@fetchWeather');

        cy.get('[data-testid="see-forecast-button"]').should('exist').click();

        cy.get('td').should('contain', '3 Jul 12AM');
        cy.get('td').should('contain', '21.6 °C');
        cy.get('td').should('contain', '20 °C');
        cy.get('td').should('contain', '3.32 m/sec');
        cy.get('td').should('contain', 'broken clouds');

      })

    });
  });
})