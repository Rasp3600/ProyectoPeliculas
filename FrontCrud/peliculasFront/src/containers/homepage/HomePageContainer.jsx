import "./homepage.css";
import MainLayout from "../../layouts/main/MainLayout";
import { useEffect, useState, useRef } from "react";
import moreIcon from '../../assets/more-vertical-icon.svg'
import deleteIcon from '../../assets/delete-icon.svg'
import updateIcon from '../../assets/update-icon.svg'
import closeIcon from '../../assets/close-icon.svg'
import { v4 as uuidv4 } from 'uuid' 


export default function HomePageContainer() {
  const testImg =
    "https://images.fineartamerica.com/images/artworkimages/medium/3/7-alien-movie-poster-alien-1979-jean-darmel.jpg";
  const [peliculas, setPeliculas] = useState([]);
  const [currentElemId, setCurrentElemId] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const refTitulo = useRef()
  const refProtagonista = useRef()
  const refDescripcion = useRef()
  const refCategoria = useRef()
  const refUrlTrailer = useRef()
  const refEpoca = useRef()
  const refLinkPortada = useRef()
  const testTitle = "Alien";
  const testDesc =
    "La tripulación del remolcador espacial Nostromo atiende una señal de socorro y, sin saberlo, sube a bordo una letal forma de vida extraterrestre";

  useEffect(() => {
    fetch(`http://localhost:4000/peliculas`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data));
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/peliculas/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  function handleUpdate(id) {
    const currentMovie = peliculas.find((movie) => movie.id === id)
    fetch(`http://localhost:4000/peliculas/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: uuidv4(),
          titulo: refTitulo.current.value ? refTitulo.current.value : currentMovie.titulo,
          protagonista: refProtagonista.current.value ? refProtagonista.current.value : currentMovie.protagonista,
          description: refDescripcion.current.value ? refDescripcion.current.value : currentMovie.description,
          categoria: refCategoria.current.value ? refCategoria.current.value : currentMovie.categoria,
          urlVideo: refUrlTrailer.current.value ? refUrlTrailer.current.value : currentMovie.urlVideo,
          epoca: refEpoca.current.value ? refEpoca.current.value : currentMovie.epoca,
          imgLink: refLinkPortada.current.value ? refLinkPortada.current.value : currentMovie.imgLink
        }
      ),
    })
  }

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
              <div className="card__more__container">
                  <h3>{movie.titulo}</h3>
                  <button className="card__moreicon" onClick={() => {
                    setCurrentElemId(movie.id)
                    setIsVisible(true)
                  }}>
                    <img src={moreIcon} alt="" />
                  </button>
                </div>
                {currentElemId === movie.id && isVisible ?
                  <div>
                    <button onClick={() => {
                      setIsUpdating(true)
                      handleUpdate(movie.id)
                    }}>
                      <img src={updateIcon} alt="" />
                    </button>
                    <button onClick={() => {
                        window.location.reload()
                        handleDelete(movie.id)
                      }}>
                      <img src={deleteIcon} alt="" />
                    </button>
                    <button onClick={() => {
                      setIsVisible(false)
                      setIsUpdating(false)
                    }}>
                      <img src={closeIcon} alt="" />
                    </button>
                  </div>
                  : ''
                }
                {currentElemId === movie.id && isUpdating ?
                  <div>
                    <form className='form'>
                      <input ref={refTitulo} type="text" placeholder='Titulo' />
                      <input ref={refProtagonista} type="text" placeholder='Protagonista' />
                      <input ref={refDescripcion} type="text" placeholder='Descripcion' />
                      <input ref={refCategoria} type="text" placeholder='Categoria' />
                      <input ref={refUrlTrailer} type="text" placeholder='Url del trailer' />                      
                      <select ref={refEpoca}>
                        <option value="" defaultValue={null} defaultChecked>Seleccione la epoca de emision</option>
                        <option value="80's">Epoca de los 80&apos;s</option>
                        <option value="90's">Epoca de los 90&apos;s</option>
                        <option value="2000's">Epoca de los 2000&apos;s</option>
                      </select>
                      <input ref={refLinkPortada} type="text" placeholder='Link portada de la pelicula' />
                      <button className='form__button' onClick={() => {
                        window.location.reload()
                        handleUpdate(movie.id)
                      }}>actualizar</button>
                    </form>  
                  </div>
                    : ''

                }
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
