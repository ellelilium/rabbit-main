/** 
 This file is for Insurance Questionnaire page keywords 
*/

import { QUESTIONNAIRE_SELECTORS, QUESTIONNAIRE_PERSONAL_SELECTORS } from '../selectors'

Cypress.Commands.add('verifyInsuranceQuestionnaireForm', () => {
    cy.get(QUESTIONNAIRE_SELECTORS.QUESTIONNAIRE_FORM).should('be.visible')
    cy.get(QUESTIONNAIRE_SELECTORS.QUESTIONNAIRE_PROGRESS_BAR).should('be.visible')
})

Cypress.Commands.add('verifyStatusOfInsuranceQuestionnaire', () => {
    cy.get(QUESTIONNAIRE_SELECTORS.PROGRESS_BAR_PERSONAL).should('have.class', 'completed')
    cy.get(QUESTIONNAIRE_SELECTORS.PROGRESS_BAR_INSURANCE).should('have.class', 'incomplete')
    cy.get(QUESTIONNAIRE_SELECTORS.PROGRESS_BAR_QUOTES).should('have.class', 'incomplete')
})

Cypress.Commands.add('advisorCallASAP', () => {
    cy.get(QUESTIONNAIRE_SELECTORS.ADVISOR_CALL_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_SELECTORS.ADVISOR_CALL_ASAP).click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_NEXT_BTN).contains('Next').click()
})

Cypress.Commands.add('advisorCallSpecify', (dayOfWeek, availableTime) => {
    cy.get(QUESTIONNAIRE_SELECTORS.ADVISOR_CALL_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_SELECTORS.ADVISOR_CALL_SPECIFIC).click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_TAB).contains('Day').click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_DDL).contains(dayOfWeek).click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_TAB).contains('Time').click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_DDL).eq(availableTime).click()
    cy.get(QUESTIONNAIRE_SELECTORS.DAY_AND_TIME_NEXT_BTN).contains('Next').click()
})

Cypress.Commands.add('clickConsentButton', () => {
    cy.get(QUESTIONNAIRE_SELECTORS.CONSENT_TAB).should('be.visible')
    cy.get(QUESTIONNAIRE_SELECTORS.CONSENT_BTN).contains('Consent').click()
    
})

Cypress.Commands.add('clickShowPackagesButton', () => {
    cy.get(QUESTIONNAIRE_SELECTORS.SHOW_PACKAGES_BTN).click()    
})

Cypress.Commands.add('verifyNextButtonIsDisabled', () => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_TAB).contains('Next').should('be.disabled') 
})