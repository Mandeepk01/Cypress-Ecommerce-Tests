import LoginPage from '../page-objects/LoginPage';
import login from '../selectors/login.sel'

describe('E-commerce Login Test Suite', () => {

  const username = Cypress.env('username');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    LoginPage.visit();
  });

  it('Validate user is not able to login with invalid username and password', () => {
    LoginPage.login('username123', 'password234');
    LoginPage.getErrorMessage().should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
  })

  it('Validate user is able to login with username and password', () => {
    LoginPage.login(username, password);
    LoginPage.getPageTitle().should('be.visible').and('contain', 'Swag Labs');
  })
})
