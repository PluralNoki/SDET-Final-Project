Feature: Child-Ages

    Scenario: Verify Child-age dropdowns are same as number of children selected
        Given I am on hotels website
        Then I click on travelers button
        And I set children to 2
        And I verify children-age dropdowns are 2
        And I verify plus-button is enabled
        And I verify minus-button is enabled
        And I set children to 6
        And I verify children-age dropdowns are 6
        And I verify plus-button is disabled
        And I verify minus-button is enabled
        And I set children to 5
        And I verify children-age dropdowns are 5
        And I verify plus-button is enabled
        And I verify minus-button is enabled
        And I set children to 0
        And I verify children-age dropdowns aren't displayed
        And I verify plus-button is enabled
        And I verify minus-button is disabled