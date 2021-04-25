const mongoose = require("mongoose");
const app = require("../app");
const request = require("supertest");
process.env.NODE_ENV = "test";

describe("POST /records", () => {
  test("The 'records' is array of object as 'key', 'createdAt', 'totalCount'", async () => {
    const response = await request(app).post("/records").send({
      startDate: "2015-03-08",
      endDate: "2015-04-30",
      minCount: 2700,
      maxCount: 3000,
    });
    expect(response.body.records.length).toBe(19);
    expect(response.body.records[0]).toHaveProperty("key");
    expect(response.body.records[0]).toHaveProperty("createdAt");
    expect(response.body.records[0]).toHaveProperty("totalCount");
    expect(response.statusCode).toBe(200);
  });

  afterAll((done) => {
    mongoose.connection.close()
    done();
  });
});
