describe('Auth App', () => {
    // Antes de cada test
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    // Se renderiza la app
    it('frontpage can be opened', () => {
        cy.contains('Email');
    })
    // Se crea un usuario con datos correctos
    it('can register a user with correct data', () => {
        cy.createAccount({ email: 'usercreatetestaws2@yopmail.com', password: 'Password123#', confirmedPassword: 'Password123#' });
        cy.contains(/Emailed|limit/g);
    })
    // Se crea un usuario con email ya registrado
    it('cant register a user with email exist', () => {
        cy.createAccount({ email: 'usercreatetestaws2@yopmail.com', password: 'Password123#', confirmedPassword: 'Password123#' });
        cy.contains(/already|limit/g);
    })
    // Se crea un usuario con datos incorrectos
    it('cant register a user with fail data', () => {
        cy.createAccount({ email: 'usercreatetestawsincorrecto2@yopmail.com', password: 'Password123', confirmedPassword: 'Password123' });
        cy.contains(/policy|limit/g);
    })
    // Se crea un usuario con contraseñas diferentes
    it('cant register a user with diferents password', () => {
        cy.createAccount({ email: 'usercreatetestawsincorrecto2@yopmail.com', password: 'Password123', confirmedPassword: 'Password123#' });
        cy.contains(/match|limit/g);
    })
    // Se loguea un usuario con datos correctos
    it('can login a user with correct data', () => {
        cy.login({ email: 'usercreatetestaws@yopmail.com', password: 'Password123#' });
        cy.contains('Welcome');
    })
    // Se loguea un usuario con contraseña incorrecta
    it('cant login a user with fail password', () => {
        cy.login({ email: 'usercreatetestaws@yopmail.com', password: 'Password123' });
        cy.contains('Incorrect username or password.');
    })
    // Se loguea un usuario con usuario inexistente
    it('cant login a user with user non-existent', () => {
        cy.login({ email: 'usercreate@gmail.com', password: 'Password123' });
        cy.contains('User does not exist.');
    })
    // Se recupera la contraseña
    it('can recover password', () => {
        cy.contains('Sign In').click();
        cy.contains('Forgot your password?').click();
        cy.get('input[name="username"]').type('usercreatetestaws@yopmail.com');
        cy.get('button[type="submit"]').click();
        cy.contains(/verified|exceeded|Code|limit/g);
    })
    // Despues de loguearse
    describe('when logged in', () => {
        beforeEach(() => {
            cy.login({ email: 'usercreatetestaws@yopmail.com', password: 'Password123#' });
            cy.contains('Welcome');
        })
        // Se borran todos los usuarios de la base de datos (si existen)
        it('delete all users', () => {
            if (cy.contains('Delete user')) {
                cy.get('button[name="button-delete-user"').click({ multiple: true });
            }
        })
        //Se crea un usuario en la base de datos
        it('create a user in db', () => {
            cy.get('input[name="email"]').type('pruebacreacion@gmail.com');
            cy.get('input[name="password"]').type('123456789');
            cy.get('button[role="switch"]').click();
            cy.get('button[type="submit"]').click();
            cy.reload();
            cy.contains('pruebacreacion@gmail.com');
        })
    })
})