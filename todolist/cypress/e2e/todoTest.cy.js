describe('Basic Tests ', () => {
  it('Logs onto the GitHub Pages Website', () => {
    cy.visit('https://gerald-z.github.io/Todo-List')
  })

  it('Tests basic create and read functions', () => {
    cy.visit('https://gerald-z.github.io/Todo-List')

    cy.get('#inputText').type("Note 1");
    cy.get('#inputSubmit').click()

    cy.get('#inputText').type("Note 2");
    cy.get('#inputSubmit').click()
    
    cy.get('#inputText').type("Note 3");
    cy.get('#inputSubmit').click()    

    cy.get(':nth-child(3) > .entryText').should('contain', "Note 1");
    cy.get(':nth-child(4) > .entryText').should('contain', "Note 2");
    cy.get(':nth-child(5) > .entryText').should('contain', "Note 3");
  })

  it('Tests the ability to edit created tasks', () => {
    cy.visit('https://gerald-z.github.io/Todo-List')

    cy.get('#inputText').type("Note 1");
    cy.get('#inputSubmit').click()

    cy.get('#inputText').type("Note 2");
    cy.get('#inputSubmit').click()
    
    cy.get('#inputText').type("Note 3");
    cy.get('#inputSubmit').click()    

    cy.get(':nth-child(3) > .entryText').should('contain', "Note 1");
    cy.get(':nth-child(4) > .entryText').should('contain', "Note 2");
    cy.get(':nth-child(5) > .entryText').should('contain', "Note 3");

    cy.get(':nth-child(3) > .edit').click();
    cy.get(':nth-child(3) > .editText').should('have.value', "Note 1");
    cy.get(':nth-child(3) > .editText').clear();
    cy.get(':nth-child(3) > .editText').type("New Note 1");
    cy.get(':nth-child(3) > .editSubmit').click();
    cy.get(':nth-child(3) > .entryText').should('contain', "New Note 1");

    cy.get(':nth-child(4) > .edit').click();
    cy.get(':nth-child(4) > .editText').should('have.value', "Note 2");
    cy.get(':nth-child(4) > .editText').clear();
    cy.get(':nth-child(4) > .editText').type("New Note 2");
    cy.get(':nth-child(4) > .editSubmit').click();
    cy.get(':nth-child(4) > .entryText').should('contain', "New Note 2");

    cy.get(':nth-child(5) > .edit').click();
    cy.get(':nth-child(5) > .editText').should('have.value', "Note 3");
    cy.get(':nth-child(5) > .editText').clear();
    cy.get(':nth-child(5) > .editText').type("New Note 3");
    cy.get(':nth-child(5) > .editSubmit').click();
    cy.get(':nth-child(5) > .entryText').should('contain', "New Note 3");


  })

  it('Tests the clear function', () => {
    cy.visit('https://gerald-z.github.io/Todo-List')

    cy.get('#inputText').type("Note 1");
    cy.get('#inputSubmit').click()

    cy.get('#inputText').type("Note 2");
    cy.get('#inputSubmit').click()
    
    cy.get('#inputText').type("Note 3");
    cy.get('#inputSubmit').click()    

    cy.get(':nth-child(3) > .entryText').should('contain', "Note 1");
    cy.get(':nth-child(4) > .entryText').should('contain', "Note 2");
    cy.get(':nth-child(5) > .entryText').should('contain', "Note 3");

    cy.get('#clearList').click();
  })

})

