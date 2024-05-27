import "./homepage.css";
import MainLayout from "../../layouts/main/MainLayout";
import { useEffect, useState } from "react";

export default function HomePageContainer() {
  const testImg =
    "https://images.fineartamerica.com/images/artworkimages/medium/3/7-alien-movie-poster-alien-1979-jean-darmel.jpg";
  const [peliculas, setPeliculas] = useState([]);
  const testTitle = "Alien";
  const testDesc =
    "La tripulación del remolcador espacial Nostromo atiende una señal de socorro y, sin saberlo, sube a bordo una letal forma de vida extraterrestre";

  useEffect(() => {
    fetch(`http://localhost:4000/peliculas`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data));
  }, []);

  console.log(peliculas);

  return (
    <MainLayout>
      <section className="cards__container--large">
        <article className="movie__info__container--large">
          <picture>
            <img className="card__img--large" src={testImg} alt="" />
          </picture>
          <section className="movie__metadata__container--large">
            <h1>{testTitle}</h1>
            <p>{testDesc}</p>
          </section>
        </article>
      </section>
      <section className="cards__container">
        <header className="cards__section__header">
          <h2 className="cards__header">Peliculas disponibles</h2>
        </header>
        <section className="cards__displayer">
          {peliculas.map((movie) => (
            <div className="card__container" key={movie.id}>
              <article className="card">
                <picture>
                  <img className="card__img" src={movie.imgLink} alt="" />
                </picture>
                <section className="card__metadata">
                  <picture>
                    <img className="card__img" src={movie.imgLink} alt="" />
                  </picture>
                  <div>
                    <h3>{movie.titulo}</h3>
                    <p>{movie.description}</p>
                  </div>
                </section>
              </article>
            </div>
          ))}
        </section>
      </section>
    </MainLayout>
  );
}
