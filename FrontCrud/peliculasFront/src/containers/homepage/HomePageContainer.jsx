import './homepage.css'
import MainLayout from "../../layouts/main/MainLayout"

export default function HomePageContainer() {
    const testImg = 'https://images.fineartamerica.com/images/artworkimages/medium/3/7-alien-movie-poster-alien-1979-jean-darmel.jpg'

    const testTitle = 'Alien'
    const testDesc = 'La tripulación del remolcador espacial Nostromo atiende una señal de socorro y, sin saberlo, sube a bordo una letal forma de vida extraterrestre'

    const testMovies = [
        {
            id: 0,
            tite: 'Rocky',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nisi.',
            imgLink: 'https://classicposters.co.uk/cdn/shop/products/rocky-1976-classic-movie-poster-classic-posters.jpg?v=1657583102'
        },
        {
            id: 1,
            tite: 'Topgun',
            description:'',
            imgLink: 'https://m.media-amazon.com/images/I/91u++CxhrQL.jpg'
        },
        {
            id: 2,
            tite: 'Rambo II',
            description: '',
            imgLink: 'https://i.ebayimg.com/images/g/h8YAAOSw3ydV4OJ5/s-l1600.jpg'
        },
        {
            id: 3,
            tite: 'He-man',
            description: '',
            imgLink: 'https://ih1.redbubble.net/image.2307196844.0965/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
        },
        {
            id: 4,
            tite: 'Godzilla',
            description: '',
            imgLink: 'https://artofthemovies.co.uk/cdn/shop/products/IMG_9850.jpg?v=1666278379'
        },
    ]
  return (
    <MainLayout>
        <section className='cards__container--large'>
            <article className='movie__info__container--large'>
                <picture>
                    <img className='card__img--large' src={testImg} alt="" />
                </picture>
                <section className='movie__metadata__container--large'>
                    <h1>{testTitle}</h1>
                    <p>{testDesc}</p>
                </section>
            </article>
        </section>
        <section className='cards__container'>
            <header className='cards__section__header'>
                <h2 className='cards__header'>Peliculas disponibles</h2>
            </header>
            <section className='cards__displayer'>
                {testMovies.map(movie => (
                    <div className='card__container' key={movie.id} >
                        <article className='card'>
                        <picture>
                            <img className='card__img' src={movie.imgLink} alt="" />
                        </picture>
                        <section className='card__metadata'>
                        <picture>
                            <img className='card__img' src={movie.imgLink} alt="" />
                        </picture>
                            <h3>{movie.tite}</h3>
                            <div>
                                <p>{movie.description}</p>
                            </div>
                        </section>
                        </article>
                    </div>
                ))}
            </section>
        </section>
    </MainLayout>
  )
}

