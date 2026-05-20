// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import {
//   Zap,
//   MessageSquare,
//   Network,
//   BarChart2,
//   ArrowRight,
//   CheckCircle2,
//   Settings,
//   Cpu,
// } from 'lucide-react';

// const stats = [
//   { value: '190+', label: 'Successful deployments across platforms' },
//   { value: '39', label: 'Dedicated AI & automation developers' },
//   { value: '60%', label: 'Reduction in manual operational tasks' },
//   { value: '24/7', label: 'Intelligent automation systems uptime' },
// ];

// const services = [
//   {
//     icon: <Network size={24} />,
//     title: 'AUTOMATED NETWORK OPERATIONS',
//     desc: 'Automated monitoring, predictive fault detection, and intelligent capacity planning that transforms reactive operations into proactive management.',
//   },
//   {
//     icon: <Settings size={24} />,
//     title: 'INTELLIGENT PROCESS AUTOMATION',
//     desc: 'End-to-end workflow automation that eliminates manual overhead, reduces errors, and accelerates service delivery across your operations.',
//     isActive: true
//   },
//   {
//     icon: <BarChart2 size={24} />,
//     title: 'PREDICTIVE ANALYTICS & INSIGHTS',
//     desc: 'Data-driven decision support that identifies trends, forecasts demand, and provides actionable intelligence for infrastructure planning.',
//   },
//   {
//     icon: <Zap size={24} />,
//     title: 'AUTOMATED DEPLOYMENT PIPELINES',
//     desc: 'Infrastructure-as-code and CI/CD pipelines that enable rapid, consistent, and repeatable deployments across multi-site environments.',
//   },
//   {
//     icon: <MessageSquare size={24} />,
//     title: 'DIGITAL FRONT DOOR SOLUTIONS',
//     desc: 'Knowledge systems that provide instant, structured answers about capabilities, approach, and delivery experience to prospects and partners.',
//   },
//   {
//     icon: <Cpu size={24} />,
//     title: 'CUSTOM KNOWLEDGE SYSTEMS',
//     desc: "Bespoke solutions trained on your organisation's knowledge base, propositions, and delivery experience for intelligent customer engagement.",
//   },
// ];

// const approachSteps = [
//   {
//     number: '1',
//     title: 'Discovery & Assessment',
//     desc: 'We start by understanding your current operations, pain points, and objectives to identify where automation will deliver the greatest impact.',
//   },
//   {
//     number: '2',
//     title: 'Solution Design',
//     desc: 'We design practical solutions that integrate with your existing infrastructure, using proven technologies and approaches.',
//   },
//   {
//     number: '3',
//     title: 'Delivery & Integration',
//     desc: 'We implement in phases, proving value at each stage and ensuring seamless integration with your operational workflows.',
//   },
//   {
//     number: '4',
//     title: 'Optimisation & Scale',
//     desc: 'We continuously monitor, optimise, and expand your automation capabilities based on real performance data and evolving needs.',
//   },
// ];

// const proofPoints = [
//   {
//     title: 'NETWORK AUTOMATION FOR MULTI-SITE RETAIL',
//     challenge: 'A national retailer needed to standardise network configurations across 200+ stores while reducing deployment time from weeks to hours.',
//     approach: 'We implemented automated configuration management with validation, enabling zero-touch provisioning for new sites and automated compliance checks across the estate.',
//     outcome: '90% reduction in deployment time, zero configuration drift, and automated rollback capabilities for rapid recovery.',
//   },
//   {
//     title: 'KNOWLEDGE SYSTEM FOR CHANNEL PARTNER',
//     challenge: "A channel partner's pre-sales team was spending 60% of their time answering repetitive capability questions from prospects.",
//     approach: "We built a custom knowledge system trained on the partner's propositions, case studies, and technical capabilities, providing instant structured responses.",
//     outcome: 'Pre-sales team reclaimed 15+ hours per week, prospect response time dropped from days to seconds, and conversion rates improved by 25%.',
//   },
//   {
//     title: 'PREDICTIVE INFRASTRUCTURE MANAGEMENT FOR HEALTHCARE',
//     challenge: 'An NHS trust needed to move from reactive to proactive infrastructure management to ensure critical system availability.',
//     approach: 'We deployed monitoring with predictive analytics that identifies potential failures before they impact services, combined with automated remediation workflows.',
//     outcome: '99.99% uptime achieved, 70% reduction in P1 incidents, and automated capacity planning for seasonal demand.',
//   },
// ];

