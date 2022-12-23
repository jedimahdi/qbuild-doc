describe("Tests:", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("should increment", () => {
    const counter = cy.get("#counter");
    counter.should("have.text", "0");
    counter.click();
    counter.should("have.text", "1");
    counter.click();
    counter.should("have.text", "2");
    counter.click();
    counter.should("have.text", "3");
  });
});
