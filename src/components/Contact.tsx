export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title text-slate-950">Need better leads, cleaner tracking, or a stronger growth system?</h2>
        <p className="section-intro mx-auto">
          Let’s discuss your campaigns, funnel, tracking setup, and what needs to change to make better performance decisions.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:amrsocialgy@gmail.com"
            className="rounded-full bg-slate-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          WhatsApp and final LinkedIn URL can be added once you confirm the exact links.
        </p>
      </div>
    </section>
  );
}
