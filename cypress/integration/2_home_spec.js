describe("Home Page", () => {
  it("successfully click the first product", () => {
    cy.get(".product-item:first").click();
    cy.url().should("include", "/order");
  });
});
