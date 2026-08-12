"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { heroData } from "@/data/packs";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function Hero({ autoPlay = true, interval = 6000 }) {
  const [[index, direction], setSlide] = useState([0, 0]);

  const goTo = useCallback((newIndex, dir) => {
    setSlide([(newIndex + heroData.length) % heroData.length, dir]);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, next]);

  const data = heroData[index];

  return (
    <section className="bg-[#F7F3EC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left relative min-h-[220px] md:min-h-[260px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={data.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="inline-block text-xs font-medium tracking-wide uppercase text-[#3E7C7C] bg-[#3E7C7C]/10 px-3 py-1 rounded-full mb-4">
                Now booking {data.id}
              </span>

              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0B2E33] leading-tight"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {data.title1}
                <br />
                {data.title2}
              </h1>

              <p className="mt-4 md:mt-5 text-sm sm:text-base leading-relaxed text-[#1B1B1B]/80 max-w-md mx-auto md:mx-0">
                {data.desc}
              </p>

              <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <button className="bg-[#F97316] text-[#4A1B0C] font-medium px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:brightness-95 transition">
                  Book your {data.id}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots — outside AnimatePresence so they don't re-animate */}
          <div className="mt-8 flex justify-center md:justify-start gap-2">
            {heroData.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to ${item.id}`}
                className={`h-2 rounded-full transition-all ${i === index
                    ? "w-6 bg-[#F97316]"
                    : "w-2 bg-[#0B2E33]/20 hover:bg-[#0B2E33]/40"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 w-full relative">
          <div className="aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8CBB8] relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={data.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -5000) next();
                  else if (swipe > 5000) prev();
                }}
                className="absolute inset-0"
              >
                <Image
                  src={data.image}
                  alt={data.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next controls */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#F7F3EC]/90 hover:bg-[#F7F3EC] text-[#0B2E33] rounded-full w-9 h-9 flex items-center justify-center shadow transition z-10"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#F7F3EC]/90 hover:bg-[#F7F3EC] text-[#0B2E33] rounded-full w-9 h-9 flex items-center justify-center shadow transition z-10"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}