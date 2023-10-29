Feature: Insurance Questionnaire Page

Scenario: Verify Elements on Insurance Questionnaire Page
    Given I Go to Health Insurance Questionnaire Page
    When I See Insurance Questionnaire Form Succesfully Loaded
    Then I Can See Only Personal Section Displayed

Scenario: Verify Next Button is Disabled if Input is Invalid
    Given I Go to Health Insurance Questionnaire Page
    When I Add Invalid Input to DOB Field
    Then Next Button is Disabled
