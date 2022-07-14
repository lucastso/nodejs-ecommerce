import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

//mongoose.connect("mongodb");

const port = 3000;

const data = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 5,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 8,
  },
  {
    id: 3,
    nome: "Meia",
    preco: 2,
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send(data);
});

app.get("/products/:id", (req: Request<{ id: number }>, res: Response) => {
  const { id } = req.params;
  const product = data.find((item) => item.id == id);
  res.send(JSON.stringify(product));
});

app.listen(port, () => {
  console.log(`[nodemon] Application running on port ${port}`);
});
