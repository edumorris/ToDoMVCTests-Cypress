/// <reference types="cypress"/>

export class TodoPage {

    navigate(url) {

        cy.visit(url)

    }

    addToDo(todoText) {
        
        cy.get('.new-todo').type(todoText + "{enter}")

    }

    completeToDo(todoIndex) {

        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()

    }

    validateTodoText(todoIndex, expectedText) {
        
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText)

    }

    /* Filtering */
    filterTodoBy(filter) {

        cy.contains(filter).click()

    }

}