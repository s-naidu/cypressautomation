/// <reference types="Cypress" />
describe('THsi is my fourth test Suite',function(){

it('THsi is my first test case',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    cy.on('window:alert',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
     
    cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    cy.get('#opentab').invoke('removeAttr','target').click()
    //cy.go('back')
    
} )
} )