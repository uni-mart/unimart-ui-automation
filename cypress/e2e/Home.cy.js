describe('Test Home Page', () => {

  it('should display home page', () => {
    cy.visit('http://localhost:4173/');

    cy.get('.d-inline-block', { timeout: 10000 }).should('be.visible');
    cy.get('.bg-white', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/login"]', { timeout: 10000 }).should('be.visible');
    cy.get('[href="/login"]').should('not.be.disabled');
    cy.get('[href="/login"]').click();
    cy.screenshot('Home');
  })
});