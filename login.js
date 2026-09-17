function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xử lý form đăng nhập
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let result = login(username, password);

    if (result) {
        document.getElementById("message").innerText = "Đăng nhập thành công!";
    } else {
        document.getElementById("message").innerText = "Sai username hoặc password!";
    }
});

// Export hàm để Jest có thể kiểm thử
if (typeof module !== "undefined") {
    module.exports = login;
}
