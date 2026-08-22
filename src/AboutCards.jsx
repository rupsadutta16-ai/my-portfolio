import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const desktopCards = [
  {
    id: 0,
    text: "Full-Stack Applications",
    x: 45,
    y: 165,
    rotate: -8,
  },
  {
    id: 1,
    text: "REST APIs & Backend Systems",
    x: 340,
    y: 55,
    rotate: 6,
  },
  {
    id: 2,
    text: "Interactive Web Interfaces",
    x: 650,
    y: 120,
    rotate: -5,
  },
  {
    id: 3,
    text: "UI/UX & Intuitive Design",
    x: 20,
    y: 95,
    rotate: 7,
  },
  {
    id: 4,
    text: "Authentication & Data-Driven Apps",
    x: 400,
    y: 280,
    rotate: -7,
  },
  {
    id: 5,
    text: "Responsive Web Experiences",
    x: 650,
    y: 190,
    rotate: 8,
  },
  {
    id: 6,
    text: "Hackathon Projects",
    x: 80,
    y: 320,
    rotate: -5,
  },
  {
    id: 7,
    text: "Exploring New Technologies",
    x: 520,
    y: 300,
    rotate: 6,
  },
];

const mobileCards = [
  {
    id: 0,
    text: "Full-Stack Applications",
    x: 15,
    y: 110,
    rotate: -8,
  },
  {
    id: 1,
    text: "REST APIs & Backend Systems",
    x: 150,
    y: 40,
    rotate: 6,
  },
  {
    id: 2,
    text: "Interactive Web Interfaces",
    x: 165,
    y: 145,
    rotate: -5,
  },
  {
    id: 3,
    text: "UI/UX & Intuitive Design",
    x: 5,
    y: 200,
    rotate: 7,
  },
  {
    id: 4,
    text: "Authentication & Data-Driven Apps",
    x: 145,
    y: 260,
    rotate: -7,
  },
  {
    id: 5,
    text: "Responsive Web Experiences",
    x: 160,
    y: 330,
    rotate: 8,
  },
  {
    id: 6,
    text: "Hackathon Projects",
    x: 15,
    y: 320,
    rotate: -5,
  },
  {
    id: 7,
    text: "Exploring New Technologies",
    x: 80,
    y: 380,
    rotate: 6,
  },
];

const randomizeCards = (cardSet, isMobile) =>
  cardSet.map((card) => ({
    ...card,
    x: isMobile
      ? Math.floor(Math.random() * 120) + 30
      : Math.floor(Math.random() * 230)+ 40,
    y: isMobile
      ? Math.floor(Math.random() * 300) + 20
      : Math.floor(Math.random() * 320) + 30,
    rotate: Math.floor(Math.random() * 17) - 8,
  }));

const AboutCards = () => {
  const reduceMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.innerWidth < 768
      : false
  );

  const [cards, setCards] = useState(() =>
    randomizeCards(isMobile ? mobileCards : desktopCards, isMobile)
  );

  // Detect mobile / desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reset positions when switching between mobile and desktop
  useEffect(() => {
    setCards(
      randomizeCards(isMobile ? mobileCards : desktopCards, isMobile)
    );
  }, [isMobile]);

  const shuffleCards = () => {
    setCards((currentCards) => randomizeCards(currentCards, isMobile));
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* Cards */}
      <div className="relative w-full h-[460px] overflow-hidden">

        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="
              absolute
              left-0
              top-0

              w-[140px]
              sm:w-[160px]
              md:w-[175px]

              min-h-[60px]
              sm:min-h-[65px]
              md:min-h-[70px]

              px-3
              sm:px-4

              py-2
              sm:py-3

              flex items-center

              rounded-xl
              border border-mycyan/40
              bg-bgdark/30
              backdrop-blur-md
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]

              cursor-default
            "
            animate={{
              x: card.x,
              y: card.y,
              rotate: card.rotate,
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: card.y - 18,
                    rotate: 0,
                    scale: 1.03,
                    zIndex: 50,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <span className="text-myyellow text-lg mr-2 shrink-0">
              ◆
            </span>

            <span className="text-xs leading-snug text-txt">
              {card.text}
            </span>
          </motion.div>
        ))}

      </div>

      {/* Shuffle Button */}
      <motion.button
        type="button"
        onClick={shuffleCards}
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.05,
              }
        }
        whileTap={
          reduceMotion
            ? undefined
            : {
                scale: 0.95,
              }
        }
        className="
          mt-2
          px-5 py-2
          rounded-full
          border border-mycyan/50
          text-mycyan
          text-sm
          tracking-wide
          transition-colors
          hover:bg-mycyan/10
          hover:border-mycyan
        "
      >
        Shuffle ✦
      </motion.button>
    </div>
  );
};

export default AboutCards;