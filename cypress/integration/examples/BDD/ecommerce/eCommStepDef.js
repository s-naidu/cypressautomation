/// <reference types="Cypress" />
import {Given,When,Then}from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductsPage from "../../../../support/pageObjects/ProductsPage"
const homePage=new HomePage()
const productsPage=new ProductsPage()
let name

Given ('I open Ecomerce Page',()=>
{
    cy.visit(Cypress.env('url'));
})
When ('I add items to Cart',function(){
    homePage.getShopTab().click()
    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    });
    
    productsPage.checkoutPage().click()

})
And('Validate the total prices',()=>
{
    var total=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>
    {
    const amount=$el.text()
    var res=amount.split(" ")
    res=res[1].trim()
    total=Number(total)+Number(res)
    
    //cy.log($el.text())
    }).then(function(){
        cy.log(total)
    })
    cy.get('h3 strong').then(function(element){
        const amount=element.text()
        var res=amount.split(" ")
        var total1=res[1].trim()
        expect(Number(total1)).equal(total)
        
    })

}) 
Then('select the country submit and verify Thankyou',()=>
{
    productsPage.ContinueCheckout().click()
    productsPage.DeliveryLocation().type('India')
    productsPage.SelectDeliveryLocationCountry().click()
    productsPage.ClickPurchaseButton().click()
    productsPage.VerifySuccessMessage()

})

When('I fill the from details',function(dataTable)
{
    name=dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
}) 
 Then('validate the forms behaviour',function()
 {
    homePage.twoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneur().should('be.disabled')
 })  
 And('select the shop Page',function()
 {
    homePage.getShopTab().click()
 })      