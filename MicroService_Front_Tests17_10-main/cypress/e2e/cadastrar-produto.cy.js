describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/cadastroProduto.html");

    cy.get("#registerNameProduct").type("bola");
    cy.get("#registerPrice").type("$20");
    cy.get("#registerQtd").type(100);
    cy.get("#registerData").type("17/10/2024");

    cy.get(".btn").click();

    cy.visit("http://127.0.0.1:5500/cadastroProduto.html");

    cy.get("#registerNameProduct").type("pipa");
    cy.get("#registerPrice").type("$40");
    cy.get("#registerQtd").type(134);
    cy.get("#registerData").type("19/10/2044");

    cy.get(".btn").click();

    cy.get("h2").should("contain", "Lista de Produtos");
  });
});
