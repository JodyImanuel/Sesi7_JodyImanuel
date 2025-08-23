const { expect } = require('chai');

describe("Delete User", function () {
    it("Delete User should be success", async function () {
        const response = await fetch("https://reqres.in/api/users", {
        method: "DELETE",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
        }
    });

    expect(response.status).to.equal(204);
    });
});