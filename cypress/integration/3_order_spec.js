describe("Order Page", () => {
  it("Total price change when user change the amount of product", () => {
    cy.get("input[name=amount]").clear();
    cy.get("input[name=amount]").type("4");
    cy.get(".price").contains("$40");
  });
  it("Redirect to Order Success page after user click Buy Now button", () => {
    cy.get("button").click();
    cy.url().should("include", "/order-success");
  });
});
