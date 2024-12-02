document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');

    function loadHomepage() {
        content.innerHTML = `<h2>Welcome to Goal Guide!</h2><p>Your ultimate guide to achieving goals.</p>`;
    }

    function loadGithubPage() {
        content.innerHTML = `<h2>Github</h2><p>Check out our <a href="https://github.com" target="_blank">Github repository</a>.</p>`;
    }

    function loadFinalReportPage() {
        content.innerHTML = `<h2>Final Report</h2><p>Here is our project's final report.</p>`;
    }

    function loadVideoPage() {
        content.innerHTML = `<h2>Video</h2><p>Watch our project demo video.</p>`;
    }

    function loadContactUsPage() {
        content.innerHTML = `
            <h2>Contact Us</h2>
            <p>Feel free to reach out!</p>
            <div class="team-member">
                <img src="path/to/image1.jpg" alt="Ashton Forde">
                <div>
                    <h3>Ashton Forde</h3>
                    <p>Lead Developer</p>
                </div>
            </div>
            <div class="team-member">
                <img src="path/to/image2.jpg" alt="Fray Kristion">
                <div>
                    <h3>Fray Kristion</h3>
                    <p>Project Manager</p>
                </div>
            </div>
            <div class="team-member">
                <img src="path/to/image3.jpg" alt="Sean Suss">
                <div>
                    <h3>Sean Suss</h3>
                    <p>Backend Developer</p>
                </div>
            </div>
        `;
    }

    // Event listeners
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

    // Default to the Homepage
    loadHomepage();
});
