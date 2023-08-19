Feature: Verify Share Feedback

    Scenario: Verify share feedback button is displayed at the end of search results
    Given I am on hotels website
    And I enter Bora in destination
    And I enter check-in date as December-1-2023
    And I enter check-out date as December-10-2023
    And I click date done button
    And I click search button
    Then I verify Tell Us How We Can Improve Our Site is displayed
    Then I verify Share Feedback button is displayed and enabled

    