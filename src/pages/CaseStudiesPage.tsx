import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    sector: 'Healthcare', title: 'NHS Hospital Trust Wireless Transformation', stat: '3,000+', statLabel: 'Concurrent devices supported',
    outcome: 'Zero downtime during migration across multiple clinical sites', practice: 'Connectivity',
    summary: 'A large NHS Hospital Trust needed to replace ageing wireless infrastructure across multiple clinical sites without disrupting patient care. We designed and delivered a phased migration to a high-density Wi-Fi 6 environment, supporting 3,000+ concurrent devices including medical-grade IoT equipment.',
    results: ['Zero downtime during full migration', 'Wi-Fi 6 (802.11ax) across all clinical areas', '3,000+ concurrent devices supported', 'Full integration with existing patient monitoring systems'],
  },
  {
    sector: 'Aerospace', title: 'Enterprise Endpoint Security Deployment', stat: '95%', statLabel: 'Reduction in security incidents',
    outcome: 'Unified visibility across 5,000+ endpoints with automated threat response', practice: 'Security',
    summary: 'A major aerospace manufacturer with sites across Europe needed unified endpoint visibility and automated threat response. We deployed an XDR platform across 5,000+ endpoints, integrated with their SOC and SIEM, and established automated playbooks for common threat scenarios.',
    results: ['95% reduction in security incidents', 'Unified visibility across 5,000+ endpoints', 'Automated threat response playbooks', 'Full SOC and SIEM integration'],
  },
  {
    sector: 'Education', title: 'University HPC Environment Build', stat: '10x', statLabel: 'Increase in computational capacity',
    outcome: '40% reduction in energy consumption supporting genomics research', practice: 'Datacentre & Compute',
    summary: 'A leading research university needed to dramatically expand its High Performance Computing capability to support a major genomics research programme. We designed and built a new HPC cluster delivering 10x the previous computational capacity while reducing energy consumption by 40%.',
    results: ['10x increase in computational capacity', '40% reduction in energy consumption', 'Support for 200+ concurrent research workloads', 'Delivered on time for grant deadline'],
  },
  {
    sector: 'Finance', title: 'Hybrid Cloud Migration for Regional Bank', stat: '60%', statLabel: 'Reduction in infrastructure costs',
    outcome: 'Full regulatory compliance maintained throughout migration', practice: 'Cloud',
    summary: 'A regional bank needed to modernise its infrastructure while maintaining strict regulatory compliance. We designed a hybrid cloud architecture across Azure and on-premises environments, migrated 80% of workloads to cloud, and maintained full compliance with FCA and PCI-DSS requirements.',
    results: ['60% reduction in infrastructure costs', 'FCA and PCI-DSS compliance maintained', '80% of workloads migrated to cloud', 'Zero customer-impacting incidents during migration'],
  },
  {
    sector: 'Retail', title: 'Multi-Site SD-WAN Rollout', stat: '200+', statLabel: 'Sites connected in 90 days',
    outcome: 'Single-pane-of-glass visibility across all retail locations', practice: 'Connectivity',
    summary: 'A national retailer needed to replace MPLS connectivity across 200+ sites with a cost-effective, resilient SD-WAN solution. We delivered a full design, procurement, and deployment programme in 90 days.',
    results: ['200+ sites connected in 90 days', '45% reduction in WAN costs', 'Single-pane-of-glass management', '99.99% uptime SLA achieved'],
  },
  {
    sector: 'Manufacturing', title: 'OT/IT Security Programme', stat: '100%', statLabel: 'OT asset visibility achieved',
    outcome: 'Segmented OT network with zero production downtime', practice: 'Security',
    summary: 'A global manufacturer needed to secure its operational technology environments following a series of industry-wide attacks. We delivered full OT asset discovery, network segmentation, and continuous monitoring without disrupting production.',
    results: ['100% OT asset visibility achieved', 'Full network segmentation delivered', 'Zero production downtime', 'IEC 62443 alignment achieved'],
  },
];

const sectors = ['All', ...Array.from(new Set(caseStudies.map((c) => c.sector)))];

export default function CaseStudiesPage() {
  const [activeSector, setActiveSector] = useState('All');
  const [activeStudy, setActiveStudy] = useState<(typeof caseStudies)[0] | null>(null);
  const filtered = activeSector === 'All' ? caseStudies : caseStudies.filter((c) => c.sector === activeSector);

  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663337333551/h9wm5ZXmZd6BG5PjnWCKUN/london-hero-HWmTzZdNn2zdtwx65U2Lxz.webp)' }} />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-brand-600/20 border border-brand-400/30 rounded-full text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6">Proven Results</div>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">Real-world outcomes across multiple sectors. Each project demonstrates our ability to deliver complex infrastructure at scale.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {sectors.map((s) => (
              <button key={s} onClick={() => setActiveSector(s)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${activeSector === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-600'}`}>{s}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs) => (
              <div key={cs.title} onClick={() => setActiveStudy(cs)} className="bg-dark rounded-xl p-8 text-white flex flex-col justify-between hover:bg-dark/90 transition-colors duration-300 group cursor-pointer">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-brand-600/30 text-brand-300 text-xs font-semibold uppercase tracking-wider rounded mb-4">{cs.sector}</span>
                  <h3 className="font-heading text-lg font-bold mb-6">{cs.title}</h3>
                  <div className="border-t border-white/10 pt-6 mb-4">
                    <div className="font-heading text-4xl font-bold text-brand-400 mb-1">{cs.stat}</div>
                    <div className="text-sm text-slate-300 font-medium">{cs.statLabel}</div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{cs.outcome}</p>
                </div>
                <div className="mt-6 flex items-center gap-1 text-brand-400 text-sm font-semibold group-hover:gap-2 transition-all duration-200">Read full case study <ChevronRight size={16} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setActiveStudy(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="bg-dark rounded-t-2xl p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-1 bg-brand-600/30 text-brand-300 text-xs font-semibold uppercase tracking-wider rounded mb-3">{activeStudy.sector}</span>
                  <h2 className="font-heading text-2xl font-bold text-white">{activeStudy.title}</h2>
                </div>
                <button onClick={() => setActiveStudy(null)} className="text-slate-400 hover:text-white transition-colors mt-1 flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex gap-6 mt-6">
                <div>
                  <div className="font-heading text-3xl font-bold text-brand-400">{activeStudy.stat}</div>
                  <div className="text-slate-300 text-sm">{activeStudy.statLabel}</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">{activeStudy.practice}</div>
              <p className="text-dark-light leading-relaxed mb-6">{activeStudy.summary}</p>
              <h4 className="font-heading font-bold text-dark mb-4">Key Results</h4>
              <ul className="flex flex-col gap-2.5">
                {activeStudy.results.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <CheckCircle size={16} className="text-brand-500 mt-0.5 flex-shrink-0" />
                    <span className="text-dark-light text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
