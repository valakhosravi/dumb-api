const express = require("express");
const { faker } = require('@faker-js/faker');
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello, API!" });
});

app.get("/api/response/:size", (req, res) => {
  const sizeInMB = req.params.size;
  const responseSizeInBytes = sizeInMB * 1024;
  const products = [];
  const productCount = responseSizeInBytes / 100;
  for (let i = 0; i < productCount; i++) {
    const product = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
    };
    products.push(product);
  }
  const responseObject = {
    products: products,
  };
  res.set("Content-Length", responseSizeInBytes);
  res.json(responseObject);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
