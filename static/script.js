// Form submission event listener
document.getElementById("resumeForm").addEventListener("submit", function(event) {
   // event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const resume = document.getElementById("resume").files[0];

    // Check if all fields are filled
    if (!name || !email || !address || !resume) {
        document.getElementById("message").innerHTML = "⚠️ Please fill in all fields!";
        return;
    }

    // Validate file type (PDF or TXT only)
    const allowedExtensions = ["pdf", "txt"];
    const fileExtension = resume.name.split('.').pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
        document.getElementById("message").innerHTML = "❌ Only PDF and TXT files are allowed!";
        return;
    }

    // Simulate successful submission (you can replace this with AJAX later)
    document.getElementById("message").innerHTML = "✅ Form submitted successfully!";
    document.getElementById("resumeForm").reset();
});

