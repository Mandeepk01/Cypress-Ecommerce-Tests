import LoginPage from '../page-objects/LoginPage';
import CheckOutPage from '../page-objects/CheckOutPage';

describe('E-commerce Checkout Test Suite', () => {

    let username, password;


    beforeEach(() => {
        LoginPage.visit();
        cy.sqlServer("select * from user_cred").then(function (result) {
            username = result[0][0];
            password = result[0][1];
            LoginPage.login(username, password);
        })
    });

    it('Should add items to cart and complete checkout', () => {
        // Add items to cart

        CheckOutPage.addToCart(0); // Add the first item
        CheckOutPage.addToCart(2); // Add the third item

        // Go to cart
        CheckOutPage.goToCart().click();

        // Verify cart items
        CheckOutPage.cartItem().should('have.length', 2);

        // Proceed to checkout
        CheckOutPage.checkout();

        // Fill in checkout information
        CheckOutPage.fillCheckoutInformation('John', 'Doe', '12345');

        // Verify order summary
        CheckOutPage.verifyOrderSummary().should('exist').should('contain', 'Total: $');

        // Complete the purchase
        CheckOutPage.completePurchase();

        // Verify purchase confirmation
        CheckOutPage.checkConfirmation().should('contain', 'Thank you for your order!');
    });

    it('Should sort products by price and continue shopping', () => {
        // Call the sortByPriceHighToLow method to sort products by price
        CheckOutPage.sortByPriceHighToLow().select('Price (high to low)');

        // Get product prices from the page
        CheckOutPage.getProductPrices().then(prices => {

            // Create an array to store the original prices after converting and parsing
            const originalPrices = [];
            // Split the prices string by newline and process each price
            prices.split('\n').forEach(price => {
                originalPrices.push(parseFloat(price.replace('$', '')));
            });

            // Create a sorted copy of the original prices array
            const sortedPrices = [...originalPrices].sort((a, b) => b - a);

            // Compare the original prices and sorted prices arrays
            expect(JSON.stringify(originalPrices)).to.equal(JSON.stringify(sortedPrices));

            CheckOutPage.addToCart(0);
            CheckOutPage.goToCart().click();

            // Click on the "Continue Shopping" button
            CheckOutPage.contineueShopping();

            // Verify that the user is redirected back to the products page
            CheckOutPage.getCurrentURL().should('include', '/inventory.html');
        });
    });
})
