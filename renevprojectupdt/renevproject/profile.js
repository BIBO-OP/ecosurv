document.getElementById('editProfileBtn').addEventListener('click', function() {
    const username = prompt("Enter your new username:", document.getElementById('username').innerText);
    const email = prompt("Enter your new email:", document.getElementById('email').innerText);
    
    if (username) {
        document.getElementById('username').innerText = username;
    }
    
    if (email) {
        document.getElementById('email').innerText = email;
    }
});