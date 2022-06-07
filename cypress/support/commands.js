

import Objects from '../e2e/pageObjects/pageObjects'
const objects = new Objects()


Cypress.Commands.add('goToPage', () => {

    cy.visit('http://localhost/')
    cy.get('span[class="sr-only"]').should('be.visible')
})

Cypress.Commands.add('registerSuccesfulUser', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('createUserWithEmptyUsername', () => {

    objects.clickRegister().should('be.visible').click();
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();

})

Cypress.Commands.add('createUserWithEmptyName', () => {
    
    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    //objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();
  
})

Cypress.Commands.add('createUserWithEmptyLastname', () => {
    
    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();
  
})

Cypress.Commands.add('createUserWithEmptyEmail', () => {
    
    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    //objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();
  
})

Cypress.Commands.add('createUserWithEmptyPassword', () => {
    
    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.clickRegisterButton().click();
    objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();
  
})

Cypress.Commands.add('createUserWithWrongEmail', () => {
    
    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+''+Date.now().toString()); // wrong email 
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.closeButtonOnRegister().click();
  
})

Cypress.Commands.add('createUserWithNonalphabeticName', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now());
    objects.firstname().should('be.visible').type(Date.now());
    objects.lastname().should('be.visible').type(Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('createUserWithNonalphabeticLastname', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now());
    objects.firstname().should('be.visible').type(Date.now());
    objects.lastname().should('be.visible').type(Date.now());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('tryMaxCharLength', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type(Date.now().toString()+'&'+Date.now().toString());
    objects.firstname().should('be.visible').type(Date.now().toString()+'&'+Date.now().toString());
    objects.lastname().should('be.visible').type(Date.now().toString()+'&'+Date.now().toString());
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('tryMinCharLength', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type('e');
    objects.firstname().should('be.visible').type('r');
    objects.lastname().should('be.visible').type('t');
    objects.email().should('be.visible').type(Date.now().toString()+'@'+Date.now().toString()+'.com');
    objects.password().should('be.visible').type(Date.now().toString());
    objects.clickRegisterButton().click();
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('checkRegisteredUser', () => {

    objects.clickRegister().should('be.visible').click();
    objects.username().should('be.visible').type('user');
    objects.firstname().should('be.visible').type('user');
    objects.lastname().should('be.visible').type('user');
    objects.email().should('be.visible').type('fatihcandas@gmail.com');
    objects.password().should('be.visible').type('password');
    objects.clickRegisterButton().click();
    objects.alertMsg().should('have.text','There was a problem with your registration: Internal Server Error');
    objects.logout().should('be.visible').click();
})

Cypress.Commands.add('trySuccesfullLogin', () => {

    objects.clickLogin().should('be.visible').click();
    objects.usernameOnLogin().should('be.visible').type('user');
    objects.passwordOnLogin().should('be.visible').type('password');
    objects.clickLoginButton().should('be.visible').click();
    objects.checkHowdy().should('be.visible');
    
})

Cypress.Commands.add('tryLoginWithoutUsername', () => {

    objects.clickLogin().should('be.visible').click();
    //objects.usernameOnLogin().should('be.visible').type('user');
    objects.passwordOnLogin().should('be.visible').type('password');
    objects.clickLoginButton().should('be.visible').click();
    objects.alertMsg().should('have.text','Invalid login credentials.');
    
})

Cypress.Commands.add('tryLoginWithoutPassword', () => {

    objects.clickLogin().should('be.visible').click();
    objects.usernameOnLogin().should('be.visible').type('user');
    //objects.passwordOnLogin().should('be.visible').type('password');
    objects.clickLoginButton().should('be.visible').click();
    objects.alertMsg().should('have.text','Invalid login credentials.');
    
})

Cypress.Commands.add('tryLoginWithWrongUser', () => {

    objects.clickLogin().should('be.visible').click();
    objects.usernameOnLogin().should('be.visible').type('userWrong');
    objects.passwordOnLogin().should('be.visible').type('password');
    objects.clickLoginButton().should('be.visible').click();
    objects.alertMsg().should('have.text','Invalid login credentials.');
    
})

Cypress.Commands.add('tryLoginWithWrongPass', () => {

    objects.clickLogin().should('be.visible').click();
    objects.usernameOnLogin().should('be.visible').type('user');
    objects.passwordOnLogin().should('be.visible').type('passwordWrong');
    objects.clickLoginButton().should('be.visible').click();
    objects.alertMsg().should('have.text','Invalid login credentials.');
    
})

Cypress.Commands.add('trySqlInjection', () => {

    objects.clickLogin().should('be.visible').click();
    objects.usernameOnLogin().should('be.visible').type('user');
    objects.passwordOnLogin().should('be.visible').type('105 OR 1=1');
    objects.clickLoginButton().should('be.visible').click();
    objects.alertMsg().should('have.text','Invalid login credentials.');
    
})

Cypress.Commands.add('checkFirstFilter', () => {

    objects.clickFilterFirst().should('be.visible').click();
    objects.clickApply().should('be.visible').click();
    
})

Cypress.Commands.add('checkTwoFilter', () => {

    objects.clickFilterFirst().should('be.visible').click();
    objects.clickFilterLast().should('be.visible').click();
    objects.clickApply().should('be.visible').click();
    
})

Cypress.Commands.add('checkUser', () => {

    cy.request({
        method : 'GET',
        url : 'http://localhost/customers',
    }).then(function(response){
        const target = (response.body._embedded);
        
        cy.log(target[1]);
        cy.log(target.length);

        //console.log(response.body[12]);
        //expect(response.body).have.property('url');
        //expect(response.body.data).have.property('Eve_Berger')
    });
    
})




