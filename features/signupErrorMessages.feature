Feature: Error Messages for Signup Form

    Scenario: Verify error message for invalid data in SignUp form
        Given I am on hotels website
        And I click on the sign in link
        And I click on the sign in button
        And I enter '#!@###' in email address
        And I click signin continue button
        Then I verify Enter A Valid Email is displayed
        Then I verify continue button is enabled
