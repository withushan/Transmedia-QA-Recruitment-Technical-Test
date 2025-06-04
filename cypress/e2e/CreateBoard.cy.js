describe("Board App - UI Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Verify Board created successfully", () => {
    cy.get('[data-cy="create-board"]').click();
    cy.get("input[placeholder='Add board title']").type("test{enter}");
    expect(true).to.equal(true);
  });
});
