class Objects{
    clickLogin(){
        return cy.get('li[id=login]')
    }
    clickRegister(){
        return cy.get('li[id=register]')
    }
    clickLoginButton(){
        return cy.get('button[class="btn btn-primary"]').first()
    }
    clickRegisterButton(){
        return cy.get('button[class="btn btn-primary"]').last()
    }

    username(){
        return cy.get('input[id="register-username-modal"]')
    }

    firstname(){
        return cy.get('input[id="register-first-modal"]')
    }

    lastname(){
        return cy.get('input[id="register-last-modal"]')
    }

    email(){
        return cy.get('input[id="register-email-modal"]')
    }
    
    password(){
        return cy.get('input[id="register-password-modal"]')
    }

    logout(){
        return cy.get('li[id="logout"]')
    }
    
    alertMsg(){
        return cy.get('div[class="alert alert-danger"]')
    }

    closeButtonOnRegister(){
        return cy.get('button[class="close"]').last()
    }
    
    usernameOnLogin(){
        return cy.get('input[id=username-modal]')
    }
    
    passwordOnLogin(){
        return cy.get('input[id="password-modal"]')
    }

    checkHowdy(){
        return cy.get('li[id="howdy"]')
    }

    clickCatalogue(){
        return cy.get('li[id=tabCatalogue]')
    }

    clickFilterFirst(){
        return cy.get('input[type="checkbox"]').first()
    
    }
    
    clickFilterLast(){
        return cy.get('input[type="checkbox"]').last()
    
    }

    clickApply(){
        return cy.get('a[class="btn btn-default btn-sm btn-primary"]')
    
    }
    
    
}

export default Objects