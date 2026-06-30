import { weddingParty, getRoleLabel, WeddingCouple } from "@/lib/weddingParty";

function GroupSection({
  title,
  from,
  role,
}: {
  title: string;
  from: WeddingCouple;
  role: "cavalier" | "demoiselle" | "temoin";
}) {
  const members = weddingParty.filter(
    (m) => m.from === from && m.role === role
  );
  return (
    <div>
      <h2 className="mb-4 font-serif text-2xl font-light text-[#6B2737]">{title}</h2>
      <ul className="space-y-2">
        {members.map((m) => (
          <li key={m.slug} className="flex items-center justify-between rounded-xl border border-[#D9C4A8] bg-white px-5 py-3 text-sm">
            <span className="font-medium">{m.name}</span>
            <a
              href={`/demande/${m.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 rounded-full bg-[#6B2737] px-4 py-1.5 text-xs uppercase tracking-wider text-white hover:bg-[#4A1020] transition-colors"
            >
              Copier le lien
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DemandesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-6 py-20 md:px-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.45em] text-[#6B2737]">
          Usage privé
        </p>
        <h1 className="mt-4 font-serif text-5xl font-light leading-none tracking-[-0.04em] md:text-6xl">
          Vos demandes officielles
        </h1>
        <p className="mt-5 text-base leading-7 text-[#6f5b50]">
          Partagez le lien personnalisé à chaque personne. Ils devront choisir
          entre <strong>Oui, avec joie !</strong> et… ils ne pourront pas dire
          Non.
        </p>

        <div className="mt-14 space-y-12">
          <GroupSection title="Cavaliers d'honneur — Matthieu" from="matthieu" role="cavalier" />
          <GroupSection title="Demoiselles d'honneur — Melly" from="melly" role="demoiselle" />
          <GroupSection title="Témoins — Matthieu" from="matthieu" role="temoin" />
          <GroupSection title="Témoins — Melly" from="melly" role="temoin" />
        </div>
      </div>
    </main>
  );
}
