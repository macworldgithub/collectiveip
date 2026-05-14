import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Shield, Radio, Satellite, Smartphone, Workflow } from "lucide-react";

export default function PracticeConnectivityPage() {
  return (
    <div className="font-body text-[#3B4041] antialiased bg-[#efefef]">
      <Navbar />

      {/* Hero */}
      <section className="relative py-52 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url(/images/logos/connectivity.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B] via-[#1E293B]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-brand-300 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Practice Detail
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Connectivity Practice
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Our Connectivity Practice delivers secure, high-performance networking solutions, providing businesses with highly-available redundant connectivity that drives their digital transformation journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6">
                Staying Connected
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                The network is evolving rapidly, driven by innovations in cloud computing, IoT, 5G, and remote work dynamics. As businesses rely more on digital technologies to stay competitive, the demand for robust, scalable, and secure network infrastructures has never been higher. Companies now require networks that can handle huge amounts of data, provide flawless connectivity, and protect against ever increasing cyber threats.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                With the continuous growth of data-driven applications, the need for high-performance and flexible networking solutions is expanding across all industries. This transformation is also driving a surge in the demand for skilled professionals in network design, management, and security to ensure that businesses can operate efficiently and securely in today's digital world. At Collective IP, we are dedicated to helping you navigate this changing landscape, offering enterprise grade network solutions that address this need.
              </p>
              <ul className="space-y-3">
                {[
                  "Highly skilled and flexible.",
                  "Diverse service portfolio.",
                  "Solution orientated."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#70309D] flex-shrink-0" />
                    <span className="text-[#3B4041] font-bold text-sm uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/logos/connectivity-hero.jpg" alt="Connectivity" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#70309D] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Workflow className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Network Consultancy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our network consultants advise, design and implement solutions to optimise PAN, LAN, MAN, WAN, GWAN including SDN and SD-WAN. We specialise in complex wireless remediation and optimisation. We secure, improve network efficiency and ensure resilience across complex IT environments.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Shield className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Network Infrastructure</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our network infrastructure services design, deploy and maintain scalable, secure architectures across all networks, from switches, routers, firewalls, AEA, and multiplexers. Our field services teams deploy, refresh, install and configure network equipment to maintain lifecycle compliance.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Radio className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Wireless Infrastructure</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our wireless infrastructure services specialise in designing, deploying and remediating simple and complex wireless environments. We provide scalable, high-performance solutions across Wi-Fi, IoT, and PtMP, leveraging emerging technologies to ensure connectivity, security, and coverage.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Satellite className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Satellite</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We provide dedicated or hybrid satellite connectivity solutions to remote and desolate locations, from HTS services (Starlink) to GEO sync (Viasat). Where possible these are hybrid cellular solutions designed to provide the most resilience in remote places.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Smartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Cellular</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our cellular services design and deploy scalable, high-performance solutions from 2G up to and including 5G NR. We design and implement Private APNs and active, passive and hybrid Distributed Antenna Systems (DAS) for mobile connectivity approved by OFCOM.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Workflow className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Infrastructure Cabling</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We design and install high-performance, scalable structured cabling systems, including fiber optic, copper, and coaxial solutions. We design for optimal signal integrity, minimal latency and optimise resilience, supporting data, voice, and video across complex environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
