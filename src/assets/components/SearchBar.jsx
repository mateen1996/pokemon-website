import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const SearchPokemon = ({ search, setSearch }) => {
    // clear search 
  const handleClear = () => {
    setSearch("");
  };

  return (
    <div className="w-full px-4">
      <div className="mx-auto max-w-2xl">
        
        {/* Search Label */}
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-bold text-slate-700">
            Search Pokémon
          </label>

          {search && (
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokémon by name..."
            className="
              h-14 w-full
              bg-transparent
              pl-13 pr-14
              text-sm font-medium
              text-slate-800
              placeholder:text-slate-400
              outline-none
            "
          />

          {/* Clear Icon */}
          {search && (
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
          Try searching by Pokémon name, such as Pikachu or Charizard.
        </p>
      </div>
    </div>
  );
};