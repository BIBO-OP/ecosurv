// Get the hamburger menu and dropdown menu
const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

// Add an event listener to the hamburger icon to toggle the dropdown menu
hamburger.addEventListener('click', function () {
    dropdown.classList.toggle('active');
});
