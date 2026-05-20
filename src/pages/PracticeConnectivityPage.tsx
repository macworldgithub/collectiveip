// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CheckCircle2, Shield, Radio, Satellite, Smartphone, Workflow } from "lucide-react";

// export default function PracticeConnectivityPage() {
//   return (
//     <div className="font-body text-dark antialiased bg-white">
//       <Navbar />

//       {/* Hero */}
//       <section className="relative pt-40 pb-32 overflow-hidden bg-[#3B4041]">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-70"
//           style={{
//             backgroundImage: "url(/images/logos/connectivity.jpg)",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />
        
//         {/* Abstract lines pattern overlay */}
//         <div className="absolute inset-0 opacity-20"
//           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #70309d 1px, transparent 0)', backgroundSize: '40px 40px' }} />

//         <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
//           <p className="text-brand-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">
//             Practice Detail
//           </p>
//           <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
//             Connectivity Practice
//           </h1>
//           <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
//             Our Connectivity Practice delivers secure, high-performance networking solutions, providing businesses with highly-available redundant connectivity that drives their digital transformation journey.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//                 Staying Connected
//               </h4>
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
//                 Enterprise Networking & SD-WAN
//               </h2>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 The network is evolving rapidly, driven by innovations in cloud computing, IoT, 5G, and remote work dynamics. As businesses rely more on digital technologies to stay competitive, the demand for robust, scalable, and secure network infrastructures has never been higher. Companies now require networks that can handle huge amounts of data, provide flawless connectivity, and protect against ever increasing cyber threats.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
//                 With the continuous growth of data-driven applications, the need for high-performance and flexible networking solutions is expanding across all industries. This transformation is also driving a surge in the demand for skilled professionals in network design, management, and security to ensure that businesses can operate efficiently and securely in today's digital world. At Collective IP, we are dedicated to helping you navigate this changing landscape, offering enterprise grade network solutions that address this need.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "Highly skilled and flexible.",
//                   "Diverse service portfolio.",
//                   "Solution orientated."
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-[#70309d] flex-shrink-0" />
//                     <span className="text-[#3b4041] font-bold text-xs uppercase tracking-wide">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img src="/images/logos/connectivity-hero.jpg" alt="Connectivity" className="w-full h-auto object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-24 bg-[#efefef]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16 text-center">
//             <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//               Practice Capabilities
//             </h4>
//             <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-4">
//               Our Services
//             </h2>
//             <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
//               Proven, high-performance connectivity capabilities delivered with technical assurance and commercial grounding.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Workflow className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Network Consultancy</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our network consultants advise, design and implement solutions to optimise PAN, LAN, MAN, WAN, GWAN including SDN and SD-WAN. We specialise in complex wireless remediation and optimisation. We secure, improve network efficiency and ensure resilience across complex IT environments.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Shield className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Network Infrastructure</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our network infrastructure services design, deploy and maintain scalable, secure architectures across all networks, from switches, routers, firewalls, AEA, and multiplexers. Our field services teams deploy, refresh, install and configure network equipment to maintain lifecycle compliance.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Radio className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Wireless Infrastructure</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our wireless infrastructure services specialise in designing, deploying and remediating simple and complex wireless environments. We provide scalable, high-performance solutions across Wi-Fi, IoT, and PtMP, leveraging emerging technologies to ensure connectivity, security, and coverage.
//               </p>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Satellite className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Satellite</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We provide dedicated or hybrid satellite connectivity solutions to remote and desolate locations, from HTS services (Starlink) to GEO sync (Viasat). Where possible these are hybrid cellular solutions designed to provide the most resilience in remote places.
//               </p>
//             </div>

//             {/* Service 5 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Smartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Cellular</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our cellular services design and deploy scalable, high-performance solutions from 2G up to and including 5G NR. We design and implement Private APNs and active, passive and hybrid Distributed Antenna Systems (DAS) for mobile connectivity approved by OFCOM.
//               </p>
//             </div>

//             {/* Service 6 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Workflow className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Infrastructure Cabling</h3>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We design and install high-performance, scalable structured cabling systems, including fiber optic, copper, and coaxial solutions. We design for optimal signal integrity, minimal latency and optimise resilience, supporting data, voice, and video across complex environments.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Shield, Radio, Satellite, Smartphone, Workflow } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Network Consultancy",
    desc: "Our network consultants advise, design and implement solutions to optimise PAN, LAN, MAN, WAN, GWAN including SDN and SD-WAN. We specialise in complex wireless remediation and optimisation. We secure, improve network efficiency and ensure resilience across complex IT environments.",
    number: "01",
  },
  {
    icon: Shield,
    title: "Network Infrastructure",
    desc: "Our network infrastructure services design, deploy and maintain scalable, secure architectures across all networks, from switches, routers, firewalls, AEA, and multiplexers. Our field services teams deploy, refresh, install and configure network equipment to maintain lifecycle compliance.",
    number: "02",
  },
  {
    icon: Radio,
    title: "Wireless Infrastructure",
    desc: "Our wireless infrastructure services specialise in designing, deploying and remediating simple and complex wireless environments. We provide scalable, high-performance solutions across Wi-Fi, IoT, and PtMP, leveraging emerging technologies to ensure connectivity, security, and coverage.",
    number: "03",
  },
  {
    icon: Satellite,
    title: "Satellite",
    desc: "We provide dedicated or hybrid satellite connectivity solutions to remote and desolate locations, from HTS services (Starlink) to GEO sync (Viasat). Where possible these are hybrid cellular solutions designed to provide the most resilience in remote places.",
    number: "04",
  },
  {
    icon: Smartphone,
    title: "Cellular",
    desc: "Our cellular services design and deploy scalable, high-performance solutions from 2G up to and including 5G NR. We design and implement Private APNs and active, passive and hybrid Distributed Antenna Systems (DAS) for mobile connectivity approved by OFCOM.",
    number: "05",
  },
  {
    icon: Workflow,
    title: "Infrastructure Cabling",
    desc: "We design and install high-performance, scalable structured cabling systems, including fiber optic, copper, and coaxial solutions. We design for optimal signal integrity, minimal latency and optimise resilience, supporting data, voice, and video across complex environments.",
    number: "06",
  },
];

