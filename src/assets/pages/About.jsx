import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-orange-500 px-6 py-20 text-white">

        {/* Background Decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10"></div>

        <div className="relative mx-auto max-w-6xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-100">
            Welcome to PokeDex
          </p>

          <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">
            Explore the World of Pokémon
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-red-50 sm:text-lg">
            Discover Pokémon, explore their abilities, learn about their
            types and stats, and dive deeper into the world of Pokémon.
          </p>

        </div>
      </section>


      {/* ================= ABOUT PROJECT ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">

          {/* Left */}
          <div>

            <span className="text-sm font-bold uppercase tracking-wider text-red-500">
              About The Project
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white sm:text-4xl">
              A Simple Way to Explore Pokémon
            </h2>

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-400">
              PokeDex is a modern Pokémon explorer built to provide a simple
              and enjoyable way to browse Pokémon information. The application
              fetches real-time data from PokéAPI and presents it through a
              clean and responsive interface.
            </p>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              From Pokémon types and abilities to base statistics, generations
              and descriptions, everything is presented in an easy-to-explore
              format.
            </p>

            <NavLink
              to="/pokemon"
              className="mt-7 inline-flex rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
            >
              Explore Pokémon →
            </NavLink>

          </div>


          {/* Right */}
          <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-gray-900">

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-red-50 p-6 dark:bg-red-950/40">
                <p className="text-3xl font-black text-red-500">
                  1000+
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Pokémon available
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-6 dark:bg-blue-950/40">
                <p className="text-3xl font-black text-blue-500">
                  18
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Pokémon types
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 dark:bg-green-950/40">
                <p className="text-3xl font-black text-green-500">
                  API
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Powered by PokéAPI
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-6 dark:bg-purple-950/40">
                <p className="text-3xl font-black text-purple-500">
                  100%
                </p>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Responsive UI
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="bg-white px-6 py-16 dark:bg-gray-900">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-red-500">
              Features
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">
              What You Can Do
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
              Explore useful Pokémon information through a simple and
              responsive interface.
            </p>

          </div>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-2xl dark:bg-red-950">
                🔎
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Search Pokémon
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Quickly find Pokémon and explore their information.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-950">
                📊
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Explore Stats
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                View HP, attack, defense and speed statistics.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl dark:bg-green-950">
                ⚡
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Abilities & Types
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Discover Pokémon abilities and elemental types.
              </p>

            </div>


            {/* Feature 4 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl dark:bg-purple-950">
                🧬
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Pokémon Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                View detailed information including category and generation.
              </p>

            </div>


            {/* Feature 5 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl dark:bg-yellow-950">
                📱
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Responsive Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Enjoy the application across desktop, tablet and mobile.
              </p>

            </div>


            {/* Feature 6 */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl dark:bg-orange-950">
                🌙
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900 dark:text-white">
                Dark Mode
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Switch between light and dark themes for a better experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TECHNOLOGY ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-red-500">
              Technology
            </span>

            <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">
              Built With Modern Technologies
            </h2>

          </div>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              "React.js",
              "JavaScript",
              "Vite",
              "Tailwind CSS",
              "React Router",
              "Fetch API",
              "PokéAPI",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-900 px-6 py-16 text-white">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-red-400">
              How It Works
            </span>

            <h2 className="mt-3 text-3xl font-black">
              From API to Pokémon Card
            </h2>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-xl font-black">
                1
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Fetch Data
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Pokémon information is fetched from PokéAPI using the Fetch API.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-xl font-black">
                2
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Process Data
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                React processes the API response and displays the required
                information dynamically.
              </p>

            </div>


            <div className="text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-xl font-black">
                3
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Explore
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Users can browse Pokémon and open detailed pages to explore
                their information.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= DEVELOPER ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 text-center shadow-lg dark:bg-gray-900 sm:p-12">

          <span className="text-sm font-bold uppercase tracking-wider text-red-500">
            Developer
          </span>

          <h2 className="mt-3 text-3xl font-black text-gray-900 dark:text-white">
            Built by Matin Shaikh
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
            This project was created as a frontend development project to
            practice React, API integration, routing, responsive design and
            modern UI development.
          </p>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 p-10 text-center text-white sm:p-14">

          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to Explore Pokémon?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-red-50">
            Start exploring Pokémon and discover their stats, abilities,
            types and more.
          </p>

          <NavLink
            to="/pokemon"
            className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 font-bold text-red-600 transition hover:bg-red-50"
          >
            Explore Pokémon →
          </NavLink>

        </div>

      </section>

    </div>
  );
};

