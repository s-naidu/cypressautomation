Feature: e2e ecomerce flow

         application regression
@regression         
Scenario: Ecomerce products delivery
Given I open Ecomerce Page
When I add items to Cart
And Validate the total prices
Then select the country submit and verify Thankyou

@Smoke
Scenario: Filling the from to shop
 Given I open Ecomerce Page
 When I fill the from details
 |name|gender|
 |bob |Male  |
 Then validate the forms behaviour
 And select the shop Page   