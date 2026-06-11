# LoopQA Playwright Assessment

## Overview

This project is a data-driven test automation solution built with Playwright and TypeScript.

The test suite validates tasks, columns, and tags across multiple project boards in the demo application.

## Tech Stack

- Playwright
- TypeScript
- Node.js

## Setup and Preparation

1. Clone the repository.
2. Install project dependencies.
3. Install Playwright browsers.

## Project Structure

data/
└── testCases.json

tests/
└── loopqa.spec.ts

## Test Coverage

- Implement User Authentication
- Fix Navigation Bug
- Design System Updates
- Push Notification System
- Offline Mode
- App Icon Design

## Data-Driven Approach

Test data is stored in `data/testCases.json`.

The test suite dynamically generates test cases from the data source, reducing code duplication and improving maintainability. New test scenarios can be added by updating the test data without modifying the test logic.

## Run Tests

```bash
npm install
npx playwright install
npx playwright test