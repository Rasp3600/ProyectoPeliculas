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

app.delete("/peliculas/:id", (req, res) => {
  const { id } = req.params;
  const findID = peliculas.findIndex((t) => t.id === id)

  if(findID !== -1){
    peliculas.splice(findID, 1);
    res.status(201).send("Pelicula eliminada")
  }else{
    res.status(404).send("No se encontro la pelicula")
  }
});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));

// G5 NO ROMPIO INTER F xdxd