// export default function IntelligentAutomationPage() {
//   return (
//     <div className="font-body text-dark antialiased bg-white">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative pt-40 pb-32 overflow-hidden bg-[#3B4041]">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-80"
//           style={{
//             backgroundImage: 'url(/images/intelligent.png)',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />

//         {/* Abstract lines pattern overlay */}
//         <div className="absolute inset-0 opacity-20"
//           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #70309d 1px, transparent 0)', backgroundSize: '40px 40px' }} />

//         <div className="relative max-w-7xl mx-auto px-6">
//           <div className="max-w-3xl">
//             <p className="text-brand-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">
//               Practice Detail
//             </p>
//             <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
//               INTELLIGENT AUTOMATION
//             </h1>
//             <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-10 max-w-xl">
//               Not automation for the sake of it. We deliver practical, outcome-driven solutions that reduce cost,
//               accelerate delivery, and transform how you operate — built on real delivery experience.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <a
//                 href="/demo"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-[#70309d] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all duration-300"
//               >
//                 See It In Action <ArrowRight size={14} />
//               </a>
//               <a
//                 href="/case-studies"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-button-gray text-black border border-white/30 text-xs font-bold rounded hover:bg-white/10 transition-all duration-300"
//               >
//                 View Case Studies
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Bar */}
//       <section className="bg-[#3B4041] border-t border-white/5 py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((s) => (
//               <div key={s.label} className="text-center lg:text-left">
//                 <div className="text-3xl md:text-4xl font-extrabold text-brand-300 mb-1">{s.value}</div>
//                 <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 bg-[#efefef]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16 text-center">
//             <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//               What We Deliver
//             </h4>
//             <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
//               Intelligent Automation Services
//             </h2>
//             <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
//               Practical, proven solutions that integrate seamlessly with your existing infrastructure and deliver measurable outcomes from day one.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((s, idx) => (
//               <div
//                 key={idx}
//                 className="p-8 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group"
//               >
//                 <div className="text-[#70309d] mb-6">{s.icon}</div>
//                 <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">
//                   {s.title}
//                 </h3>
//                 <p className="text-xs text-slate-500 leading-relaxed">
//                   {s.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Approach Section */}
//       <section className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//             <div className="lg:col-span-7">
//               <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//                 Our Approach
//               </h4>
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-6 leading-tight">
//                 Pragmatic, Not Hype
//               </h2>
//               <p className="text-xs text-slate-500 leading-relaxed mb-8">
//                 Every solution we deliver starts with a clear business problem and ends with measurable outcomes.
//                 Our approach is grounded in real delivery experience across complex enterprise environments.
//               </p>

