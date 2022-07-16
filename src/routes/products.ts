import express, { Request, Response } from "express";

interface ProductInterface {
  name: String;
  price: Number;
  image: String;
  description: String;
}

const router = express.Router();
const Products = require("../models/Product");

router.get("/get", async (req: Request, res: Response) => {
  try {
    const products = await Products.find({}).toArray();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
});

router.post("/add", async (req: Request, res: Response) => {
  const response = req.body;
  const createdProduct = new Products({
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
