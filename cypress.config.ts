import { defineConfig } from "cypress";
require('dotenv').config();

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${process.env.PORT}/`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
