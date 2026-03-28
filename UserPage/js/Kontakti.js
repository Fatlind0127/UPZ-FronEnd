window.onload = function() {
    // Retrieve the logged-in user's username from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Display the username in the navbar
        document.getElementById('usernameDisplay').textContent = loggedInUser;
    } else {
        // Redirect to login if no user is logged in
        window.location.href = "../index.html";
    }
};

document.getElementById('logout').addEventListener('click', function() {
    // Remove the logged-in user from localStorage
    localStorage.removeItem('loggedInUser');

    // Redirect to the index page
    window.location.href = "../index.html"; // Adjust this URL to your structure
});

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    try {
        // Send the form data to Formspree
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Email has been sent!");  // Display a confirmation popup
            form.reset();  // Clear the form fields
            window.location.reload();  // Reload the page
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    } catch (error) {
        alert("Error: Unable to send email.");
    }
});