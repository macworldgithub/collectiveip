import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, CloudCog, ArrowRightLeft, MessageSquareShare, Wrench, Globe, BrainCircuit } from "lucide-react";

export default function PracticeCloudPage() {
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
            Cloud Services Practice
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            We simplify and secure cloud environments by implementing streamlined solutions that uphold data integrity, ensuring reliable and protected operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6">
                Cloud. Simplified.
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                IT Cloud services are evolving, driven by advancements in automation, AI, hybrid and multi-cloud strategies, and the increasing demand for scalability and security.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4">
                Businesses are shifting from traditional infrastructure to hybrid and cloud-native solutions, leveraging serverless and edge computing, VDI environments and AI-powered analytics. As cloud adoption grows, organisations face challenges such as managing complexity, reducing their costs, whilst ensuring security and compliance.
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                At Collective IP, we take a commercial approach in navigating this landscape by providing practical advice and services based on 20 years of channel experience. We provide cloud strategy, architecture, migration, and management services. With extensive technical expertise with core providers, we ensure businesses can embrace the benefits of cloud technology.
              </p>
              <ul className="space-y-3">
                {[
                  "Specialist knowledge in cloud strategy and implementation",
                  "Emphasis on cost optimisation",
                  "Resolute commitment to data integrity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#70309D] flex-shrink-0" />
                    <span className="text-[#3B4041] font-bold text-sm uppercase tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/cloud.png" alt="Cloud" className="w-full h-auto object-cover" />
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
                <CloudCog className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Cloud Consultancy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our cloud consultancy services provide professional guidance to help businesses navigate their cloud journey with precision and confidence. From strategic planning to implementation and optimisation, we focus on understanding your requirements and delivering exceptional service.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our purpose is to build trust and loyalty enabling long-term collaboration and customer retention.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <ArrowRightLeft className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Hybrid Cloud</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our hybrid cloud solutions integrate on-premises infrastructure with public and private cloud environments, offering your customers the flexibility they need. We design dynamic workload distribution, robust container orchestration, and secure multi-cloud interoperability.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We ensure the security of data at rest, monitor data loss prevention (DLP) for data in transit and provide highly-available connectivity for robust data synchronisation.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <MessageSquareShare className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">UC and Collaboration</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our cloud UC and collaboration services are designed to leverage AI enhanced products and capabilities to increase productivity across your organisation. We design integrated voice, video, messaging solutions with AI-driven collaboration tools that enable intelligent workflows, personalised communication and team interactions.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We facilitate your workforce to operate from any location with efficiency and innovation.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Wrench className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Implementation Services</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our cloud implementation services ensure a smooth transition leveraging any legacy investments to ensure the most cost effective migration. Whether a full transition to cloud, a partial multi step hybrid migration or co-location, our technical expertise and experience can guide you.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our approach is technical, commercial and practical.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <Globe className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">Cloud Connectivity</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our cloud connectivity services ensure reliable, high-performance access to cloud environments from Basic DSL and Fibre Circuits to multi cellular and satellite connectivity options. We design and implement redundant, multi-path solutions using MPLS, BGP and SD-WAN to connect clients to their applications and cloud storage.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                These specialist capabilities serve our partners.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
                <BrainCircuit className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">AI and Machine Learning</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Our AI services allow businesses to harness the proactive power of AI by leveraging predictive analytics, real-time insights and the automation of cloud services. Our AI enhanced security solutions allow for rapid attack response capabilities that provide 24/7 reactive protection, our localised LLM solutions allow for customer tailored generative AI assistants.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Collective IP have the expertise to help capitalise on this emerging technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
