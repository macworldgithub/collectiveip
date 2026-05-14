import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, ShieldHalf, Smartphone, MonitorSmartphone, MonitorPlay, Wifi, Cctv } from "lucide-react";

export default function PracticeEndpointPage() {
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
            Endpoint Infrastructure
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Providing Security and control of your diverse, distributed infrastructure at scale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6">
                Optimising Devices
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                Organisations now require secure and scalable endpoint solutions to support a diverse range of devices, including laptops, mobile phones, wireless IoT devices, AV systems, and CCTV.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                With the growing need for endpoint management, zero-trust security, and automation, we play an important role in delivering robust endpoint strategies.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                We provide consultancy, deployment, and ongoing support to enable organisations maintain secure, efficient, and high-performance endpoint ecosystems.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                These solutions incorporate advanced endpoint management platforms, leveraging automation and AI-driven insights to enhance security posture, optimise device performance, and ensure simple integration within hybrid IT environments.
              </p>
              <ul className="space-y-3">
                {[
                  "Securing the endpoints (EDR/XDR)",
                  "Remote deployment solutions",
                  "Meticulous planning and rigorous evaluation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#70309D] flex-shrink-0" />
                    <span className="text-[#3B4041] font-bold text-sm uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/logos/connectivity.jpg" alt="Endpoint Infrastructure" className="w-full h-auto object-cover" />
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
                <ShieldHalf className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Endpoint Consultancy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our endpoint consultancy services focus on optimising the performance, security, and management of devices such as PCs, tablets, and mobile infrastructure. Your customers benefit from our expertise, gaining tailored solutions that enhance productivity and streamline operations.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We implement advanced endpoint management solutions, utilising machine learning and real time analytics to strengthen device security, ensure compliance, and support cross-platform functionality.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Smartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">IoT and M2M</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our IoT services are designed to unlock the potential of interconnected devices, enabling smarter and more efficient operations. Your customers benefit from our expertise, gaining customised solutions that enhance connectivity, data insights, and automation.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We deploy edge computing and advanced telemetry systems to enable real time data processing and analytics, ensuring secure, scalable, and high performance IoT environments tailored to diverse operational requirements.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <MonitorSmartphone className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Personal and Mobile Devices</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services are dedicated to providing tailored portable solutions that streamline IT operations and optimise resource utilisation. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We leverage EMS, MDM and MAM technologies to optimise the performance and integration of personal and mobile devices, ensuring compatibility across diverse platforms while maintaining robust security, availability and reliability.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <MonitorPlay className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">AV and Media Device</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our mobile device services are dedicated to optimising the performance, security, and integration of smartphones and tablets. Your customers benefit from our expertise, gaining tailored solutions that enhance mobility, productivity, and connectivity.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We implement mobile device management (MDM) solutions utilising encryption, secure containerisation, and real time monitoring to ensure robust security, seamless integration, and enhanced operational efficiency across diverse mobile platforms.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Wifi className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Wireless Devices</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our advanced wireless services offer the full breadth of capabilities from localised expansion, to equipment refresh, to full greenfield deployments. We use specialist tools such as EKAHAU and Airmagnet to enhance connectivity and performance for a wide range of business sectors such as education, healthcare, local government, maritime and petrochemical.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Your customers benefit from our expertise, gaining reliable, secure, and efficient solutions that keep them continuously connected.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Cctv className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">CCTV</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our services specialise in direct-to-cloud solutions alongside established solutions, covering system design, vendor selection, deployment, integration and ongoing support. Footage is recorded on-camera, with archives and clips stored in the cloud for analytics and backup; eliminating the need for on-site NVRs.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                This enables rapid rollout, reduced infrastructure, and scalable access to video. Cloud analytics provide motion detection, object recognition, and anomaly alerts, with API integration for centralised management, role based access, and full lifecycle support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
