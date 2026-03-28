
    document.getElementById('registerBtn').addEventListener('click', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validate that no fields are empty
        if (!name || !surname || !username || !email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Create a user object
        const user = {
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password // In a real-world app, never store passwords in plain text!
        };

        // Store the user object in localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Confirm user has been created
        alert('Account created successfully!');

        // Optionally, redirect to login page or clear the form
        window.location.href = "LogIn.html"; // Redirect to login page
    });

