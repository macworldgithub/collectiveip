import { ChevronRight, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    sector: 'Healthcare',
    title: 'NHS Hospital Trust Wireless Transformation',
    stat: '3,000+',
    statLabel: 'Concurrent devices supported',
    outcome: 'Zero downtime during migration across multiple clinical sites',
  },
  {
    sector: 'Aerospace',
    title: 'Enterprise Endpoint Security Deployment',
    stat: '95%',
    statLabel: 'Reduction in security incidents',
    outcome: 'Unified visibility across 5,000+ endpoints with automated threat response',
  },
  {
    sector: 'Education',
    title: 'University HPC Environment Build',
    stat: '10x',
    statLabel: 'Increase in computational capacity',
    outcome: '40% reduction in energy consumption supporting genomics research',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Real Outcomes, Real Clients
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tangible outcomes across multiple sectors, demonstrating our ability to deliver complex
            infrastructure projects at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-slate-900 rounded-xl p-8 text-white flex flex-col justify-between hover:bg-slate-800 transition-colors duration-300 group"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-sky-600/30 text-sky-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">
                  {cs.sector}
                </span>
                <h3 className="text-lg font-bold mb-6">{cs.title}</h3>
                <div className="border-t border-white/10 pt-6 mb-4">
                  <div className="text-4xl font-bold text-sky-400 mb-1">{cs.stat}</div>
                  <div className="text-sm text-slate-300 font-medium">{cs.statLabel}</div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{cs.outcome}</p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-sky-400 text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Read full case study <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-md hover:border-sky-500 hover:text-sky-600 transition-colors duration-200"
          >
            View All Case Studies
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
