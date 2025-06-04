describe('Board App - UI Tests', () => {
    beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('Delete a list', () => {
    cy.get('[data-cy="create-board"]').click();
    cy.get("input[placeholder='Add board title']").type('test{enter}')
    cy.url().should('include', '/board');
    cy.get("input[placeholder='Enter list title...']").click();
    cy.get('[data-cy="add-list-input"]').type('List1{enter}')
    cy.get("input[placeholder='Enter list title...']").click();
    cy.get('[data-cy="add-list-input"]').type('List2{enter}')
    cy.get('[data-cy="list-options"]').first().click();
    cy.get('[data-cy="delete-list"]').click();
  });
});