/// <reference types="cypress" />
import { loginPage } from "./pages/LoginPage"
import { itemPage } from "./pages/ItemPage"
import { cartPage } from "./pages/CartPage"

describe("Backend tests", () => {
  beforeEach("Open website", () => {
    cy.visit("/salut-partners");
    cy.contains("Welcome!").should('exist')
  })

  it.only("TEST-01 Verify item deletion", () => {
    loginPage.clickBuyFirstItem()
    itemPage.verifyItemPage()
    itemPage.clickAddToCart()
    cartPage.verifyCartPage()

    cartPage.clickItemDetails()
    cartPage.verifyItemDetails()
    // TODO: to find solution with developers for waiting until ItemDetail will appear from the right side
    cy.wait(2000)
    cartPage.clickItemDecrease()
    cartPage.verifyItemDeletePopup()

    cartPage.clickConfirmDelete()
    cartPage.verifyEmptyCartText()
  })
})