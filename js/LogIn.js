document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();

    // Get the values entered in the login form
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve the stored user data from LocalStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if user data exists in LocalStorage
    if (storedUser) {
        // Validate the entered email and password
        if (email === storedUser.email && password === storedUser.password) {
            alert('Login successful!');
            
            // Save the username in localStorage for display on user page
            localStorage.setItem('loggedInUser', storedUser.username);

            // Redirect to the user page
            window.location.href = "./UsersPage.html"; // Adjust this URL to your structure
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } else {
        alert('No user found. Please create an account.');
    }
});
