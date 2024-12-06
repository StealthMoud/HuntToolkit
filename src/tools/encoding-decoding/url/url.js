function urlEncode() {
    const input = document.getElementById('inputUrl').value;
    document.getElementById('resultUrl').innerText = encodeURIComponent(input);
}

function urlDecode() {
    const input = document.getElementById('inputUrl').value;
    try {
        document.getElementById('resultUrl').innerText = decodeURIComponent(input);
    } catch (error) {
        alert("Invalid URL encoding!");
    }
}
