## Instructions

This app exercise contains a basic page and some endpoints to manage users.  The goal is to do the following:

1. First, setup, read through, and understand the app.  Make any obvious recommendations and fix any failing tests (located in `cypress/api/api.cy.js` and `cypress/e2e/homepage.cy.js`)
2. Define a cypress test in `api.cy.js` that will verify what the GET `/api/users` response looks like with exactly one test user "persisted"
3. Implement the 'Add User' button functionality to index.html that will add a User via the front-end.  This can be a hardcoded user record with this payload: `{"username" : "testUser"}`
4.  Add a test to verify this add user feature works
5.  Update the 'Get Users' button on the front-end to display the list of users returned by the GET `/api/users` endpoint. Write a test for this
6.  Implement the 'Delete Users' button and write a test for this


## Setup instructions 
Install the app by running `npm install`
Start the app by running `npm start`
Run the cypress tests: `npm run cy:open`
