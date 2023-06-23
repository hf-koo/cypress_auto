/// <reference types="Cypress"/>

describe("validate webdriveruni homepage link ", () => {
  it("confirm links redirect to the correct pages", () => {
    cy.visit("https://webdriveruniversity.com/");
  });

  it("should be able to access the contact us page", () => {
    // cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    // reomove attributes
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.reload(true); //reload without using cache

    cy.go("forward");
    cy.url().should("include", "contactus");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");

    cy.get("#to-do-list").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "To-Do-List");
    cy.go("back");
  });
});
