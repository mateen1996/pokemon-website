import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // ================= CHECK SCROLL POSITION =================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ================= SCROLL TO TOP =================
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Button hide rahega jab top par ho
  if (!showButton) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className=" cursor-pointer
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full
        bg-red-600
        text-white

        shadow-lg
        shadow-red-600/30

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-red-700
        hover:shadow-xl

        active:scale-90

        sm:bottom-8
        sm:right-8
      "
    >
      <FontAwesomeIcon
        icon={faArrowUp}
        className="text-lg"
      />
    </button>
  );
};