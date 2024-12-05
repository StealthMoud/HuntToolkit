// Base64 Functions
function base64Encode() {
    const input = document.getElementById('inputBase64').value;
    const result = btoa(input);
    document.getElementById('resultBase64').innerText = result;
}

function base64Decode() {
    const input = document.getElementById('inputBase64').value;
    try {
        const result = atob(input);
        document.getElementById('resultBase64').innerText = result;
    } catch (error) {
        alert("Invalid Base64 string!");
    }
}

// URL Functions
function urlEncode() {
    const input = document.getElementById('inputURL').value;
    const result = encodeURIComponent(input);
    document.getElementById('resultURL').innerText = result;
}

function urlDecode() {
    const input = document.getElementById('inputURL').value;
    const result = decodeURIComponent(input);
    document.getElementById('resultURL').innerText = result;
}

// Collapsible Sections
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
