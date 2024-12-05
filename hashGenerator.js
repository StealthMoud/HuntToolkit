// Hash Functions
function generateHash() {
    const input = document.getElementById('inputHash').value;

    // MD5 Hash
    const md5Hash = md5(input);
    document.getElementById('resultMD5').innerText = md5Hash;

    // SHA-1 Hash
    const sha1Hash = sha1(input);
    document.getElementById('resultSHA1').innerText = sha1Hash;

    // SHA-256 Hash
    const sha256Hash = sha256(input);
    document.getElementById('resultSHA256').innerText = sha256Hash;
}

// Simple MD5, SHA-1, SHA-256 Hashing functions (use `crypto-js` or similar library if needed)
function md5(input) {
    return CryptoJS.MD5(input).toString(CryptoJS.enc.Hex);
}

function sha1(input) {
    return CryptoJS.SHA1(input).toString(CryptoJS.enc.Hex);
}

function sha256(input) {
    return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
}
