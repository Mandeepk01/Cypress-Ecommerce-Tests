import LoginPage from '../page-objects/LoginPage';

describe('E-commerce Login Test Suite', () => {

  const username = Cypress.env('username');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.visit();
  });

  it('Validate user is able to login with invalid username and password', () => {

    LoginPage.login('username123', 'password234');
    LoginPage.getErrorMessage();
  })

  it('Validate user is able to login with username and password', () => {
    LoginPage.login(username, password);
    LoginPage.getPageTitle();
  })
})