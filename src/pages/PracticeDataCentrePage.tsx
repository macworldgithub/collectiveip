import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Server, Database, Layers, RotateCcw, Cpu, ShieldCheck } from "lucide-react";

export default function PracticeDataCentrePage() {
  return (
    <div className="font-body text-[#3B4041] antialiased bg-[#efefef]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
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
            Data Centre and Compute
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Delivering secure, high-performance infrastructure for your core. Powering Possibilities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6">
                Powering Possibilities
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                IT data centre and compute services are rapidly evolving to address the growing demands for scalability, efficiency, and cutting-edge technology.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                With the increasing adoption of cloud computing, virtualisation, and edge computing, businesses are seeking more agile, secure, and cost-effective solutions to manage their workloads. As data centres transition towards greener practices and advanced automation, the complexity of integrating new technologies and maintaining robust systems continues to rise.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                At Collective IP we play an active role in navigating these changes, offering the expertise to design, implement, and optimise infrastructure tailored to an organisation’s unique needs.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                By providing strategic guidance, proactive support, and scalable solutions, we ensure businesses can leverage the latest advancements to drive growth and enhance performance.
              </p>
              <ul className="space-y-3">
                {[
                  "Maximising IOPS per unit of cost",
                  "Energy efficient architectures",
                  "Secure designs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#70309D] flex-shrink-0" />
                    <span className="text-[#3B4041] font-bold text-sm uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/logos/connectivity.jpg" alt="Data Centre" className="w-full h-auto object-cover" />
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
                <Server className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Data Centre Consultancy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are designed to deliver customised solutions for data centre planning, design, and management. We work closely with your customers to ensure facilities are optimised for operational efficiency, environmental sustainability, and future scalability.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Database className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Backup and Colocation</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are dedicated to delivering tailored solutions in backup and colocation, ensuring data integrity and secure infrastructure. Your customers benefit from our expertise, gaining reliable, scalable, and efficient systems to safeguard their critical assets and support their operational needs.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Layers className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Virtualisation</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are dedicated to providing tailored virtualisation solutions that streamline IT operations, prioritise resource utilisation and optimise electrical efficiency. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <RotateCcw className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Data and Disaster Recovery</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are dedicated to providing tailored data and disaster recovery solutions that protect critical business information and ensure business continuity. Your customers benefit from our expertise, gaining reliable, scalable systems to secure their data and recover swiftly from unexpected events.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Cpu className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">High Performance Computing</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are focused on delivering customised high-performance computing solutions to meet the most demanding computational needs. Your customers benefit from our expertise, ensuring their systems are powerful, scalable, and capable of driving innovation and efficiency.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <ShieldCheck className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Business Continuity</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are dedicated to delivering customised business continuity solutions that minimise disruptions and safeguard critical operations. Your customers benefit from our expertise, gaining reliable, scalable strategies to ensure seamless functionality during unexpected challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