//               <div className="space-y-8">
//                 {approachSteps.map((step) => (
//                   <div key={step.number} className="flex gap-6">
//                     <div className="w-8 h-8 rounded-full bg-[#efefef] text-[#70309d] flex items-center justify-center text-xs font-bold flex-shrink-0">
//                       {step.number}
//                     </div>
//                     <div>
//                       <h3 className="text-sm font-bold text-[#3B4041] uppercase tracking-wider mb-2">{step.title}</h3>
//                       <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="lg:col-span-5">
//               <div className="bg-[#3B4041] rounded-2xl p-10 text-white shadow-xl">
//                 <h3 className="font-heading text-base text-brand-300 font-bold uppercase tracking-widest mb-8">
//                   Why Partners Choose Us
//                 </h3>
//                 <ul className="space-y-4">
//                   {[
//                     'Real delivery experience, not just theory',
//                     'Solutions built on your existing infrastructure',
//                     'Measurable outcomes from day one',
//                     'Channel-focused — we enhance your brand, not replace it',
//                     'Phased delivery that proves value at each stage',
//                     'Ongoing optimisation and support',
//                     'Practical automation that solves real business problems',
//                     'Transparent, collaborative approach'
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <CheckCircle2 size={14} className="text-brand-300 mt-0.5 flex-shrink-0" />
//                       <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Proof Points Section */}
//       <section className="py-24 bg-[#efefef]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16 text-center">
//             <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//               Proof Points
//             </h4>
//             <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
//               Real Outcomes, Real Impact
//             </h2>
//             <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
//               See how our intelligent automation solutions deliver measurable results across different sectors and use cases.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {proofPoints.map((point, idx) => (
//               <div key={idx} className="bg-white rounded-xl p-10 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
//                 <div className="flex items-center gap-3 text-[#70309d] mb-8">
//                   <Network size={16} />
//                   <h3 className="font-heading text-base font-bold uppercase tracking-widest text-[#3B4041]">
//                     {point.title}
//                   </h3>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
//                   <div className="md:col-span-3">
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Challenge</h4>
//                     <p className="text-xs text-slate-600 leading-relaxed">{point.challenge}</p>
//                   </div>
//                   <div className="md:col-span-5">
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Approach</h4>
//                     <p className="text-xs text-slate-600 leading-relaxed">{point.approach}</p>
//                   </div>
//                   <div className="md:col-span-4">
//                     <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Outcome</h4>
//                     <p className="text-xs font-bold text-[#3B4041] leading-relaxed italic border-l-2 border-[#70309d] pl-4">
//                       {point.outcome}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="py-24 bg-[#3B4041] text-center text-white">
//         <div className="max-w-3xl mx-auto px-6">
//           <h2 className="font-heading text-3xl md:text-4xl font-extrabold uppercase mb-6 tracking-tight">
//             READY TO EXPLORE INTELLIGENT AUTOMATION?
//           </h2>
//           <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-10 max-w-xl mx-auto">
//             Try our interactive tools to explore how our automation capabilities could apply
//             to your specific requirements.
//           </p>
//           <a
//             href="/demo"
//             className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#70309d] text-white text-xs font-bold rounded hover:bg-[#5a2680] transition-all duration-300"
//           >
//             Try the Interactive Demo <ArrowRight size={14} />
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Zap,
  MessageSquare,
  Network,
  BarChart2,
  ArrowRight,
  CheckCircle2,
  Settings,
  Cpu,
} from 'lucide-react';

const stats = [
  { value: '190+', label: 'Successful deployments across platforms' },
  { value: '39', label: 'Dedicated AI & automation developers' },
  { value: '60%', label: 'Reduction in manual operational tasks' },
  { value: '24/7', label: 'Intelligent automation systems uptime' },
];

