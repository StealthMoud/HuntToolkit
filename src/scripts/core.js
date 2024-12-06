// Handle collapsible categories
document.querySelectorAll(".collapsible").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

// Handle tool loading
document.querySelectorAll(".tool-button").forEach(button => {
    button.addEventListener("click", function () {
        const toolPath = this.dataset.tool;
        loadTool(toolPath);
    });
});

function loadTool(toolPath) {
    const toolContainer = document.getElementById("tool-container");
    fetch(`tools/${toolPath}/${toolPath.split('/').pop()}.html`)
        .then(response => response.text())
        .then(html => {
            toolContainer.innerHTML = html;
            const script = document.createElement("script");
            script.src = `tools/${toolPath}/${toolPath.split('/').pop()}.js`;
            document.body.appendChild(script);
        })
        .catch(error => console.error("Error loading tool:", error));
}
