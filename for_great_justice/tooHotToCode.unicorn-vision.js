describe("Are dinosaurs prettier than unicorns?", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("app_url"));
  });

  it("Clicky Clickies the buttonz that isn't there yet", () => {
    cy.get(".counter").contains("0");

    cy.get(".clicky").click();

    cy.get(".counter").contains("1");
  });

  it("set the clickies before clickies equals the clickies", () => {
    cy.ClickyButton(5); //I wrote this. See a_lesser_known_evil/support/commands.js

    cy.get(".counter").contains("5");
  });
});
