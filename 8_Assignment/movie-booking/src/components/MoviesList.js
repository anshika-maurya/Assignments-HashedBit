import React from "react";
import { Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Movie 1", image: "/movie1.avif" },
  { id: 2, name: "Movie 2", image: "/movie2.avif" },
  { id: 3, name: "Movie 3", image: "/movie3.avif" },
  { id: 4, name: "Movie 4", image: "/movie4.jpg" },
  { id: 5, name: "Movie 5", image: "/movie5.jpg" },
  { id: 6, name: "Movie 6", image: "/movie6.jpg" },
  { id: 7, name: "Movie 7", image: "/movie7.jpg" },
  { id: 8, name: "Movie 8", image: "/movie8.jpg" },
  { id: 9, name: "Movie 9", image: "/movie9.jpg" },
  { id: 10, name: "Movie 10", image: "/movie10.jpg" },
];

const MoviesList = () => {
  return (
    <div className="container">
      <h2>Available Movies</h2>
      <div className="grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.name} />
            <h3>{movie.name}</h3>
            <Link to={`/movie/${movie.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
