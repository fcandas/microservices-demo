
describe('Order tests', () => {

    beforeEach(() => {
        cy.goToPage();
      })
    

    it ('Try Order with empty shipping address', () => {

        cy.trySuccesfullLogin();
        cy.checkFirstFilter();
        cy.addToCart();
        cy.checkMainCart();
        cy.getEmptyAddress();
        cy.changePayment();
        cy.proceedToCheckout();
           
      })

      it ('Try Order with empty payment', () => {

        cy.trySuccesfullLogin();
        cy.checkFirstFilter();
        cy.addToCart();
        cy.checkMainCart();
        cy.changeAddress();
        cy.getEmptyPayment();
        cy.proceedToCheckout();
           
      })

      it ('Try successful order', () => {

        cy.trySuccesfullLogin();
        cy.checkFirstFilter();
        cy.addToCart();
        cy.checkMainCart();
        cy.changeAddress();
        cy.changePayment();
        cy.proceedToCheckout();
           
      })
  

    
  })
  