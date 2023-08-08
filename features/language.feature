Feature: Language

    Scenario: Verify language can be changed successfully
        Given I am on hotels website
        Then I click on English language
        And I select French in language dropdown
        And I click save button    
        And I verify French is displayed
        And I click on French language
        And I select English in langauge dropdown
        And I click on Enregistrer button
        And I verify English is displayed