function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

function checkLogin() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let result = login(user, pass);

    document.getElementById("result").innerText = result;
}

if (typeof module !== "undefined") {
    module.exports = login;
}
