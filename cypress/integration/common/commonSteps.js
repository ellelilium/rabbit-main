import {Given, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I Go to Health Insurance Questionnaire Page', () => {
    cy.goToInsuranceQuestionnairePage()
})

And('I Succesfully Fill Personal Info on Insurance Questionnaire Form', () => {
    cy.createPersonalInfo()
})

And('I Select Advisor To Call On Specific Time', () => {
    cy.advisorCallSpecify('Monday', 2)
})

Then('I Click Consent Button', () => {
    cy.clickConsentButton()
})

And('I Can Click Show Packages Button', () => {
    cy.clickShowPackagesButton()
})

And('I Can See Health Packages Page', () => {
    cy.checkHealthPackagesPage()
})