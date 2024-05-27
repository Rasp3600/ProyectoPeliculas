import './main-layout.css'

// eslint-disable-next-line react/prop-types
export default function MainLayout({children}) {
  return (
    <>
    <header className='header__container'>
        <nav>
            <a className='header__home__link' href="/">Peliculas app</a>
        </nav>
    </header>
    <main className='main__container'>
        {children}
    </main>
    </>
  )
}
