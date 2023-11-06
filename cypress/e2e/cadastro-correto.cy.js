import Cadastro from '../support/pages/cadastro/pagina-cadastro';

describe('Página de cadastro', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
    }) 
            
        it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

          preencherFormulario() {
           // cy.get('input[data-test="email"]').type('lllll@lll.com');
           // cy.get('input[data-test="fullName"]').type('Lllll Lllll');
           // cy.get('input[data-test="registerUserName"]').type('lllllllll');
           // cy.get('input[data-test="registerPassword"]').type('LllllLllll');
           Cadastro.acessarPaginaDeCadastro();
           Cadastro.preencherFormulario();
           Cadastro.submeterCadastro();
        })
  })
