const axios = require("axios");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("Routes: static", () => {
    describe("GET /", () => {
        it("Should return status code 200.", (done) => {
            axios.get(base).then((response) => {
                expect(response.status).toBe(200);
                done();
            });
        });
        it("Should return JSON containing 'API root.'", (done) => {
            axios.get(base).then((response) => {
                console.log(response);
                expect(response.data).toContain("API root.");
                done();
            });
        });
    });
});
