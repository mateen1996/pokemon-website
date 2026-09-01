
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon, setPokemon }) => {
  // ==============================
  // Required Stats
  // ==============================
  const selectedStats = pokemon.stats?.filter((stat) =>
    ["hp", "attack", "speed"].includes(stat.stat.name)
  );
  const navigate = useNavigate();
  const handleDetails = ()=>
  {
    navigate(`/pokdetails/${pokemon.id}`);
  }

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl">

      {/* ================= CARD IMAGE ================= */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">

        {/* Pokemon ID */}
        <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-slate-500 shadow-sm backdrop-blur">
          #{String(pokemon.id).padStart(3, "0")}
        </span>

        {/* Favorite Button */}
        <button
          type="button"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm transition-all duration-300 hover:bg-red-50 hover:text-red-500"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>

        {/* Pokemon Image */}
        <img
          src={
            pokemon.sprites?.other?.dream_world?.front_default ||
            pokemon.sprites?.other?.["official-artwork"]?.front_default ||
            pokemon.sprites?.front_default
          }
          alt={pokemon.name}
          className="h-52 w-52 object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* ================= CARD CONTENT ================= */}
      <div className="p-5">

        {/* Name + Rating */}
        <div className="flex items-center justify-between gap-3">

          <h2 className="text-2xl font-black capitalize text-slate-900">
            {pokemon.name}
          </h2>

          <div className="flex shrink-0 items-center gap-1 text-yellow-500">
            <FontAwesomeIcon icon={faStar} />

            <span className="text-sm font-bold text-slate-700">
              {pokemon.base_experience ?? "N/A"}
            </span>
          </div>

        </div>

        {/* ================= TYPE BADGES ================= */}
        <div className="mt-3 flex flex-wrap gap-2">

          {pokemon.types?.map((typeItem) => (
            <span
              key={typeItem.slot}
              className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold capitalize text-red-700"
            >
              {typeItem.type.name}
            </span>
          ))}

        </div>

        {/* ================= ABILITIES ================= */}
        <div className="mt-4">

          <p className="mb-2 text-sm font-semibold text-slate-600">
            Abilities
          </p>

          <div className="flex flex-wrap gap-2">

            {pokemon.abilities?.map((abilityItem) => (
              <span
                key={abilityItem.ability.name}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-600"
              >
                {abilityItem.ability.name.replace("-", " ")}
              </span>
            ))}

          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="mt-5 space-y-4">

          {selectedStats?.map((statItem) => {

            const statName = statItem.stat.name;
            const statValue = statItem.base_stat;

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

        {/* ================= VIEW DETAILS BUTTON ================= */}
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-600"
        onClick={handleDetails}>
          View Details

          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </div>
  );
};

