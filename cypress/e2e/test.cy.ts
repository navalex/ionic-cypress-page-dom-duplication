describe('My First Test', () => {
  it('Interact with a button existing on 2 different pages', () => {
    cy.visit('/')
    cy.contains('ion-content', 'Tab 1 page')

    cy.get('ion-button[type=submit]').should('have.length', 1)

    cy.get('ion-tab-button').eq(1).click()

    cy.get('ion-button[type=submit]').should('have.length', 1)
  })

  it('Check that there is always only 1 ion-page at a time', () => {
    cy.visit('/')
    cy.get('ion-router-outlet div.ion-page').should('have.length', 1)

    cy.get('ion-tab-button').eq(1).click()
    cy.get('ion-router-outlet div.ion-page').should('have.length', 1)
  })
})