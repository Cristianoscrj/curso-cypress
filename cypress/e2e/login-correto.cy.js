describe('Página de login', () => {

  beforeEach(() => {
      cy.visit('http://localhost:4200')
  })

      it('Deve preencher os campos do formulário corretamente e realizar login', () => {
          cy.login('cristianocosta', '12345678')
          })

})