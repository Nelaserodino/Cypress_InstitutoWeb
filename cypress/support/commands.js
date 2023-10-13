/// <reference types="Cypress" />

Cypress.Commands.add('escribir', (selector, texto) => { 
    
    cy.get(selector).clear().type(texto);

 })
