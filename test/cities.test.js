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
    it('verify that the user sends a string in the name field when creating a city', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                name: "Buenos Aires 2",
                continent: "America",
                photo: "https://i.ibb.co/txzvqGy/buenos-aires.webp",
                population: 3075646,
                userId: "636d82c86529ebe93bbef921"
            })
            .expect(res => {
                assert.isString(res.body.new_city.name)
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
    it('Verify that it returns success false when unable to create a city', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                population: 565565,
            })
            .expect(res => res.success === false)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
    it("Delete a city successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODExY2YwZmY5MmM4NTgxNjRmNDVhNSIsImlhdCI6MTY2OTU5NzQ5OSwiZXhwIjoxNjY5NjgzODk5fQ.5Uyw-rM2OtbUE7YnKhuLzuM042qU2LJnXNZn9NLXr8s'
        idCity = '63840474bbf3905fd9e045e7'
        request(app)
            .delete(`/api/cities/${idCity}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
})