describe('Test Home Page', () => {

  it('should display home page', () => {
    cy.visit('http://127.0.0.1:5173/');

    cy.get('.d-inline-block', { timeout: 10000 }).should('be.visible');
    cy.get('.bg-white', {timeout: 10000}).should('be.visible');
    cy.get('[href="/login"]', {timeout: 10000}).should('be.visible');
    cy.get('[href="/login"]').should('not.be.disabled');
    cy.get('[href="/login"]').click();
    cy.screenshot('Home');
  })
});