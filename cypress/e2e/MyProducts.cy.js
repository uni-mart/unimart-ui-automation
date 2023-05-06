describe('Test Product Page', () => {

    it('should display product page', () => {
      cy.visit('http://127.0.0.1:5173/myProducts');
  
      cy.get('.card-img-top')
      .should('be.visible')
      .invoke('attr', 'src')
      .should('match', /^https?:\/\/.+$/)

      cy.get('.card-body', { timeout: 10000 }).should('be.visible');
      cy.get('.list-group', {timeout: 10000}).should('be.visible');
      cy.get("input[placeholder='Search']").should('be.visible');
      cy.screenshot('Product');
  })
      
  });