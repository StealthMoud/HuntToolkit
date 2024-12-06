function rot13() {
    const input = document.getElementById('inputRot13').value;
    document.getElementById('resultRot13').innerText = input.replace(/[a-zA-Z]/g, function (char) {
        const start = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
}
