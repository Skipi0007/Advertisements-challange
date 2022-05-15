/// <reference types="cypress" />

describe('Advertisements tests', function() {

    it('get to equal 200', function() {
        cy.pageSucessfullyLoaded('/advertisements/');
    })

    it('post to equal 400', function() {
        cy.checkNegativeStatus( 'POST', '/advertisements/', 404 );
    })

    it('put to equal 400', function() {
        cy.checkNegativeStatus( 'PUT', '/advertisements/', 404 );
    })

    it('delete to equal 400', function() {
        cy.checkNegativeStatus( 'DELETE', '/advertisements/', 404 );
    })
})