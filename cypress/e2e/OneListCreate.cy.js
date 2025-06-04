describe('Board App - UI Tests', () => {
    beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('Add one list and verify two lists created successfully', () => {
    cy.get('[data-cy="create-board"]').click();
    cy.get("input[placeholder='Add board title']").type('test{enter}')
    cy.url().should('include', '/board');
     cy.get("input[placeholder='Enter list title...']").click();
    cy.get('[data-cy="add-list-input"]').type('List1{enter}')
  });
});
