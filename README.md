#  Cypress UI Automation – OrangeHRM

This project automates key user interface flows on the public site [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com), using **Cypress** as testing framework and **Mochawesome** for reporting.

## ✅ Test cases covered

- ✅ Valid login with correct credentials
- ✅ Invalid login with incorrect credentials
- ✅ Full logout flow with validation
- ✅ Screenshot capture on specific actions
- ✅ Error handling for uncaught frontend exceptions
- ✅ Headless execution with HTML report

##  Technologies

- Cypress v14+
- Mochawesome Reporter
- Node.js (for CLI execution)

##  Folder structure

qa-automation-suite/ ├── cypress/ │ ├── e2e/ │ │ └── login.cy.js │ ├── screenshots/ │ ├── support/ │ │ └── e2e.js ├── mochawesome-report/ ├── cypress.config.js ├── package.json

## ▶️ How to run the project

### Install dependencies:
npm install
Run tests in headless mode:

npx cypress run
Open Cypress GUI:

npx cypress open
Generate HTML report:
The report is automatically generated in /mochawesome-report/

📝 Author
Cristian Camilo Delgado
QA Engineer in training · Cypress & Postman enthusiast
📧 ccdelgado@outlook.es
🌍 Colombia

---
