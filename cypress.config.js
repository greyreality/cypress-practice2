const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimout: 5000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 60000,
  projectId: 'm49jk9',
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  experimentalStudio: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://store.briklshop.com/en/store',
    excludeSpecPattern: '**/examples/more_examples/*.spec.js',
    specPattern: ["cypress/tests/examples/*.{js,jsx,ts,tsx}"],
  },
})
