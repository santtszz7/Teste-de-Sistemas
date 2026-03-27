const request = require("supertest");
const app = require("../backend/server");

jest.mock("../backend/services/weatherService", () => {
  return jest.fn(() =>
    Promise.resolve({ temperature: 32 })
  );
});

describe("GET /irrigation", () => {
  test("status 200 e JSON com temperature e advice", async () => {
    const res = await request(app).get("/irrigation").query({ lat: -12, lon: -38 });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        temperature: expect.any(Number),
        advice: expect.any(String),
      })
    );
    expect(res.body.temperature).toBe(32);
    expect(res.body.advice).toBe("Irrigação URGENTE");
  });
});
