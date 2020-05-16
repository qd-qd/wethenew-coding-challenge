const devices = require('../devices');

devices(['/'], () => {
  describe('Sneaker details page', () => {
    it('from homepage', () => {
      cy.get('[data-testid="card-link"]')
        .invoke('attr', 'href')
        .then(href => {
          cy.get('[data-testid="card-link"]').first().click();
          cy.url().should('include', href);
        });
    });
  });
});
