document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    // Homepage
    function loadHomepage() {
        content.innerHTML = `
            <h2>Welcome to Goal Guide!</h2>
            <p>Your ultimate guide to achieving goals.</p>
            <div class="team-section">
                <div class="team-member">
                    <img src="media/abby.png" alt="Abigail Begashaw">
                    <h3>Abigail Begashaw</h3>
                    <p>Team-Lead</p>
                </div>
                <div class="team-member">
                    <img src="media/gwen.jpg" alt="Gwendolyn Smith-Hill">
                    <h3>Gwendolyn Smith-Hill</h3>
                    <p>UI/UX, Documentation</p>
                </div>
                <div class="team-member">
                    <img src="media/mikias.jpg" alt="Mikias Tadesse">
                    <h3>Mikias Tadesse</h3>
                    <p>Lead Developer</p>
                </div>
            </div>
        `;
    }

    // GitHub Page
    function loadGithubPage() {
        content.innerHTML = `
            <h2>GitHub Repository</h2>
            <p>Check out our repository on GitHub by clicking the button below:</p>
            <a 
                href="https://github.com/GoalGuide-Corp/GoalGuide" 
                target="_blank" 
                class="github-button">
                Visit GitHub Repository
            </a>
        `;
    }

    // Final Report
    function loadFinalReportPage() {
        content.innerHTML = `<h2>Final Report</h2><p>Here is our project's final report.</p>`;
    }

    // Video
    function loadVideoPage() {
        content.innerHTML = `<h2>Video</h2><p>Watch our project demo video.</p>`;
    }

    // Contact Us
    function loadContactUsPage() {
        content.innerHTML = `
            <h2>Contact Us</h2>
            <p>Feel free to reach out!</p>
            <div class="team-section">
                <div class="team-member">
                    <img src="media/abby.png" alt="Abigail Begashaw">
                    <h3>Abigail Begashaw</h3>
                    <p>Team-Lead</p>
                </div>
                <div class="team-member">
                    <img src="media/gwen.jpg" alt="Gwendolyn Smith-Hill">
                    <h3>Gwendolyn Smith-Hill</h3>
                    <p>UI/UX, Documentation</p>
                </div>
                <div class="team-member">
                    <img src="media/mikias.jpg" alt="Mikias Tadesse">
                    <h3>Mikias Tadesse</h3>
                    <p>Lead Developer</p>
                </div>
            </div>
        `;
    }

    // Event listeners for navigation
    document.getElementById('homepage-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadHomepage();
    });

    document.getElementById('github-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadGithubPage();
    });

    document.getElementById('final-report-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadFinalReportPage();
    });

    document.getElementById('video-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadVideoPage();
    });

    document.getElementById('contact-us-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadContactUsPage();
    });

    // Default to the homepage
    loadHomepage();
});
