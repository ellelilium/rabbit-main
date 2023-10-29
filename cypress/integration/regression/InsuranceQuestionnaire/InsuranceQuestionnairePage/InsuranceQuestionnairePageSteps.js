import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I See Insurance Questionnaire Form Succesfully Loaded', () => {
    cy.verifyInsuranceQuestionnaireForm()
})

When('I Add Invalid Input to DOB Field', () => {
    cy.haveInvalidInputOnDOB()
})

Then('I Can See Only Personal Section Displayed', () => {
    cy.verifyStatusOfInsuranceQuestionnaire()
})

Then('Next Button is Disabled', () => {
    cy.verifyNextButtonIsDisabled()
})
