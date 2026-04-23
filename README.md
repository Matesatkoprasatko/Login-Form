# Persistent Login Form

A simple, lightweight login form that captures user input, persists data using the browser's `localStorage`, and allows users to auto-fill the fields with previously saved credentials.

## Features

- **Data Capture:** Retrieves values from email/username and password fields.
- **Local Persistence:** Saves login information securely in the browser's `localStorage`.
- **Auto-Fill Functionality:** Re-populates the form fields with the stored data upon clicking the "Fill" button.
- **Client-Side Only:** No backend required, making it ideal for prototypes or internal tools.

## How It Works

1.  **Input:** User enters their credentials into the form.
2.  **Storage:** When a "Save" or "Submit" action is triggered, the data is mapped to a key-value pair in `localStorage`.
3.  **Retrieval:** The "Fill" (Vyplnit) button triggers a function that fetches the strings from `localStorage` and assigns them back to the input elements' values.
