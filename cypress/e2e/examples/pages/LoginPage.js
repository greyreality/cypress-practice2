/// <reference types="cypress" />

export class LoginPage {
    clickBuyFirstItem() {
        cy.get("[data-cy='product-card-button']").eq(0).click();
    }
}

export const loginPage = new LoginPage();