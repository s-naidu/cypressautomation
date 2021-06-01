/// <reference types="Cypress" />
describe('THsi is my fourth test Suite',function(){

it('THsi is my fifth test case',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        const text=$el.text()
        if(text.includes('Guide'))
    {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {

const priceText=price.text()
expect(priceText).to.equal('30')
        })
    }
})
    
} )
} )