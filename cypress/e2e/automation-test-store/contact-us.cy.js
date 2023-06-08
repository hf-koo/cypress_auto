/// <reference types="Cypress"/>

describe("Test contact us from automation test store", () => {
  it("should be able to access the website", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.get("#ContactUsFrm_first_name").type("Jacky");
    cy.get("#ContactUsFrm_email").type("123@mail.com");
    cy.get("#ContactUsFrm_enquiry").type("Feel free to contact me at anytime!");
    cy.contains("Submit").click();
    cy.get(".mb40 > :nth-child(3)").contains(
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});
