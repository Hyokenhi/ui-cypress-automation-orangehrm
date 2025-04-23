
# UI Cypress Automation OrangeHRM 🚀

**`ui-cypress-automation-orangehrm`** is an advanced automated UI testing project for the **OrangeHRM** application using **Cypress**. The project includes end-to-end testing for core functionalities such as login, employee management, and other critical processes. This ensures the application remains stable and functions as expected across different devices and screen sizes.

With this project, all essential UI workflows are tested automatically, enabling faster feedback and ensuring high-quality performance for the OrangeHRM platform. The tests are designed to run in **headless mode** for automation but also provide an interactive mode for debugging and manual inspection.

---

## 🔍 Project Overview

The **UI Cypress Automation OrangeHRM** project automates key workflows, including:

- **Login Flow**: Ensures that users can log in with valid credentials.
- **Employee Management Flow**: Validates that users can manage employee records (add, edit, delete).
- **Cross-Device Testing**: Ensures that the application performs well across desktop, tablet, and mobile screen sizes.
- **Automated Reporting**: Provides detailed test execution reports generated with **Mochawesome**.

These tests are essential for validating the user interface and guaranteeing that core features work consistently and as intended.

---

## 📁 Project Structure

The project follows a clean, organized structure that makes it easy to navigate and scale:

```
ui-cypress-automation-orangehrm/
│
├── .github/
│   └── workflows/               # GitHub Actions workflows for CI/CD automation
│
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js         # Cypress Test for Login Workflow
│   │   └── employee.cy.js      # Cypress Test for Employee Management Workflow
│   ├── reports/                # Mochawesome Reports for test results
│   ├── screenshots/            # Screenshots captured during test execution
│   └── cypress.config.js       # Cypress configuration file
│
├── node_modules/               # Node modules for Cypress and dependencies
├── .gitignore                  # Git ignore file
├── README.md                   # This file
├── package-lock.json           # NPM lock file for dependencies
├── package.json                # NPM configuration file
└── trigger.txt                 # Trigger file for initiating automation (if necessary)
```

---

## 🛠️ Technologies Used

- **Cypress**: The framework used for automating the UI tests and simulating user interactions with the **OrangeHRM** application.
- **GitHub Actions**: Provides **CI/CD** automation for running the Cypress tests on each code change or pull request.
- **Mochawesome**: A reporting tool for generating beautiful HTML reports with detailed test logs and results.
- **Node.js**: JavaScript runtime required to execute Cypress tests and manage the project dependencies.
- **NPM**: Used for managing the project's dependencies and automation scripts.

---

## 🚀 How to Run the Tests

### ✅ 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Hyokenhi/ui-cypress-automation-orangehrm.git
cd ui-cypress-automation-orangehrm
```

### ✅ 2. Install Dependencies

To install the necessary dependencies, run:

```bash
npm install
```

### ✅ 3. Running the Tests Locally

#### UI Test (Cypress)

You can open Cypress to run tests interactively:

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing (recommended for automation):

```bash
npx cypress run --headless --browser chrome
```

#### Generate the Mochawesome Report

To generate a detailed test report after running the tests, use the following command:

```bash
npx cypress run --headless --browser chrome --reporter mochawesome
```

The report will be saved in the `cypress/reports/` folder in HTML format.

---

## ⚙️ CI/CD Integration with GitHub Actions

### Automated Test Execution

Every time you push to the `main` branch, **GitHub Actions** will automatically:

- Run the **Cypress** UI tests for various workflows.
- Generate a **Mochawesome** report.
- Upload the generated report as an artifact for easy access.

### Workflow File (`.github/workflows/ci.yml`)

```yaml
name: UI Cypress Automation

on:
  push:
    branches:
      - main

jobs:
  run-tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run Cypress tests
        run: npx cypress run --headless --browser chrome --reporter mochawesome
      - name: Upload test reports
        uses: actions/upload-artifact@v2
        with:
          name: mochawesome-report
          path: cypress/reports/*.html
```

You can monitor the execution of your workflows under the **Actions** tab in your GitHub repository.

---

## 📝 Test Details

- **Login Test**: Automates the login process, validating that users can log in with valid credentials and access the dashboard.
- **Employee Management Test**: Automates employee management, including adding, editing, and deleting employee records.
- **Cross-Device Testing**: Ensures that the application renders properly and is functional across different screen sizes (desktop, tablet, mobile).
- **Mochawesome Reports**: Automatically generates detailed test logs, failures, and visual reports for analysis.

---

## ❗ Important Notes

- **Demo Environment**: The **OrangeHRM** demo environment may experience occasional issues, which can lead to test failures (especially with login or employee management workflows). These issues are outside the scope of the automation and may be due to the unstable demo app environment.
  
- **Headless Mode**: It is recommended to run the tests in **headless mode** for CI/CD. For manual inspection, you can use Cypress's interactive mode (`npx cypress open`).

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation, continuous learning, and quality assurance, aiming to contribute and grow in the field of QA Automation.  
💡 Committed to delivering high-quality testing solutions through disciplined and effective automation practices.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Hyokenhi](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
