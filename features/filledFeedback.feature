Feature: Full Feedback Form

    Scenario: Verify user can submit feedback after completing the feedback form
        Given I am on hotels website
        Then I click on support
        And I click on site feedback
        And I select any overall rating
        And I select any content rating
        And I select any design rating
        And I select any ease of use rating
        And I click on submit
        And I verify Thankyou For Your Feedback is displayed