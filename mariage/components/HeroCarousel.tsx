"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=2200&q=90",
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
    <section className="relative h-screen overflow-hidden bg-[#4A1020]">
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

      <div className="absolute inset-0 bg-gradient-to-r from-[#4A1020]/80 via-[#4A1020]/30 to-[#4A1020]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4A1020]/70 via-transparent to-[#4A1020]/20" />

      <div className="relative z-10 flex h-full items-end px-6 pb-20 md:px-20 md:pb-24">
        <div className="max-w-2xl text-white">
          <p className="text-xs uppercase tracking-[0.45em] text-[#D9C4A8]">
            Notre histoire
          </p>

          <h1 className="mt-5 font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Une histoire qui devient promesse.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-white/75 md:text-lg">
            Nous avons grandi dans cet amour, jour après jour. Aujourd'hui,
            nous voulons le célébrer avec ceux qui comptent le plus.
          </p>

          <p className="mt-8 font-signature text-6xl leading-none text-[#D9C4A8] md:text-8xl">
            Matthieu & Melly
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-[3px] rounded-full transition-all duration-500 ${
              active === index ? "w-10 bg-[#D9C4A8]" : "w-3 bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
