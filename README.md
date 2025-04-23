
# UI Cypress Automation OrangeHRM 🚀

**`ui-cypress-automation-orangehrm`** is an automated UI testing project for the **OrangeHRM** application using **Cypress**. The project includes end-to-end testing for key functionalities such as login, employee management, and other core features, ensuring the stability and functionality of the application.

---

## 📁 Project Structure

```
ui-cypress-automation-orangehrm/
│
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js        # UI Cypress Test for Login
│   ├── reports/
│   │   └── index.html         # Mochawesome Report
│   ├── screenshots/           # Cypress screenshots
│   └── cypress.config.js      # Cypress config
│
└── README.md                  # This file
```

---

## 🚀 How to Run the Tests

### ✅ 1. UI Test (Cypress)

```bash
npx cypress open  # Opens Cypress UI for manual test execution
```

For headless testing:

```bash
npx cypress run --headless --browser chrome
```

---

## ⚙️ CI with GitHub Actions

Whenever you push to `main`, GitHub Actions automatically:

- Runs the Cypress UI tests
- Generates a visual HTML report
- Uploads the report as a downloadable artifact

See it under the [Actions](https://github.com/Hyokenhi/ui-cypress-automation-orangehrm/actions) tab.

---

## ❗ Note on Cypress

During UI testing, **the logout test may fail randomly** due to internal errors in the OrangeHRM demo app.  
This is not a problem with the test itself, but with the unstable demo environment.

---

## 👤 Author

**Cristian Camilo Delgado**  
👨‍💻 Software Programming Technician - SENA  
🚀 Passionate about automation and continuous learning, seeking a career in QA Automation.  
💡 Committed to improving software quality through disciplined, efficient, and effective testing practices.

📬 Contact: [LinkedIn](https://www.linkedin.com/in/Hyokenhi/) | GitHub: [@Hyokenhi](https://github.com/Hyokenhi)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
