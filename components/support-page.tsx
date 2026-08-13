import { DonationModal } from "./donation-modal";

export function SupportPage({
  eyebrow,
  title,
  intro,
  items,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <>
      <section className="bg-sage py-20">
        <div className="container max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-3 text-5xl text-forest">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/65">{intro}</p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((x, i) => (
            <div className="card p-6" key={x}>
              <span className="text-sm font-bold text-gold">0{i + 1}</span>
              <h2 className="display mt-4 text-2xl text-forest">{x}</h2>
              <p className="mt-2 text-sm text-black/60">Practical support shaped around dignity, consistency and care.</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[1.5rem] bg-forest p-8 text-center text-white">
          <p className="eyebrow text-gold">Choose your contribution</p>
          <h2 className="display mt-2 text-3xl">Small acts can create steadier days.</h2>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[500, 1000, 2500, 5000].map((x) => (
              <span className="rounded-full border border-white/20 px-4 py-2 font-semibold" key={x}>
                ₹{x.toLocaleString()}
              </span>
            ))}
            <span className="rounded-full border border-white/20 px-4 py-2 font-semibold">Custom amount</span>
          </div>

          <div className="mt-7">
            <DonationModal trigger="Donate now" variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
