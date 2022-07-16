import express from "express";
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
const port = 3000;
const productsRoute = require("./routes/products");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/products", productsRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Aplicação conectada e rodando");
  }
);
mongoose.Promise = global.Promise;
module.exports = mongoose;

app.get("/", (req, res) => {
  res.send("aaa");
});

app.listen(port);
