describe("It had Antlers and Long Legs. No it wasn't a Moose", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("app_url"));
  });

  it("has a big screen", () => {
    cy.viewport(3000, 2000);

    cy.get(".clicky")
      .should("not.have.class", "toNarrow")
      .and("not.have.class", "toShort");
  });

  it("doesn't have much girth", () => {
    cy.viewport(1079, 2000);

    cy.get(".clicky")
      .should("have.class", "toNarrow")
      .and("not.have.class", "toShort");
  });

  it("Not very tall", () => {
    cy.viewport(1080, 760);

    cy.get(".clicky")
      .should("not.have.class", "toNarrow")
      .and("have.class", "toShort");
  });

  it("I am a little scared of that bug", () => {
    cy.viewport(1079, 769);

    cy.get(".clicky")
      .should("have.class", "toNarrow")
      .and("have.class", "toShort");
  });
});
