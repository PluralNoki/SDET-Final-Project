Feature: Empty Feedback Error

    Scenario: Verify error is displayed when user submits the empty feedback form
        Given I am on hotels website
        Then I click on support
        And I click on site feedback
        And I click on submit
        And I verify error message is displayed
        And I verify red-box is displayed around overall section

        //Currently unfinished, there is no error message