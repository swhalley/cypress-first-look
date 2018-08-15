describe("Base Create React App", () => {
  it("Sparkles Like a mystical beast", () => {
    cy.visit(Cypress.env("app_url")); //overrriding the hard coding of the examples. see cypress.json
    //honestly I should be overriding baseUrl in Cypress Configuration, then override cy.visit() in the commands
    //so that it just visits "/". no need to write the cypress.env stuff each time.

    cy.get(".App-header")
      .find("img")
      .should("have.class", "App-logo");
    cy.get(".App-header img").should("have.class", "App-logo"); //same thing without the find
  });

  it("Can beat a Narwhal in a fight", () => {
    cy.visit(Cypress.env("app_url"));

    //This is the long form of "should"
    cy.get(".App-title").should($title => {
      expect($title.text()).to.eq("Welcome to React");
    });

    //short form
    cy.get(".App-title").contains("Welcome to React");
  });
});
