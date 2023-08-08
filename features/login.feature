Feature: Login

    Scenario: Verify Verification message for invalid sign in credentials
        Given I am on hotels website
        Then I click on the sign in link
        And I click on the sign in button
        And I enter an invalid email address
        And I click on the continue button
        And I verify error message is displayed
