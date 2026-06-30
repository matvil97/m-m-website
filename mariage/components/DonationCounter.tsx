export default function DonationCounter() {
  const collected = 0;
  const goal = 5000;
  const percent = Math.min(Math.round((collected / goal) * 100), 100);

  return (
    <section className="bg-[#F0E4D0] px-6 py-28 md:px-20">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-[#6B2737]">
            Cagnotte
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-none tracking-[-0.04em] md:text-7xl">
            Un premier voyage à écrire ensemble.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#6f5b50]">
            Pour celles et ceux qui souhaitent participer, cette cagnotte nous
            accompagnera dans notre premier grand souvenir de jeunes mariés.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-[0_30px_80px_rgba(74,16,32,0.10)] md:p-10">
          <div className="flex items-end justify-between">
            <p className="font-serif text-5xl font-light">{collected} €</p>
            <p className="text-sm text-[#7b6254]">sur {goal} €</p>
          </div>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#D9C4A8]">
            <div
              className="h-full rounded-full bg-[#6B2737] transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p className="mt-5 text-sm text-[#7b6254]">
            {percent}% de notre objectif atteint
          </p>

          <button className="mt-8 w-full rounded-full bg-[#6B2737] px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#4A1020]">
            Participer à la cagnotte
          </button>
        </div>
      </div>
    </section>
  );
}
