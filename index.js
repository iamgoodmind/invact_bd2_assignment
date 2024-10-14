const express = require('express');
let cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

app.get('/', (req, res) => {
  res.json(`Hello From Backend`);
});

function sortProductsByPopularity(prod1, prod2) {
  return prod2.rating - prod1.rating;
}

app.get("/products/sort/popularity", (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPopularity);
  res.json({ products: productsCopy})
})

function sortProductsByPriceHighToLow(prod1, prod2) {
  return prod2.price - prod1.price;
}

app.get("/products/sort/price-high-to-low", (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPriceHighToLow);
  res.json({ products: productsCopy})
})

function sortProductsByPriceLowToHigh(prod1, prod2) {
  return prod1.price - prod2.price;
}

app.get("/products/sort/price-low-to-high", (req, res) => {
  let productsCopy = products.slice();
  productsCopy.sort(sortProductsByPriceLowToHigh);
  res.json({ products: productsCopy})
})

function sortProductByRAM(product, ram) {
  return products.filter((product) => product.ram === parseInt(ram));
}

app.get("/products/filter/ram", (req, res) => {
  let ram = parseInt(req.query.ram);

  let productsCopy = products.slice();

  let filteredProducts = sortProductByRAM(productsCopy, ram);
  res.json({ products: filteredProducts });
});

function sortProductByROM(product, rom) {
  return products.filter((product) => product.rom === parseInt(rom));
}

app.get("/products/filter/rom", (req, res) => {
  let rom = parseInt(req.query.rom);

  let productsCopy = products.slice();

  let filteredProducts = sortProductByROM(productsCopy, rom);
  res.json({ products: filteredProducts });
});

function sortProductByBrand(product, brand) {
  return products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
}

app.get("/products/filter/brand", (req, res) => {
  let brand = req.query.brand;

  let productsCopy = products.slice();

  let filteredProducts = sortProductByBrand(productsCopy, brand);
  res.json({ products: filteredProducts });
});

function sortProductByOS(product, os) {
  return products.filter((product) => product.os.toLowerCase() === os.toLowerCase());
}

app.get("/products/filter/os", (req, res) => {
  let os = req.query.os;

  let productsCopy = products.slice();

  let filteredProducts = sortProductByOS(productsCopy, os);
  res.json({ products: filteredProducts });
});

function sortProductByPrice(product, price) {
  return products.filter((product) => product.price <= price);
}

app.get("/products/filter/price", (req, res) => {
  let price = parseInt(req.query.price);

  let productsCopy = products.slice();

  let filteredProducts = sortProductByPrice(productsCopy, price);
  res.json({ products: filteredProducts });
});

app.get("/products", (req, res) => {
  res.json(products)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
