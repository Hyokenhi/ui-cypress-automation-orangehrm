const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});
