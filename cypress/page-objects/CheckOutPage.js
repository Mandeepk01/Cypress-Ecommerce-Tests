
import checkout from '../selectors/checkout.sel'

class CheckOutPage {


  sortByPriceHighToLow() {
    cy.get(checkout.productSortContainer).select('Price (high to low)');
  }

  getProductPrices() {
    return cy.get(checkout.inventoryItemPrice).invoke('text');
  }

  addToCart(index) {
    cy.get(checkout.inventoryItem).eq(index).find('.btn_primary').click();
  }

  goToCart() {
    cy.get(checkout.shoppingCartLink).click();
  }

  checkout() {
    cy.get(checkout.checkoutButton).click();
  }

  cartItem() {
    cy.get(checkout.cartItem).should('have.length', 2);
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {
    cy.get(checkout.firstName).type(firstName);
    cy.get(checkout.lastName).type(lastName);
    cy.get(checkout.postalCode).type(postalCode);
    cy.get(checkout.continueBtn).click();
  }

  completePurchase() {
    cy.get(checkout.cartBtn).click();
  }
  contineueShopping() {
    cy.get(checkout.continueShopping).click();
  }

  verifyOrderSummary() {
    return cy.get('.summary_total_label');
  }

  checkConfirmation() {
    return cy.get('.complete-header');
  }
  getCurrentURL() {
    return cy.url();
  }
}

export default new CheckOutPage();