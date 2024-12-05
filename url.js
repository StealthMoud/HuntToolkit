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
