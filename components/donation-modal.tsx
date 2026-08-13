"use client";
import { useState } from "react";
import { Heart, X, CheckCircle2 } from "lucide-react";

const programs = [
  "General Support",
  "Morning Meals",
  "Midday Meals",
  "Evening Meals",
  "Homeless Mothers",
  "Shelters",
  "Government Schools",
  "Stationery",
  "Uniforms",
];

const amounts = [500, 1000, 2500, 5000];

export function DonationModal({
  trigger = "Donate now",
  variant = "primary",
}: {
  trigger?: string;
  variant?: "primary" | "light" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [done, setDone] = useState(false);
  const btnClass = variant === "light" ? "btn btn-light" : variant === "outline" ? "btn btn-outline" : "btn btn-primary";

  return (
    <>
      <button className={btnClass} onClick={() => setOpen(true)}>
        <Heart size={16} />
        {trigger}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/80 backdrop-blur-sm p-4">
          <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[1.5rem] border border-white/60 bg-cream p-7 text-ink shadow-2xl">
            <button onClick={() => setOpen(false)} className="absolute right-5 top-5 rounded-full bg-white p-2 text-forest shadow-sm transition hover:bg-sage" aria-label="Close donation form">
              <X />
            </button>

            {done ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto mb-4 text-forest" size={54} />
                <h2 className="display text-3xl">Thank you for showing up.</h2>
                <p className="mt-3 text-sm text-black/60">
                  This is a demo confirmation. Connect Razorpay securely on the server when you are ready to accept
                  payments.
                </p>
                <button className="btn btn-primary mt-6" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
                className="space-y-4"
              >
                <span className="eyebrow block">Make a difference</span>
                <h2 className="display text-3xl text-forest">Your kindness can travel far.</h2>

                <label className="text-sm font-semibold">
                  Choose a program
                  <select className="mt-2 border-forest/20 bg-white text-ink shadow-sm">
                    {programs.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </label>

                <div>
                  <p className="text-sm font-semibold">Choose an amount</p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {amounts.map((value) => (
                      <button
                        type="button"
                        onClick={() => setAmount(value)}
                        key={value}
                        className={`rounded-xl border py-2 text-sm font-bold ${
                          amount === value ? "border-forest bg-forest text-white shadow-md" : "border-forest/20 bg-white text-forest hover:border-gold"
                        }`}
                      >
                        ₹{value.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input aria-label="Custom amount" className="mt-3 border-forest/20 bg-white text-ink shadow-sm" type="number" min="1" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <input required className="border-forest/20 bg-white text-ink shadow-sm" placeholder="Your name" />
                  <input required className="border-forest/20 bg-white text-ink shadow-sm" type="email" placeholder="Email address" />
                </div>

                <input required className="border-forest/20 bg-white text-ink shadow-sm" type="tel" placeholder="Phone number" />

                <textarea placeholder="A message (optional)" className="w-full border-forest/20 bg-white text-ink shadow-sm" rows={3} />

                <div className="text-center">
                  <button className="btn btn-primary w-full">Continue securely · ₹{amount.toLocaleString()}</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
