
import checkout from '../selectors/checkout.sel'

class CheckOutPage {


  sortByPriceHighToLow() {
    return cy.get(checkout.productSortContainer);
  }

  getProductPrices() {
    return cy.get(checkout.inventoryItemPrice).invoke('text');
  }

  addToCart(index) {
    cy.get(checkout.inventoryItem).eq(index).find('.btn_primary').click();
  }

  goToCart() {
    return cy.get(checkout.shoppingCartLink);
  }

  checkout() {
    cy.get(checkout.checkoutButton).click();
  }

  cartItem() {
    return cy.get(checkout.cartItem)
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