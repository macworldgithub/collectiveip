const values = [
  {
    title: 'Expand Your Services Portfolio',
    desc: 'Create new white space across your customer base and enable new conversations that reinforce your brand and drive growth.',
  },
  {
    title: 'Deliver More Efficiently',
    desc: 'Reduce delivery friction and optimise in-house skills so your team can focus on strategic priorities. Lean, scalable, repeatable.',
  },
  {
    title: 'Strengthen Security Services',
    desc: 'Protect your customers from ever-increasing threats — from vulnerability assessments and threat analysis through to endpoint security.',
  },
  {
    title: 'Build Annuity Revenue',
    desc: 'Deliver value-added services such as consulting, end-to-end project ownership, and premium support that foster longer-term relationships.',
  },
];

export default function PartnerValue() {
  return (
    <section className="py-24 bg-sky-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            How We Help Our Partners Succeed
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Partner Value</h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto">
            We don't just deliver services — we help partners build commercially viable, scalable
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm mb-5">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-sky-100 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
