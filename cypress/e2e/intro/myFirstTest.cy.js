/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/todo-list');
    });

    it.only('displays two todo items by default', () => {
        cy.get('#floatingInput').type('Pay electric bill{Enter}');
        cy.get('#floatingInput').type('Walk the dog{Enter}');

        cy.get('.list-group > .input-group').should('have.length', 2);

        cy.get('.list-group > .input-group')
            .first()
            .find('input[type="checkbox"]')
            .click();

        cy.get('.list-group > .input-group')
            .first()
            .find('input:disabled')
            .trigger('mouseover', { force: true });

        cy.get('.list-group > .input-group')
            .first()
            .find('button.btn-danger')
            .should('be.visible');

        cy.get('.list-group > .input-group')
            .first()
            .find('button.btn-danger')
            .click();

        cy.get('.list-group > .input-group').should('have.length', 1);
    });
});
