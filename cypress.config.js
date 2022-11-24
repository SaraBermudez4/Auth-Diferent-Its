const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hmj2h7',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  videoCompression: 15
});
