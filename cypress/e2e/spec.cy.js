/// <reference types ="Cypress"/>

it("Homepage to SimCaptcha", () => {
  cy.visit("/");
  cy.get("#popup-widget145688-close-icon").click();
  cy.get(".c1-6z > .x-el-div > .x-el-ul > :nth-child(7) > .x-el").click();
  cy.get(".c1-2t > :nth-child(1) > .c1-r > .x-el-div > .x-el").click();
  cy.get(".c1-6m > .c1-r > .x-el-div > .x-el").click();
  cy.get(".c1-2t > :nth-child(2) > .c1-r > .x-el-div > .x-el").click();
  cy.get(".c1-79 > :nth-child(3) > .c1-r > :nth-child(2) > .x-el").click();
  cy.get(".c1-6z > .x-el-div > .x-el-ul > :nth-child(7) > .x-el").click();
  cy.get(".c1-2t > :nth-child(3) > .c1-r > .x-el-div > .x-el").click();
  cy.get(".c1-6m > .c1-r > .x-el-div > .x-el").click();
  cy.contains("Okay Kids").should("not.exist");

  //After this The module gets stuck in the loop and it can not proceed ahead.
});
