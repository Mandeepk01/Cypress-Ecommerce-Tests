// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-sql-server';

// Configure the database connection options
const dbConfig = {
  user: 'mandeepdb',
  password: 'Mandeep@1234',
  server: 'mandeepdb.database.windows.net',
  database: 'mandeepdb',
  options: {
    encrypt: true, // Use encryption
  },
};

// Custom command to connect to the database
Cypress.Commands.add('connectToDatabase', () => {
  cy.sqlServer('connect', dbConfig);
});

// Custom command to fetch user credentials from the database
Cypress.Commands.add('fetchUserCredentials', () => {
  return cy.sqlServer('query', {
    query: 'SELECT TOP 1 username, password FROM user_cred',
  });
});
