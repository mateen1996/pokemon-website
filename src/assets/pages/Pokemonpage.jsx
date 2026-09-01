import { NabarHeader } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PokemonGrid } from "../components/PokemonGrid";
import { ScrollToTop } from "../components/ScrollToTop";

export const Pokemonpage = ({
  pokemon,
  setPokemon,
  loading,
  error,
  fetchPokemon,
}) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">

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