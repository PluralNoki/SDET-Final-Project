Feature: Weak Password

    Scenario: Verify weak password messages
        Given I am on hotels website   
        Then I click on the sign in link
        And I click on the sign up button
        When I enter user@test.com in email address