export default function InviteSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] px-6 py-28 md:px-20">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-[#6B2737]">
            Notre mariage
          </p>

          <h2 className="mt-5 font-serif text-5xl font-light leading-none tracking-[-0.04em] md:text-7xl">
            Save the date
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-[#6f5b50]">
            Nous serions profondément heureux de vous avoir à nos côtés pour
            célébrer cette journée unique.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#D9C4A8] bg-white p-8 shadow-[0_30px_80px_rgba(74,16,32,0.10)] md:p-12">
          <div className="flex items-center justify-between gap-8">
            <p className="font-serif text-4xl font-light">Matthieu</p>
            <span className="font-signature text-6xl text-[#6B2737]">&</span>
            <p className="font-serif text-4xl font-light">Melly</p>
          </div>

          <div className="my-10 h-px bg-[#D9C4A8]" />

          <div className="grid gap-8 text-left md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#6B2737]">
                Date
              </p>
              <p className="mt-3 text-lg">À définir</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#6B2737]">
                Lieu
              </p>
              <p className="mt-3 text-lg">Beaujolais, France</p>
            </div>
          </div>

          <button className="mt-10 w-full rounded-full bg-[#6B2737] px-8 py-4 text-xs uppercase tracking-[0.35em] text-white transition hover:bg-[#4A1020]">
            Confirmer ma présence
          </button>
        </div>
      </div>
    </section>
  );
}
