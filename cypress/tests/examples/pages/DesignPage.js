/// <reference types="cypress" />

export class DesignPage {
    verifyThatDesignPageLoaded() {
        cy.contains("Loading the design assets. Please wait...", { timeout: 15000 }).should('exist')
        cy.get("button[data-cy='studio-Done-button']", { timeout: 30000 }).contains('Done').should('be.visible')
        cy.get("button[data-cy='add-to-cart']", { timeout: 20000 }).should('have.attr', 'disabled', 'disabled')
        cy.get("button[data-cy='add-to-cart']", { timeout: 30000 }).should('not.have.attr', 'disabled', 'disabled')
    }

    clickDesignNowBtn() {
        cy.get("[data-cy='add-to-cart']").click()
    }

    clickFirstDesignTemplateBtn() {
        cy.get("[data-cy='studio-design-template-0']").click()
    }
    
    clickDesignColorBtn() {
        cy.get("[id='tabs-:r1:--tab-2']").click() 
    }
    
    clickLightRedBtn() {
        cy.get("[class='css-1te42ra']").click()
    }

    verifyLightRedCheckIcon() {
        cy.get(".css-1te42ra > .css-1y6551x > svg[data-testid=check-icon]").should('exist')
    }

    clickMintLightGreenBtn() {
        cy.get("[class='css-bs89ou']").click()
    }

    verifyMintLightGreenCheckIcon() {
        cy.get(".css-bs89ou > .css-1y6551x > svg[data-testid=check-icon]").should('exist')
    }
    
    clickColorZoneSelectingBox() {
        cy.get("[id='colorzoneSelectionBox']").click()
    }

    chooseRightInSelectingBox() {
        cy.contains("Right", { timeout: 15000 }).click()
    }

    clickAddImageBtn() {
        cy.get("[data-cy='studio-menu-step-IMAGE']").click() 
    }

    clickUploadImageBtn() {
        cy.get('.chakra-button').contains('Upload').click();
    }

    dragDropImage() {
        cy.contains("Upload", { timeout: 20000 }).should('exist')
        cy.get("[data-cy='file-dropzone-input']").should('exist')
        cy.get("[data-cy='file-dropzone-input']").selectFile('./cypress/fixtures/dolphin100.png', { force: true }, { action: "drag-drop" })
    }

    clickConfirmUploadImageBtn() {
        cy.get("[data-cy='modal-upload-button']").contains('Upload').click();
    }

    clickPlaceImageBtn() {
        cy.get("button[data-cy='studio-image-dropzone-placeimage-button']", { timeout: 10000 }).should('not.have.attr', 'disabled', 'disabled')
        cy.get("[data-cy='studio-image-dropzone-placeimage-button']", { timeout: 10000 }).contains('Place Image').click()
    }

    verifyPlaceNotiText() {
        cy.contains("Select the area to place the image.", { timeout: 10000 }).should('exist')
    }
    
    placeImageOn3dModel() {
        cy.get("[id='THREEJS']").click(200, 500)
    }

    openPlacedImagesDropDown() {
        cy.get("[data-cy='images-placed-section']").contains('Images placed').click();
    }

    clickEditPlacedImagesBtn() {
        cy.get("[data-cy='studio-image-dropzone-edit-placedimage-button']").contains('Edit').focus()
        cy.get("[data-cy='studio-image-dropzone-edit-placedimage-button']").click()
    }
    
    clickFlipHorizontalBtn() {
        cy.get("[aria-label='Flip Horizontal']").click()
    }
}

export const designPage = new DesignPage()