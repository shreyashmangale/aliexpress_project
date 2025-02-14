const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const request = require("supertest");
const app = require("../app.js");

let mongoServer;

beforeAll(async () => {
    // Close any existing connection
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
    }
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe("GET /products/category", () => {
    it("should return a list of products", async () => {
        const res = await request(app).get("/products/:category");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
describe("GET /new_arrivals", () => {
    it("should return a list of cart tvseries", async () => {
        const res = await request(app).get("/new_arrivals");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

// describe("GET /trending", () => {
//     it("should return a list of trending items", async () => {
//         const res = await request(app).get("/trending");
//         expect(res.statusCode).toBe(200);
//         expect(res.body).toBeInstanceOf(Array);
//     });
// });

// describe("GET /recommended", () => {
//     it("should return a list of recommended items", async () => {
//         const res = await request(app).get("/recommended");
//         expect(res.statusCode).toBe(200);
//         expect(res.body).toBeInstanceOf(Array);
//     });
// });

