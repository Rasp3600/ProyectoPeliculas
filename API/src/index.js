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
    imgLink: "https://i.pinimg.com/736x/43/e4/7d/43e47dbe323f21a464c8dc48d352ef73.jpg",
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
      "https://m.media-amazon.com/images/I/61-F9rv7RvL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    titulo: "The Lord of the Rings",
    protagonista: "Elijah Wood",
    description:
      "La historia sigue a un joven hobbit llamado Frodo Bolsón, quien hereda un anillo mágico de su tío Bilbo. Pronto descubre que este anillo es el Anillo Único, un artefacto poderoso que puede otorgar el control total sobre la Tierra Media a su portador, pero que también atrae la atención del oscuro señor Sauron, quien busca recuperarlo para sumir al mundo en la oscuridad. Frodo se embarca en una peligrosa misión para destruir el anillo, uniéndose a un grupo diverso de compañeros, conocido como la Compañía del Anillo, compuesto por humanos, elfos, enanos y otros hobbits.",
    categoria: "Aventura,Fantacia,Romance",
    urlVideo: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    epoca: "2000",
    imgLink:
      "https://m.media-amazon.com/images/I/81EBp0vOZZL._AC_UF894,1000_QL80_.jpg",
  },{
    id: 5,
    titulo: "Alien el octavo pasajero",
    protagonista: "Alien UWU",
    description: "La nave comercial Nostromo y su tripulación, siete hombres y mujeres, se disponen a volver a la Tierra transportando un cargamento de mineral importante. Pero cuando se detienen forzosamente en un planeta desierto, el oficial Kane es repentinamente atacado por una forma de vida desconocida, un arácnido que se adhiere a su cara. Después de que al doctor se le retire el espécimen con ayuda de todos, la tripulación se queda más tranquila y cenan juntos. Justo entonces, Kane empieza a sufrir arcadas y convulsiones y ve cómo su abdomen es perforado por un cuerpo extraño vivo, que se escapa por el pasillo de la nave. Se encuentran en medio del espacio exterior y en compañía de un alienígena. El misterioso huésped resulta ser una despiadada máquina de matar que siembra el pánico y acaba con la tripulación lentamente. La Doctora Ripley, uno de los tripulantes, acabará erigiéndose inesperadamente como la única rival a la altura del monstruo, con quien luchará hasta las últimas consecuencias.",
    categoria: "Terror, Ciencia ficción",
    urlVideo: "https://youtu.be/jQ5lPt9edzQ?si=ScbcH5F6rkQTV4Ig",
    epoca: "80",
    imgLink:
    "https://www.mubis.es/media/users/12957/188284/poster-de-alien-el-octavo-pasajero-original.jpg",
  }
];

app.get("/peliculas", (req, res) => {
  res.json(peliculas);
});

app.get("/peliculas/:epoca", (req, res) => {
  const movies = peliculas.filter((movie) => movie.epoca === req.params.epoca)
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
  const findID = peliculas.findIndex((t) => t.id == id);

  if (findID !== -1) {
    peliculas.splice(findID, 1);
    res.status(201).json("Pelicula eliminada");
  } else {
    res.status(404).json("No se encontro la pelicula");
  }
});

app.listen(Port, () => console.log(`server runnin on Port: ${Port}`));

// G5 NO ROMPIO INTER F xdxd
