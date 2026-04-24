import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Zap, MessageSquare, Network, BarChart2, RefreshCw, ArrowRight, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: <MessageSquare size={28} />,
    title: 'AI-Enhanced Customer Engagement',
    desc: 'Intelligent tools that answer real questions, surface relevant case studies, and guide prospects toward scoped engagements — 24/7, without manual effort.',
  },
  {
    icon: <Network size={28} />,
    title: 'Infrastructure Provisioning Automation',
    desc: 'Reduce provisioning time from days to minutes. Automated workflows for network, cloud, and endpoint deployments that are repeatable, auditable, and scalable.',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'Workflow Orchestration',
    desc: 'Connect your systems, eliminate manual handoffs, and build intelligent workflows that keep delivery on track — from first contact to final sign-off.',
  },
  {
    icon: <BarChart2 size={28} />,
    title: 'Monitoring & Alerting Automation',
    desc: 'Proactive monitoring that detects issues before customers notice. Automated triage, escalation, and remediation reduce MTTR and support overhead.',
  },
];

const outcomes = [
  'Reduce delivery overhead by 30–50%',
  'Scale service delivery without proportional headcount growth',
  'Improve customer experience with always-on engagement tools',
  'Shorten sales cycles with intelligent qualification and scoping',
  'Increase first-time-right delivery rates',
  'Build repeatable, auditable delivery processes',
];

const tools = [
  {
    name: 'Knowledge Assistant',
    label: 'Capability & Case Study Finder',
    desc: 'An AI-powered assistant trained on our delivery experience. Answers partner and prospect questions, surfaces relevant case studies, and helps qualify opportunities — available 24/7.',
  },
  {
    name: 'Network Assessment Tool',
    label: 'Infrastructure Discovery',
    desc: 'Guided discovery and assessment of network environments. Identifies gaps, benchmarks against best practice, and produces tailored recommendations your team can act on.',
  },
  {
    name: 'Security Posture Review',
    label: 'Threat & Risk Analysis',
    desc: 'A structured review of security posture against industry frameworks. Identifies priority risks and maps them to practical remediation actions.',
  },
];

export default function IntelligentAutomationPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663337333551/h9wm5ZXmZd6BG5PjnWCKUN/london-hero-HWmTzZdNn2zdtwx65U2Lxz.webp)',
          }}
        />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-600/20 border border-brand-400/30 rounded-full text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6">
              <Zap size={14} />
              Intelligent Automation
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 uppercase">
              Automate to <span className="text-brand-400">Scale</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Our Intelligent Automation practice helps partners reduce manual overhead, improve
              delivery speed, and engage customers more effectively — using AI-enhanced tools and
              smart workflows.
            </p>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-500 transition-all duration-200 hover:gap-3"
            >
              See Our Tools in Action <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              What We Deliver
            </div>
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">Four Pillars of Automation</h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Each pillar is designed to remove friction from a different part of your business —
              from customer engagement through to infrastructure delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group p-8 border border-gray-100 rounded-xl hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-3">{p.title}</h3>
                <p className="text-dark-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-brand-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                Measurable Impact
              </div>
              <h2 className="font-heading text-4xl font-bold text-white mb-4">What Partners Achieve</h2>
              <p className="text-brand-100 leading-relaxed text-lg">
                Partners who embed Intelligent Automation into their delivery model see meaningful
                improvements across efficiency, margin, and customer satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div
                  key={o}
                  className="flex items-start gap-3 p-4 bg-white/10 border border-white/20 rounded-xl"
                >
                  <CheckCircle size={18} className="text-brand-200 mt-0.5 flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-brand-50 text-brand-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
              Live & Available Now
            </div>
            <h2 className="font-heading text-4xl font-bold text-dark mb-4">Our Digital Front Door Tools</h2>
            <p className="text-lg text-dark-light max-w-2xl mx-auto">
              Practical, intelligent tools your partners and prospects can use today to start
              meaningful conversations and accelerate opportunity development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {tools.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-brand-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  {t.label}
                </div>
                <h3 className="font-heading text-lg font-bold text-dark mb-3">{t.name}</h3>
                <p className="text-dark-light text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-700 transition-colors duration-200"
            >
              Try All Tools Live <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
