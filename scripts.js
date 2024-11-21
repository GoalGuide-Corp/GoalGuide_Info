document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function loadAboutPage() {
        content.innerHTML = `
            <h2>About Us</h2>
            <p>Welcome to Goal Guide! We help you achieve your goals by providing personalized steps and timelines.</p>
        `;
    }

    function loadDocumentationPage() {
        content.innerHTML = `
            <h2>Documentation</h2>
            <p>Here you will find all the documentation related to the Goal Guide project.</p>
        `;
    }

    // Event listeners for navigation
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadAboutPage();
    });

    document.getElementById('documentation-link').addEventListener('click', function(e) {
        e.preventDefault();
        loadDocumentationPage();
    });

    // Load the About Us page by default
    loadAboutPage();
});
