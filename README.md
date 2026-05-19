# sauceDemo-webApp-playwright-testing
Playwright automation testing project for Sauce Demo web app using Page Object Model (POM) with Allure reporting.
The project covers login, product selection, cart validation, and checkout workflows for multiple user roles, and generates Allure reports after test execution.
## Tech Stack
- Playwright
- JavaScript (ES Modules)
- Page Object Model (POM)
- Allure Report

---

## Project Structure
- tests/pageObjects → Locators
- tests/pages → Actions/Logic
- tests/specs → Test cases
- utils → helper functions
- resource/testData.json → test data

---

## Test Scenarios
- Locked Out User login validation
- Standard User product selection & checkout
- Performance Glitch User workflow testing

---

## How to Run Tests

### Run all tests:
```bash
npx playwright test
npx allure generate allure-results --clean -o allure-report
