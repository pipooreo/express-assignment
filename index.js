import express from "express";

const app = express();
const port = 4001;

const data = {
  data: {
    name: "john",
    age: 20,
  },
};
app.get("/", (req, res) => {
  return res.json("HELLO WORLD");
});

app.get("/profiles", (req, res) => {
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
