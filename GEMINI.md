# Project Standards and Contribution Guidelines

This document outlines the standards and practices for this project.

## Code Quality

All code should be clean, readable, and maintainable. We use ESLint to enforce a consistent coding style.

## New Functionality

Before adding any new functionality, please ensure the following:

1.  **Run the Linter**: Make sure your code adheres to the project's coding style.
    ```bash
    npm run lint
    ```
2.  **Run Tests**: Ensure that all existing tests pass and that you have added new tests for your functionality.
    ```bash
    npm test
    ```
3.  **Ensure Adequate Test Coverage**: New functionality should be accompanied by tests that provide adequate code coverage.
4.  **Ensure Quality**: Manually test your changes to ensure that the application is working as expected and that there are no regressions.

## Code Coverage

We aim for high code coverage to ensure the reliability and maintainability of our codebase. After implementing new features or fixing bugs, please run the coverage report:

```bash
npm coverage
```

Review the report to ensure your changes maintain or improve the overall code coverage, especially for the new or modified code.

## Atomic Design

This project follows the principles of Atomic Design to structure its UI components. Please familiarize yourself with this methodology and structure your components accordingly.

-   **Atoms**: The basic building blocks of our UI (e.g., buttons, labels, inputs).
-   **Molecules**: Groups of atoms that function together as a unit (e.g., a search form with an input and a button).
-   **Organisms**: More complex UI components composed of molecules and/or atoms.
-   **Templates**: Page-level objects that place components into a layout.
-   **Pages**: Specific instances of templates with real content.
