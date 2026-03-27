const getIrrigationAdvice = require("../backend/utils/irrigationRule");

describe("irrigationRule", () => {
  test("temperatura 35 → Irrigação URGENTE", () => {
    expect(getIrrigationAdvice(35)).toBe("Irrigação URGENTE");
  });

  test("temperatura 25 → Irrigação moderada", () => {
    expect(getIrrigationAdvice(25)).toBe("Irrigação moderada");
  });

  test("temperatura 10 → Não irrigar", () => {
    expect(getIrrigationAdvice(10)).toBe("Não irrigar");
  });
});
