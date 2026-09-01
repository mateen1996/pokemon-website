import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export const NabarHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `font-semibold transition ${
      isActive ? "text-red-600" : "text-slate-600 hover:text-red-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= TOP NAVBAR ================= */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 shadow-lg">
              <div className="h-5 w-5 rounded-full border-4 border-white bg-slate-100"></div>
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Poke<span className="text-red-600">Dex</span>
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Explore the Pokémon World
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/pokemon" className={navLinkClass}>
              Pokémon
            </NavLink>

            <NavLink to="/type" className={navLinkClass}>
              Types
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-red-500 hover:text-red-600 md:hidden"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              className="text-xl"
            />
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMenuOpen && (
          <nav className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/pokemon"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                  }`
                }
              >
                Pokémon
              </NavLink>

              <NavLink
                to="/type"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                  }`
                }
              >
                Types
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold transition ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-slate-600 hover:bg-red-50 hover:text-red-600"
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
