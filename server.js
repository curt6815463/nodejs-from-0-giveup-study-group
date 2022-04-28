const express = require("express");
const app = express();
const port = 3000;

express.static.mime.define({ "application/octet-stream": ["png", "jpg"] });

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello Nodejs");
});

app.get("/products", (req, res) => {
  const data = [
    {
      productName: "apple watch",
      prize: "300",
      productId: "id1",
    },
    {
      productName: "shose",
      prize: "10",
      productId: "id2",
    },
  ];
  res.send(data);
});

app.get("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  const data = {
    productName: "Name",
    productId,
    prize: "300",
  };
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
