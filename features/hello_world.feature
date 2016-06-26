
Feature: Hello World 

  As a tester
  I want to be able to run cucumber-mink
  So that I can use predefined steps wherever possible

  Scenario: test mink predefined steps
    Given I browse "https://google.com"
    Given I am on "/"
    Then I should see "google"
    # This is a manual step:
    Then I should be able to run cucumber
