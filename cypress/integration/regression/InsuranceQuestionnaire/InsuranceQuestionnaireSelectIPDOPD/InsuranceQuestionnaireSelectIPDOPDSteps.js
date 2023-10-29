import { When, And } from 'cypress-cucumber-preprocessor/steps'

When('I Can Select OPD IPD Insurance Product', () => {
    cy.selectProductCategoryIPDOPD()
})

And('I Select Existing Insurance Type', () => {
    cy.selectIPDOPDTypeExisting()
})

And('I Select Individuals Plan', () => {
    cy.selectIPDOPDPlanIndividuals()
})

And('I Select Additional Coverage', () => {
    cy.selectIPDOPDAdditionalCoverage(3)
})