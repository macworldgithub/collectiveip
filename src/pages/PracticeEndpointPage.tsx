// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CheckCircle2, ShieldHalf, Smartphone, MonitorSmartphone, MonitorPlay, Wifi, Cctv } from "lucide-react";

// export default function PracticeEndpointPage() {
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
//             Endpoint Infrastructure
//           </h1>
//           <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
//             Providing security and control of your diverse, distributed infrastructure at scale.
//           </p>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//                 Optimising Devices
//               </h4>
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
//                 Endpoint Management & IoT Strategy
//               </h2>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 Organisations now require secure and scalable endpoint solutions to support a diverse range of devices, including laptops, mobile phones, wireless IoT devices, AV systems, and CCTV.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 With the growing need for endpoint management, zero-trust security, and automation, we play an important role in delivering robust endpoint strategies.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 We provide consultancy, deployment, and ongoing support to enable organisations maintain secure, efficient, and high-performance endpoint ecosystems.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
//                 These solutions incorporate advanced endpoint management platforms, leveraging automation and AI-driven insights to enhance security posture, optimise device performance, and ensure simple integration within hybrid IT environments.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "Securing the endpoints (EDR/XDR)",
//                   "Remote deployment solutions",
//                   "Meticulous planning and rigorous evaluation"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-[#70309d] flex-shrink-0" />
//                     <span className="text-[#3b4041] font-bold text-xs uppercase tracking-wide">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Hidden on mobile/tablet, visible on lg+ */}
//             <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl">
//               <img src="/images/logos/endpoint.jpg" alt="Endpoint Infrastructure" className="w-full h-auto object-cover" />
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
//               Tailored portable, wireless, and media solutions that secure and optimize your endpoint estate.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <ShieldHalf className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Endpoint Consultancy</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our endpoint consultancy services focus on optimising the performance, security, and management of devices such as PCs, tablets, and mobile infrastructure. Your customers benefit from our expertise, gaining tailored solutions that enhance productivity and streamline operations.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We implement advanced endpoint management solutions, utilising machine learning and real time analytics to strengthen device security, ensure compliance, and support cross-platform functionality.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Smartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">IoT and M2M</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our IoT services are designed to unlock the potential of interconnected devices, enabling smarter and more efficient operations. Your customers benefit from our expertise, gaining customised solutions that enhance connectivity, data insights, and automation.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We deploy edge computing and advanced telemetry systems to enable real time data processing and analytics, ensuring secure, scalable, and high performance IoT environments tailored to diverse operational requirements.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <MonitorSmartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Personal and Mobile Devices</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are dedicated to providing tailored portable solutions that streamline IT operations and optimise resource utilisation. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We leverage EMS, MDM and MAM technologies to optimise the performance and integration of personal and mobile devices, ensuring compatibility across diverse platforms while maintaining robust security, availability and reliability.
//               </p>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <MonitorPlay className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">AV and Media Device</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our mobile device services are dedicated to optimising the performance, security, and integration of smartphones and tablets. Your customers benefit from our expertise, gaining tailored solutions that enhance mobility, productivity, and connectivity.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We implement mobile device management (MDM) solutions utilising encryption, secure containerisation, and real time monitoring to ensure robust security, seamless integration, and enhanced operational efficiency across diverse mobile platforms.
//               </p>
//             </div>

//             {/* Service 5 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Wifi className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Wireless Devices</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our advanced wireless services offer the full breadth of capabilities from localised expansion, to equipment refresh, to full greenfield deployments. We use specialist tools such as EKAHAU and Airmagnet to enhance connectivity and performance for a wide range of business sectors such as education, healthcare, local government, maritime and petrochemical.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Your customers benefit from our expertise, gaining reliable, secure, and efficient solutions that keep them continuously connected.
//               </p>
//             </div>

//             {/* Service 6 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Cctv className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">CCTV</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services specialise in direct-to-cloud solutions alongside established solutions, covering system design, vendor selection, deployment, integration and ongoing support. Footage is recorded on-camera, with archives and clips stored in the cloud for analytics and backup; eliminating the need for on-site NVRs.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 This enables rapid rollout, reduced infrastructure, and scalable access to video. Cloud analytics provide motion detection, object recognition, and anomaly alerts, with API integration for centralised management, role based access, and full lifecycle support.
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
import { CheckCircle2, ShieldHalf, Smartphone, MonitorSmartphone, MonitorPlay, Wifi, Cctv } from "lucide-react";

