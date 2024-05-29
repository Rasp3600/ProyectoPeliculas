import './main-layout.css'
import plusIcon from '../../assets/plus-icon.svg'
import closeIcon from '../../assets/close-icon.svg'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid' 

// eslint-disable-next-line react/prop-types
export default function MainLayout({children}) {
  const [isVisible, setIsVisible] = useState(false)
  const refTitulo = useRef()
  const refProtagonista = useRef()
  const refDescripcion = useRef()
  const refCategoria = useRef()
  const refUrlTrailer = useRef()
  const refEpoca = useRef()
  const refLinkPortada = useRef()

  
  function handleForm() {
    if (refEpoca.current.value === null) {
      throw new Error('La pelicula debe contener la epoca de emision')
    }
    fetch('http://localhost:4000/peliculas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          id: uuidv4(),
          titulo: refTitulo.current.value,
          protagonista: refProtagonista.current.value,
          description: refDescripcion.current.value,
          categoria: refCategoria.current.value,
          urlVideo: refUrlTrailer.current.value,
          epoca: refEpoca.current.value,
          imgLink: refLinkPortada.current.value
        }
      ),
    })
  }

  return (
    <>
    <header className='header__container'>
        <nav>
            <a href="/">Peliculas app</a>
        </nav>
        <button className='header__button' onClick={() => setIsVisible(true)}>
          <img src={plusIcon} alt="" />
        </button>
    </header>
    <div className={isVisible ? 'form__container--visible' : 'form__container--hidden'}>
      <div className='form__closeicon__container'>
          <button className='form__closeicon' onClick={(e) => {
          e.preventDefault()
          setIsVisible(false)
        }}>
            <img src={closeIcon} alt="" />
          </button>
      </div>
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
          handleForm()
        }}>agregar</button>
      </form>
    </div>
    <main className='main__container'>
        {children}
    </main>
    </>
  )
}
