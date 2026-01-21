import request from "supertest";
import app from "../index.js";

describe("GET /status", function () {
  it("should return application status", function (done) {
    request(app)
      .get("/status")
      .expect(200)
      .expect({ status: "Application is running" }, done);
  });
});

describe("GET /health", function () {
  it("should return health status", function (done) {
    request(app)
      .get("/health")
      .expect(200)
      .expect({ status: "UP" }, done);
  });
});
