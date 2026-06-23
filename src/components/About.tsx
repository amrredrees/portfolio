export function About() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title text-slate-950">About Amr Edrees</h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">
            I’m a Performance Marketing and Growth Specialist with experience helping businesses across GCC markets improve paid acquisition, lead generation, tracking, funnels, and revenue-focused marketing decisions.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            My work goes beyond launching campaigns. I focus on the full growth path: audience and offer strategy, campaign execution, landing pages, tracking setup, CRM flow, reporting, and optimization.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            I’ve worked across industries including real estate, education, healthcare, e-commerce, SaaS, and services — helping teams understand not only how many leads they get, but which leads actually matter.
          </p>
        </div>
      </div>
    </section>
  );
}
