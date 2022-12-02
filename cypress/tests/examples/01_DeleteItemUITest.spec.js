/// <reference types="cypress" />
import { loginPage } from "./pages/LoginPage"
import { itemPage } from "./pages/ItemPage"
import { cartPage } from "./pages/CartPage"

describe("Delete Item from a Cart - UI tests", () => {
  beforeEach("Open shop website", () => {
    cy.fixture("testdata").as("testdata");
    cy.visit("/salut-partners");
    loginPage.verifyLoginPage()
  })

  it.only("UITEST-01 As a user I want to delete item with quantity 1 from Cart", () => {
    cy.get("@testdata").then((testdata) => {

      loginPage.clickBuyFirstItem()
      itemPage.verifyItemPage()
      itemPage.clickAddToCart()
      cartPage.verifyCartPage()

      cartPage.clickItemDetails()
      cartPage.verifyItemDetails()
// TODO: to find solution with developers for waiting until ItemDetail will appear from the right side
      cy.wait(2000)
// to check desrease quantity by button from 1 to 0
// FYI: before i faced a behaviour that button worked from a second click at 22 november
      cartPage.clickItemDecrease()
      cartPage.verifyItemDeletePopup()
      cartPage.clickConfirmDelete()
      cartPage.verifyEmptyCartText()
    })
  })

  it("UITEST-02 As a user I want to delete non-exit item from Cart", () => {
    // to delete item by API and delete in UI
  })

  it("UITEST-03 As a user I want to delete item with quantity 2 from Cart", () => {
    // to check desrease quantity button from 2 to 0
  })


})