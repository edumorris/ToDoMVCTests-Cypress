/// <reference types="cypress"/>

describe('Filtering', () => {

    beforeEach(() => { // Runs before each test

        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        let todoInput = cy.get('.new-todo', {timeout: 6000})

        // cy.get('.new-todo', {
        //     timeout: 6000
        // }).type("Learn to code{enter}")

        todoInput.type("Learn JavaScript{enter}")
        todoInput.type("Learn TypeScript{enter}")
        todoInput.type("Learn PlayWright{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()

    })

    it('Should filter "Active" ToDos', () => {

        // Filter "Active" todos
        cy.contains('Active').click()

        // Check that the todo li element has only 2 items
        cy.get('.todo-list li').should('have.length', 2)

    })

    it('Should filter "Completed" ToDos', () => {

        // Filter "Completed" todos
        cy.contains('Completed').click()

        // Check that the todo li element has only 1 items
        cy.get('.todo-list li').should('have.length', 1)

    })

    it('Should filter "All" ToDos', () => {

        // Filter "All" todos
        cy.contains('All').click()

        // Check that the todo li element has 3 items
        cy.get('.todo-list li').should('have.length', 3)

    })

})