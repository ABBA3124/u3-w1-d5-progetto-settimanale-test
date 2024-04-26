import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

function MovieCarousel({ searchQuery }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") setMovies(data.Search);
            });
    }, [searchQuery]);

    return (
        <Carousel>
            {movies.map((movie, idx) => (
                <Carousel.Item key={idx}>
                    <img
                        className="d-block w-100"
                        src={movie.Poster}
                        alt={movie.Title}
                    />
                    <Carousel.Caption>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MovieCarousel;
