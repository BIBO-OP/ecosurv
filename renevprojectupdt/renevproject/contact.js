document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById('contact-form').reset();  // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});
