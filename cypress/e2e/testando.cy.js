describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/#/home')
    cy.contains ('a', 'Register now').click();
    cy.get('[formcontrolname="email"]').type('cristiano@email.com.br')
    cy.get('[formcontrolname="fullName"]').type('Cristiano Costa')
    cy.get('[formcontrolname="userName"]').type('cristianosc')
    cy.get('[formcontrolname="password"]').type('cristiano123')
    cy.contains ('button', 'Register').click();
  })
})