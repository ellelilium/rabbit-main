/** 
 This file is for Personal Section on Insurance Questionnaire page keywords 
*/

import { QUESTIONNAIRE_PERSONAL_SELECTORS } from '../selectors'

const ageTooOldError = 'Customer age cannot be larger than 100 years old.'

Cypress.Commands.add('createPersonalInfo', () => {
    cy.getRandomData().then((randomData) => {
        cy.selectGender('male')
        cy.selectThaiNationality()
        cy.inputDOB('15/10/1990')
        cy.inputPhoneNumber(randomData.phoneNumber)
        cy.inputFirstAndLastName(randomData.firstName,randomData.lastName)
        cy.inputEmail(randomData.email)
    })
})

Cypress.Commands.add('selectGender', (gender) => {
    if (gender === 'male') {
        cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.GENDER_M_BOX).should('be.visible')
        cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.GENDER_M_BTN).click()
    } else if (gender === 'female'){
        cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.GENDER_F_BOX).should('be.visible')
        cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.GENDER_F_BTN).click()
    }
})

Cypress.Commands.add('selectThaiNationality', () => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.NATIONALITY_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.NATIONALITY_THAI_BTN).click()
})

Cypress.Commands.add('selectForeignerNationality', () => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.NATIONALITY_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.NATIONALITY_FOREIGN_BTN).click()
})

Cypress.Commands.add('inputDOB', (dob) => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_LBL).type(dob)
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_TAB).contains('Next').click()
})

Cypress.Commands.add('inputPhoneNumber', (phoneNumber) => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.PHONE_COUTRY_CODE_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.PHONE_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.PHONE_COUTRY_CODE_DDL).select('Thailand (+66)')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.PHONE_LBL).type(phoneNumber)
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.PHONE_TAB).contains('Next').click()
})

Cypress.Commands.add('inputFirstAndLastName', (firstName,lastName) => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.FIRST_NAME_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.LAST_NAME_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.FIRST_NAME_LBL).type(firstName)
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.LAST_NAME_LBL).type(lastName)
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.FIRST_LAST_NAME_TAB).contains('Next').click()
})

Cypress.Commands.add('inputEmail', (email) => {
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.EMAIL_TITLE).should('be.visible')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.EMAIL_LBL).type(email)
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.EMAIL_TAB).contains('Next').click()
})

Cypress.Commands.add('haveInvalidInputOnDOB', () => {
    cy.selectGender('male')
    cy.selectThaiNationality()
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_LBL).type('15/10/1090')
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_TITLE).click()
    cy.get(QUESTIONNAIRE_PERSONAL_SELECTORS.DOB_ERROR_MESSAGE).should('have.text', ageTooOldError)  
})