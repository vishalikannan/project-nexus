function validateLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return false;
    }
    return true;
}
function validateSignupForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Please fill out all fields.');
        return false;
    }

    // You can add more complex validation rules for email, password strength, etc. here if needed.

    return true;
}
