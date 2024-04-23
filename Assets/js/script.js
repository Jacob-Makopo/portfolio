document.addEventListener("DOMContentLoaded", function() {
    // Define personal information
    var personalInfo = [
        { label: "Name:", value: "Jacob Kagiso Makopo" },
        { label: "Job:", value: "Developer" },
        { label: "Age:", value: "26 Years" },
        { label: "Residence:", value: "Pretoria" },
        { label: "Hometown:", value: "Soshanguve" }
    ];

    // Define biography
    var bio = `
        A versatile and highly skilled developer with a proven track record of success.
        Proficient in logical problem-solving and adept at navigating diverse programming challenges.
        Exhibits exceptional communication skills, seamlessly engaging with individuals at all levels,
        and readily adapting to dynamic environments. Known for reliability, punctuality, and an insatiable
        appetite for mastering new tasks and skills with rapid proficiency.
    `;

    // Define skills
    var skills = [
        { name: "HTML/CSS", percent: "85%" },
        { name: "php", percent: "90%" },
        { name: "jQuery", percent: "75%" },
        { name: "JavaScript", percent: "85%" },
        { name: "C++", percent: "90%" },
        { name: "C#", percent: "75%" },
        { name: "ASP.NET", percent: "75%" }
    ];

    // Define location information
    var locationInfo = `
        <div class="location-info">
            <h2>Address</h2>
            <p>1337 Block FF</p>
            <p>Soshanguve, Pretoria</p>
            <p>0152</p>
        </div>
        <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.598071113192!2d28.086071014698396!3d-25.512744826996468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9566ff311970a9%3A0xe0210c3e730774c7!2s1337%20Block%20FF%2C%20Soshanguve%2C%20Pretoria%2C%200152!5e0!3m2!1sen!2sza!4v1649369970562!5m2!1sen!2sza" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    `;


    // Function to render personal information
    function renderPersonalInfo() {
        var personalInfoList = document.getElementById("personal-info");
        if (personalInfoList) {
            personalInfo.forEach(info => {
                var listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${info.label}</strong> <span>${info.value}</span>`;
                personalInfoList.appendChild(listItem);
            });
        }
    }

    // Function to render biography with typing effect
    function renderBio() {
        var bioElement = document.getElementById("bio");
        if (bioElement) {
            var bioText = bio.trim(); // Remove leading/trailing whitespace
            var index = 0;
            var typingSpeed = 50; // Adjust typing speed (milliseconds per character)
            var timer = setInterval(function() {
                // Append next character
                bioElement.innerHTML += bioText[index];
                index++;
                // Check if reached end of bio
                if (index === bioText.length) {
                    clearInterval(timer); // Stop typing
                }
            }, typingSpeed);
        }
    }

    // Function to render skills
    function renderSkills() {
        var skillsContainer = document.getElementById("skills-container");
        if (skillsContainer) {
            skills.forEach(skill => {
                var skillDiv = document.createElement("div");
                skillDiv.classList.add("skill");
                skillDiv.innerHTML = `
                    <h4>${skill.name}</h4>
                    <div class='bar'>
                        <div class='percent' style='width:${skill.percent};'></div>
                    </div>
                `;
                skillsContainer.appendChild(skillDiv);
            });
        }
    }

    // Function to render location information
    function renderLocationInfo() {
        var locationContainer = document.getElementById("location-container");
        if (locationContainer) {
            locationContainer.innerHTML = locationInfo;
        }
    }


    // Call functions
    renderPersonalInfo();
    renderBio();
    renderSkills();
    renderLocationInfo();
});
