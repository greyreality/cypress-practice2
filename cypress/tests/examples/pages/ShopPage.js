/// <reference types="cypress" />

export class ShopPage {
    verifyShopPage() {
        cy.contains("Design Now", { timeout: 30000 }).should('exist')
    }

    clickDesignNowBtn() {
        cy.get("[data-cy='add-to-cart']").click()
    }    
}

export const shopPage = new ShopPage();