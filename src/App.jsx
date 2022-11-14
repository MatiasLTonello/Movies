import React, { useState } from "react";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import Movies from "./components/Movies";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=09bee030802fd59cad9b544486b47fb7"
    );
    const data = await response.json();
    console.log(data, response);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="bg">
        <Header />
        <Searcher></Searcher>
        <Movies movies={movies} />
      </div>
    </>
  );
}
