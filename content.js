// WiFi Login Credentials
const USERNAME = "23BCE0584";
const PASSWORD = "7x7z3&XUzx";

// Wait until the page loads
window.onload = function () {
    // Find login fields
    let userField = document.querySelector("input[name='userId']");
    let passField = document.querySelector("input[name='password']");
    let loginButton = document.querySelector("input[type='submit']");

    if (userField && passField && loginButton) {
        // Fill in credentials
        userField.value = USERNAME;
        passField.value = PASSWORD;

        // Auto-submit the form
        loginButton.click();
    }
};
