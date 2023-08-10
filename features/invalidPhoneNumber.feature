Feature: Invalid Phone Number

    Scenario: Verify invalid phone number error
        Given I am on hotels website
        Then I scroll to Get the app button
        And I enter 0000000000 in phone number
        And I click on Get the app button
        And I verify Please enter a valid phone number is displayed