Feature: Verify Terms and Conditions

    Scenario: Verify terms and conditions link and privacy statements work
    Given I am on hotels website
    Given I am in USA location
    And I click on the sign in link
    And I click on the sign in button
    And I click One Key Rewards Terms and Conditions link
    Then I verify One Key Rewards Terms and Conditions heading is displayed