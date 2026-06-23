import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_32%),radial-gradient(circle_at_75%_20%,rgba(34,197,94,0.18),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-100">
            Lead Generation • Funnels • Tracking • Growth Decisions
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Turn Ad Spend Into Qualified Leads, Revenue, and Clear Growth Decisions
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I’m Amr Edrees, a Performance Marketing and Growth Specialist helping businesses improve campaigns, funnels, tracking, CRM workflows, and lead quality.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#case-studies"
              className="rounded-full bg-blue-500 px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400"
            >
              View Case Studies
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>

          <p className="mt-8 max-w-xl text-sm leading-6 text-slate-400">
            Built for businesses that need better leads, cleaner tracking, stronger funnels, and performance reports that connect marketing activity with business outcomes.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Growth dashboard</p>
                  <p className="text-2xl font-bold text-white">Performance clarity</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Live Focus
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Qualified Leads", "+38%"],
                  ["Tracking Quality", "Clean"],
                  ["ROAS Focus", "9+"],
                  ["Funnel Leaks", "Mapped"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-black text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="mb-4 text-sm font-semibold text-white">Optimization flow</p>
                <div className="space-y-3">
                  {["Diagnose funnel", "Fix tracking", "Launch campaigns", "Report outcomes"].map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
