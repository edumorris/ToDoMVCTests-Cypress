/// <reference types="cypress"/>

describe(() => {

    beforeEach(() => { // Runs before each test

        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo', {
            timeout: 6000
        }).type("Learn to code{enter}")

    })

    it('Should', () => {


    })

})