Feature: Filter-By and Sort-By

    Scenario: Verify filter-by and sort-by functionality works as expected
        Given I am on hotels website
        Then I search Manhattan, NY
        And I enter check-in date as Feb-10-2024
        And I enter check-out date as Feb-16-2024
        And I click search button
        And I click 5* from star-rating
        And I select price from sort-by dropdown
        And I verify all hotels in search results are 5*
        And I verify all hotels are listed in increasing price order