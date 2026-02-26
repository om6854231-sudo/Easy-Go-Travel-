const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

// Sample Data
const hotels = [
  { id: 1, name: "Hilton Resort", location: "Cairo", price: 120 },
  { id: 2, name: "Sea View Hotel", location: "Alexandria", price: 90 }
];

const flights = [
  { id: 1, from: "Cairo", to: "Dubai", price: 250 },
  { id: 2, from: "Cairo", to: "Riyadh", price: 200 }
];

const cars = [
  { id: 1, name: "Toyota Corolla", price: 40 },
  { id: 2, name: "Hyundai Elantra", price: 35 }
];

app.get("/api/hotels", (req, res) => res.json(hotels));
app.get("/api/flights", (req, res) => res.json(flights));
app.get("/api/cars", (req, res) => res.json(cars));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
