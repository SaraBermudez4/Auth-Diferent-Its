Cypress.Commands.add('login', ({ email, password }) => {
    cy.contains('Sign In').click();
    cy.get('input[name="username"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[role="switch"]').click();
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('createAccount', ({ email, password, confirmedPassword }) => {
    cy.contains('Create Account').click();
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="confirm_password"]').type(confirmedPassword);
    cy.get('button[role="switch"]').click({ multiple: true });
    cy.get('button[type="submit"]').click({ force: true });
})