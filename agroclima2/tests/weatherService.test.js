const axios = require("axios");
const getWeather = require("../backend/services/weatherService");

jest.mock("axios");

describe("weatherService", () => {
  test("retorna temperatura a partir do JSON da API (current_weather)", async () => {
    axios.get.mockResolvedValue({
      data: {
        current_weather: {
          temperature: 28,
        },
      },
    });

    const result = await getWeather(-12, -38);

    expect(axios.get).toHaveBeenCalled();
    expect(result.temperature).toBe(28);
  });

  test("faz parsing correto quando temperatura é zero", async () => {
    axios.get.mockResolvedValue({
      data: {
        current_weather: {
          temperature: 0,
        },
      },
    });

    const result = await getWeather(0, 0);
    expect(result.temperature).toBe(0);
  });
});
