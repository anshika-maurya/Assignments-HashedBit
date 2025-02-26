import React from "react";
import { useParams, Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Movie 1", description: "Exciting movie!", image: "/movie1.avif" },
  { id: 2, name: "Movie 2", description: "Adventure movie!", image: "/movie2.avif" },
  { id: 3, name: "Movie 3", description: "Comedy movie!", image: "/movie3.avif" },
  { id: 4, name: "Movie 4", description: "Exciting movie!", image: "/movie4.jpg" },
  { id: 5, name: "Movie 5", description: "Adventure movie!", image: "/movie5.jpg" },
  { id: 6, name: "Movie 6", description: "Dumdar movie!", image: "/movie6.jpg" },
  { id: 7, name: "Movie 7", description: "Exciting movie!", image: "/movie7.jpg" },
  { id: 8, name: "Movie 8", description: "Adventure movie!", image: "/movie8.jpg" },
  { id: 9, name: "Movie 9", description: "Exciting movie!", image: "/movie9.jpg" },
  { id: 10, name: "Movie 10", description: "Dumdar movie!", image: "/movie10.jpg" },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie Not Found</h2>;

  return (
    <div className="container">
      <h2>{movie.name}</h2>
      <img src={movie.image} alt={movie.name} className="movie-details-img" />
      <p>{movie.description}</p>
      <Link to={`/book/${id}`} className="button">Book Seat</Link>
    </div>
  );
};

export default MovieDetails;
