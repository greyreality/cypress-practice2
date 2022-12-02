/// <reference types="cypress" />

export class DevApi {
    verifyApiRequestUpdateZoneCustomization(color) {
        cy.intercept('POST', 'https://dev.api.mybrikl.com/graphql?lang=en_US&cur=USD&country=US').as('post1')
        cy.wait('@post1')
        cy.get('@post1').then(xhr => {
            console.log("POST1")
            console.log(xhr.request)
            console.log(xhr.response)
            expect(xhr.request.body.operationName).to.equal('updateZoneCustomization')
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.response.body.data.updateZoneCustomization.colorHex).to.equal(color)
        })
    }

    verifyApiRequestCreateLogoDesignRevision() {
        cy.intercept('POST', 'https://dev.api.mybrikl.com/graphql?lang=en_US&cur=USD&country=US').as('post2')
        cy.wait('@post2')
        cy.get('@post2').then(xhr => {
            // console.log("POST2")
            // console.log(xhr.request)
            // console.log(xhr.response)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.operationName).to.equal('createLogoDesignRevision')
        })
    }

    verifyApiRequestUpdateLogoDesignRevision() {
        cy.intercept('POST', 'https://dev.api.mybrikl.com/graphql?lang=en_US&cur=USD&country=US').as('post3')
        cy.wait('@post3')
        cy.get('@post3').then(xhr => {
            // console.log("POST3")
            // console.log(xhr.request)
            // console.log(xhr.response)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.operationName).to.equal('updateLogoDesignRevision')
        })
    }

}

export const devApi = new DevApi()