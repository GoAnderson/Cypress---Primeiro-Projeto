const elements = {
    buttons: {
        cadastro: '.fa-lock',
        cadastrar: '#btnRegister',
        okpopup: '.swal2-confirm'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    assert: {
        cadastro: '.account_form',
        cadastroPopup: '#swal2-html-container',
    },

    texts: {
        cadastroTitulo: 'Cadastro de usuário'
    }

}

export default{

    
    // Entrar na página inicial
    accessCadastroPage(){
        cy.get(elements.buttons.cadastro)
        .should('exist')
        .click()
    },

    // Assert na pagina de cadastro
    assertCadastroPage(){
        cy.get(elements.assert.cadastro)
            .contains(elements.texts.cadastroTitulo)
                .should('be.visible')
    },

    // Preencher Nome
    fillName(name){
        cy.get(elements.fields.name)
            .should('be.visible')
                .type(name)
    },
    fillEmail(email){
        cy.get(elements.fields.email)
            .should('be.visible')
                .type(email)
    },
    fillPassword(password){
        cy.get(elements.fields.password)
            .should('be.visible')
                .type(password)
    },

    clickCadastro(){
        cy.get(elements.buttons.cadastrar)
            .should('be.visible')
                .click()
    },

    assertPopup(name){
        cy.get(elements.assert.cadastroPopup)
            .should('contain', `Bem-vindo ${name}`)
    },

    clickOkPopup(name){
        cy.get(elements.buttons.okpopup)
            .should('exist')
                .click()
    }


}