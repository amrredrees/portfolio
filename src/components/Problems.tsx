const problems = [
  {
    title: "Weak Lead Quality",
    text: "Leads are coming, but sales teams complain that many are not serious, not ready, or not aligned with the offer."
  },
  {
    title: "Unclear Tracking",
    text: "GA4, pixels, forms, calls, WhatsApp, and CRM data are not connected clearly enough to make confident decisions."
  },
  {
    title: "Broken Funnel",
    text: "The ad may get the click, but the landing page, offer, form, trust elements, or follow-up flow may reduce conversion quality."
  },
  {
    title: "No Sales Feedback Loop",
    text: "Marketing reports show leads and CPL, but not qualified leads, site visits, opportunities, reservations, subscriptions, or revenue."
  }
];

export function Problems() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">Problems I solve</p>
          <h2 className="section-title text-white">Most campaigns don’t fail because of ads only.</h2>
          <p className="section-intro text-slate-300">
            Many businesses spend money on ads but still struggle to understand what is working, where leads are dropping, and which campaigns drive real sales outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-bold text-white">{problem.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
