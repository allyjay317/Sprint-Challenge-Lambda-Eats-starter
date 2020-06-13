const { createContext } = require("react")

context('form testing', function(){
    
    it('can navigate through pages', function(){
        cy.visit('localhost:3000')
        cy.get('[cy-data=pizzalink]')
        .click()

        cy.url()
        .should('include', '/pizza')

        cy.get('[cy-data=homebutton]')
        .click()

        cy.url()
        .should('include', '/')
    })

    it('can add text to name', function(){
        cy.visit('localhost:3000/pizza')

        cy.get('[cy-data=namefield]')
        .type('Allison')
    })
    it('can select multiple toppings', function(){
        cy.visit('localhost:3000/pizza')

        cy.get('[cy-data=sausage]')
        .check()

        cy.get('[cy-data=onion]')
        .check()

    })

    it('can submit the form', function(){
        cy.visit('localhost:3000/pizza')
        cy.get('[cy-data=namefield]')
        .type('Allison')

        cy.get('[cy-data=orderpizza]')
        .click()
    })
})