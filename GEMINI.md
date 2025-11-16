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
3.  **Ensure Quality**: Manually test your changes to ensure that the application is working as expected and that there are no regressions.

## Atomic Design

This project follows the principles of Atomic Design to structure its UI components. Please familiarize yourself with this methodology and structure your components accordingly.

-   **Atoms**: The basic building blocks of our UI (e.g., buttons, labels, inputs).
-   **Molecules**: Groups of atoms that function together as a unit (e.g., a search form with an input and a button).
-   **Organisms**: More complex UI components composed of molecules and/or atoms.
-   **Templates**: Page-level objects that place components into a layout.
-   **Pages**: Specific instances of templates with real content.
