export default{
    // Entrar na página inicial
    accessHomePage(){
        cy.visit('/')
            .get('.logo img')
                .should('exist')
    }
}