// Disclaimer functionality
function loadDisclaimer() {
    fetch('disclaimer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('disclaimer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading disclaimer:', error));
}

// Load disclaimer when page loads
document.addEventListener('DOMContentLoaded', loadDisclaimer); 