/**
This file is for Common keywords 
*/

import { env_variables } from '../../import'
import { QUESTIONNAIRE_SELECTORS } from '../selectors'

const faker = require('faker')

Cypress.Commands.add('goToInsuranceQuestionnairePage', () => {
    cy.intercept('GET', '/questionflow/*').as('questionnaireForm')
    cy.visit(env_variables.baseURL)
    cy.get(QUESTIONNAIRE_SELECTORS.RABBITCARE_LOGO).should('be.visible')
    cy.wait('@questionnaireForm').its('response.statusCode').should('eq', 200)
})

Cypress.Commands.add('getRandomData', () => {
    const randomData = {
        phoneNumber: faker.phone.phoneNumber('#########'),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
    }
    return Promise.resolve(randomData)
})

Cypress.Commands.add('checkHealthPackagesPage', () => {
    cy.intercept('GET', '/api/sales/health/packages').as('healthPackagesPage')
    cy.url().should('include', env_variables.healthInsurancePageURL)
    cy.wait('@healthPackagesPage').its('response.statusCode').should('eq', 200)
})