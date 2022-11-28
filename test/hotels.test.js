const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/hotels", function () {
    it("el status debria ser 404", function (done) {
        request(app)
            .get("/api/hotels?name=asdsdas")
            .expect(response => {
                assert.equal(response.status, 404, "el status es 404")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })    
})