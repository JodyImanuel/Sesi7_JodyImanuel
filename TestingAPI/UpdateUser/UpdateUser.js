const { expect } = require('chai');

describe("Update User", function () {
    it("Update new user, should be success", async function () {
    const response = await fetch("https://reqres.in/api/users/2", {
        method: "PATCH",
        headers: {
            "x-api-key": "reqres-free-v1",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "zion resident",
        }),
    });

    expect(response.status).to.equal(200);
    });
});