context("API tests", () => {
  it("gets a list of users", () => {
    cy.request("GET", "/users").then((response) => {
      expect(response.status).to.eq(200)
    })
  }),

  it("create a user", () => {
    cy.request("POST", "/users", {username: "testUser"}).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})
