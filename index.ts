const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`[nodemon] Application running on port ${port}`);
});