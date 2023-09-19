import login from '../selectors/login.sel'

class LoginPage {
  visit() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(login.emailField).type(username);
    cy.get(login.passwordField).type(password);
    cy.get(login.signInButton).click();
  }

  getErrorMessage() {
    return cy.get(login.errorMessage);
  }

  getPageTitle() {
    return cy.get(login.pageTitle);
  }

}
export default new LoginPage();
