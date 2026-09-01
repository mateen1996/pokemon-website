import { HeroBanner } from "../components/Hero";
import { PokemonGrid } from "../components/PokemonGrid";


export const Home = ({
  pokemon,
  setPokemon,
  loading,
  error,
  fetchPokemon,
}) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

     
      {/* Hero */}
      <HeroBanner />

      {/* Pokemon Cards */}
      <PokemonGrid
        pokemon={pokemon}
        setPokemon={setPokemon}
        loading={loading}
        error={error}
        fetchPokemon={fetchPokemon}
      />
    </div>
  );
};