const steps = ["Diagnose", "Strategy", "Tracking", "Launch", "Optimize", "Report"];

export function Process() {
  return (
    <section id="process" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">Process</p>
          <h2 className="section-title text-white">A practical growth workflow from diagnosis to reporting.</h2>
          <p className="section-intro text-slate-300">
            The goal is not to launch more campaigns. The goal is to create a clearer system for decisions, execution, learning, and growth.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
