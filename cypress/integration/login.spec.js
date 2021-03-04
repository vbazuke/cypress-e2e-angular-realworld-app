describe('Conduit Login', () => {
    it('Login success', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.get('body > app-root > app-layout-header > nav > div > ul > li:nth-child(4)').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })

    it('Dados Inválidos', () => {
        cy.login('usuario@inexistente.com', 'senhaerrada')
        cy.get('.error-messages > li')
            .should('contain', 'email or password is invalid')
    })
})
