## Project
Cypress practice to test UI and API

### Env setup env:
```
npm install --save-dev cypress@10.11.0
node_modules/.bin/cypress open
npm install --save-dev cypress @testing-library/cypress
npm install --save-dev cypress faker@5.5.3
```

### Tests run from UI (failed test retry):
```
npx cypress open
```
Choose files: 
- cypress/e2e/examples/01_DeleteItemTest.spec.js

### Test run from CMD (no retry):
```
npx cypress run --browser=chrome --record --key b83f9e08-ad6b-44a5-ab9c-78a80fc6d259 --spec cypress/e2e/examples/cypress/e2e/examples/01_DeleteItemTest.spec.js
```
### Test run statistic dashboard
https://dashboard.cypress.io/projects/