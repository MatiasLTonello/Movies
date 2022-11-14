import React, { useState } from "react";
import Header from "./components/Header";
import Searcher from "./components/Searcher";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [jugadores, setJugadores] = useState([]);
  const getJugadores = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/550?api_key=09bee030802fd59cad9b544486b47fb7"
    );
    const data = await response.json();
    console.log(data, response);
    setJugadores(data);
  };

  useEffect(() => {
    getJugadores();
  }, []);

  console.log(jugadores);

  return (
    <div className="bg">
      <Header />
      <Searcher></Searcher>
    </div>
  );
}

export default App;