const services = [
  {
    icon: Network,
    title: 'Automated Network Operations',
    desc: 'Automated monitoring, predictive fault detection, and intelligent capacity planning that transforms reactive operations into proactive management.',
    number: '01',
  },
  {
    icon: Settings,
    title: 'Intelligent Process Automation',
    desc: 'End-to-end workflow automation that eliminates manual overhead, reduces errors, and accelerates service delivery across your operations.',
    number: '02',
  },
  {
    icon: BarChart2,
    title: 'Predictive Analytics & Insights',
    desc: 'Data-driven decision support that identifies trends, forecasts demand, and provides actionable intelligence for infrastructure planning.',
    number: '03',
  },
  {
    icon: Zap,
    title: 'Automated Deployment Pipelines',
    desc: 'Infrastructure-as-code and CI/CD pipelines that enable rapid, consistent, and repeatable deployments across multi-site environments.',
    number: '04',
  },
  {
    icon: MessageSquare,
    title: 'Digital Front Door Solutions',
    desc: 'Knowledge systems that provide instant, structured answers about capabilities, approach, and delivery experience to prospects and partners.',
    number: '05',
  },
  {
    icon: Cpu,
    title: 'Custom Knowledge Systems',
    desc: "Bespoke solutions trained on your organisation's knowledge base, propositions, and delivery experience for intelligent customer engagement.",
    number: '06',
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
    title: 'Network Automation for Multi-Site Retail',
    challenge: 'A national retailer needed to standardise network configurations across 200+ stores while reducing deployment time from weeks to hours.',
    approach: 'We implemented automated configuration management with validation, enabling zero-touch provisioning for new sites and automated compliance checks across the estate.',
    outcome: '90% reduction in deployment time, zero configuration drift, and automated rollback capabilities for rapid recovery.',
  },
  {
    title: 'Knowledge System for Channel Partner',
    challenge: "A channel partner's pre-sales team was spending 60% of their time answering repetitive capability questions from prospects.",
    approach: "We built a custom knowledge system trained on the partner's propositions, case studies, and technical capabilities, providing instant structured responses.",
    outcome: 'Pre-sales team reclaimed 15+ hours per week, prospect response time dropped from days to seconds, and conversion rates improved by 25%.',
  },
  {
    title: 'Predictive Infrastructure Management for Healthcare',
    challenge: 'An NHS trust needed to move from reactive to proactive infrastructure management to ensure critical system availability.',
    approach: 'We deployed monitoring with predictive analytics that identifies potential failures before they impact services, combined with automated remediation workflows.',
    outcome: '99.99% uptime achieved, 70% reduction in P1 incidents, and automated capacity planning for seasonal demand.',
  },
];

const whyUs = [
  'Real delivery experience, not just theory',
  'Solutions built on your existing infrastructure',
  'Measurable outcomes from day one',
  'Channel-focused — we enhance your brand, not replace it',
  'Phased delivery that proves value at each stage',
  'Ongoing optimisation and support',
  'Practical automation that solves real business problems',
  'Transparent, collaborative approach',
];

