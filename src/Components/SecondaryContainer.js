import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 relative z-10">
        <MovieList title="Now-playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies?.popularMovies} />
        <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
        <MovieList title="Top-Rated" movies={movies?.topRatedMovies} />
        <MovieList title="Melody" movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
