import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Type = () => {
  const [searchType, setSearchType] = useState("");

  const pokemonTypes = [
    {
      name: "Normal",
      icon: "⚪",
      description: "Simple and balanced Pokémon types.",
      color:
        "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
      iconBg: "bg-slate-200 dark:bg-slate-700",
    },
    {
      name: "Fire",
      icon: "🔥",
      description: "Powerful attacks based on heat and flames.",
      color:
        "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300",
      iconBg: "bg-orange-100 dark:bg-orange-900/50",
    },
    {
      name: "Water",
      icon: "💧",
      description: "Pokémon associated with water and oceans.",
      color:
        "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
      iconBg: "bg-blue-100 dark:bg-blue-900/50",
    },
    {
      name: "Electric",
      icon: "⚡",
      description: "Fast Pokémon powered by electricity.",
      color:
        "bg-yellow-50 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-300",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
    },
    {
      name: "Grass",
      icon: "🌿",
      description: "Nature-based Pokémon connected to plants.",
      color:
        "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300",
      iconBg: "bg-green-100 dark:bg-green-900/50",
    },
    {
      name: "Ice",
      icon: "❄️",
      description: "Cold-based Pokémon with freezing abilities.",
      color:
        "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/50",
    },
    {
      name: "Fighting",
      icon: "🥊",
      description: "Physical fighters with powerful combat moves.",
      color:
        "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300",
      iconBg: "bg-red-100 dark:bg-red-900/50",
    },
    {
      name: "Poison",
      icon: "☠️",
      description: "Pokémon that use toxins and poisonous attacks.",
      color:
        "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
      iconBg: "bg-purple-100 dark:bg-purple-900/50",
    },
    {
      name: "Ground",
      icon: "🌎",
      description: "Earth-based Pokémon with powerful ground attacks.",
      color:
        "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
      iconBg: "bg-amber-100 dark:bg-amber-900/50",
    },
    {
      name: "Flying",
      icon: "🪽",
      description: "Pokémon with aerial abilities and attacks.",
      color:
        "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
      iconBg: "bg-sky-100 dark:bg-sky-900/50",
    },
    {
      name: "Psychic",
      icon: "🔮",
      description: "Pokémon with powerful mental abilities.",
      color:
        "bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300",
      iconBg: "bg-pink-100 dark:bg-pink-900/50",
    },
    {
      name: "Bug",
      icon: "🐛",
      description: "Pokémon inspired by insects and small creatures.",
      color:
        "bg-lime-50 text-lime-700 dark:bg-lime-950/40 dark:text-lime-300",
      iconBg: "bg-lime-100 dark:bg-lime-900/50",
    },
    {
      name: "Rock",
      icon: "🪨",
      description: "Strong Pokémon associated with rocks and minerals.",
      color:
        "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200",
      iconBg: "bg-stone-200 dark:bg-stone-700",
    },
    {
      name: "Ghost",
      icon: "👻",
      description: "Mysterious Pokémon with supernatural abilities.",
      color:
        "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
    },
    {
      name: "Dragon",
      icon: "🐉",
      description: "Powerful Pokémon with legendary dragon abilities.",
      color:
        "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
      iconBg: "bg-violet-100 dark:bg-violet-900/50",
    },
    {
      name: "Dark",
      icon: "🌑",
      description: "Pokémon that specialize in dark and tactical moves.",
      color:
        "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200",
      iconBg: "bg-gray-200 dark:bg-gray-700",
    },
    {
      name: "Steel",
      icon: "⚙️",
      description: "Defensive Pokémon associated with metal and steel.",
      color:
        "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200",
      iconBg: "bg-zinc-200 dark:bg-zinc-700",
    },
    {
      name: "Fairy",
      icon: "🧚",
      description: "Magical Pokémon with charming abilities.",
      color:
        "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:text-fuchsia-300",
      iconBg: "bg-fuchsia-100 dark:bg-fuchsia-900/50",
    },
  ];

  // ===============================
  // FILTER TYPES
  // ===============================
  const filteredTypes = pokemonTypes.filter((type) =>
    type.name.toLowerCase().includes(searchType.toLowerCase())
  );

  // ===============================
  // CLEAR SEARCH
  // ===============================
  const handleClear = () => {
    setSearchType("");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500 px-6 py-16 text-white">

        {/* Background Circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10" />

        <div className="relative mx-auto max-w-6xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
            PokeDex
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl md:text-6xl">
            Pokémon Types
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-red-50 sm:text-lg">
            Discover the different Pokémon types and learn what makes each
            type unique.
          </p>

        </div>
      </section>


      {/* ================= CONTENT ================= */}
      <section className="px-6 py-12 sm:py-16">

        <div className="mx-auto max-w-6xl">

          {/* Heading + Search */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            {/* Heading */}
            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-red-500">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-black text-gray-900 dark:text-white">
                All Pokémon Types
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Explore all 18 Pokémon types.
              </p>

            </div>


            {/* ================= SEARCH ================= */}
            <div className="w-full md:max-w-sm">

              {/* Search Label + Clear */}
              <div className="mb-3 flex items-center justify-between">

                <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  Search Pokémon Type
                </label>

                {searchType && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs font-semibold text-slate-500 transition hover:text-red-600"
                  >
                    Clear
                  </button>
                )}

              </div>


              {/* Search Box */}
              <div
                className="
                  group relative flex items-center
                  overflow-hidden rounded-2xl
                  border border-slate-200
                  bg-white
                  shadow-sm
                  transition-all duration-300

                  focus-within:border-red-400
                  focus-within:shadow-lg
                  focus-within:shadow-red-100

                  hover:border-slate-300

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:focus-within:border-red-500
                  dark:focus-within:shadow-red-950
                "
              >

                {/* Search Icon */}
                <div className="pointer-events-none absolute left-5 flex items-center">

                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="
                      text-slate-400
                      transition-colors duration-300
                      group-focus-within:text-red-500
                    "
                  />

                </div>


                {/* Input */}
                <input
                  type="text"
                  value={searchType}
                  onChange={(e) => setSearchType(e.target.value)}
                  placeholder="Search type..."
                  className="
                    h-14 w-full
                    bg-transparent
                    pl-13 pr-14
                    text-sm font-medium
                    text-slate-800
                    placeholder:text-slate-400
                    outline-none

                    dark:text-white
                    dark:placeholder:text-slate-500
                  "
                />


                {/* Clear Icon */}
                {searchType && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="
                      absolute right-4
                      flex h-8 w-8
                      items-center justify-center
                      rounded-full
                      bg-slate-100
                      text-slate-400
                      transition-all duration-200
                      hover:bg-red-100
                      hover:text-red-600

                      dark:bg-slate-800
                      dark:text-slate-400
                      dark:hover:bg-red-950
                      dark:hover:text-red-400
                    "
                  >

                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-sm"
                    />

                  </button>
                )}

              </div>


              {/* Search Hint */}
              <p className="mt-2 px-1 text-xs text-slate-400">
                Try searching by type, such as Fire or Water.
              </p>

            </div>

          </div>


          {/* ================= TYPE CARDS ================= */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredTypes.map((type) => (

              <div
                key={type.name}
                className={`
                  rounded-2xl
                  border border-transparent
                  p-6
                  shadow-sm
                  transition duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${type.color}
                `}
              >

                {/* Icon */}
                <div
                  className={`
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    text-2xl
                    ${type.iconBg}
                  `}
                >
                  {type.icon}
                </div>


                {/* Type Name */}
                <h3 className="mt-5 text-xl font-black">
                  {type.name}
                </h3>


                {/* Description */}
                <p className="mt-2 text-sm leading-6 opacity-75">
                  {type.description}
                </p>

              </div>

            ))}

          </div>


          {/* ================= NO RESULTS ================= */}
          {filteredTypes.length === 0 && (

            <div className="py-20 text-center">

              <div className="text-5xl">
                🔍
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                No type found
              </h3>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try searching for another Pokémon type.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ================= INFO SECTION ================= */}
      <section className="border-t border-gray-200 bg-white px-6 py-14 dark:border-gray-800 dark:bg-gray-900">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl bg-gray-50 p-8 dark:bg-gray-950 sm:p-10">

            <div className="grid gap-8 md:grid-cols-3">

              {/* Battle Strength */}
              <div>

                <p className="text-3xl">
                  ⚔️
                </p>

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  Battle Strength
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Pokémon types determine how effective moves are during
                  battles.
                </p>

              </div>


              {/* Type Advantages */}
              <div>

                <p className="text-3xl">
                  🛡️
                </p>

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  Type Advantages
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Different types have strengths and weaknesses against
                  other types.
                </p>

              </div>


              {/* Build Team */}
              <div>

                <p className="text-3xl">
                  🎯
                </p>

                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                  Build Your Team
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Understanding types can help you build a balanced Pokémon
                  team.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};