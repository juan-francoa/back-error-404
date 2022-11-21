const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/", function () {
    it("verificar que el tipo sea string en el campo name", function (done) {
        request(app)
            .post("/api/cities/")
            .send({ name: "Atlantida", continent: "Atlantida", photo: "https://media.timeout.com/images/105504583/1024/576/image.jpg", population: Number(23123), userId:"636e63981471b35a5c064d4b" })
            .expect(response => {
                assert.typeOf(response.request._data.name, "string", "el dato es tipo strig")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })
    it("verificar que el estatus sea 400 cuando no se crea una ciudad", function (done) {
        request(app)
            .post("/api/cities/")
            .send({})
            .expect(response => {
                assert.equal(response.status, 400, "el status es 400")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })        
})
