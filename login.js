function login(username, password) {
    return username === "admin" && password === "123";
}

function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = login(username, password);

    document.getElementById("result").innerText = result;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = login;
}
