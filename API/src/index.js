const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const Port = 4000;
let peliculas = [
  {
    id: 0,
    titulo: "Rocky",
    protagonista: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.",
    categoria: "",
    urlVideo: "",
    epoca: "",
    imgLink:
      "https://classicposters.co.uk/cdn/shop/products/rocky-1976-classic-movie-poster-classic-posters.jpg?v=1657583102",
  },
  {
    id: 1,
    titulo: "Topgun",
    protagonista: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.",
    categoria: "",
    urlVideo: "",
    epoca: "",
    imgLink: "https://m.media-amazon.com/images/I/91u++CxhrQL.jpg",
  },
  {
    id: 2,
    titulo: "Rambo II",
    protagonista: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.",
    categoria: "",
    urlVideo: "",
    epoca: "",
    imgLink: "https://i.ebayimg.com/images/g/h8YAAOSw3ydV4OJ5/s-l1600.jpg",
  },
  {
    id: 3,
    titulo: "He-man",
    protagonista: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.",
    categoria: "",
    urlVideo: "",
    epoca: "",
    imgLink:
      "https://ih1.redbubble.net/image.2307196844.0965/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    id: 4,
    titulo: "Godzilla",
    protagonista: "",
    description: "",
    categoria: "",
    urlVideo: "",
    epoca: "",
    imgLink:
      "https://artofthemovies.co.uk/cdn/shop/products/IMG_9850.jpg?v=1666278379",
  },
];

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.get("/peliculas/:epoca", (req, res) => {
  const movies = peliculas.filter((movie) => movie.epoca === req.params.id)
  res.status(200).json(movies)
});

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
