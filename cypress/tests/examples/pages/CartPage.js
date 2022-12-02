/// <reference types="cypress" />

export class CartPage {
    verifyCartPage() {
        cy.contains("YOUR CART", { timeout: 10000 }).should('exist')
    }

    verifyItemDetails() {
        cy.get('[aria-label=close]').should('exist')
    }

    verifyItemDeletePopup() {
        cy.contains("Are you sure you want to remove this cart item ?", { timeout: 10000 }).should('exist')
    }

    verifyEmptyCartText() {
        cy.contains("Your Cart is Empty", { timeout: 10000 }).should('exist')
    }

    clickAddToCart() {
        cy.get("[data-cy=add-to-cart]").click()
    }

    clickItemDetails() {
        cy.get("[data-cy=cart-product-detail]").click()
    }

    clickItemDecrease() {
        cy.get("[data-cy=decrease-button]").click()


        cy.get("[data-cy=decrease-button]").click().then(() => {
            cy.contains("Are you sure you want to remove this cart item ?").should('exist')
        })
    }
    clickConfirmDelete() {
        cy.get("[data-cy=confirm-delete-product-button]").click()
    }
}

export const cartPage = new CartPage();