import { PokemonCard } from "./PokemonCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { SearchPokemon } from "../components/SearchBar";
import { useState, useEffect } from "react";

export const PokemonGrid = ({
  pokemon,
  setPokemon,
  loading,
  error,
  fetchPokemon,
}) => {
  // ==================== Search State ====================
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] =useState("");

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ==================== Search / Filter Pokemon ====================
  const searchingPokemon = pokemon.filter((item) => {
    const keyword = debouncedSearch.toLowerCase().trim();

    return item.name.toLowerCase().includes(keyword);
  });

  return (
    <section className="container mx-auto px-4 py-12">
      {/* ==================== Section Heading ==================== */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Explore Pokémon</h2>

        <p className="mt-2 text-slate-500">Discover your favorite Pokémon</p>
      </div>

      {/* ==================== Search ==================== */}
      <SearchPokemon search={search} setSearch={setSearch} />

      {/* ==================== Loading State ==================== */}
      {loading ? (
        <div className="mt-6 mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="h-56 animate-pulse bg-slate-200"></div>

              {/* Content Skeleton */}
              <div className="space-y-4 p-5">
                {/* Name Skeleton */}
                <div className="h-6 w-32 animate-pulse rounded-md bg-slate-200"></div>

                {/* Type Skeleton */}
                <div className="flex gap-2">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-slate-200"></div>

                  <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200"></div>
                </div>

                {/* Description Skeleton */}
                <div className="h-4 w-full animate-pulse rounded bg-slate-200"></div>

                <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200"></div>

                {/* Button Skeleton */}
                <div className="h-10 w-full animate-pulse rounded-xl bg-slate-200"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        /* ==================== Error State ==================== */
        <div className="flex min-h-[350px] items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-lg">
            {/* Error Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                className="text-2xl text-red-600"
              />
            </div>

            {/* Error Title */}
            <h2 className="text-2xl font-bold text-slate-800">
              Something went wrong
            </h2>

            {/* Error Message */}
            <p className="mt-3 text-slate-500">
              We couldn't load the Pokémon data. Please try again.
            </p>

            {/* Retry Button */}
            <button
              type="button"
              onClick={fetchPokemon}
              className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-700 active:scale-95"
            >
              <i className="fa-solid fa-rotate-right"></i>
              Try Again
            </button>
          </div>
        </div>
      ) : (
        /* ==================== Success State ==================== */
        <>
          {searchingPokemon.length > 0 ? (
            <div className="mx-auto mt-6 mb-6 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {searchingPokemon.map((pokemonItem) => (
                <PokemonCard
                  key={pokemonItem.id}
                  pokemon={pokemonItem}
                  setPokemon={setPokemon}
                 />
              ))}
            </div>
          ) : (
            /* ==================== No Search Result ==================== */
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="mb-4 text-4xl text-slate-400"
                />

                <h2 className="text-2xl font-bold text-slate-700">
                  No Pokémon Found
                </h2>

                <p className="mt-2 text-slate-500">
                  Try searching with another Pokémon name.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};
