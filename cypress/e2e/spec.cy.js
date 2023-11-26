/// <reference types ="Cypress"/>

describe("Test Login Functionality", () => {
  it("Both Valid Credentials", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Required").should("not.exist");
  });

  {
    it("passes", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
    });
  }

  it("Logging in without username and password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/"); // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin') // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(".oxd-button").click();
    cy.contains("Required").should("exist");
  });

  it("Without Password", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin"); // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get(".oxd-button").click(); // cy.contains('Required').should('not.exist')    //username field
    cy.contains("Required").should("exist"); //password field
  });

  it("Without Username", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/"); // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Required").should("exist"); //username field //  cy.contains('Required').should('exist')             //password field
  });

  it("Both Valid Credentials", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Required").should("not.exist");
  });

  it("Create an Employee Claim Record", () => {
    //Login page
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click(); //submit button
    cy.contains("Required").should("not.exist"); //username field
    cy.contains("Required").should("not.exist"); //password field

    // //     Claim Page
    cy.get(":nth-child(11) > .oxd-main-menu-item > .oxd-text").click();

    cy.get(".orangehrm-header-container > .oxd-button").click(); //Assign Claim button link
    //Create Claim Request

    cy.get(".oxd-autocomplete-text-input > input").type("A"); //Name Field
    cy.get(":nth-child(4) > span").click(); // Dropdown suggestion selection
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //Dropdown icon click
    cy.get(".oxd-select-dropdown > :nth-child(3)").click(); //dropdown value select
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click(); //Dropdown icon click
    cy.get(".oxd-select-dropdown > :nth-child(4)").click(); //dropdown value select
    cy.get(".oxd-textarea").type("I GOT THIS");
    cy.get(".oxd-button--secondary").click(); // create button
    cy.get(".oxd-toast").should("exist");
    cy.get(".oxd-button--secondary").click(); // Submit button

    // cy.get('.oxd-button').click()           //Back button
  });

  it("Reads an Employee Claim Record", () => {
    //Read Claim
    //Login page
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Required").should("not.exist"); //username field
    cy.contains("Required").should("not.exist"); //password field

    //     Claim Page
    cy.get(":nth-child(11) > .oxd-main-menu-item > .oxd-text").click();
    cy.get("Employee claims").should("not.exist");
    cy.get(
      ":nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > .oxd-button"
    ).click();
  });
});
