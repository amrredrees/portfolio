import { highlights } from "@/data/highlights";

export function PerformanceHighlights() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">Selected highlights</p>
          <h2 className="section-title text-slate-950">Performance proof, not generic marketing claims.</h2>
          <p className="section-intro">
            A snapshot of selected experience and example outcomes across paid acquisition, subscription growth, revenue impact, and optimization work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-4xl font-black text-blue-600">{item.value}</p>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
