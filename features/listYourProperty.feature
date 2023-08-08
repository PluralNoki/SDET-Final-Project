Feature: List Your Property

    Scenario: Verify "List Your Property" flow
        Given I am on hotels website
        Then I click on List Your Property
        And I verify What Would You Like To List is displayed
        And I verify Lodging is displayed
        And I verify Private Residence is displayed
        And I click on Private Residence
        And I verify Step 1 of 3 is displayed
        And I enter 4 as bedroom
        And I enter 2.5 as bathroom
        And I click next
        And I verify Step 2 of 3 is displayed
        And I verify Where is your property located is displayed      
        And I enter 121 in address  
        And I select 121 West Aparments from auto-suggestion
        And I verify map is displayed
        And I verify pin in map is displayed
        And I verify Move the pin to adjust the location of your property is displayed below graph 