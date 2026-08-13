import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { DonationModal } from "@/components/donation-modal";
import { programs } from "@/lib/data";

const details: { [key: string]: string[] } = {
  "morning-meals": [
    "Why morning nutrition matters",
    "How ingredients are selected",
    "Food preparation",
    "Hygiene procedures",
    "Portioning",
    "Packing",
    "Labelling",
    "Delivery",
    "Distribution tracking",
  ],
  "midday-meals": [
    "Nutrition-focused meal planning",
    "Ingredient inspection",
    "Cooking",
    "Portion control",
    "Food-grade packaging",
    "Safe transport",
    "Delivery tracking",
  ],
  "evening-meals": [
    "Who receives evening meals",
    "How demand is estimated",
    "Cooking",
    "Packing",
    "Route planning",
    "Delivery",
    "Distribution records",
  ],
};

const steps = ["Ingredients", "Preparation", "Cooking", "Quality check", "Packing", "Dispatch", "Delivery"];

export default async function Program({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((item) => item.slug === slug);
  if (!p) notFound();

  return (
    <>
      <section className="bg-forest py-20 text-white">
        <div className="container max-w-4xl">
          <p className="eyebrow text-gold">Meal program</p>
          <h1 className="display mt-3 text-5xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">{p.description} We build each handover around nourishment, safety and a dependable experience.</p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow">A careful process</p>
            <h2 className="display mt-2 text-4xl text-forest">From thoughtful planning to a warm handover.</h2>
            <div className="mt-8 grid gap-3">
              {details[slug].map((item, i) => (
                <div className="card flex items-center gap-4 p-4" key={item}>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-sage text-sm font-bold text-forest">{i + 1}</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[1.5rem] bg-sage p-7">
            <p className="eyebrow">Our flow</p>
            <div className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <div className="flex items-center gap-3" key={step}>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-xs text-white">{i + 1}</span>
                  <span className="font-medium">{step}</span>
                  {i < steps.length - 1 && <ArrowRight className="ml-auto text-gold" size={17} />}
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-xl bg-forest p-5 text-white">
              <h3 className="display text-2xl">{slug === "evening-meals" ? "Help someone end the day with a warm meal." : "Be part of a reliable meal."}</h3>
              <div className="mt-4">
                <DonationModal trigger="Support this program" variant="light" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
