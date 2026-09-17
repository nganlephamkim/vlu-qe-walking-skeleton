const login = require("./login");

test("Login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Login with incorrect username and password", () => {
    expect(login("user", "123")).toBe(false);
});
