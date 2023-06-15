/// <reference types="Cypress"/>

describe("Verifying variables, cypress commands and jquery commands", () => {
  xit("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com");
    //Not recommended
    // const makeupLink = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Makeup");
    // const skincare = cy
    //   .get("a[href*='product/category&path=']")
    //   .contains("Skincare");
    // makeupLink.click();
    // skincare.click();

    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup")
      .click();
    const skincare = cy
      .get("a[href*='product/category&path=']")
      .contains("Skincare")
      .click();
  });

  xit("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com");
    const makeupLink = cy
      .get("a[href*='product/category&path=']")
      .contains("Makeup")
      .click();

    //Following code will fail
    // const header = cy.get("h1 .maintext");

    //Using promises to locate the header using cypress approach
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("Found header text: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
  xit("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //JQuery Approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contains("First name");

      //Embedded commands (Closure)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
