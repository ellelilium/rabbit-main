/** 
This file is for IPD/OPD product keywords 
*/

import { QUESTIONNAIRE_INSURANCE_SELECTORS } from '../selectors'

Cypress.Commands.add('selectProductCategoryIPDOPD', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PRODUCT_CATEGORY_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.IPD_OPD_BTN).click()
})

Cypress.Commands.add('selectIPDOPDTypeNew', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.TYPE_OPD_IPD_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.NEW_HEALTHCARE_OPD_IPD_BTN).click()
})

Cypress.Commands.add('selectIPDOPDTypeExisting', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.TYPE_OPD_IPD_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.EXISTING_HEALTHCARE_OPD_IPD_BTN).click()
})

Cypress.Commands.add('selectIPDOPDPlanIndividuals', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_INDIVIDUALS_BTN).click()
})

Cypress.Commands.add('selectIPDOPDPlanElite', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_ELITE_BTN).click()
})

Cypress.Commands.add('selectIPDOPDPlanExpats', () => {
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.PLAN_OPD_IPD_EXPATS_BTN).click()
})

Cypress.Commands.add('selectIPDOPDAdditionalCoverage', (checkboxNumber) => {
    for (let i = 0; i < checkboxNumber; i++) {
        cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.ADDITIONAL_COVERAGE_CHECKBOX).eq(i).click()
    }
    cy.get(QUESTIONNAIRE_INSURANCE_SELECTORS.ADDITIONAL_COVERAGE_TAB).contains('Next').click()
})