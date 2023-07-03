const axios = require("axios");

test("API returns a fixed response", async () => {
  const response = await axios.get("http://localhost:3000/api");
  const responseData = response.data;
  expect(responseData.message).toBe("Hello, API!");
});

test("API endpoint generates response with specified size", async () => {
  const sizeInMB = 10;
  const expectedSizeInBytes = sizeInMB * 1024 * 1024;
  const response = await axios.get(
    `http://localhost:3000/api/response/${sizeInMB}`,
    { responseType: "arraybuffer" }
  );
  expect(response.status).toBe(200);
  const responseSize = response.data.byteLength;
  expect(responseSize).toBeGreaterThan(expectedSizeInBytes);
});
