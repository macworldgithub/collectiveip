import { ChevronRight, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    sector: 'HEALTHCARE',
    title: 'NHS HOSPITAL TRUST WIRELESS TRANSFORMATION',
    stat: '3,000+',
    statLabel: 'Concurrent devices supported',
    outcome: 'Zero downtime during migration across multiple clinical sites',
    image: '/images/healthcare.png'
  },
  {
    sector: 'AEROSPACE',
    title: 'ENTERPRISE ENDPOINT SECURITY DEPLOYMENT',
    stat: '95%',
    statLabel: 'Reduction in security incidents',
    outcome: 'Unified visibility across 5,000+ endpoints with automated threat response',
    image: '/images/aerospace.png'
  },
  {
    sector: 'EDUCATION',
    title: 'UNIVERSITY HPC ENVIRONMENT BUILD',
    stat: '10X',
    statLabel: 'Increase in computational capacity',
    outcome: '40% reduction in energy consumption supporting genomics research',
    image: '/images/education.png'
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-14 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[#8B5CF6] text-xs font-bold uppercase tracking-widest mb-4">
              Proven Results
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#3B4041] uppercase mb-4">
              Real Outcomes, Real Clients
            </h2>
            <p className="text-base text-slate-500 max-w-2xl">
              Every engagement delivers measurable impact. Here are some of the outcomes we've achieved.
            </p>
          </div>
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-bold hover:gap-3 transition-all duration-300"
          >
            View All Case Studies
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#8B5CF6] text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                    {cs.sector}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="font-heading text-[13px] md:text-sm font-bold text-[#3B4041] group-hover:text-[#8B5CF6] transition-colors mb-6 leading-relaxed uppercase min-h-[2.5rem]">
                  {cs.title}
                </h3>
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-extrabold text-[#8B5CF6]">{cs.stat}</span>
                  <span className="text-xs text-slate-400">{cs.statLabel}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                  {cs.outcome}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#8B5CF6] text-xs font-bold hover:gap-2 transition-all duration-200"
                >
                  Read full case study <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