export default function IntelligentAutomationPage() {
  return (
    <div className="font-body text-dark antialiased bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-center">
        <img
          src="/images/intelligent.png"
          alt="Intelligent Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041]/95 via-[#3B4041]/80 to-[#3B4041]/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #70309d 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 pt-40 pb-20">
          <h1 className="font-heading font-extrabold text-white uppercase leading-none tracking-tight mb-8">
            <span className="block text-4xl md:text-5xl lg:text-6xl">Intelligent</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-400 mt-1">Automation</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg mb-16">
            Not automation for the sake of it. We deliver practical, outcome-driven solutions that reduce cost, accelerate delivery, and transform how you operate — built on real delivery experience.
          </p>
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-8 max-w-lg">
            {['6 Services', '190+ Deployments', '60% Less Manual Work'].map((s, i) => (
              <div key={i}>
                <p className="text-white text-xs font-bold uppercase tracking-widest">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#3B4041] border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-extrabold text-brand-300 mb-1">{s.value}</div>
                <div className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left */}
            <div className="lg:col-span-5 lg:border-r border-slate-100 py-10 lg:py-20 lg:pr-12">
              <div className="sticky top-24">
                <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
                  Our Approach
                </h4>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
                  Pragmatic, Not Hype
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    'Real delivery experience, not just theory.',
                    'Measurable outcomes from day one.',
                    'Phased delivery that proves value at each stage.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-[#70309d] flex-shrink-0" />
                      <span className="text-[#3b4041] font-bold text-[10px] uppercase tracking-widest">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* Approach steps */}
                <div className="space-y-6">
                  {approachSteps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-[#efefef] text-[#70309d] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-[10px] font-bold text-[#3B4041] uppercase tracking-wider mb-1">{step.title}</h3>
                        <p className="text-[10px] text-slate-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7 md:py-4 lg:py-20 lg:pl-12 flex flex-col justify-center">
              <div className="hidden lg:block w-1 h-24 bg-[#70309d] mb-10 rounded-full" />
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                Every solution we deliver starts with a clear business problem and ends with measurable outcomes. Our approach is grounded in real delivery experience across complex enterprise environments — we don't sell automation for the sake of it.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                We design practical solutions that integrate with your existing infrastructure, using proven technologies and approaches. We implement in phases, proving value at each stage and ensuring seamless integration with your operational workflows, then continuously monitor and optimise based on real performance data.
              </p>

              {/* Why us panel */}
              <div className="mt-12 bg-[#3B4041] rounded-xl p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #70309d 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <p className="relative text-brand-300 font-heading text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
                  Why Partners Choose Us
                </p>
                <ul className="relative space-y-3">
                  {whyUs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={12} className="text-brand-300 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
              What We Deliver
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Our Services
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
                Practical, proven solutions that integrate seamlessly with your existing infrastructure and deliver measurable outcomes from day one.
              </p>
            </div>
            <div className="mt-5 h-[1px] w-full bg-[#70309d]/20" />
          </div>

          <div className="divide-y divide-slate-200">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row items-start py-10 hover:bg-white transition-colors duration-300 px-6 -mx-6 cursor-default"
                >
                  <div className="w-20 flex-shrink-0">
                    <span className="font-heading text-4xl font-extrabold text-[#70309d]/20 group-hover:text-[#70309d] transition-colors duration-300">
                      {svc.number}
                    </span>
                  </div>
                  <div className="w-14 flex-shrink-0 mt-1 hidden md:flex items-start justify-center">
                    <div className="w-10 h-10 rounded-lg bg-[#70309d]/10 group-hover:bg-[#70309d] transition-colors duration-300 flex items-center justify-center">
                      <Icon size={18} className="text-[#70309d] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="md:w-56 flex-shrink-0 mt-1 md:pr-8">
                    <h3 className="font-heading text-sm font-extrabold text-[#3B4041] uppercase tracking-widest leading-tight">
                      {svc.title}
                    </h3>
                  </div>
                  <div className="hidden md:block w-[1px] self-stretch bg-slate-200 group-hover:bg-[#70309d]/30 transition-colors duration-300 mr-8" />
                  <p className="flex-1 text-slate-500 text-xs leading-relaxed mt-2 md:mt-0">
                    {svc.desc}
                  </p>
                  <div className="hidden md:flex w-10 flex-shrink-0 justify-end items-start mt-1">
                    <span className="text-transparent group-hover:text-[#70309d] transition-all duration-300 font-bold text-lg group-hover:translate-x-1 inline-block">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROOF POINTS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
              Proof Points
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Real Outcomes, Real Impact
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
                See how our intelligent automation solutions deliver measurable results across different sectors and use cases.
              </p>
            </div>
            <div className="mt-5 h-[1px] w-full bg-[#70309d]/20" />
          </div>

          <div className="divide-y divide-slate-200">
            {proofPoints.map((point, idx) => (
              <div key={idx} className="group py-10 px-6 -mx-6 hover:bg-[#efefef] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-6 h-6 rounded-full bg-[#70309d]/10 group-hover:bg-[#70309d] flex items-center justify-center transition-colors duration-300">
                    <Network size={12} className="text-[#70309d] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-sm font-extrabold text-[#3B4041] uppercase tracking-widest">
                    {point.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pl-9">
                  <div className="md:col-span-3">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Challenge</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{point.challenge}</p>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Approach</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{point.approach}</p>
                  </div>
                  <div className="md:col-span-4">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Outcome</h4>
                    <p className="text-xs font-bold text-[#3B4041] leading-relaxed italic border-l-2 border-[#70309d] pl-4">
                      {point.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative py-20 bg-[#70309D] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, #fff 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="absolute left-0 inset-y-0 w-1/3 bg-[#3B4041]/40 hidden lg:block"
          style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold mb-2">Get In Touch</p>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white uppercase">
              Ready to explore intelligent automation?
            </h3>
          </div>
          <div className="flex gap-4">
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#70309D] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#3B4041] hover:text-white transition-colors duration-200"
            >
              See It In Action <ArrowRight size={14} />
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/40 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}