/// <reference types="Cypress"/>

describe("Test contact us from webdriverUniversity ", () => {
  it("should be able to access the website", () => {
    cy.visit("https://webdriveruniversity.com/");
  });

  it("should be able to access the contact us page", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  });

  it("should be able to access first name page", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Jacky");
  });
});
