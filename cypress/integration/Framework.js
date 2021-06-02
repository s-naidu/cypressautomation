/// <reference types="Cypress" />
import HomePage from "../support/pageObjects/HomePage"
import ProductsPage from "../support/pageObjects/ProductsPage"
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
cy.visit(Cypress.env('url'));
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
productsPage.ContinueCheckout().click()
productsPage.DeliveryLocation().type('India')
productsPage.SelectDeliveryLocationCountry().click()
productsPage.ClickPurchaseButton().click()
productsPage.VerifySuccessMessage()
    } )
} )