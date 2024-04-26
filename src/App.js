import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
// import Navbar from './components/Navbar/Navbar';
// import MovieCarousel from './components/MovieCarousel/MovieCarousel';
import Footer from "./components/Footer/Footer.jsx"
import CustomNavbar from "./components/Navbar/CustomNavbar.jsx"

function App() {
  return (
    <div className="App bg-info">
      <body className="bg-black mx-5">
        <CustomNavbar />
        <Footer />
      </body>
    </div>
  )
}

export default App
