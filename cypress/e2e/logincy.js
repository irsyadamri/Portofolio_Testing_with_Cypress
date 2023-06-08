describe('User Menangement Users', () => {
    it('M-002.1', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(2) > .oxd-input').type('Admin')
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
    })
})