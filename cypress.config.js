const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');

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
      tasks = sqlServer.loadDBPlugin(config.db);
       on('task', tasks);
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});
