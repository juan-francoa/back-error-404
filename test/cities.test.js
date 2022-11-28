const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/cities", function () {
    it("Deberia traerme un array", function (done) {
        request(app)
            .get("/api/cities")
            .expect(response => {
                assert.typeOf(response.body.response, "array", "Todo ok cities es un array")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })
    it("El array debe de contener objetos", function (done) {
        request(app)
            .get("/api/cities")
            .expect(response => {
                const tam = response.body.response.filter(e => typeof e === "object").length
                const resul = response.body.response.length === tam ? true : false
                assert.isTrue(resul , "el array contiene objetos")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })
    
})