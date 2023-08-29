Feature: Login

    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels website
        Given I am in USA location
        Then I click on the sign in link
        And I click on the sign in button
        And I enter an invalid email address
        And I click on the sign-in continue button
        And I verify sign-in error message is displayed
