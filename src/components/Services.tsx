import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">Services</p>
          <h2 className="section-title text-slate-950">Growth services built around performance, tracking, and lead quality.</h2>
          <p className="section-intro">
            Focused services for businesses that need stronger acquisition decisions, better funnel visibility, and cleaner performance reporting.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-blue-50" />
              <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
