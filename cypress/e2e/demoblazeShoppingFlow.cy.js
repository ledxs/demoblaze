import ProductPage from '../pages/ProductPage';

describe('Demoblaze Shopping Flow', () => {
  it('should add products to the cart and complete a purchase', () => {
    ProductPage.open();

    // Add products to the cart
    ProductPage.addToCart('Samsung galaxy s6');
    ProductPage.open();
    ProductPage.addToCart('Nokia lumia 1520');

    // View cart and place an order
    ProductPage.viewCart();
    ProductPage.placeOrder('John Doe', 'USA', 'New York', '1234567890123456', 'July', '2024');

    // Verify the purchase
    ProductPage.verifyPurchase();
  });
});
