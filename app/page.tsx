import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils } from "lucide-react";
import { DonationModal } from "@/components/donation-modal";
import { impact, programs } from "@/lib/data";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-forest py-20 text-white md:py-28">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image
            fill
            className="object-cover"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae77..."
            alt="Community meal service"
            priority
          />
        </div>

        <div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow text-gold">Serving Bengaluru since 2023</p>
            <h1 className="display mt-5 max-w-3xl text-5xl leading-[1.02] md:text-7xl">
              Good food.
              <br />
              Safe hands.
              <br />
              <i className="text-gold">A better tomorrow.</i>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Sahaara Foundation is a people-first Bengaluru initiative delivering nutritious meals, standing beside
              homeless mothers, and helping government school students stay ready to learn.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <DonationModal trigger="Donate now" variant="light" />
              <Link className="btn btn-light" href="#impact">
                See our impact <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="card p-6 text-ink">
            <p className="eyebrow">Today’s meal tracker</p>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="display text-5xl text-forest">1,284</p>
                <p className="mt-1 text-sm">meals prepared with care today</p>
              </div>
              <Utensils className="text-gold" size={43} />
            </div>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-sage">
              <div className="h-full w-[71%] rounded-full bg-gold" />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="container py-20">
        {/* rest of the page omitted for brevity */}
      </section>
    </>
  );
}
