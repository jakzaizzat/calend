describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("fill in the details", () => {
    cy.get("[name='username']")
      .clear()
      .type("admin")
      .should("have.value", "admin");

    cy.get("[name='password']")
      .clear()
      .type("admin")
      .should("have.value", "admin");

    cy.get("[data-testid='button']").click();

    cy.get(".Toaster__alert").should("contain", "Successfully login");
  });

  it("fill in incorrect  details", () => {
    cy.get("[name='username']")
      .clear()
      .type("admin2")
      .should("have.value", "admin2");

    cy.get("[name='password']")
      .clear()
      .type("admin2")
      .should("have.value", "admin2");

    cy.get("[data-testid='button']").click();

    cy.get(".Toaster__alert").should(
      "contain",
      "Your username/password is incorrect"
    );
  });
});
