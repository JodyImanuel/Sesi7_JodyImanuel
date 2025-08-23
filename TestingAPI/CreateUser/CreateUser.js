const { expect } = require("chai");

describe("Create User", function () {
  it("Create new user, should be success", async function () {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    });

    const data = await response.json();

    expect(response.status).to.equal(201);
    expect(data.name).to.include("morpheus");
  });
});