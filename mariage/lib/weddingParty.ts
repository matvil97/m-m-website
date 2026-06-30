export type WeddingRole = "cavalier" | "demoiselle" | "temoin";
export type WeddingCouple = "matthieu" | "melly";

export interface WeddingMember {
  slug: string;
  name: string;
  role: WeddingRole;
  from: WeddingCouple;
}

export const weddingParty: WeddingMember[] = [
  // Cavaliers d'honneur — Matthieu
  { slug: "matteo-d",    name: "Matteo",    role: "cavalier",   from: "matthieu" },
  { slug: "lilian",      name: "Lilian",    role: "cavalier",   from: "matthieu" },
  { slug: "anthony",     name: "Anthony",   role: "cavalier",   from: "matthieu" },
  { slug: "kevin",       name: "Kevin",     role: "cavalier",   from: "matthieu" },
  { slug: "samatar",     name: "Samatar",   role: "cavalier",   from: "matthieu" },
  { slug: "adriel",      name: "Adriel",    role: "cavalier",   from: "matthieu" },
  { slug: "yanis",       name: "Yanis",     role: "cavalier",   from: "matthieu" },
  { slug: "alexis-p",    name: "Alexis",    role: "cavalier",   from: "matthieu" },
  { slug: "wylhem",      name: "Wylhem",    role: "cavalier",   from: "matthieu" },
  { slug: "mathias",     name: "Mathias",   role: "cavalier",   from: "matthieu" },
  { slug: "jonathan",    name: "Jonathan",  role: "cavalier",   from: "matthieu" },
  { slug: "christian",   name: "Christian", role: "cavalier",   from: "matthieu" },
  { slug: "georghand",   name: "Georghand", role: "cavalier",   from: "matthieu" },

  // Demoiselles d'honneur — Melly
  { slug: "noemie",      name: "Noémie",    role: "demoiselle", from: "melly" },
  { slug: "heliane",     name: "Héliane",   role: "demoiselle", from: "melly" },
  { slug: "glory",       name: "Glory",     role: "demoiselle", from: "melly" },
  { slug: "anouck",      name: "Anouck",    role: "demoiselle", from: "melly" },
  { slug: "melyna",      name: "Melyna",    role: "demoiselle", from: "melly" },
  { slug: "lola",        name: "Lola",      role: "demoiselle", from: "melly" },
  { slug: "erica",       name: "Érica",     role: "demoiselle", from: "melly" },
  { slug: "priscille",   name: "Priscille", role: "demoiselle", from: "melly" },
  { slug: "sephora",     name: "Sephora",   role: "demoiselle", from: "melly" },
  { slug: "kisma",       name: "Kisma",     role: "demoiselle", from: "melly" },
  { slug: "venuciel",    name: "Venuciel",  role: "demoiselle", from: "melly" },
  { slug: "alyssa",      name: "Alyssa",    role: "demoiselle", from: "melly" },
  { slug: "jade",        name: "Jade",      role: "demoiselle", from: "melly" },

  // Témoins — Matthieu
  { slug: "marie-temoin",   name: "Marie",    role: "temoin", from: "matthieu" },
  { slug: "anthony-temoin", name: "Anthony",  role: "temoin", from: "matthieu" },

  // Témoins — Melly
  { slug: "valerie-temoin", name: "Valérie",  role: "temoin", from: "melly" },
  { slug: "levi-temoin",    name: "Lévi",     role: "temoin", from: "melly" },
];

export function getMemberBySlug(slug: string): WeddingMember | undefined {
  return weddingParty.find((m) => m.slug === slug);
}

export function getRoleLabel(role: WeddingRole, from: WeddingCouple): string {
  if (role === "cavalier")   return "mon cavalier d'honneur";
  if (role === "demoiselle") return "ma demoiselle d'honneur";
  return from === "matthieu" ? "mon témoin" : "ma témoin";
}

export function getFromLabel(from: WeddingCouple): string {
  return from === "matthieu" ? "Matthieu" : "Melly";
}
