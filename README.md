# Cypress E-commerce Tests

This repository contains Cypress tests for testing the E-commerce dummy website [https://www.saucedemo.com/](https://www.saucedemo.com/).


### Test Case 1: Validate User is Able to Login with Invalid Username and Password

- Test file: `cypress/e2e/login.spec.cy.js`
- Description: This test case aims to validate the behavior when a user attempts to log in using invalid credentials. It checks whether the system correctly displays an error message when the username and password are incorrect.


### Test Case 2: Validate User is Able to Login with Username and Password

- Test file: `cypress/e2e/login.spec.cy.js`
- Description: This test case verifies the functionality of logging in with valid credentials. It checks whether the user can successfully access the website by providing their correct username and password.

### Test Case 3: Adding Items to Cart and Checkout

- Test file: `cypress/e2e/checkout.spec.cy.js`
- Description: This test case adds items to the cart, proceeds to checkout, fills in checkout information, verifies the order summary, and completes the purchase.


### Test Case 4: Should sort products by price and continue shopping

- Test file: `cypress/e2e/checkout.spec.cy.js`
- Description: This test case verifies the functionality of sorting products by price in the online shopping application and then continuing shopping after adding an item to the cart.

- Description: 

## Running Tests

1. Clone the repository.
2. Install Node.js: [https://nodejs.org/](https://nodejs.org/)
3. Open a terminal and navigate to the repository directory.
4. Run `npm install` to install project dependencies.
5. Run `npx cypress run` to run the Cypress tests

## Running Tests via GitHub Actions

The tests are automatically executed using GitHub Actions on every push to the `main` branch.

## Artifacts

All artifacts and logs from the GitHub Actions workflow can be found in the Actions tab of the repository.


