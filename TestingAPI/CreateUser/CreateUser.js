const { expect } = require('chai');

it("Create new user, should be success", async function () {
    const response = await fetch("https://reqres.in/api/users")


    expect(response.status).to.equal(200);

    // expect(data.name).to.include("shinta");
});