class ProductPage {
    open() {
      cy.visit('https://www.demoblaze.com');
    }
  
    addToCart(productName) {
      cy.contains(productName).click();
      cy.get('.btn-success').click();
      cy.wait(500); 
      cy.get('.btn-success').click();
      cy.wait(500);      
      cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added');
      });    
    }
  
    viewCart() {
      cy.get('#cartur').click();
    }
  
    placeOrder(name, country, city, card, month, year) {
      cy.contains('Place Order').click();
      cy.get('#name').type(name);
      cy.get('#country').type(country);
      cy.get('#city').type(city);
      cy.get('#card').type(card);
      cy.get('#month').type(month);
      cy.get('#year').type(year);
      cy.get('.modal-footer').contains('Purchase').click();
    }
  
    verifyPurchase() {
      cy.contains('Thank you for your purchase!').should('be.visible');
    }
  }
  
  export default new ProductPage();
  