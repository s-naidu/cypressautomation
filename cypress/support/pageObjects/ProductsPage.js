class ProductsPage
{
    
    checkoutPage()
    {
return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    ContinueCheckout()
    {
        return cy.get(':nth-child(6) > :nth-child(5) > .btn')
    }

    DeliveryLocation()
    {
        return cy.get('#country')
    }
    SelectDeliveryLocationCountry()
    {
return cy.get('.suggestions > ul > li > a')
    }

    ClickPurchaseButton()
    {
        return cy.get('.ng-untouched > .btn')
    }

    VerifySuccessMessage()

    {

        return cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
            expect(actualText.includes("Success")).to.be.true
        }
        
        )
    }

}


export default ProductsPage