import express, { Request, Response } from "express";

interface ProductInterface {
  name: String;
  price: Number;
  image: String;
  description: String;
}

const router = express.Router();
const Product = require("../models/Product");

router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.post("/add", async (req: Request, res: Response) => {
  const response = req.body;
  const createdProduct = new Product({
    name: response.name,
    price: response.price,
    image: response.image,
    description: response.description,
  });
  try {
    const savedProduct = await createdProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
