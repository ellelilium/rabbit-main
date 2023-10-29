Feature: Insurance Questionnaire Select IPD/OPD

Scenario: Verify User Can Proceed to Health Packages Page with IPD/OPD Product
    Given I Go to Health Insurance Questionnaire Page
    And I Succesfully Fill Personal Info on Insurance Questionnaire Form
    When I Can Select OPD IPD Insurance Product
    And I Select Existing Insurance Type
    And I Select Individuals Plan 
    And I Select Additional Coverage
    And I Select Advisor To Call On Specific Time
    Then I Click Consent Button
    And I Can Click Show Packages Button
    And I Can See Health Packages Page