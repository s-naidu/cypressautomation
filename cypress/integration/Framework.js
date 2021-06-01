/// <reference types="Cypress" />
import HomePage from "../integration/pageObjects/HomePage"
import ProductsPage from "../integration/pageObjects/ProductsPage"
describe('THsi is my second test Suite',function()
{
    before (function()
    {
cy.fixture('example').then(function(data)
{
    this.data=data

})

    })

it('THsi is my sample framework',function()
{
    const homePage=new HomePage()
    const productsPage=new ProductsPage()
cy.visit('https://rahulshettyacademy.com/angularpractice');
homePage.getEditBox().type(this.data.name)
homePage.getGender().select(this.data.gender)
homePage.twoWayDataBinding().should('have.value',this.data.name)
homePage.getEditBox().should('have.attr','minlength','2')
homePage.getEntrepreneur().should('be.disabled')
homePage.getShopTab().click()
this.data.productName.forEach(element => {
    cy.selectProduct(element)
});

productsPage.checkoutPage().click()
productsPage.ContinueCheckout().click()
productsPage.DeliveryLocation().type('India')
productsPage.SelectDeliveryLocationCountry().click()
productsPage.ClickPurchaseButton().click()
productsPage.VerifySuccessMessage()
    } )
} )