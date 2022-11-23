/// <reference types="cypress" />

export class LoginPage {
    verifyLoginPage() {
        cy.contains("Welcome!", { timeout: 10000 }).should('exist')
    }
    
    clickBuyFirstItem() {
        cy.get("[data-cy='product-card-button']").eq(0).click()
    }    
}

export const loginPage = new LoginPage();