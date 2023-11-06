describe('Página de cadastro', () => {

    const usuarios = require('../fixtures/usuarios.json');
    
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
        cy.visit('http://localhost:4200/');
        cy.get('[data-test="register"]').click();
        cy.get('input[data-test="email"]').type('11111@111.com');
        cy.get('input[data-test="fullName"]').type('L1111 L1111');
        cy.get('input[data-test="registerUserName"]').type('111111111');
        cy.get('input[data-test="registerPassword"]').type('L111111111');
        cy.get('[data-test="btnRegister"]').click();
    })
})
