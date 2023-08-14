Feature: Weak Password
"""
Currently Broken - 
Entering an email doesn't provide any fields for names
Neither clicking Continue as the email must be verified
"""

    Scenario: Verify weak password messages
        Given I am on hotels website   
        Then I click on the sign in link
        And I click on the sign up button
        When I enter 'user\@test.com' in email address
        And I enter fUser in First name
        And I enter lUser in Last name
        And I enter <password> in Password
        And I verify <msg2> message is displayed
        And I verify <msg2> message is displayed
        
        Example:
            | password | msg1                                | msg2                             |
            | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
            | abcd@123 | Add more words that are less common | Avoid common character sequences |
