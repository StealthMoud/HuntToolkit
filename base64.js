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
