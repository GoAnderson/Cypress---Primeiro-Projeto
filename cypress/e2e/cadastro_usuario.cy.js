const user_data = require('../fixtures/datas.json')

import home_page from "../support/pages/home_page"
import cadastro_page from "../support/pages/cadastro_page"

describe('Cadastro de Usuário', () => {
    
    beforeEach('Acessando login', () => {
        // Acessa a home page e da um assert
        home_page.accessHomePage()
    })


    it('Cadastrar', () => {
        // accessa a pagina de cadastro
        cadastro_page.accessCadastroPage()
        // assert na pagina de cadastro
        cadastro_page.assertCadastroPage()
        // Preencher name
        cadastro_page.fillName(user_data.name)
        // Preencher email
        cadastro_page.fillEmail(user_data.email)
        // Preencher password
        cadastro_page.fillPassword(user_data.password)
        // Clicar em cadastrar
        cadastro_page.clickCadastro()
        // Assert no popup
        cadastro_page.assertPopup(user_data.name)
        // Clicar Ok no popup
        cadastro_page.clickOkPopup()


    })
})