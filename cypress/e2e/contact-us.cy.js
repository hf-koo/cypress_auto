/// <reference types="Cypress"/>

describe("Test contact us from webdriverUniversity ", () => {
  xit("should be able to access the website", () => {
    cy.visit("https://webdriveruniversity.com/");
  });

  xit("should be able to access the contact us page", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
  });

  it("should be able to access first name page", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("Jacky");
    cy.get('[name="last_name"]').type("Koo");
    cy.get('[name="email"]').type("123@mail.com");
    cy.get("textarea.feedback-input").type("I just ate dessert!");
    cy.get('[type="submit"]').click();
    cy.contains("Thank You for your Message!");
  });
});
