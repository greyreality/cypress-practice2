// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

class Generator {

    static generate_email(baseEmail) {
      const faker = require('faker');
      const uniqueId = `+${faker.datatype.number({min: 10000, max: 99999})}`;
      return baseEmail.replace('@', `${uniqueId}@`); 
    }

    static generate_string(max) {
        const faker = require('faker');
        const uniqueString = `${faker.random.alphaNumeric(max)}`;
        return uniqueString
      }

  }
  
  Cypress.Commands.add('generateEmail', (baseEmail) => {
    return Generator.generate_email(baseEmail)
  })

  Cypress.Commands.add('generateString', (max) => {
    return Generator.generate_string(max)
  })

  export const NewGenerator = new Generator();