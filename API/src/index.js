const express = require("express");
const cors = require("cors");

const app = express();
const Port = 4000;
let peliculas = [];

const structure = {
  id: '',
  titulo: '',
  protagonista: '',
  categoria: '',
  urlVideo: '',
  urlImage: {
    normalSize: '',
    bigSize: ''
  }
}

app.use(cors());
app.use(express.json());

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.get("/peliculas/:epoca", (req, res) => {
});

app.post("/peliculas", (req, res) => {
});

app.update("/peliculas/:id", (req, res) => {
});

app.delete("/peliculas/:id", (req, res) => {
});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));

// G5 NO ROMPIO INTER F