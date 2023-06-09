describe('Test Signin field', () => {
    it('should display signin field', () => {
        cy.visit('http://localhost:4173/login');

        cy.get('#email', { timeout: 10000 }).should('be.visible');
        cy.get('#password', { timeout: 10000 }).should('be.visible');
        cy.get('.btn', { timeout: 10000 }).should('be.visible');
        cy.get('.col > a', { timeout: 10000 }).should('be.visible');
        cy.get('.col > a').should('not.be.disabled');
        cy.get('.col > a').click();
        cy.screenshot('SignIn');
    });
});