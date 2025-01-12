import request from "supertest";
import { expect } from "chai";
import app from "./app.mjs";

describe("GET /", () => {
    it('respods with "Hello Worlds!"', (done) => {
        request(app)
            .get("/")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal("Hello Worlds!");
                done();
            });
    });
});
