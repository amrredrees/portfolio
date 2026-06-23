import { caseStudies } from "@/data/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">Case studies</p>
            <h2 className="section-title text-slate-950">Selected work across acquisition, funnels, tracking, and growth systems.</h2>
            <p className="section-intro">
              These cases are structured to show the thinking behind the work: context, challenge, role, outcome, and the growth lesson.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <p className="text-sm font-bold text-blue-600">{item.category}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">{item.title}</h3>

              <div className="mt-6 grid gap-4">
                <Info label="Context" text={item.context} />
                <Info label="Challenge" text={item.challenge} />
                <Info label="My Role" text={item.role} />
                <Info label="Outcome" text={item.outcome} />
                <Info label="Key Insight" text={item.insight} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-1 leading-7 text-slate-700">{text}</p>
    </div>
  );
}
