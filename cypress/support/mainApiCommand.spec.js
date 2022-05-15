/// <reference types="cypress" />

//api

Cypress.Commands.add('checkNegativeStatus', (method, url, statusCode, body) => {
    cy.request({
      method: method,
      url: url,
      body: body,    
      failOnStatusCode: false 
    }).then(
      (response) => {
          expect(response.status).to.equals(statusCode)
        }
    )
})

Cypress.Commands.add('checkPositiveStatus', (method, url, statusCode, body={}) => {
  cy.request({
    method: method,
    url: url,
    body: body,
}).then(
    (response) => {
        expect(response.status).to.equals(statusCode)
      }
)
})

Cypress.Commands.add('pageSucessfullyLoaded', (url) => {
  cy.request({
    method: 'GET',
    url: url
  }).then(
    (response) => {
        expect(response.status).to.equals(200)
        expect(response.body).to.contain('<div')
      } 
  )
})