const assert = require("assert");

describe("Get List User", function () {
    it("Get User with id 2 should be success", async function () {
        const response = await fetch("https://reqres.in/api/users/2");

        assert.strictEqual(response.status, 200);
    });
});
