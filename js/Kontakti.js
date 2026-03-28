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