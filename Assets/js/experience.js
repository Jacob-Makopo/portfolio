document.addEventListener("DOMContentLoaded", function() {
    // Define experience information
    var experienceInfo = `
        <h2>Experience</h2>
        <ul>
            <li><strong>Position:</strong> Intern Junior Software Developer</li>
            <li><strong>Company:</strong> eKhonnector systems, Mpumalanga</li>
            <li><strong>Period:</strong> 2021-07-01 - 2021-12-31</li>
            <li><strong>Description:</strong>
                <ul>
                    <li>Design User Interfaces</li>
                    <li>Architect logic structures</li>
                    <li>Writing System documentation</li>
                    <li>Providing tech support (installing systems remotely and physically)</li>
                    <li>Writing a daily report, which includes the challenges, lessons, mistakes encountered in sessions.</li>
                    <li>Closing deal with clients, gathering user/system requirements</li>
                    <li>Database design and integration</li>
                </ul>
            </li>
            <li><strong>Key Achievement:</strong> Maintained positive and happy client relationships with multiple customers</li>
        </ul>
    `;

    // Function to render experience details
    function renderExperienceDetails() {
        var experienceDiv = document.getElementById("experience-info");
        if (experienceDiv) {
            experienceDiv.innerHTML = experienceInfo;
        }
    }

    // Call function to render experience details
    renderExperienceDetails();
});
