describe('Login OrangeHRM', () => {
    it('should login successfully', () => {
      cy.visit('/');
  
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      cy.get('h6').contains('Dashboard').should('be.visible');

    });

    it('should show error with wrong credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      
        cy.get('input[name="username"]').type('wrongUser');
        cy.get('input[name="password"]').type('wrongPassword');
        cy.get('button[type="submit"]').click();
      
        cy.get('.oxd-alert-content-text')
          .should('contain.text', 'Invalid credentials')
          .screenshot('login-invalid'); // captura con nombre
      });

      it('should logout successfully after login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      
        // Login válido
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
      
        // Esperar que cargue el Dashboard
        cy.get('h6').contains('Dashboard').should('be.visible');
      
        // Abrir menú de usuario (foto perfil arriba derecha)
        cy.get('img[alt="profile picture"]').click();
      
        // Hacer clic en Logout
        cy.contains('Logout').click();
      
        // Validar que volvemos al login
        cy.get('input[name="username"]').should('be.visible');
      
        // Captura final como evidencia
        cy.screenshot('logout-success');
      });
      
  });
  