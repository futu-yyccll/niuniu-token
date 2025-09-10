// Navigation functionality
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveTab();
        })
        .catch(error => console.error('Error loading navbar:', error));
}

function setActiveTab() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navTabs = document.querySelectorAll('.nav-tab');
    
    navTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('href') === currentPage) {
            tab.classList.add('active');
        }
    });
}

// Load navbar when page loads
document.addEventListener('DOMContentLoaded', loadNavbar); 