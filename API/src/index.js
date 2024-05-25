const express = require("express");
const cors = require("cors");

const app = express();
const Port = 4000;
let peliculas = [];

app.use(cors());
app.use(express.json());

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));
