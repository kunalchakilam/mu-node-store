import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server started");
});

let products = [];
let users = []; 

app.post("/products", async (req, res) => {
  console.log(req.body);
  const body = await req.body;
  products.push(body);
  res.json(body);
});

app.get("/products", async (req, res) => {
  res.json(products);
});

app.post("/users", async (req, res) => {
  console.log(req.body);
  const body = await req.body;
  users.push(body);
  res.json(body);
});

app.get("/users", async (req, res) => {
  res.json(users);
});