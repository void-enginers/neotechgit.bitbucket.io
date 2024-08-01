document.addEventListener("DOMContentLoaded", function() {
    const fileContainer = document.getElementById('fileContainer');
    const files = [
        "NeoBody.cs"
        // Add other files here
    ];

    files.forEach(file => {
        const fileLink = document.createElement('a');
        fileLink.href = `files/${file}`;
        fileLink.textContent = file;
        fileLink.download = file;
        fileContainer.appendChild(fileLink);
    });
});
