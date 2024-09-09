describe('Home Page', () => {
    it('page loads', () => {
      cy.visit('/')
      cy.contains('h1', 'User Management')
    }),

    it('can click button', () => {
        cy.visit('/')
        cy.get('#createUserBtn').should('be.visible')
      })
  })