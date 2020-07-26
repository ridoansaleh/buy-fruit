describe("Login Page", () => {
  it("successfully loads login page", () => {
    cy.visit("/");
  });
  it("successfully fill username & password then login", () => {
    cy.get("input[name=username]").type("ridoansaleh");
    cy.get("input[name=password]").type("my-secret-password");
    cy.get("button[type=submit]").click();
    cy.url().should("include", "/home");
  });
});
