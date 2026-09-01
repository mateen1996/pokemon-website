import { Footer } from "../components/Footer";
import { NabarHeader } from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBell,
  faClock,
  faStar,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export const Type = () =>
{
    return (
        <>
        {/* ================= COMING SOON ================= */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 px-4 py-16">

        {/* Background Effects */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-yellow-300/30 blur-3xl"></div>

        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-600/30 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"></div>

        <div className="absolute left-10 top-20 text-yellow-200/60">
          <FontAwesomeIcon icon={faStar} className="animate-pulse text-2xl" />
        </div>

        <div className="absolute right-16 top-32 text-white/60">
          <FontAwesomeIcon icon={faBolt} className="text-3xl" />
        </div>

        <div className="absolute bottom-20 left-20 text-white/50">
          <FontAwesomeIcon icon={faStar} className="animate-pulse text-xl" />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">

          {/* Rocket Icon */}
          <div className="mx-auto mb-7 flex h-20 w-20 rotate-[-8deg] items-center justify-center rounded-2xl bg-white shadow-2xl transition-transform duration-500 hover:rotate-0">
            <FontAwesomeIcon
              icon={faRocket}
              className="text-3xl text-red-600"
            />
          </div>

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-300"></span>

            Something exciting is coming
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Coming
            <span className="block text-yellow-300">
              Soon
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            We're working on something exciting for the Pokémon
            world. This page is currently under development and
            will be available soon.
          </p>

          {/* Progress */}
          <div className="mx-auto mt-8 max-w-md">

            <div className="mb-2 flex items-center justify-between text-xs font-bold">
              <span className="text-white/80">
                Development Progress
              </span>

              <span className="text-yellow-200">
                75%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/20 shadow-inner">
              <div className="h-full w-[75%] rounded-full bg-yellow-300 shadow-lg"></div>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 font-bold text-red-600 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-slate-900"
            >
              <FontAwesomeIcon icon={faClock} />
              Stay Tuned
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <FontAwesomeIcon icon={faBell} />
              Notify Me
            </button>

          </div>

          {/* Bottom Message */}
          <p className="mt-8 text-sm font-medium text-white/70">
            Get ready for something awesome! ⚡
          </p>

        </div>
      </section>
        </>
    )
}