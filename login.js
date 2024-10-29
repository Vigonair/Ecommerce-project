// Get modal, login button, and the product section
const modal = document.getElementById('login-modal');
const loginButton = document.getElementById('login-btn');
const productSection = document.getElementById('product-page');

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = 'block'; // Show the modal
    productSection.style.display = 'none'; // Hide the product section initially
};

// Handle button click
loginButton.addEventListener('click', function() {
    // Get entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if credentials are correct
    if (username === 'vigo' && password === '12345') {
        alert('Login successful!');

        // Hide modal and show product section
        modal.style.display = 'none';
        productSection.style.display = 'block';
    } else {
        alert('Invalid username or password'); // Show alert for invalid credentials
    }
});