export default function PracticeConnectivityPage() {
  return (
    <div className="font-body text-dark antialiased bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO: Full-bleed with overlay ── */}
      <section className="relative flex items-center">
        {/* Full background image */}
        <img
          src="/images/logos/hero-main.png"
          alt="Connectivity"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041]/95 via-[#3B4041]/80 to-[#3B4041]/30" />
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #70309d 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 pt-40 pb-20">
          
          <h1 className="font-heading font-extrabold text-white uppercase leading-none tracking-tight mb-8">
            <span className="block text-4xl md:text-5xl lg:text-6xl">Connectivity</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-400 mt-1">Practice</span>
          </h1>
        
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg mb-16">
            Secure, high-performance networking solutions — providing businesses with highly-available redundant connectivity that drives their digital transformation journey.
          </p>

          {/* Stat strip */}
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-8 max-w-lg">
            {["6 Services", "Enterprise Grade", "End-to-End"].map((s, i) => (
              <div key={i}>
                <p className="text-white text-xs font-bold uppercase tracking-widest">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO: Clean 2-col layout ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: heading + checklist + image */}
            <div className="lg:col-span-5 lg:border-r border-slate-100 py-10 lg:py-20 lg:pr-12">
              <div className="sticky top-24">
                <h4 className="text-[10px] font-bold text-brand-600 uppercase tracking-[0.25em] mb-3">
                  Staying Connected
                </h4>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
                  Enterprise Networking & SD-WAN
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Highly skilled and flexible.",
                    "Diverse service portfolio.",
                    "Solution orientated.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-[#70309d] flex-shrink-0" />
                      <span className="text-[#3b4041] font-bold text-[10px] uppercase tracking-widest">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/images/logos/connectivity-img.png"
                    alt="Connectivity"
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: body copy + pull quote */}
        <div className="lg:col-span-7 md:py-4 lg:py-20 lg:pl-12 flex flex-col justify-center">
              <div className="hidden lg:block w-1  h-24 bg-[#70309d] mb-10 rounded-full" />
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                The network is evolving rapidly, driven by innovations in cloud computing, IoT, 5G, and remote work dynamics. As businesses rely more on digital technologies to stay competitive, the demand for robust, scalable, and secure network infrastructures has never been higher. Companies now require networks that can handle huge amounts of data, provide flawless connectivity, and protect against ever increasing cyber threats.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                With the continuous growth of data-driven applications, the need for high-performance and flexible networking solutions is expanding across all industries. This transformation is also driving a surge in the demand for skilled professionals in network design, management, and security to ensure that businesses can operate efficiently and securely in today's digital world. At Collective IP, we are dedicated to helping you navigate this changing landscape, offering enterprise grade network solutions that address this need.
              </p>
              <div className="mt-12 bg-[#3B4041] rounded-xl p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #70309d 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <p className="relative text-white font-heading text-lg font-bold uppercase leading-snug">
                  "Secure. Resilient. <span className="text-brand-400">Always On.</span>"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Section header — stacked, not inline */}
          <div className="mb-16">
            <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
              Practice Capabilities
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Our Services
              </h2>
              {/* <p className="text-xs text-slate-500 lg:max-w-[65%] leading-relaxed md:text-right">
                Proven, high-performance connectivity capabilities delivered with technical assurance and commercial grounding.
              </p> */}
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
  Proven, high-performance connectivity capabilities delivered with technical assurance and commercial grounding.
</p>
            </div>
            <div className="mt-5 h-[1px] w-full bg-[#70309d]/20" />
          </div>

          {/* Service rows */}
          <div className="divide-y divide-slate-200">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row items-start py-10 hover:bg-white transition-colors duration-300 px-6 -mx-6 cursor-default"
                >
                  {/* Number */}
                  <div className="w-20 flex-shrink-0">
                    <span className="font-heading text-4xl font-extrabold text-[#70309d]/20 group-hover:text-[#70309d] transition-colors duration-300">
                      {svc.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 flex-shrink-0 mt-1 hidden md:flex items-start justify-center">
                    <div className="w-10 h-10 rounded-lg bg-[#70309d]/10 group-hover:bg-[#70309d] transition-colors duration-300 flex items-center justify-center">
                      <Icon size={18} className="text-[#70309d] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="md:w-56 flex-shrink-0 mt-1 md:pr-8">
                    <h3 className="font-heading text-sm font-extrabold text-[#3B4041] uppercase tracking-widest leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-[1px] self-stretch bg-slate-200 group-hover:bg-[#70309d]/30 transition-colors duration-300 mr-8" />

                  {/* Description */}
                  <p className="flex-1 text-slate-500 text-xs leading-relaxed mt-2 md:mt-0">
                    {svc.desc}
                  </p>

                  {/* Arrow */}
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

      {/* ── CTA BAND ── */}
      <section className="relative py-20 bg-[#70309D] overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #fff 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute left-0 inset-y-0 w-1/3 bg-[#3B4041]/40 hidden lg:block"
          style={{ clipPath: "polygon(0 0, 80% 0, 100% 100%, 0 100%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-bold mb-2">Get In Touch</p>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white uppercase">
              Ready to transform your network?
            </h3>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-white text-[#70309D] text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#3B4041] hover:text-white transition-colors duration-200">
              Contact Us
            </button>
            <button className="px-8 py-3 border border-white/40 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-colors duration-200">
              Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}