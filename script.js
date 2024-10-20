
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const fileInput = document.getElementById("fileToUpload");
        if (!fileInput.files.length) {
            alert("Please select a file to upload.");
            event.preventDefault();
        }
    });
});
