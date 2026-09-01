import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PokemonDetails = () => {
  const { pokemonID } = useParams();

  const apiSinglePokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;

  const [pokemonDetails, setPokemonDetails] = useState(null);

  const fetchPokemonDetails = async () => {
    try {
      // Pokemon Details API
      const response = await fetch(apiSinglePokemon);
      const pokemonData = await response.json();

      // Species API
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData = await speciesResponse.json();

      setPokemonDetails({
        ...pokemonData,
        speciesData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [pokemonID]);

  const selectedStats = pokemonDetails?.stats?.filter((statItem) => {
    return ["hp", "attack", "defense", "speed"].includes(statItem.stat.name);
  });

  const navigate = useNavigate();

  if (!pokemonDetails) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  const handlePrev = () => {
    navigate("/pokemon");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <button
          onClick={handlePrev}
          className="cursor-pointer mb-6 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
        >
          ← Back to Pokemon
        </button>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl dark:bg-gray-900">
          {/* Top Section */}
          <div className="grid md:grid-cols-2">
            {/* Pokemon Image Section */}
            <div className="flex min-h-[450px] items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-10 dark:from-blue-950 dark:via-purple-950 dark:to-pink-950">
              <div className="text-center">
                {/* Pokemon ID */}
                <p className="mb-3 text-sm font-semibold text-gray-500 dark:text-gray-400">
                 #{String(pokemonDetails.id)}
                </p>

                {/* Pokemon Image */}
                <img
                  src={
                    pokemonDetails.sprites?.other?.dream_world?.front_default ||
                    pokemonDetails.sprites?.other?.["official-artwork"]
                      ?.front_default ||
                    pokemonDetails.sprites?.front_default
                  }
                  alt={pokemonDetails.name}
                  className="mx-auto h-72 w-72 object-contain drop-shadow-2xl transition duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Pokemon Information */}
            <div className="p-8 md:p-12">
              {/* Name */}
              <div className="mb-6">
                <h1 className="text-4xl font-extrabold capitalize text-gray-900 dark:text-white">
                  {pokemonDetails.name}
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {
                    pokemonDetails?.speciesData?.genera?.find(
                      (item) => item.language.name === "en",
                    )?.genus
                  }
                </p>
              </div>

              {/* Types */}
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                  Type
                </p>

                <div className="flex gap-2">
                  {pokemonDetails.types?.map((typeItem) => (
                    <span
                      key={typeItem.slot}
                      className="capitalize rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-yellow-950"
                    >
                      {typeItem.type.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  About
                </h2>

                <p className="leading-7 text-gray-600 dark:text-gray-300">
                   {pokemonDetails?.speciesData?.flavor_text_entries
                    ?.find((item) => item.language.name === "en")
                    ?.flavor_text
                    ?.replace(/\f/g, " ")}
               </p>
              </div>

              {/* Basic Information */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Height
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                    {pokemonDetails.height} M
                  </p>
                </div>

                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Weight
                  </p>

                  <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                    {pokemonDetails.weight} kg
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-200 p-8 dark:border-gray-800 md:p-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Base Stats
            </h2>

            <div className="space-y-5">
              {selectedStats?.map((statItems) => {
                const statName = statItems.stat.name;
                const statValue = statItems.base_stat;

                return (
                  <div key={statName}>
                    {/* Stat Name + Value */}
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="font-semibold capitalize text-slate-500">
                        {statName}
                      </span>

                      <span className="font-bold text-slate-800">
                        {statValue}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${
                          statName === "hp"
                            ? "bg-green-500"
                            : statName === "attack"
                              ? "bg-red-500"
                              : "bg-blue-500"
                        }`}
                        style={{
                          width: `${Math.min(statValue, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer Information */}
          <div className="border-t border-gray-200 bg-gray-50 px-8 py-6 dark:border-gray-800 dark:bg-gray-950">
            <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Ability
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {pokemonDetails.abilities?.[0]?.ability?.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Experience
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {pokemonDetails.base_experience}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Generation
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {pokemonDetails?.speciesData?.generation?.name}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Category
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {
                    pokemonDetails?.speciesData?.genera?.find(
                      (item) => item.language.name === "en",
                    )?.genus
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
