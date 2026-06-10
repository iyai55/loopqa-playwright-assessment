# LoopQA Playwright Assessment

## Overview

This project is a data-driven test automation solution built with Playwright and TypeScript.

The test suite validates tasks, columns, and tags across multiple project boards in the demo application.

## Tech Stack

* Playwright
* TypeScript
* Node.js

## Project Structure

```text
data/
└── testCases.json

tests/
└── loopqa.spec.ts
```

## Test Coverage

* Implement user authentication
* Fix navigation bug
* Design system updates
* Push notification system
* Offline mode
* App icon design

## Data-Driven Approach

Test data is stored in `data/testCases.ts`.

The test suite dynamically generates test cases using a loop, reducing code duplication and improving maintainability.

## Run Tests

```bash
npm install
npx playwright install
npx playwright test
```
