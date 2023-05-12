
describe('Test SingUp field', () => {
    it('should display signup field', () => {

        cy.visit('http://localhost:4173/signup');

        cy.get('#studentId', { timeout: 10000 }).should('be.visible');
        cy.get('#name', { timeout: 10000 }).should('be.visible');
        cy.get('#email', { timeout: 10000 }).should('be.visible');
        cy.get('#password', { timeout: 10000 }).should('be.visible');
        cy.get('#confirmPassword', { timeout: 10000 }).should('be.visible');
        cy.get('.mt-4', { timeout: 10000 }).should('be.visible');
        cy.get('.col > a', { timeout: 10000 }).should('be.visible');
        cy.get('.col > a').should('not.be.disabled');
        cy.get('.col > a').click();
        cy.screenshot('SignUp');

    })
});