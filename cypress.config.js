const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Orange HRM Report",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on); //report plugin
    },

    baseUrl: "https://opensource-demo.orangehrmlive.com/",
  },
});
