
# Weather Forecasting Project

## Description

A project to show the weather, created using Create React App, Redux, Tailwind, and React Bootstrap.

---

## Features Overview

- Utilized `React Context` to manage the state of the app, enabling future scalability.
- Used `Redux` to manage the state of weather data.
- Added `React Router` to route URLs for the LandingPage and Weather Details/Management, allowing for future scalability. Routes default to the LandingPage if not found.
- Created a `composable layout` CommonTemplate to handle the layout of the app.
- Implemented the app using only `Tailwind`.
- Implemented a `Responsive Layout`.
- Added unit tests using `Jest` and React Testing Library (RTL).
- Added end-to-end tests using `Cypress`.
- Added `Husky` pre-commit hooks to run tests before commits, ensuring code quality.
---

## Demo

[![Video Thumbnail](https://www.buddyget.net/static/img/pictures/8d7a898f-9073-49cd-b23a-6d4d70dcd652.png)](https://drive.google.com/file/d/1_7w2ereHCtHTL3XI9NBjFI4cJhcYcJVk/view?usp=sharing)

The video shows how the app works, as well as the tests running and passing 100%.

---

## Install the Node.js Dependencies

Ensure you have a recent version of Node.js running on your local machine. Currently built with Node v20 and npm v10.
Then run:

```sh
npm ci
```

---

## Copy and Update Your Environment Settings

```sh
cp development.env .env
```

---

## Run the Project

```sh
npm start
```

---

## Run Tests

```sh
npm run test
```

---

## Build for Production

```sh
N/A
```

This sample project is only available for local testing.

---


## The LandingPage

- This is a SPA (Single Page Application), and the LandingPage is the main page of the app.
- Organized all the components using the atomic pattern.
- Users can select three different cities to forecast weather. Once a city is selected, the app fetches the API and shows the weather.
- Users can then click on the "SEE FORECAST" button, and the app fetches the forecast API and shows the next five days' forecast in a table.
- Users can click on the day buttons to check the weather for each day.


## Extra


- Created custom API utilities to wrap the fetch API, enhancing scalability over networking and ensuring strong data-typing on responses.
- Developed custom UI components such as Button and a Panel.
- Added unit tests using Jest.
- Added end to end tests using Cypress
---
