function htmlEntityEncode() {
    const input = document.getElementById('inputHtmlEntity').value;
    const div = document.createElement('div');
    div.innerText = input;
    document.getElementById('resultHtmlEntity').innerText = div.innerHTML;
}

function htmlEntityDecode() {
    const input = document.getElementById('inputHtmlEntity').value;
    const div = document.createElement('div');
    div.innerHTML = input;
    document.getElementById('resultHtmlEntity').innerText = div.innerText;
}
