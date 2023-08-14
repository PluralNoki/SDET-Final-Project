Feature: Update Guests

    Scenario: Verify user can update number of guests on Homepage
        Given I am on hotels website
        Then I click on travelers button
        And I set adults to 6
        And I set children to 3
        And I make age of child 1 to 4
        And I make age of child 2 to under 1
        And I make age of child 3 to 7
        And I click travelers done button
        Then I verify total travelers adds up to 9

        