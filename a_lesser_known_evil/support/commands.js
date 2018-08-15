Cypress.Commands.add("ClickyButton", numClicks => {
  for (let i = 0; i < numClicks; i++) {
    cy.get(".clicky").click();
  }
});
