const assert = require("assert");

describe("Get List User", function () {
    it("Get User should be success", async function () {
        const response = await fetch("https://reqres.in/api/users/2", {
        method: "GET",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
        }
    });
    
    assert.strictEqual(response.status, 200);
    });
});
