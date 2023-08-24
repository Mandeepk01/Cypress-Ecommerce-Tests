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

    getErrorMessage()
    {
      cy.get(login.errorMessage).should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    getPageTitle()
    {
      cy.get(login.pageTitle).should('be.visible').and('contain', 'Swag Labs');
    }

  }
  
  export default new LoginPage();
  