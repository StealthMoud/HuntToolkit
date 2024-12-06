function jwtDecode() {
    const input = document.getElementById('inputJwt').value;
    try {
        const parts = input.split('.');
        if (parts.length !== 3) throw new Error("Invalid JWT format");
        const header = atob(parts[0]);
        const payload = atob(parts[1]);
        document.getElementById('headerJwt').innerText = header;
        document.getElementById('payloadJwt').innerText = payload;
    } catch (error) {
        alert("Invalid JWT!");
    }
}
