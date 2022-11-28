const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("GET /api/hotels", function () {
    it('Return an error when the filter does not find a hotel', function (done) {
        request(app)
            .get(`/hotels/3456789olgfdsdrt`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    }),
    it('The field capacity is a number', function (done) {
        request(app)
            .post(`/api/hotels/`)
            .send({
                "name": "juan",
                "photo": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg"
                ],
                "capacity": 20000,
                "cityId": "636d975fff2f61c6a45710b2",
                "userId": "636d82c86529ebe93bbef921"
            })
            .expect(res => {
                assert.isNumber(res.body.new_hotel.capacity)
            })
            .end(function (err) {
                if (err) return done(err);
                done();
            });
    }),

    it(`Hotel successfully created`, function (done) {
        request(app)
        .post(`/api/hotels/`)
        .send({
            "name": "juan",
            "photo": [
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg"
            ],
            "capacity": 20000,
            "cityId": "636d975fff2f61c6a45710b2",
            "userId": "636d82c86529ebe93bbef921"
        })
        .expect(201)
        .end(function (err) {
            if (err) return done(err);
            done();
        });
    })
    it("Delete a hotel successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODExY2YwZmY5MmM4NTgxNjRmNDVhNSIsImlhdCI6MTY2OTYwMTUxMiwiZXhwIjoxNjY5Njg3OTEyfQ.tkSBoTCNfWDu78-d2vBlLrU32_uf9NkPFV4nxfV7-QM'
        idHotel = '6384199a89e7ab524f87687e'
        request(app)
            .delete(`/api/hotels/${idHotel}`)
            .auth(token, { type: "bearer" })
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });
    });
    it("Delete a show successfully", function (done) {
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODExY2YwZmY5MmM4NTgxNjRmNDVhNSIsImlhdCI6MTY2OTYwMTUxMiwiZXhwIjoxNjY5Njg3OTEyfQ.tkSBoTCNfWDu78-d2vBlLrU32_uf9NkPFV4nxfV7-QM'
        idShow = '638417d1f2e8b4847f796021'
        request(app)
            .delete(`/api/shows/${idShow}`)
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