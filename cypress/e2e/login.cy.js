
describe('WeaveSock Login Test', () => {

 
  
  beforeEach(() => {
    cy.goToPage();
  })


  it ('Trying to login with existing user', () => {

      cy.trySuccesfullLogin();
         
    })

  it ('Trying to login without username', () => {

      cy.tryLoginWithoutUsername();
         
    })

  it ('Trying to login without password', () => {

      cy.tryLoginWithoutPassword();
         
    })

  it ('Trying to login with wrong username', () => {

      cy.tryLoginWithWrongUser();
         
    })

  it ('Trying to login with wrong password', () => {

      cy.tryLoginWithWrongPass();
         
    })

  it ('Trying to login with sql injection', () => {

      cy.trySqlInjection();
         
    })

  it ('Get method', () => {

      cy.checkUser();
         
    })
  
})
