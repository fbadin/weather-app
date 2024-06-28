
# Weather Forecasting Project

## Description

A project to show the weather, created using Create React App, Redux, Tailwind, and React Bootstrap.

---

## Features Overview

- Utilized `React Context` to manage the state of the app enabling future scalability.
- Used `Redux` to manage the state of Weathers' data.
- Implemented a `Custom Hook` useDebounce to prevent over-fetching data from the Weathers' index endpoint.
- Added `React Router` to route URLs for the Dashboard and Weather Details/Management. Routes default to the Dashboard if not found.
- Created a composable layout  `CommonTemplate` to handle the layout of the app.
- Implemented the app using only `Tailwind`.
- Added a Navbar.
- Implemented a `Responsive Layout`.
- Added tests in `Jest` and `React Testing Library (RTL)`

---

## Demo

[![Video Thumbnail](https://www.buddyget.net/static/img/pictures/2bd33242-370e-40c2-b2ae-8625f30dda51.png)](https://drive.google.com/file/d/19C17Y1L3P6fLAU6oyZW1Xad0PQRD4MgU/view?usp=sharing)


---

## Install the Node.js Dependencies

Ensure you have a recent version of Node.js running on your local machine, then run:

```sh
npm ci
```

---

## Copy and Update Your Environment Settings

```sh
cp development.env .env
```

You can edit the API endpoint and the local PORT for testing. Note that for this sample project, both API endpoints point to a live staging server for tests.

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


## The Dashboard

- Implemented a zero state if no Weather is found.
- Added text filters to search by name and position. A "X" button appears to clear the search once the user starts typing.
- Added a dropdown filter to search by Department. The Department is a set of strings, providing more control over data.
- Clicking on an Weather row redirects the user to view the Weather's details.
- Clicking on the "New Weather" button redirects the user to the Weather Details page with blank fields.

---

## Weather's Details

- Created a responsive design page.
- Added six main inputs: "Name", "Email", "Position", "Department", "Salary", and "Start Date".
- If the Weather is already created, two additional non-editable inputs are shown: "Created At" and "Updated At".
- All editable inputs have various validations, except for the department, which is a restricted set of values.
- If all inputs are valid, the "Save/Update" button is enabled.
- Feedback messages are displayed under the inputs to provide user confidence while editing the fields.
- Implemented a button to delete the Weather if they already exist. Clicking the button shows a modal to confirm the deletion.

---

## Extra


- Created custom API utilities to wrap the fetch API, enhancing scalability over networking and ensuring strong data-typing on responses.
- Developed custom UI components such as Button and a Panel.
- Added automated tests using Jest for most of the components.

---
