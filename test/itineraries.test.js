const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("DELETE /api/itineraries", function () {
    it("el itineario se  deberia eliminar", function (done) {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzgyMzc2NzQ2NWUxNTRkNDQ1ZjY4NWIiLCJuYW1lIjoiYW5naWUiLCJwaG90byI6Imh0dHBzOi8vbWVkaWEudGltZW91dC5jb20vaW1hZ2VzLzEwNTUwNDU4My8xMDI0LzU3Ni9pbWFnZS5qcGciLCJsb2dnZWQiOnRydWUsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjY5NjI1NDg4LCJleHAiOjE2Njk3MTE4ODh9.tp48C4pdVdjLmQJYNTJ1XoPNjOYVzwtRNw9YLElslNs"
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        request(app)
            .delete("/api/itineraries/6384893b22513abdc8fd856c",headers)
            .expect(response => {
                assert.isTrue(response.body.success, "se elimino el tineario")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })    
})