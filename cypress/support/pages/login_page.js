export default{
    // Entrar na página inicial
    assertCadastroPage(){
        cy.get('.logo img')
                .should('be.visible')
    }
}