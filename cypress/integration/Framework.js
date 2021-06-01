/// <reference types="Cypress" />
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
cy.visit('https://rahulshettyacademy.com/angularpractice');
cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
cy.get('select').select(this.data.gender)
    } )
} )