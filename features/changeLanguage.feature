Feature: Change Language

    Scenario: Verify language can be changed successfully
        Given I am on hotels website
        Given I am in usa region
        And I click language selector
        And I click spanish language
        And I click save button
        Then I verify spanish is displayed
        And I click language selector
        And I select English in language dropdown
        And I click guardar button
        Then I verify English is displayed