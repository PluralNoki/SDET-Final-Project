Feature: Get The App

    Scenario: Verify Get The App section
    Given I am on hotels website
    And I click on Get The App button
    Then I verify Scan The QR Code And Download Our App is displayed
    Then I verify QR Code is displayed