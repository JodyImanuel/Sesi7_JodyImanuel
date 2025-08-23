const { assert,expect } = require('chai');

describe("Delete User should be success", function () {
    it("should delete a user", async function () {
        const response = await fetch("https://reqres.in/api/users/2")

        expect(response.status).to.equal(200);
    });
});