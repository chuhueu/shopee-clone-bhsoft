import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
const cors = require("cors");
var colors = require("colors");
//controller
const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const brandController = require("./controllers/brandController");
const categoryController = require("./controllers/categoryController");
dotenv.config();

connectDB();

const app: Application = express();

app.use(cors());

//MIDDLEWARE
app.use(express.json()); // Configure Express to parse incoming JSON data

app.use("/api/user", userController);
app.use("/api/product", productController);
app.use("/api/brand", brandController);
app.use("/api/category", categoryController);

const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
