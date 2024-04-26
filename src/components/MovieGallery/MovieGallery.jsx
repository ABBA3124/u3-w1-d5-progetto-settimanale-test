import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function MovieGallery({ title, categories }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const API_KEY = '1e8e8b46' 
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search)
        } else {
          setMovies([])
        }
        setLoading(false)
      })
      .catch(error => console.error('fetch error: ', error))
  }, [title])

  if (loading) {
    return <div>Caricamento in Corso...</div>
  }

  if (movies.length === 0) {
    return <div className='text-secondary mt-3 mb-3'><h2>Nessun film trovato con il nome: <span className='text-white'>{title}.</span></h2></div>
  }




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1226,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          initialSlide: 4
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }



  return (
    <div className='mt-5'>
      <h2 className='text-white'>{categories}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} style={{ width: '160px' }} className='mb-2'/>
            <h4 style={{ fontSize: '15px', width: '120px' }} className='text-white'>{movie.Title}</h4>
            <h4 style={{ fontSize: '15px', width: '120px' }} className='text-white'>{movie.Year}</h4>
          </div>
        ))}
      
      </Slider>
    </div>
  )
}

export default MovieGallery
