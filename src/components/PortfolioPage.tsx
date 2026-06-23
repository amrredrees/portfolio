import Link from "next/link";
import { AuditForm } from "@/components/AuditForm";
import { contactLinks, siteContent, type Locale } from "@/data/site-content";

type Content = (typeof siteContent)[Locale];

export function PortfolioPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const isAr = content.dir === "rtl";

  return (
    <main dir={content.dir} className={isAr ? "font-arabic" : ""}>
      <Header content={content} isAr={isAr} />
      <Hero content={content} isAr={isAr} />
      <TrustStack locale={locale} />
      <Highlights content={content} />
      <Problems content={content} />
      <GrowthSystem content={content} />
      <Services content={content} />
      <CaseStudies content={content} />
      <Method content={content} />
      <About content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </main>
  );
}

function Header({ content, isAr }: { content: Content; isAr: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href={content.lang === "ar" ? "/ar" : "/"} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500 text-sm font-black text-white shadow-lg shadow-blue-500/30">
            AE
          </span>
          <span>
            <span className="block text-sm font-bold text-white">Amr Edrees</span>
            <span className="block text-xs text-slate-400">
              {isAr ? "تسويق أداء ونمو" : "Performance & Growth"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {content.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={content.switchHref}
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          >
            {content.switchLabel}
          </Link>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-blue-100 sm:inline-flex"
          >
            {content.headerCta}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ content, isAr }: { content: Content; isAr: boolean }) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(16,185,129,0.18),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
            {content.hero.badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl">
            {content.hero.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{content.hero.subheadline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.hero.proof.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="rounded-full bg-blue-500 px-7 py-4 text-center text-sm font-black text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-400">
              {content.hero.primaryCta}
            </a>
            <a href="#case-studies" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-black text-white transition hover:bg-white/10">
              {content.hero.secondaryCta}
            </a>
          </div>

          <p className="mt-8 max-w-xl text-sm leading-6 text-slate-400">{content.hero.note}</p>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-950/50 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">{isAr ? "لوحة النمو" : "Growth dashboard"}</p>
                  <p className="text-2xl font-black text-white">{isAr ? "وضوح الأداء" : "Performance clarity"}</p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
                  {isAr ? "تركيز حي" : "Live Focus"}
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [isAr ? "جودة الليدز" : "Lead Quality", "+38%"],
                  [isAr ? "دقة التتبع" : "Tracking Accuracy", "Clean"],
                  [isAr ? "مؤشر العائد" : "ROAS Focus", "9+"],
                  [isAr ? "تسريبات الفانل" : "Funnel Leaks", isAr ? "محددة" : "Mapped"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-black text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950 p-5">
                <p className="mb-4 text-sm font-bold text-white">{isAr ? "مسار التشخيص" : "Audit flow"}</p>
                <div className="space-y-3">
                  {(isAr
                    ? ["تشخيص الفانل", "مراجعة التتبع", "ربط المبيعات", "قرارات التحسين"]
                    : ["Diagnose funnel", "Review tracking", "Connect sales feedback", "Decide next actions"]
                  ).map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-black text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm text-slate-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute -bottom-7 ${isAr ? "-left-4" : "-right-4"} hidden rounded-2xl border border-white/10 bg-slate-900 p-4 shadow-2xl md:block`}>
            <p className="text-xs text-slate-400">{isAr ? "الفكرة الأساسية" : "Core idea"}</p>
            <p className="mt-1 text-sm font-black text-white">{isAr ? "منصة الإعلان ليست القصة كاملة" : "The ad platform is not the full story"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStack({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";

  const sectors = isAr
    ? ["B2B", "العقارات", "التعليم", "الرعاية الصحية", "SaaS", "الخدمات", "التجارة الإلكترونية"]
    : ["B2B", "Real Estate", "Education", "Healthcare", "SaaS", "Services", "E-commerce"];

  const tools = ["GA4", "GTM", "Meta Pixel", "Google Ads", "Looker Studio", "HubSpot", "CRM"];

  return (
    <section className="border-b border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-kicker">{isAr ? "ثقة وسياق" : "Trust context"}</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              {isAr
                ? "خبرة عملية في قطاعات تحتاج ليدز مؤهلة وقرارات إنفاق دقيقة."
                : "Practical experience across sectors where lead quality and spend decisions matter."}
            </h2>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-sm font-black text-slate-500">{isAr ? "قطاعات وخبرات" : "Sectors"}</p>
              <div className="flex flex-wrap gap-2">
                {sectors.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="mb-3 text-sm font-black text-slate-500">{isAr ? "أدوات وتقنيات" : "Tech stack"}</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights({ content }: { content: Content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.lang === "ar" ? "مؤشرات مختارة" : "Selected highlights"}</p>
          <h2 className="section-title text-slate-950">{content.highlightsTitle}</h2>
          <p className="section-intro">{content.highlightsIntro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-4xl font-black text-blue-600">{item.value}</p>
              <h3 className="mt-4 text-lg font-black text-slate-950">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problems({ content }: { content: Content }) {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.problems.kicker}</p>
          <h2 className="section-title text-white">{content.problems.title}</h2>
          <p className="section-intro text-slate-300">{content.problems.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {content.problems.items.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-red-500/10 p-4">
                  <p className="text-xs font-black text-red-200">{content.lang === "ar" ? "قبل" : "Before"}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.before}</p>
                </div>
                <div className="rounded-2xl bg-emerald-500/10 p-4">
                  <p className="text-xs font-black text-emerald-200">{content.lang === "ar" ? "بعد" : "After"}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{item.after}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthSystem({ content }: { content: Content }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.system.kicker}</p>
          <h2 className="section-title text-slate-950">{content.system.title}</h2>
          <p className="section-intro">{content.system.intro}</p>
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-3 md:grid-cols-7">
            {content.system.chain.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-black text-slate-950">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {content.system.cards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ content }: { content: Content }) {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.services.kicker}</p>
          <h2 className="section-title text-slate-950">{content.services.title}</h2>
          <p className="section-intro">{content.services.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, index) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-sm font-black text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-700">
                {service.deliverables}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies({ content }: { content: Content }) {
  return (
    <section id="case-studies" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.cases.kicker}</p>
          <h2 className="section-title text-slate-950">{content.cases.title}</h2>
          <p className="section-intro">{content.cases.intro}</p>
        </div>

        <h3 className="mt-12 text-2xl font-black text-slate-950">{content.cases.featuredTitle}</h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {content.cases.featured.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
              <div className="flex flex-wrap gap-2">
                <p className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-600">{item.tag}</p>
                <p className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-500">{item.sector}</p>
              </div>
              <h4 className="mt-4 text-2xl font-black tracking-tight text-slate-950">{item.title}</h4>
              <div className="mt-6 grid gap-4">
                <Info label={content.lang === "ar" ? "التحدي" : "Challenge"} text={item.challenge} />
                <Info label={content.lang === "ar" ? "الحل" : "Solution"} text={item.action} />
                <Info label={content.lang === "ar" ? "النتيجة" : "Result"} text={item.result} />
                <Info label={content.lang === "ar" ? "الخلاصة" : "Insight"} text={item.insight} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-black text-slate-950">{content.cases.otherTitle}</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.cases.other.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-black text-slate-950">{item.title}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
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

function Method({ content }: { content: Content }) {
  return (
    <section id="method" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="section-kicker">{content.method.kicker}</p>
          <h2 className="section-title text-white">{content.method.title}</h2>
          <p className="section-intro text-slate-300">{content.method.intro}</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.method.steps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About({ content }: { content: Content }) {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="section-kicker">{content.about.kicker}</p>
          <h2 className="section-title text-slate-950">{content.about.title}</h2>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          {content.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-lg leading-8 text-slate-700 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ content }: { content: Content }) {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p className="section-kicker">{content.contact.kicker}</p>
        <h2 className="section-title text-slate-950">{content.contact.title}</h2>
        <p className="section-intro mx-auto">{content.contact.intro}</p>

        <AuditForm locale={content.lang} />

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={contactLinks.email} className="rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-blue-600">
            {content.contact.email}
          </a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-500 px-7 py-4 text-sm font-black text-white transition hover:bg-emerald-400">
            {content.contact.whatsapp}
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-7 py-4 text-sm font-black text-slate-950 transition hover:bg-slate-100">
            {content.contact.linkedin}
          </a>
        </div>

        <div className="mt-8 text-sm leading-7 text-slate-500">
          <p dir="ltr">amrredrees@gmail.com</p>
          <p dir="ltr">+966 54 035 5029</p>
        </div>
      </div>
    </section>
  );
}

function Footer({ content }: { content: Content }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Amr Edrees. All rights reserved.</p>
        <p>{content.footer}</p>
      </div>
    </footer>
  );
}
