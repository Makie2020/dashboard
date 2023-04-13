/* eslint-disable prettier/prettier */
describe('login succesfull', () => {
  it('not able to visit pages when you are not logged in', () => {
    cy.visit('http://localhost:3000/users')
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).should('not.include.text', 'users');
    });
  })
  it('login successfull', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=user]').type("Marieke")
    cy.get('input[name=token]').type("test")
    cy.get('button').click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('/dashboard');
    });
  })
  it('login not successfull when click on Login Button', () => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('/');
    });
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Username and/or Password is incorrect.")
    })
  })
  it('login not successfull with wrong user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[name=user]').type("Aaron")
    cy.get('input[name=token]').type("test")
    cy.get('button').click();
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('/');
    });
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Username and/or Password is incorrect.")
    })
  })
})