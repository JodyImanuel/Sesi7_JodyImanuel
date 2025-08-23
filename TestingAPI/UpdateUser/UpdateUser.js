const { expect } = require('chai');

it("Update User, should be success", async function () {
    const response = await fetch("https://reqres.in/api/users/2")

    expect(response.status).to.equal(200);
});