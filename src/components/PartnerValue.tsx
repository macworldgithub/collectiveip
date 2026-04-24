import { TrendingUp, Zap, Shield, Users } from 'lucide-react';

const values = [
  {
    title: 'EXPAND YOUR SERVICES PORTFOLIO',
    desc: 'Create new white space across your customer base and enable new conversations that reinforce your brand and drive growth.',
    icon: <TrendingUp size={24} />,
  },
  {
    title: 'DELIVER MORE EFFICIENTLY',
    desc: 'Reduce delivery friction and optimise in-house skills so your team can focus on strategic priorities. Lean, scalable, repeatable.',
    icon: <Zap size={24} />,
  },
  {
    title: 'STRENGTHEN SECURITY SERVICES',
    desc: 'Protect your customers from ever-increasing threats — from vulnerability assessments and threat analysis through to endpoint security.',
    icon: <Shield size={24} />,
  },
  {
    title: 'BUILD ANNUITY REVENUE',
    desc: 'Deliver value-added services such as consulting, end-to-end project ownership, and premium support that foster longer-term relationships.',
    icon: <Users size={24} />,
  },
];

export default function PartnerValue() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-brand-600 text-xs font-bold uppercase tracking-widest mb-4">
            Partner Value
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#3B4041] mb-4 uppercase">
            How We Help Our Partners Succeed
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            We don't just deliver services — we help partners build commercially viable, scalable businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-[#F3F4F6] border border-slate-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-brand-600 mb-6">
                {v.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-3 uppercase tracking-wide">
                {v.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

