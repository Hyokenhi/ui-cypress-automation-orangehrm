Cypress.on('uncaught:exception', (err, runnable) => {
  // Previene que Cypress falle por errores de la aplicación
  return false;
});
