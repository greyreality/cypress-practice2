const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  defaultCommandTimout: 5000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 10000,
  requestTimeout: 7000,
  responseTimeout: 60000,
  projectId: 'm49jk9',
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
    specPattern: ["cypress/e2e/examples/*.{js,jsx,ts,tsx}","cypress/integration/**/*.{js,jsx,ts,tsx}"],
  },
})