const services = [
  {
    icon: ShieldHalf,
    title: "Endpoint Consultancy",
    desc: "Our endpoint consultancy services focus on optimising the performance, security, and management of devices such as PCs, tablets, and mobile infrastructure. Your customers benefit from our expertise, gaining tailored solutions that enhance productivity and streamline operations. We implement advanced endpoint management solutions, utilising machine learning and real time analytics to strengthen device security, ensure compliance, and support cross-platform functionality.",
    number: "01",
  },
  {
    icon: Smartphone,
    title: "IoT and M2M",
    desc: "Our IoT services are designed to unlock the potential of interconnected devices, enabling smarter and more efficient operations. Your customers benefit from our expertise, gaining customised solutions that enhance connectivity, data insights, and automation. We deploy edge computing and advanced telemetry systems to enable real time data processing and analytics, ensuring secure, scalable, and high performance IoT environments tailored to diverse operational requirements.",
    number: "02",
  },
  {
    icon: MonitorSmartphone,
    title: "Personal and Mobile Devices",
    desc: "Our services are dedicated to providing tailored portable solutions that streamline IT operations and optimise resource utilisation. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements. We leverage EMS, MDM and MAM technologies to optimise the performance and integration of personal and mobile devices, ensuring compatibility across diverse platforms while maintaining robust security, availability and reliability.",
    number: "03",
  },
  {
    icon: MonitorPlay,
    title: "AV and Media Device",
    desc: "Our mobile device services are dedicated to optimising the performance, security, and integration of smartphones and tablets. Your customers benefit from our expertise, gaining tailored solutions that enhance mobility, productivity, and connectivity. We implement mobile device management (MDM) solutions utilising encryption, secure containerisation, and real time monitoring to ensure robust security, seamless integration, and enhanced operational efficiency across diverse mobile platforms.",
    number: "04",
  },
  {
    icon: Wifi,
    title: "Wireless Devices",
    desc: "Our advanced wireless services offer the full breadth of capabilities from localised expansion, to equipment refresh, to full greenfield deployments. We use specialist tools such as EKAHAU and Airmagnet to enhance connectivity and performance for a wide range of business sectors such as education, healthcare, local government, maritime and petrochemical. Your customers benefit from our expertise, gaining reliable, secure, and efficient solutions that keep them continuously connected.",
    number: "05",
  },
  {
    icon: Cctv,
    title: "CCTV",
    desc: "Our services specialise in direct-to-cloud solutions alongside established solutions, covering system design, vendor selection, deployment, integration and ongoing support. Footage is recorded on-camera, with archives and clips stored in the cloud for analytics and backup; eliminating the need for on-site NVRs. This enables rapid rollout, reduced infrastructure, and scalable access to video with cloud analytics providing motion detection, object recognition, and anomaly alerts.",
    number: "06",
  },
];

export default function PracticeEndpointPage() {
  return (
    <div className="font-body text-dark antialiased bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-center">
        <img
          src="/images/logos/endpoint.jpg"
          alt="Endpoint Infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041]/95 via-[#3B4041]/80 to-[#3B4041]/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #70309d 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 pt-40 pb-20">
          <h1 className="font-heading font-extrabold text-white uppercase leading-none tracking-tight mb-8">
            <span className="block text-4xl md:text-5xl lg:text-6xl">Endpoint</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-400 mt-1">Infrastructure</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg mb-16">
            Providing security and control of your diverse, distributed infrastructure at scale.
          </p>
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-8 max-w-lg">
            {["6 Services", "Hybrid IT", "End-to-End"].map((s, i) => (
              <div key={i}>
                <p className="text-white text-xs font-bold uppercase tracking-widest">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left: heading + checklist + image */}
            <div className="lg:col-span-5 lg:border-r border-slate-100 py-10 lg:py-20 lg:pr-12">
              <div className="sticky top-24">
                <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
                  Optimising Devices
                </h4>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
                  Endpoint Management & IoT Strategy
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Securing the endpoints (EDR/XDR).",
                    "Remote deployment solutions.",
                    "Meticulous planning and rigorous evaluation.",
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
                    src="/images/logos/endpoint.jpg"
                    alt="Endpoint Infrastructure"
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: body copy + pull quote */}
            <div className="lg:col-span-7 md:py-4 lg:py-20 lg:pl-12 flex flex-col justify-center">
              <div className="hidden lg:block w-1 h-24 bg-[#70309d] mb-10 rounded-full" />
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                Organisations now require secure and scalable endpoint solutions to support a diverse range of devices, including laptops, mobile phones, wireless IoT devices, AV systems, and CCTV. With the growing need for endpoint management, zero-trust security, and automation, we play an important role in delivering robust endpoint strategies.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                We provide consultancy, deployment, and ongoing support to enable organisations maintain secure, efficient, and high-performance endpoint ecosystems.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                These solutions incorporate advanced endpoint management platforms, leveraging automation and AI-driven insights to enhance security posture, optimise device performance, and ensure simple integration within hybrid IT environments.
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
                  "Secure. Managed. <span className="text-brand-400">Always In Control.</span>"
                </p>
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
              Practice Capabilities
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Our Services
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
                Tailored portable, wireless, and media solutions that secure and optimise your endpoint estate.
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
              Ready to secure your endpoint estate?
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