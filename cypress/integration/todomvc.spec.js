/// <reference types="cypress"/>

import { TodoPage } from "../page-objects/todo-page"

// it('Should be able to add a new todo to the list', () => {

//     cy.visit('http://todomvc-app-for-testing.surge.sh/')

//     cy.get('.new-todo', {
//         timeout: 6000
//     }).type("Clean room{enter}")

//     cy.get('label').should('have.text', 'Clean room')

//     cy.get('.toggle').should('not.be.checked')

//     cy.get('.toggle').click()

//     cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

//     cy.contains('Clear completed').click()

//     cy.get('.todo-list').should('not.have.descendants', 'li')

// })

describe('ToDo actions', () => {

    const todoPage = new TodoPage()

    beforeEach(() => { // Runs before each test

        /* cy.visit('http://todomvc-app-for-testing.surge.sh/') */

        todoPage.navigate('http://todomvc-app-for-testing.surge.sh/')

        // cy.get('.new-todo', {
        //     timeout: 6000
        // }).type("Clean room{enter}")
        todoPage.addToDo('Clean room')

    })

    it('Should add a new todo to the list', () => {

        // cy.get('label').should('have.text', 'Clean room')
        todoPage.validateTodoText(0, 'Clean room')

    })

    it('Should mark a todo as completed', () => {

        cy.get('.toggle').should('not.be.checked')

        cy.get('.toggle').click()

        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    })

    it('Should clear a completed todo', () => {

        cy.get('.toggle').click()

        cy.contains('Clear completed').click()

        cy.get('.todo-list').should('not.have.descendants', 'li')

    })

})