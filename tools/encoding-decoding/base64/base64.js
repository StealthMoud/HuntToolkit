function base64Encode() {
    const input = document.getElementById('inputBase64').value;
    document.getElementById('resultBase64').innerText = btoa(input);
}

function base64Decode() {
    const input = document.getElementById('inputBase64').value;
    try {
        document.getElementById('resultBase64').innerText = atob(input);
    } catch (error) {
        alert("Invalid Base64 string!");
    }
}
