const login = require("./login");

test("Dang nhap dung voi admin / 123 thi tra ve true", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Dang nhap sai mat khau thi tra ve false", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Dang nhap sai username thi tra ve false", () => {
    expect(login("user", "123")).toBe(false);
});
