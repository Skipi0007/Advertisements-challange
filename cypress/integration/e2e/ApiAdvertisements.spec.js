/// <reference types="cypress" />

describe('Api advertisements tests', function() {

    it('get to equal 200', function() {
        cy.checkPositiveStatus( 'GET', '/api/advertisements/', 200 )
    })

    it('post to equal 400', function() {
        cy.checkNegativeStatus( 'POST', '/api/advertisements/', 404 )
    })

    it('put to equal 400', function() {
        cy.checkNegativeStatus( 'PUT', '/api/advertisements/', 404 )
    })

    it('delete to equal 400', function() {
        cy.checkNegativeStatus( 'DELETE', '/api/advertisements/', 404 )
    })
    
})