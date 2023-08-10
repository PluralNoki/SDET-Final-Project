Feature: Calendar Buttons and Dates

    Scenario: Verify past dates and back button on current month's calendar is disabled
        Given I am on hotels website
        Then I click on Dates
        And I go to current month if not displayed
        And I verify past dates are disabled
        And I verify back button on current month is disabled