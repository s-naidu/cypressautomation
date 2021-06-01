/// <reference types="Cypress" />
describe('THsi is my first test Suite',function(){

it('THsi is my first test case',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
    cy.get('#checkBoxOption2').uncheck().should('not.be.checked').and('have.value','option2')
    cy.get('input[type="checkbox"]').check(['option1','option3'])
    cy.get('select').select('option1')
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item').each(($el, index, $list) => {
            if($el.text()==='India')
        {
            $el.click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')

    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    cy.get('[value="radio2"]').click().should('be.checked')
    cy.get('[value="radio1"]').click().should('be.checked')
    cy.get('[value="radio2"]').should('not.be.checked')



} )
} )