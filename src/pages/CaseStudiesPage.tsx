import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ChevronRight,
  CheckCircle,
  TrendingUp,
  Target,
  Clock,
  Medal,
  MessageSquare,
  ArrowRight,
  Wifi,
  Shield,
  Server,
  Cloud,
  Cpu
} from 'lucide-react';

const globalStats = [
  { icon: <TrendingUp size={20} />, value: '150+', label: 'Deployments Delivered' },
  { icon: <Target size={20} />, value: '99.9%', label: 'Average Uptime Achieved' },
  { icon: <Clock size={20} />, value: '<60S', label: 'Avg Threat Response Time' },
  { icon: <Medal size={20} />, value: '100%', label: 'Client Retention Rate' },
];

const caseStudies = [
  {
    sector: 'Healthcare',
    practice: 'CONNECTIVITY',
    icon: <Wifi size={14} />,
    title: 'HOSPITAL TRUST WIRELESS NETWORK TRANSFORMATION',
    entity: 'NHS Hospital Trust',
    summary: 'Complete wireless network refresh across a multi-site hospital trust, delivering seamless connectivity for clinical staff, patients, and IoT medical devices.',
    results: [
      '100% coverage across all clinical areas',
      'Support for 3,000+ concurrent devices',
      'Zero downtime during migration'
    ],
    stat: '3,000+',
    statLabel: 'Concurrent devices supported',
    image: '/images/healthcare.png',
  },
  {
    sector: 'Aerospace & Defence',
    practice: 'SECURITY',
    icon: <Shield size={14} />,
    title: 'ENDPOINT SECURITY ENHANCEMENT FOR AEROSPACE MANUFACTURER',
    entity: 'Major Aerospace Manufacturer',
    summary: 'Comprehensive endpoint security deployment protecting critical manufacturing systems and intellectual property across multiple facilities.',
    results: [
      '85% reduction in security incidents',
      'Unified visibility across 5,000+ endpoints',
      'Automated threat response under 60 seconds'
    ],
    stat: '95%',
    statLabel: 'Reduction in security incidents',
    image: '/images/aerospace.png',
  },
  {
    sector: 'Higher Education',
    practice: 'DATACENTRE & COMPUTE',
    icon: <Server size={14} />,
    title: 'HPC DATA STACK FOR UNIVERSITY RESEARCH',
    entity: 'Russell Group University',
    summary: 'Design, build and testing of high-performance computing data stacks supporting cutting-edge research in genomics and climate modelling.',
    results: [
      '10x increase in computational capacity',
      '40% reduction in energy consumption',
      'Support for 200+ concurrent research workloads'
    ],
    stat: '10X',
    statLabel: 'Increase in computational capacity',
    image: '/images/education.png',
  },
  {
    sector: 'Retail',
    practice: 'Connectivity',
    icon: <Wifi size={14} />,
    title: 'Multi-Site Retail Network Rollout',
    entity: 'National Retail Chain',
    summary: 'Complex multi-site network deployment across 200+ retail locations, delivering WAN connectivity, switching, and wireless solutions.',
    results: [
      '200+ sites deployed in 6 months',
      '99.9% network uptime achieved',
      'Standardised configuration across estate'
    ],
    stat: '200+',
    statLabel: 'Sites deployed in 6 months',
    image: '/images/retail.png',
  },
  {
    sector: 'Channel / Technology',
    practice: 'Intelligent Automation',
    icon: <Cpu size={14} />,
    title: 'Knowledge System for Channel Partner',
    entity: 'UK Channel Partner',
    summary: 'Custom knowledge system that transformed pre-sales efficiency by providing instant, structured answers about capabilities and delivery experience.',
    results: [
      '15+ hours per week reclaimed for pre-sales',
      'Response time from days to seconds',
      '25% improvement in conversion rates'
    ],
    stat: '25%',
    statLabel: 'Improvement in conversion rates',
    image: '/images/Hero.png',
  },
  {
    sector: 'Public Sector',
    practice: 'Cloud',
    icon: <Cloud size={14} />,
    title: 'Hybrid Cloud Migration for Public Sector',
    entity: 'Local Government Authority',
    summary: 'Strategic migration from legacy on-premises infrastructure to a hybrid cloud environment, enabling digital transformation while maintaining data sovereignty.',
    results: [
      '35% reduction in infrastructure costs',
      'Full data sovereignty compliance',
      'Automated disaster recovery'
    ],
    stat: '35%',
    statLabel: 'Reduction in infrastructure cost',
    image: '/images/healthcare.png',
  },
];

const sectors = ['All', 'Healthcare', 'Aerospace & Defence', 'Higher Education', 'Retail', 'Channel / Technology', 'Public Sector'];

export default function CaseStudiesPage() {
  const [activeSector, setActiveSector] = useState('All');

  const filtered = activeSector === 'All'
    ? caseStudies
    : caseStudies.filter((c) => c.sector === activeSector);

  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <h4 className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-6">
            CASE STUDIES
          </h4>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            PROVEN DELIVERY, REAL RESULTS
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
            Real examples of how we've helped partners and their customers solve
            complex IT infrastructure challenges across multiple sectors.
          </p>
        </div>
      </section>

      {/* Global Stats Bar */}
      <section className="bg-[#3B4041] border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {globalStats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-[#8B5CF6] mb-3 opacity-80">{s.icon}</div>
                <div className="text-2xl lg:text-4xl font-extrabold text-[#8B5CF6] mb-3 tracking-tight">
                  {s.value}
                </div>
                <div className="text-[9px] lg:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-tight max-w-[120px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Cards Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-16 justify-start">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSector(s)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all duration-200 border ${activeSector === s
                  ? 'bg-[#5C2882] text-white border-[#5C2882]'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-[#5C2882] hover:text-[#5C2882]'
                  }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Horizontal Case Study Cards */}
          <div className="space-y-8">
            {filtered.map((cs, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col lg:flex-row min-h-[320px]">
                {/* Left: Image & Stat */}
                <div className="lg:w-2/5 relative min-h-[240px] lg:min-h-full">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#5C2882] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-wider rounded">
                      {cs.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 p-4 lg:p-5 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 max-w-[280px]">
                    <div className="text-2xl lg:text-3xl font-extrabold text-[#8B5CF6] mb-0.5">{cs.stat}</div>
                    <div className="text-[6px] lg:text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-tight">
                      {cs.statLabel}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-[#5C2882] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                      {cs.icon}
                      {cs.practice}
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-extrabold text-[#3B4041] mb-1.5">
                      {cs.title}
                    </h3>
                    <div className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                      {cs.entity}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                      {cs.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={12} className="text-[#5C2882] flex-shrink-0" />
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={`/case-studies/${idx}`}
                      className="inline-flex items-center gap-2 text-[#5C2882] text-xs font-extrabold hover:gap-3 transition-all duration-200"
                    >
                      Read full case study <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-6 tracking-tight">
            HAVE A SIMILAR CHALLENGE?
          </h2>
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Try our interactive tools to explore how we could approach your specific
            requirements, or get in touch to discuss directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded hover:bg-[#7C3AED] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
            >
              <MessageSquare size={16} /> Experience Our Tools
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-slate-200 text-[#3B4041] text-xs font-bold rounded hover:bg-slate-50 transition-all duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
