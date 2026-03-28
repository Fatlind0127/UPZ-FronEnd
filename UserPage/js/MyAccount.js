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


// contain js

if (!localStorage.getItem('user')) {
    localStorage.setItem('user', JSON.stringify({
      name: 'John',
      surname: 'Doe',
      username: 'johndoe123',
      email: 'john.doe@example.com',
      password: 'password123'
    }));
  }
  
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));
  
  // Populate form fields with user data
  document.getElementById('name').value = user.name;
  document.getElementById('surname').value = user.surname;
  document.getElementById('username').value = user.username;
  document.getElementById('email').value = user.email;
  document.getElementById('password').value = user.password;
  
  // Save changes to local storage
  document.getElementById('saveChanges').addEventListener('click', () => {
    // Get updated values from form inputs
    const updatedUser = {
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      username: user.username, // Username is not editable
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    // Save the updated user data back to local storage
    localStorage.setItem('user', JSON.stringify(updatedUser));
  
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = "Your changes have been saved!";
    setTimeout(() => {
      successMessage.textContent = ""; // Clear message after 3 seconds
    }, 3000);
  });