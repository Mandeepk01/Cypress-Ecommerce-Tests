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
      config.db = {
        userName: 'mandeepdb',
        password: 'Mandeep@1234',
        server: 'mandeepdb.database.windows.net',
        options: {
            database: 'mandeepdb',
            encrypt: true,
            rowCollectionOnRequestCompletion : true
        }
    }
    
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
