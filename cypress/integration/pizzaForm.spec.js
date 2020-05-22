describe('check site basic functionality', ()=>{
    it('navigate to site', ()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('submit should be disabled on render', ()=>{
        cy.get('[name="submit"]').should('be.disabled')
    })

    it('enter info into name field', ()=>{
        cy.get('input[name="name"]')
        .type('abcd').should('have.value','abcd')
    })

    it('check the terms of service checkbox', ()=>{
        cy.get('[name="Pepperoni"]')
        .click();
    })

    it('Submit button should now be enabled', ()=>{
        cy.get('[name="submit"]').should('not.be.disabled')
    })
})

describe('check form validation', ()=>{
    it('reload site', ()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('check name field validation', ()=>{
        cy.get('input[name="name"]').type('a')
        cy.get('[name="nameError"]').should('have.text',"The username must be at least three characters long")
        cy.get('input[name="name"]').type('b')
        cy.get('[name="nameError"]').should('have.text','The username must be at least three characters long')
        cy.get('input[name="name"]').type('c')
        cy.get('[name="nameError"]').should('have.text', "")
        cy.get('[name="submit"]').should('not.be.disabled')
    })


    it('checkbox functionality', ()=>{
        cy.get('[name="Pepperoni"]')
        .click().should('have.value', 'pepperoni')

        cy.get('[name="Onions"]').click().should('have.value', 'on')
    })

})

describe('add a user', ()=>{
    it('submit filled out form', ()=>{
        cy.get('[name="name"]').type('abc')
        cy.get('[name="submit"]').click()
        cy.get('[name="home"]').click()
        cy.get('.card-title').contains('abc')
    })

})