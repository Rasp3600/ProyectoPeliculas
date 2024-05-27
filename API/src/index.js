const express = require("express");
const cors = require("cors");

const app = express();
const Port = 4000;
let peliculas = [];

const structure = {
  id: "",
  titulo: "",
  protagonista: "",
  categoria: "",
  urlVideo: "",
  urlImage: "",
};

app.use(cors());
app.use(express.json());

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.get("/peliculas/:epoca", (req, res) => {});

app.post(`/peliculas`, async (req, res) => {
  const newpeli = req.body;
  peliculas.push(newpeli);
  res.status(201).json("Peli agregada");
});

app.put("/peliculas/:id", async (req, res) => {
  const { id } = req.params;
  const updatedpeli = req.body;
  const index = peliculas.findIndex((peli) => peli.id == id);
  peliculas[index] = { ...peliculas[index], ...updatedpeli };
  res.status(201).json("Peli actualizada");
});

app.delete("/peliculas/:id", (req, res) => {});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));

// G5 NO ROMPIO INTER F xdxd
