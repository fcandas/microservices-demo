
describe('Filter check', () => {

    beforeEach(() => {
        cy.goToPage();
      })
    

    it ('Check first checkbox and filter', () => {

        cy.checkFirstFilter();
           
      })
  
    it ('Check two checkbox and filter', () => {
  
        cy.checkTwoFilter();
           
      })
    
  })
  