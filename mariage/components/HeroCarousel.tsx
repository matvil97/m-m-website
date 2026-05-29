"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=90",
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#16110f]">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-in-out ${
            active === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:px-20 md:pb-24">
        <div className="max-w-2xl text-white">
          <p className="text-xs uppercase tracking-[0.45em] text-white/60">
            Notre histoire
          </p>

          <h1 className="mt-5 font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Une histoire qui devient promesse.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/75 md:text-lg">
            Nous avons grandi dans cet amour, jour après jour. Aujourd’hui,
            nous voulons le célébrer avec ceux qui comptent le plus.
          </p>

          <p className="mt-8 font-signature text-6xl leading-none text-white md:text-8xl">
            Avec amour
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              active === index ? "w-10 bg-white" : "w-3 bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}