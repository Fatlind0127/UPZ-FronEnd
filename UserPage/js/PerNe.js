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
