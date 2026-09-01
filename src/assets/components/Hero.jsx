import { useNavigate } from "react-router-dom"; 
export const HeroBanner = () => {
    const navigate = useNavigate();
    const handleRedirectPokemon =()=>
    {
       navigate("/pokemon");
    }
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-400"
      >
        {/* Background circles */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-yellow-300/10"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">

          {/* ================= HERO CONTENT ================= */}
          <div className="text-white">

            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              <i className="fa-solid fa-bolt text-yellow-300"></i>
              Gotta Catch 'Em All!
            </span>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Explore the
              <span className="block text-yellow-300">
                Pokémon World
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-red-50 sm:text-lg">
              Discover Pokémon, learn about their abilities, types and
              statistics. Search your favorite Pokémon and start your journey.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#pokemon"
                className="rounded-xl bg-white px-6 py-3 font-bold text-red-600 shadow-xl transition hover:-translate-y-1 hover:bg-yellow-300 hover:text-slate-900"
              onClick={handleRedirectPokemon}>
                Explore Pokémon
              </a>

              <button
                type="button"
                className="cursor-pointer rounded-xl border border-white/40 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <i className="fa-solid fa-shuffle mr-2"></i>
                Random Pokémon
              </button>

            </div>
          </div>

          {/* ================= HERO POKEMON IMAGE ================= */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-yellow-300/40 blur-3xl"></div>

              {/* Circle */}
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm sm:h-96 sm:w-96">

                {/* Yellow Circle */}
                <div className="flex h-60 w-60 items-center justify-center rounded-full bg-yellow-300 shadow-2xl sm:h-80 sm:w-80">

                  {/* Pokémon Image */}
                  <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                    alt="Pikachu"
                    className="h-56 w-56 object-contain drop-shadow-2xl transition duration-500 hover:scale-110 sm:h-72 sm:w-72"
                  />

                </div>
              </div>

              {/* ================= FLOATING BADGES ================= */}

              {/* Top Badge */}
              <div className="absolute -left-4 top-10 rounded-xl bg-white px-4 py-3 shadow-xl">
                <p className="text-xs font-medium text-slate-500">
                  Discover
                </p>

                <p className="font-bold text-slate-900">
                  1000+ Pokémon
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="absolute -bottom-3 right-0 rounded-xl bg-slate-900 px-4 py-3 text-white shadow-xl">
                <p className="text-xs text-slate-400">
                  Your journey
                </p>

                <p className="font-bold text-yellow-300">
                  Starts Here!
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};