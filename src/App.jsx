import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Pages from "./components/Pages";
import Searcher from "./components/Searcher";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const [filtedMovies, setFiltedMovies] = useState(movies);
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=09bee030802fd59cad9b544486b47fb7&page=${page}`
    );
    const data = await response.json();
    setPages(data.total_pages);
    setMovies(data.results);
    setFiltedMovies(data.results);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <div className="bg">
        <Header />
        <Searcher setMovies={setFiltedMovies} movies={movies} />
        <Movies movies={filtedMovies} />
        <Pages totalPages={pages} page={page} setPage={setPage} />
      </div>
    </>
  );
}
