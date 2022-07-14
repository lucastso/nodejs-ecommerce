import express, { Request, Response } from "express";
const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world! this is your home page!");
});

app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`product ${id}`);
});

app.listen(port, () => {
  console.log(`[nodemon] Application running on port ${port}`);
});
