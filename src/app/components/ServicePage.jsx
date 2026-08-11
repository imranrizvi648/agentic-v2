import Link from "next/link";
import ServiceHero from "./ServiceHero";
import { getRelatedServices } from "../../../lib/services";

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-0.5 bg-indigo-500" />
      <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">{text}</span>
    </div>
  );
}

export default function ServicePage({ service }) {
  const { number, tagline, hero, overview, benefits, features, process, whyUs, faqs, cta, relatedServices } = service;
  const related = getRelatedServices(relatedServices);

  return (
    <main>
      {/* Hero */}
      <ServiceHero number={number} tagline={tagline} {...hero} />

      {/* Overview */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <SectionLabel text="Service Overview" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary leading-tight tracking-tight mb-5">
                {overview.heading}
              </h2>
              <p className="text-base text-indigo-700 font-semibold leading-relaxed mb-4">{overview.lead}</p>
              <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em] mb-8">{overview.body}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {overview.stats.map((s) => (
                  <div key={s.label} className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-indigo-600 leading-none mb-1">{s.val}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              {overview.cards.map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">{c.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Benefits" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What Changes When Agents Handle This Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`bg-white p-7 ${
                  i % 3 !== 2 ? "lg:border-r border-slate-100" : ""
                } ${i < benefits.length - 3 ? "border-b border-slate-100" : ""} ${
                  i < benefits.length - 2 && benefits.length % 2 === 0 ? "sm:border-b sm:border-slate-100" : ""
                } hover:bg-indigo-50/30 transition-colors`}
              >
                <span className="text-2xl mb-4 block">{b.icon}</span>
                <h3 className="text-sm font-bold text-brand-primary mb-2 leading-snug">{b.title}</h3>
                <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Capabilities" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 max-w-2xl leading-tight">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 flex gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-indigo-600">{f.num}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h4>
                  <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em]">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Methodology" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-14 max-w-2xl leading-tight">
            How We Deliver
          </h2>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-5 left-5 right-5 h-px bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {process.map((p, i) => (
                <div key={p.title} className="relative flex flex-col items-start md:items-center md:text-center">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-indigo-500 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-xs font-bold text-indigo-600">{p.num}</span>
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800 mb-2">{p.title}</h4>
                  <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionLabel text="Why AgenticSense" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-8 leading-tight">
                {whyUs.heading}
              </h2>
              <div className="divide-y divide-slate-100">
                {whyUs.points.map((p) => (
                  <div key={p.title} className="flex gap-4 py-5">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2 shadow-sm shadow-indigo-300" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold text-brand-primary mb-3">{whyUs.box.heading}</h3>
                <p className="text-sm text-slate-300 leading-[1.6] mb-6">{whyUs.box.body}</p>
                <div className="space-y-3">
                  {whyUs.box.stats.map((s) => (
                    <div key={s.label} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span className="text-xl font-bold text-indigo-300">{s.val}</span>
                      <span className="text-sm text-slate-400 font-semibold text-right max-w-[160px]">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <SectionLabel text="Frequently Asked Questions" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-12 leading-tight">
            Questions We Hear Every Time
          </h2>
          <div className="space-y-0 divide-y divide-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-indigo-100 flex items-center justify-center text-[9px] font-bold text-indigo-600 mt-0.5">Q</span>
                    <span className="text-sm font-bold text-slate-900 leading-snug">{f.q}</span>
                  </div>
                  <span className="flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform mt-0.5">▾</span>
                </summary>
                <p className="pl-8 pt-3 text-base text-slate-600 leading-[1.65] tracking-[-0.005em]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Get Started</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary tracking-tight leading-tight mb-5">
            {cta.heading}
          </h2>
          <p className="text-base text-slate-600 leading-[1.65] tracking-[-0.005em] mb-10">{cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold text-sm px-7 py-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {cta.cta1} →
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold text-sm px-7 py-4 rounded-md border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
            >
              {cta.cta2}
            </Link>
          </div>
          <p className="text-sm text-slate-400">Dubai, UAE · Karachi, Pakistan · info@agenticsense.co</p>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Related Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={r.slug}
                  className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-indigo-500 tracking-widest">{r.number}</span>
                    <span className="text-slate-300 group-hover:text-indigo-400 transition-colors text-sm">→</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                    {r.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
