/// <reference types="cypress" />

export class ItemPage {
    verifyItemPage() {
        cy.get("[data-cy=product-image]", {timeout: 10000}).should('exist')
    }

    clickAddToCart() {
        cy.get("[data-cy=add-to-cart]").click()
    }
}

export const itemPage = new ItemPage();