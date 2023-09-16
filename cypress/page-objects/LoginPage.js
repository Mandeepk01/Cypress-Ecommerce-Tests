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

}  
  export default new LoginPage();
  