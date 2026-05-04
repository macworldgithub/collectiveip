import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Zap,
  MessageSquare,
  Network,
  BarChart2,
  ArrowRight,
  CheckCircle,
  Settings,
  Cpu,
} from 'lucide-react';

const stats = [
  { value: '60%', label: 'Reduction in manual operational tasks' },
  { value: '3X', label: 'Faster Incident response times' },
  { value: '40%', label: 'Cost reduction through automation' },
  { value: '24/7', label: 'Intelligent monitoring and response' },
];

const services = [
  {
    icon: <Network size={24} />,
    title: 'AUTOMATED NETWORK OPERATIONS',
    desc: 'Automated monitoring, predictive fault detection, and intelligent capacity planning that transforms reactive operations into proactive management.',
  },
  {
    icon: <Settings size={24} />,
    title: 'INTELLIGENT PROCESS AUTOMATION',
    desc: 'End-to-end workflow automation that eliminates manual overhead, reduces errors, and accelerates service delivery across your operations.',
    isActive: true
  },
  {
    icon: <BarChart2 size={24} />,
    title: 'PREDICTIVE ANALYTICS & INSIGHTS',
    desc: 'Data-driven decision support that identifies trends, forecasts demand, and provides actionable intelligence for infrastructure planning.',
  },
  {
    icon: <Zap size={24} />,
    title: 'AUTOMATED DEPLOYMENT PIPELINES',
    desc: 'Infrastructure-as-code and CI/CD pipelines that enable rapid, consistent, and repeatable deployments across multi-site environments.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'DIGITAL FRONT DOOR SOLUTIONS',
    desc: 'Knowledge systems that provide instant, structured answers about capabilities, approach, and delivery experience to prospects and partners.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'CUSTOM KNOWLEDGE SYSTEMS',
    desc: "Bespoke solutions trained on your organisation's knowledge base, propositions, and delivery experience for intelligent customer engagement.",
  },
];

const approachSteps = [
  {
    number: '1',
    title: 'Discovery & Assessment',
    desc: 'We start by understanding your current operations, pain points, and objectives to identify where automation will deliver the greatest impact.',
  },
  {
    number: '2',
    title: 'Solution Design',
    desc: 'We design practical solutions that integrate with your existing infrastructure, using proven technologies and approaches.',
  },
  {
    number: '3',
    title: 'Delivery & Integration',
    desc: 'We implement in phases, proving value at each stage and ensuring seamless integration with your operational workflows.',
  },
  {
    number: '4',
    title: 'Optimisation & Scale',
    desc: 'We continuously monitor, optimise, and expand your automation capabilities based on real performance data and evolving needs.',
  },
];

const proofPoints = [
  {
    title: 'NETWORK AUTOMATION FOR MULTI-SITE RETAIL',
    challenge: 'A national retailer needed to standardise network configurations across 200+ stores while reducing deployment time from weeks to hours.',
    approach: 'We implemented automated configuration management with validation, enabling zero-touch provisioning for new sites and automated compliance checks across the estate.',
    outcome: '90% reduction in deployment time, zero configuration drift, and automated rollback capabilities for rapid recovery.',
  },
  {
    title: 'KNOWLEDGE SYSTEM FOR CHANNEL PARTNER',
    challenge: "A channel partner's pre-sales team was spending 60% of their time answering repetitive capability questions from prospects.",
    approach: "We built a custom knowledge system trained on the partner's propositions, case studies, and technical capabilities, providing instant structured responses.",
    outcome: 'Pre-sales team reclaimed 15+ hours per week, prospect response time dropped from days to seconds, and conversion rates improved by 25%.',
  },
  {
    title: 'PREDICTIVE INFRASTRUCTURE MANAGEMENT FOR HEALTHCARE',
    challenge: 'An NHS trust needed to move from reactive to proactive infrastructure management to ensure critical system availability.',
    approach: 'We deployed monitoring with predictive analytics that identifies potential failures before they impact services, combined with automated remediation workflows.',
    outcome: '99.99% uptime achieved, 70% reduction in P1 incidents, and automated capacity planning for seasonal demand.',
  },
];

export default function IntelligentAutomationPage() {
  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url(/images/intelligent.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />

        {/* Abstract lines pattern overlay (simplified) */}
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8B5CF6 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h4 className="text-base font-bold text-[#8B5CF6] uppercase tracking-[0.2em] mb-6">
              INTELLIGENT AUTOMATION
            </h4>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
              AUTOMATION THAT DELIVERS REAL OUTCOMES
            </h1>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-10 max-w-xl">
              Not automation for the sake of it. We deliver practical, outcome-driven solutions that reduce cost,
              accelerate delivery, and transform how you operate — built on real delivery experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#70309d] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all duration-300"
              >
                See It In Action <ArrowRight size={14} />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-button-gray text-black border border-white/30 text-xs font-bold rounded hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#3B4041] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-300 mb-1">{s.value} </div>
                <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h4 className="text-base font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
              WHAT WE DELIVER
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
              INTELLIGENT AUTOMATION SERVICES
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Practical, proven solutions that integrate seamlessly with your existing infrastructure
              and deliver measurable outcomes from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-[#8B5CF6] transition-all duration-300"
              >
                <div className="text-[#70309d] mb-6">{s.icon}</div>
                <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h4 className="text-base font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
                OUR APPROACH
              </h4>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-6">
                PRAGMATIC, NOT HYPE
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Every solution we deliver starts with a clear business problem and ends with measurable outcomes.
                Our approach is grounded in real delivery experience across complex enterprise environments.
              </p>

              <div className="space-y-8">
                {approachSteps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#70309d] flex items-center justify-center text-base font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#3B4041] mb-2">{step.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#3B4041] rounded-2xl p-10 text-white shadow-xl">
                <h3 className="font-heading text-xl text-brand-300 font-bold uppercase tracking-widest mb-8">
                  WHY PARTNERS CHOOSE US
                </h3>
                <ul className="space-y-4">
                  {[
                    'Real delivery experience, not just theory',
                    'Solutions built on your existing infrastructure',
                    'Measurable outcomes from day one',
                    'Channel-focused — we enhance your brand, not replace it',
                    'Phased delivery that proves value at each stage',
                    'Ongoing optimisation and support',
                    'Practical automation that solves real business problems',
                    'Transparent, collaborative approach'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h4 className="text-base font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
              PROOF POINTS
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
              REAL OUTCOMES, REAL IMPACT
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              See how our intelligent automation solutions deliver measurable results across different sectors and use cases.
            </p>
          </div>

          <div className="space-y-6">
            {proofPoints.map((point, idx) => (
              <div key={idx} className="bg-white rounded-xl p-10 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 text-[#70309d] mb-8">
                  <Network size={16} />
                  <h3 className="font-heading text-xl  font-bold uppercase tracking-[0.15em]">
                    {point.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <div className="md:col-span-3">
                    <h4 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-4">CHALLENGE</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{point.challenge}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-4">APPROACH</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{point.approach}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-4">OUTCOME</h4>
                    <p className="text-xs font-bold text-[#3B4041] leading-relaxed italic border-l-2 border-[#8B5CF6] pl-4">
                      {point.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#3B4041] text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight">
            READY TO EXPLORE INTELLIGENT AUTOMATION?
          </h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            Try our interactive tools to explore how our automation capabilities could apply
            to your specific requirements.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#70309d] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all duration-300"
          >
            Try the Interactive Demo <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
