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
    protagonista:
      "Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers, Burgess Meredith, Mr. T",
    description:
      "Rocky III continúa la saga del icónico boxeador Rocky Balboa (Sylvester Stallone). Tras su victoria sobre Apollo Creed y el logro del título de campeón mundial de peso pesado, Rocky disfruta de la fama y el éxito. Ha defendido su título con éxito varias veces y lleva una vida de lujo junto a su esposa Adrian (Talia Shire) y su hijo.",
    categoria: "Drama, Deporte",
    urlVideo: "https://www.youtube.com/watch?v=-Hk-LYcavrw",
    epoca: "80",
    imgLink:
      "https://classicposters.co.uk/cdn/shop/products/rocky-1976-classic-movie-poster-classic-posters.jpg?v=1657583102",
  },
  {
    id: 1,
    titulo: "Topgun",
    protagonista: "Tom Cruise",
    description:
      "El joven piloto Maverick Mitchell acude a una prestigiosa escuela aérea, famosa por formar a los mejores pilotos de combate del país. Maverick se siente atraído por su hermosa instructora, mientras desarrolla una intensa rivalidad con otro piloto",
    categoria: "Acción,Drama,Romance",
    urlVideo: "https://www.youtube.com/watch?v=xa_z57UatDY",
    epoca: "80",
    imgLink: "https://m.media-amazon.com/images/I/91u++CxhrQL.jpg",
  },
  {
    id: 2,
    titulo: "Depredador",
    protagonista: "Arnold Schwarzenegger",
    description:
      "Depredador es una película de acción y ciencia ficción que sigue al mayor Alan Dutch Schaefer (Arnold Schwarzenegger), quien lidera un equipo de operaciones especiales en una misión de rescate en la selva centroamericana. El equipo, compuesto por soldados altamente entrenados, es enviado para salvar a un grupo de rehenes de las guerrillas. Sin embargo, pronto descubren que no están solos en la selva.",
    categoria: "Accion",
    urlVideo: "https://www.youtube.com/watch?v=NICzpXtD-A0",
    epoca: "80",
    imgLink: "https://i.ebayimg.com/images/g/h8YAAOSw3ydV4OJ5/s-l1600.jpg",
  },
  {
    id: 3,
    titulo: "Forrest Gump",
    protagonista: "Tom Hanks",
    description:
      "La historia sigue la vida de Forrest Gump, un hombre con discapacidad intelectual, desde su infancia en Alabama hasta su vida adulta, durante la cual se convierte en parte de importantes eventos históricos de Estados Unidos.",
    categoria: "Drama,Romance,Comedia",
    urlVideo: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    epoca: "90",
    imgLink:
      "https://ih1.redbubble.net/image.2307196844.0965/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    id: 4,
    titulo: "The Lord of the Rings: The Fellowship of the Ring",
    protagonista: "Elijah Wood",
    description:
      "La historia sigue a un joven hobbit llamado Frodo Bolsón, quien hereda un anillo mágico de su tío Bilbo. Pronto descubre que este anillo es el Anillo Único, un artefacto poderoso que puede otorgar el control total sobre la Tierra Media a su portador, pero que también atrae la atención del oscuro señor Sauron, quien busca recuperarlo para sumir al mundo en la oscuridad. Frodo se embarca en una peligrosa misión para destruir el anillo, uniéndose a un grupo diverso de compañeros, conocido como la Compañía del Anillo, compuesto por humanos, elfos, enanos y otros hobbits.",
    categoria: "Aventura,Fantacia,Romance",
    urlVideo: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    epoca: "2000",
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
  const findID = peliculas.findIndex((t) => t.id === id);

  if (findID !== -1) {
    peliculas.splice(findID, 1);
    res.status(201).send("Pelicula eliminada");
  } else {
    res.status(404).send("No se encontro la pelicula");
  }
});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));

// G5 NO ROMPIO INTER F xdxd
