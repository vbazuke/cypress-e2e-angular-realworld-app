describe('Like a post', () => {
    it('Like', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.contains('Global Feed').click()
        cy.get('app-article-preview:nth-child(1) > div > app-article-meta > div > app-favorite-button > button').invoke('text').then((val1) => {

          cy.get('app-article-preview:nth-child(1) > div > app-article-meta > div > app-favorite-button > button').click()
          // grab the input again and compare its previous value
          // to the current value
          cy.get('app-article-preview:nth-child(1) > div > app-article-meta > div > app-favorite-button > button').invoke('text').should((val2) => {
            expect(val1).not.to.eq(val2)
          })
        })

    })
})
