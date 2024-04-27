import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Footer from "./components/Footer/Footer.jsx"
import CustomNavbar from "./components/Navbar/CustomNavbar.jsx"
import MovieGallery from "./components/MovieGallery/MovieGallery.jsx"
import FilterGenres from "./components/FilterGenres/FilterGenres.jsx"
import "bootstrap-icons/font/bootstrap-icons.css"
import ProfilePage from "./components/ProfilePage/ProfilePage.jsx"
import SettingsPage from "./components/SettingsPage/SettingsPage.jsx"

function App() {
  return (
    <div className="App bg-black">
      <body className="bg-black mx-5">
        <CustomNavbar />
        <article>
          {/* <SettingsPage/> */}
          {/* <ProfilePage/> */}
        </article>
        <main>
        <FilterGenres/>
            <MovieGallery title="action" categories="Titoli consigliati" />
            <MovieGallery title="transformers" categories="Titoli che potrebbero piacerti" />
            <MovieGallery title="Harry Potter" categories="Trending Now" />
            <MovieGallery title="fast and furious" categories="Perchè hai guardato Need For Speed" />
            <MovieGallery title="Lord of the Rings" categories="Watch It Again" />
            <MovieGallery title="Star Wars" categories="New Releases" />
            <MovieGallery title="dkhbfjhsbhdf" categories="Titoli consigliati" /> 
            {/* lasciato appositamente per far vedere che se non trova riscontro ci avvisa */}
        </main>
        <Footer />
      </body>
    </div>
  )
}

export default App
