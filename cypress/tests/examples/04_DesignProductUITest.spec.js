/// <reference types="cypress" />
import { shopPage } from "./pages/ShopPage"
import { designPage } from "./pages/DesignPage"
import { devApi } from "./api/DevApi"

describe("Design Product - UI tests", () => {
  beforeEach("Open shop website and go to Design Page", () => {
    cy.visit("https://dev-test-nbe.briklshop.com/en/store/e2e-custom/product?p=21fdd945-c21e-4575-8f9c-41f2c91e55e2");
    shopPage.verifyShopPage()
    shopPage.clickDesignNowBtn()
    designPage.verifyThatDesignPageLoaded()
  })

  it("DESIGNTEST-01 As a user I want to change Product color", () => {
    designPage.clickFirstDesignTemplateBtn()
    designPage.clickDesignColorBtn()
// click and verify that update design request was sent to backend
    designPage.clickLightRedBtn()
    devApi.verifyApiRequestUpdateZoneCustomization('#EE6587')
    designPage.verifyLightRedCheckIcon()
    designPage.clickColorZoneSelectingBox()
    designPage.chooseRightInSelectingBox()  
    designPage.clickMintLightGreenBtn()
// click and verify that update design request was sent to backend
    devApi.verifyApiRequestUpdateZoneCustomization('#7CDAB8')  
    designPage.verifyMintLightGreenCheckIcon()
  })
  it("DESIGNTEST-02 As a user I want to upload an image and place it on Product", () => {
    designPage.clickAddImageBtn()
    designPage.dragDropImage()
    designPage.clickConfirmUploadImageBtn()

    designPage.clickPlaceImageBtn()
// place image on model and verify that create and update design request was sent to backend
    designPage.placeImageOn3dModel()
    devApi.verifyApiRequestCreateLogoDesignRevision()
    devApi.verifyApiRequestUpdateLogoDesignRevision()

    designPage.openPlacedImagesDropDown()
    designPage.clickEditPlacedImagesBtn()
// click and verify that update design request was sent to backend
    designPage.clickFlipHorizontalBtn()
    devApi.verifyApiRequestUpdateLogoDesignRevision()
  })
})