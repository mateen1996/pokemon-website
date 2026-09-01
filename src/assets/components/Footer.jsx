import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGithub,
faInstagram,
faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    const latestYear = new Date();
    const newYear = latestYear.getFullYear();
    const developerName = "Matin Shaikh"
return ( 
<footer className="bg-slate-950 px-4 py-10 text-white"> <div className="mx-auto max-w-7xl">

    {/* ================= FOOTER CONTENT ================= */}
    <div className="grid gap-10 md:grid-cols-3">

      {/* ================= LOGO / DESCRIPTION ================= */}
      <div>
        <NavLink
          to="/"
          className="inline-block text-2xl font-black"
        >
          Poke<span className="text-red-500">Dex</span>
        </NavLink>

        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
          Explore Pokémon, discover their abilities, learn about
          their types and build your ultimate Pokémon collection.
        </p>
      </div>

      {/* ================= QUICK LINKS ================= */}
      <div>
        <h3 className="text-lg font-bold text-white">
          Quick Links
        </h3>

        <div className="mt-4 flex flex-col gap-3 text-sm">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500"
                : "text-slate-400 transition duration-300 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/pokemon"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500"
                : "text-slate-400 transition duration-300 hover:text-white"
            }
          >
            Pokémon
          </NavLink>

          <NavLink
            to="/type"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500"
                : "text-slate-400 transition duration-300 hover:text-white"
            }
          >
            Types
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-red-500"
                : "text-slate-400 transition duration-300 hover:text-white"
            }
          >
            About
          </NavLink>

        </div>
      </div>

      {/* ================= SOCIAL LINKS ================= */}
      <div>
        <h3 className="text-lg font-bold text-white">
          Follow Us
        </h3>

        <div className="mt-4 flex gap-3">

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-lg"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-lg"
            />
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-lg"
            />
          </a>

        </div>
      </div>

    </div>

    {/* ================= COPYRIGHT ================= */}
    <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © <span className="mr-2">{newYear}</span> PokeDex. Built with React & Tailwind CSS By <span className="">{developerName}</span>.
    </div>

  </div>
</footer>
);
};
