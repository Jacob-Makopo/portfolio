// Define education information
var educationData = [
    {
        institution: "Tshwane University of Technology",
        period: "2017-2022",
        qualification: "National Diploma Information Technology (Software Development)",
        completedSubjects: [
            "Academic and Language skills I (oral presentation, technical writing)",
            "Mathematical skills I",
            "Information and software development skills I",
            "Presentation and reporting skills I",
            "Computing Fundamentals I, II",
            "Computing skills I, II",
            "Computing systems I, II",
            "Development software I, II, III",
            "Technical Programming, I, II",
            "Information systems I, II",
            "System software I, II"
        ]
    },
    {
        institution: "Soshanguve Senior Secondary School",
        period: "2014-2016",
        qualification: "Grade 12 (Matric)",
        subjects: ["Life Sciences", "English", "Mathematics", "Physical science", "Life Orientation", "Computer Applications Technology", "Sepedi"],
        achievements: "Merit Awards for first semester 2017 at Tshwane University of Technology."
    }
];

// Function to create education details HTML
function createEducationHTML(education) {
    var educationHTML = `
        <h2>Education</h2>
        <ul>
            <li><strong>Institution:</strong> ${education.institution}</li>
            <li><strong>Period:</strong> ${education.period}</li>
            <li><strong>Qualification:</strong> ${education.qualification}</li>
    `;

    if (education.completedSubjects) {
        educationHTML += `<li><strong>Completed subjects:</strong><ul>`;
        education.completedSubjects.forEach(subject => {
            educationHTML += `<li>${subject}</li>`;
        });
        educationHTML += `</ul></li>`;
    } else if (education.subjects) {
        educationHTML += `<li><strong>Subjects:</strong><ul>`;
        education.subjects.forEach(subject => {
            educationHTML += `<li>${subject}</li>`;
        });
        educationHTML += `</ul></li>`;
        educationHTML += `<li><strong>Achievements:</strong> ${education.achievements}</li>`;
    }

    educationHTML += `</ul>`;

    return educationHTML;
}

// Function to render education details
function renderEducationDetails() {
    var educationDiv = document.getElementById("education-info");
    if (educationDiv) {
        educationData.forEach(education => {
            var educationHTML = createEducationHTML(education);
            educationDiv.innerHTML += educationHTML;
        });
    } else {
        console.error("Element with id 'education-info' not found.");
    }
}

// Call function to render education details
renderEducationDetails();
