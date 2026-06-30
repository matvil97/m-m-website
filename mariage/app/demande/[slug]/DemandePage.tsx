"use client";

import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeddingMember, getRoleLabel, getFromLabel } from "@/lib/weddingParty";

interface Props {
  member: WeddingMember;
}

export default function DemandePage({ member }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [sending, setSending] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAccept = useCallback(async () => {
    setSending(true);
    try {
      await fetch("/api/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: member.name,
          role: member.role,
          de: member.from,
          slug: member.slug,
          date: new Date().toLocaleString("fr-FR"),
        }),
      });
    } catch {
      // non bloquant — l'écran de célébration s'affiche quoi qu'il arrive
    }
    setSending(false);
    setAccepted(true);
  }, [member]);

  const escapingNo = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const maxX = rect.width * 0.35;
    const maxY = rect.height * 0.25;
    setNoPos({
      x: (Math.random() - 0.5) * 2 * maxX,
      y: (Math.random() - 0.5) * 2 * maxY,
    });
  }, []);

  const roleLabel = getRoleLabel(member.role, member.from);
  const fromLabel = getFromLabel(member.from);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#FAF7F2] px-6 py-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#6B2737]/5" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#D9C4A8]/40" />
        <div className="absolute left-1/2 top-8 -translate-x-1/2 font-signature text-[18rem] font-light leading-none text-[#6B2737]/5 select-none">
          &
        </div>
      </div>

      <AnimatePresence mode="wait">
        {accepted ? (
          <motion.div
            key="accepted"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#6B2737] text-4xl text-white shadow-[0_20px_60px_rgba(107,39,55,0.4)]"
            >
              ♥
            </motion.div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#6B2737]">
              Merci, {member.name}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              Oui ! C'est officiel.
            </h1>
            <p className="mt-6 max-w-sm text-base leading-8 text-[#6f5b50]">
              {fromLabel} est tellement heureux·se que tu sois {roleLabel} pour
              le plus beau jour de notre vie.
            </p>
            <p className="mt-6 font-signature text-5xl text-[#6B2737] md:text-6xl">
              Matthieu & Melly
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Ring icon */}
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D9C4A8] bg-white text-3xl shadow-[0_8px_40px_rgba(107,39,55,0.12)]">
              💍
            </div>

            <p className="text-xs uppercase tracking-[0.45em] text-[#6B2737]">
              Demande officielle · {fromLabel}
            </p>

            <h1 className="mt-5 font-serif text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
              {member.name},
            </h1>
            <p className="mt-3 font-serif text-2xl font-light leading-snug text-[#4A1020] md:text-4xl">
              veux-tu me faire l'honneur
              <br />
              d'être{" "}
              <span className="italic text-[#6B2737]">{roleLabel}</span> ?
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#7b6254]">
              {fromLabel} te réserve une place toute spéciale à ses côtés pour
              le plus beau jour de notre vie.
            </p>

            {/* Buttons */}
            <div className="relative mt-12 flex items-center gap-6">
              {/* OUI */}
              <motion.button
                onClick={handleAccept}
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#6B2737] px-10 py-4 text-sm uppercase tracking-[0.3em] text-white shadow-[0_8px_30px_rgba(107,39,55,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(107,39,55,0.5)] disabled:opacity-70"
              >
                {sending ? "..." : "Oui, avec joie !"}
              </motion.button>

              {/* NON — s'échappe */}
              <motion.button
                onMouseEnter={escapingNo}
                onTouchStart={escapingNo}
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full border border-[#D9C4A8] bg-white px-8 py-4 text-sm uppercase tracking-[0.3em] text-[#9b7b84] shadow-sm cursor-pointer select-none"
                style={{ touchAction: "none" }}
              >
                Non...
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating petals / confetti when accepted */}
      <AnimatePresence>
        {accepted &&
          Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 0,
              }}
              animate={{
                opacity: [1, 1, 0],
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                scale: [0, 1.2, 0.8],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.4 + Math.random() * 0.6,
                delay: i * 0.06,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 text-xl"
            >
              {["♥", "✦", "·", "♥", "✦"][i % 5]}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
