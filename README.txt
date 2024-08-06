## Overview
This document outlines the Cypress tests developed for testing shopping flow on the website and the API endpoints of the Demoblaze application.

## API 
These tests cover user registration, login functionalities, and error handling for incorrect credentials.

## E2E
 The suite includes tests for adding products to a shopping cart, navigating between pages, filling out a purchase form, and completing a purchase.


## Setup Instructions:
- Install Node.js from https://nodejs.org/
- Clone the repository: git clone https://github.com/ledxs/demoblaze.git
- Navigate to the project directory: cd demoblaze
- Install dependencies: npm install
- Open Cypress to run tests: npx cypress open

## Running Tests (with cypress runner):
- To run tests through the Cypress Test Runner:
  - Execute: npx cypress open
  - Click on the test file in the Cypress window to run it.
     - demoblazeShoppingFlow.cy.js (shopping flow)
     - demoblazeApiTests.cy.js (API Testing)

- To run tests headlessly:
  - Execute: npx cypress run


