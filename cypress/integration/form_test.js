const { createContext } = require("react")

context('form testing', function(){
    beforeEach(function(){
        cy.visit('localhost:3000')
    })
    it('can navigate through pages', function(){
        cy.get('[cy-data=pizzalink]')
        .click()

        cy.url()
        .should('include', '/pizza')
    })
})