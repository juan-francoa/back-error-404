const app = require("../app")
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

describe("POST /api/hotels", function () {
    it("el status debria ser 201", function (done) {
        request(app)
            .post("/api/hotels")
            .send({name: "Hotel de la Cañada", photo: ["https://media.timeout.com/images/105504583/1024/576/image.jpg, https://cf.bstatic.com/xdata/images/hotel/max1280x900/18560187.jpg?k=06b7b81bba75f2c3f264b7fe8a727a6bc275eceaa5bd167cd5c255e32cdf8898&o=&hp=1, https://q-xx.bstatic.com/xdata/images/hotel/max500/19588425.jpg?k=dfad33c2828d932e4ca774a06beb7aa18226748db0398660242579f8fdc71b2e&o="], capacity: 400, cityId:"636eef8b7378476e793e8f05", userId:"636e63981471b35a5c064d4c"})
            .expect(response => {
                assert.equal(response.status, 201, "el status es 201")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })

    it("campo capacity deberia ser tipo number", function (done) {
        request(app)
            .post("/api/hotels")
            .send({name: "Hotel de la Cañada", photo: ["https://media.timeout.com/images/105504583/1024/576/image.jpg, https://cf.bstatic.com/xdata/images/hotel/max1280x900/18560187.jpg?k=06b7b81bba75f2c3f264b7fe8a727a6bc275eceaa5bd167cd5c255e32cdf8898&o=&hp=1, https://q-xx.bstatic.com/xdata/images/hotel/max500/19588425.jpg?k=dfad33c2828d932e4ca774a06beb7aa18226748db0398660242579f8fdc71b2e&o="], capacity: 400, cityId:"636eef8b7378476e793e8f05", userId:"636e63981471b35a5c064d4c"})
            .expect(response => {
                assert.typeOf(response.request._data.capacity, "number", "campo capacity es tipo number")
            })
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            })
    })    
})



