const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
    defaultCommandTimeout: 15000,
    "chromeWebSecurity": false,
    env: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    retries: {
        runMode: 1,
        openMode: 0
    },
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
