import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";

import { Home } from "./assets/pages/Home";
import { Pokemonpage } from "./assets/pages/Pokemonpage";
import { About } from "./assets/pages/About";
import { Type } from "./assets/pages/Type";
import { PokemonDetails } from "./assets/pages/PokemonDetails";
import { MainLayout } from "./assets/Layout/MainLayout";

function App() {
  const api = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===============================
  // Fetch Pokemon
  // ===============================
  const fetchPokemon = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(api);
      const data = await res.json();

     
      const pokemonApis = data.results.map( async (curPokemonApi)=>
      {
        const res = await fetch(curPokemonApi.url);
        const data = await res.json();
        return data; 
      })
      
       const detailsResponse = await Promise.all(pokemonApis)
      //  console.log(detailsResponse);

      // Skeleton effect ke liye 2 second delay
      setTimeout(() => {
        setPokemon(detailsResponse);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };
  

  // ===============================
  // API Call
  // ===============================
  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<MainLayout />}>
        <Route index element={
            <Home
              pokemon={pokemon}
              setPokemon={setPokemon}
              loading={loading}
              error={error}
              fetchPokemon={fetchPokemon}
            />
          }
        />

        {/* ================= POKEMON ================= */}
        <Route
          path="/pokemon"
          element={
            <Pokemonpage
              pokemon={pokemon}
              setPokemon={setPokemon}
              loading={loading}
              error={error}
              fetchPokemon={fetchPokemon}
            />
          }
        />

        {/* ================= TYPE ================= */}
        <Route path="/type" element={<Type />} />

        {/* ================= ABOUT ================= */}
        <Route path="/about" element={<About />} />
        <Route path="/pokdetails/:pokemonID" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
