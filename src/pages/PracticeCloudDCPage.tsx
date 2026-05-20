// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CheckCircle2, CloudCog, ArrowRightLeft, MessageSquareShare, Wrench, Globe, BrainCircuit, Server, Database, Layers, RotateCcw, Cpu, ShieldCheck } from "lucide-react";

// export default function PracticeCloudDCPage() {
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
//             Cloud, DC & Compute
//           </h1>
//           <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
//             End-to-end cloud strategy, data centre infrastructure, and high-performance compute — designed, delivered, and managed with precision.
//           </p>
//         </div>
//       </section>

//       {/* Cloud Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//                 Cloud. Simplified.
//               </h4>
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
//                 Cloud Strategy & Migration
//               </h2>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 IT Cloud services are evolving, driven by advancements in automation, AI, hybrid and multi-cloud strategies, and the increasing demand for scalability and security.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 Businesses are shifting from traditional infrastructure to hybrid and cloud-native solutions, leveraging serverless and edge computing, VDI environments and AI-powered analytics. As cloud adoption grows, organisations face challenges such as managing complexity, reducing their costs, whilst ensuring security and compliance.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
//                 At Collective IP, we take a commercial approach in navigating this landscape by providing practical advice and services based on 20 years of channel experience. We provide cloud strategy, architecture, migration, and management services. With extensive technical expertise with core providers, we ensure businesses can embrace the benefits of cloud technology.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "Specialist knowledge in cloud strategy and implementation",
//                   "Emphasis on cost optimisation",
//                   "Resolute commitment to data integrity"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-[#70309d] flex-shrink-0" />
//                     <span className="text-[#3b4041] font-bold text-xs uppercase tracking-wide">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <img src="/images/cloud.png" alt="Cloud" className="w-full h-auto object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cloud Services Grid */}
//       <section className="py-24 bg-[#efefef]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16 text-center">
//             <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//               Cloud Capabilities
//             </h4>
//             <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-4">
//               Cloud Services
//             </h2>
//             <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
//               Tailored migration, connectivity, and artificial intelligence solutions deployed with commercial certainty.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <CloudCog className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Cloud Consultancy</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our cloud consultancy services provide professional guidance to help businesses navigate their cloud journey with precision and confidence. From strategic planning to implementation and optimisation, we focus on understanding your requirements and delivering exceptional service.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our purpose is to build trust and loyalty enabling long-term collaboration and customer retention.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <ArrowRightLeft className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Hybrid Cloud</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our hybrid cloud solutions integrate on-premises infrastructure with public and private cloud environments, offering your customers the flexibility they need. We design dynamic workload distribution, robust container orchestration, and secure multi-cloud interoperability.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We ensure the security of data at rest, monitor data loss prevention (DLP) for data in transit and provide highly-available connectivity for robust data synchronisation.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <MessageSquareShare className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">UC and Collaboration</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our cloud UC and collaboration services are designed to leverage AI enhanced products and capabilities to increase productivity across your organisation. We design integrated voice, video, messaging solutions with AI-driven collaboration tools that enable intelligent workflows, personalised communication and team interactions.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 We facilitate your workforce to operate from any location with efficiency and innovation.
//               </p>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Wrench className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Implementation Services</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our cloud implementation services ensure a smooth transition leveraging any legacy investments to ensure the most cost effective migration. Whether a full transition to cloud, a partial multi step hybrid migration or co-location, our technical expertise and experience can guide you.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Our approach is technical, commercial and practical.
//               </p>
//             </div>

//             {/* Service 5 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Globe className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Cloud Connectivity</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our cloud connectivity services ensure reliable, high-performance access to cloud environments from Basic DSL and Fibre Circuits to multi cellular and satellite connectivity options. We design and implement redundant, multi-path solutions using MPLS, BGP and SD-WAN to connect clients to their applications and cloud storage.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 These specialist capabilities serve our partners.
//               </p>
//             </div>

//             {/* Service 6 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <BrainCircuit className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">AI and Machine Learning</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our AI services allow businesses to harness the proactive power of AI by leveraging predictive analytics, real-time insights and the automation of cloud services. Our AI enhanced security solutions allow for rapid attack response capabilities that provide 24/7 reactive protection, our localised LLM solutions allow for customer tailored generative AI assistants.
//               </p>
//               <p className="text-slate-500 text-xs leading-relaxed">
//                 Collective IP have the expertise to help capitalise on this emerging technology.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Data Centre Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="lg:order-2">
//               <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//                 Data Centre & Compute
//               </h4>
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
//                 Compute & Resilient Infrastructure
//               </h2>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 IT data centre and compute services are rapidly evolving to address the growing demands for scalability, efficiency, and cutting-edge technology.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 With the increasing adoption of cloud computing, virtualisation, and edge computing, businesses are seeking more agile, secure, and cost-effective solutions to manage their workloads. As data centres transition towards greener practices and advanced automation, the complexity of integrating new technologies and maintaining robust systems continues to rise.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">
//                 At Collective IP we play an active role in navigating these changes, offering the expertise to design, implement, and optimise infrastructure tailored to an organisation's unique needs.
//               </p>
//               <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8">
//                 By providing strategic guidance, proactive support, and scalable solutions, we ensure businesses can leverage the latest advancements to drive growth and enhance performance.
//               </p>
//               <ul className="space-y-3">
//                 {[
//                   "Maximising IOPS per unit of cost",
//                   "Energy efficient architectures",
//                   "Secure designs"
//                 ].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-[#70309d] flex-shrink-0" />
//                     <span className="text-[#3b4041] font-bold text-xs uppercase tracking-wide">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:order-1">
//               <img src="/images/logos/data-center.jpg" alt="Data Centre" className="w-full h-auto object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Data Centre Services Grid */}
//       <section className="py-24 bg-[#efefef]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="mb-16 text-center">
//             <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-4">
//               Infrastructure Capabilities
//             </h4>
//             <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-4">
//               Data Centre & Compute Services
//             </h2>
//             <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed">
//               Enterprise-grade backup, high-performance compute, and business continuity systems built with technical assurance.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Service 1 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Server className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Data Centre Consultancy</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are designed to deliver customised solutions for data centre planning, design, and management. We work closely with your customers to ensure facilities are optimised for operational efficiency, environmental sustainability, and future scalability.
//               </p>
//             </div>

//             {/* Service 2 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Database className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Backup and Colocation</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are dedicated to delivering tailored solutions in backup and colocation, ensuring data integrity and secure infrastructure. Your customers benefit from our expertise, gaining reliable, scalable, and efficient systems to safeguard their critical assets and support their operational needs.
//               </p>
//             </div>

//             {/* Service 3 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Layers className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Virtualisation</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are dedicated to providing tailored virtualisation solutions that streamline IT operations, prioritise resource utilisation and optimise electrical efficiency. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements.
//               </p>
//             </div>

//             {/* Service 4 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <RotateCcw className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Data and Disaster Recovery</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are dedicated to providing tailored data and disaster recovery solutions that protect critical business information and ensure business continuity. Your customers benefit from our expertise, gaining reliable, scalable systems to secure their data and recover swiftly from unexpected events.
//               </p>
//             </div>

//             {/* Service 5 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <Cpu className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">High Performance Computing</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are focused on delivering customised high-performance computing solutions to meet the most demanding computational needs. Your customers benefit from our expertise, ensuring their systems are powerful, scalable, and capable of driving innovation and efficiency.
//               </p>
//             </div>

//             {/* Service 6 */}
//             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-[#70309d] hover:shadow-md transition-all duration-300 group">
//               <div className="w-14 h-14 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#70309D] transition-colors duration-300">
//                 <ShieldCheck className="text-[#70309D] group-hover:text-white transition-colors duration-300" size={28} />
//               </div>
//               <h3 className="font-heading text-base font-bold text-[#3B4041] uppercase tracking-widest mb-4">Business Continuity</h3>
//               <p className="text-slate-500 text-xs leading-relaxed mb-3">
//                 Our services are dedicated to delivering customised business continuity solutions that minimise disruptions and safeguard critical operations. Your customers benefit from our expertise, gaining reliable, scalable strategies to ensure seamless functionality during unexpected challenges.
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
import { CheckCircle2, CloudCog, ArrowRightLeft, MessageSquareShare, Wrench, Globe, BrainCircuit, Server, Database, Layers, RotateCcw, Cpu, ShieldCheck } from "lucide-react";

const cloudServices = [
  {
    icon: CloudCog,
    title: "Cloud Consultancy",
    desc: "Our cloud consultancy services provide professional guidance to help businesses navigate their cloud journey with precision and confidence. From strategic planning to implementation and optimisation, we focus on understanding your requirements and delivering exceptional service. Our purpose is to build trust and loyalty enabling long-term collaboration and customer retention.",
    number: "01",
  },
  {
    icon: ArrowRightLeft,
    title: "Hybrid Cloud",
    desc: "Our hybrid cloud solutions integrate on-premises infrastructure with public and private cloud environments, offering your customers the flexibility they need. We design dynamic workload distribution, robust container orchestration, and secure multi-cloud interoperability. We ensure the security of data at rest, monitor data loss prevention (DLP) for data in transit and provide highly-available connectivity for robust data synchronisation.",
    number: "02",
  },
  {
    icon: MessageSquareShare,
    title: "UC and Collaboration",
    desc: "Our cloud UC and collaboration services are designed to leverage AI enhanced products and capabilities to increase productivity across your organisation. We design integrated voice, video, messaging solutions with AI-driven collaboration tools that enable intelligent workflows, personalised communication and team interactions. We facilitate your workforce to operate from any location with efficiency and innovation.",
    number: "03",
  },
  {
    icon: Wrench,
    title: "Implementation Services",
    desc: "Our cloud implementation services ensure a smooth transition leveraging any legacy investments to ensure the most cost effective migration. Whether a full transition to cloud, a partial multi step hybrid migration or co-location, our technical expertise and experience can guide you. Our approach is technical, commercial and practical.",
    number: "04",
  },
  {
    icon: Globe,
    title: "Cloud Connectivity",
    desc: "Our cloud connectivity services ensure reliable, high-performance access to cloud environments from Basic DSL and Fibre Circuits to multi cellular and satellite connectivity options. We design and implement redundant, multi-path solutions using MPLS, BGP and SD-WAN to connect clients to their applications and cloud storage. These specialist capabilities serve our partners.",
    number: "05",
  },
  {
    icon: BrainCircuit,
    title: "AI and Machine Learning",
    desc: "Our AI services allow businesses to harness the proactive power of AI by leveraging predictive analytics, real-time insights and the automation of cloud services. Our AI enhanced security solutions allow for rapid attack response capabilities that provide 24/7 reactive protection, our localised LLM solutions allow for customer tailored generative AI assistants. Collective IP have the expertise to help capitalise on this emerging technology.",
    number: "06",
  },
];

const dcServices = [
  {
    icon: Server,
    title: "Data Centre Consultancy",
    desc: "Our services are designed to deliver customised solutions for data centre planning, design, and management. We work closely with your customers to ensure facilities are optimised for operational efficiency, environmental sustainability, and future scalability.",
    number: "01",
  },
  {
    icon: Database,
    title: "Backup and Colocation",
    desc: "Our services are dedicated to delivering tailored solutions in backup and colocation, ensuring data integrity and secure infrastructure. Your customers benefit from our expertise, gaining reliable, scalable, and efficient systems to safeguard their critical assets and support their operational needs.",
    number: "02",
  },
  {
    icon: Layers,
    title: "Virtualisation",
    desc: "Our services are dedicated to providing tailored virtualisation solutions that streamline IT operations, prioritise resource utilisation and optimise electrical efficiency. Your customers benefit from our expertise, ensuring their systems are agile, scalable, and equipped for future technological advancements.",
    number: "03",
  },
  {
    icon: RotateCcw,
    title: "Data and Disaster Recovery",
    desc: "Our services are dedicated to providing tailored data and disaster recovery solutions that protect critical business information and ensure business continuity. Your customers benefit from our expertise, gaining reliable, scalable systems to secure their data and recover swiftly from unexpected events.",
    number: "04",
  },
  {
    icon: Cpu,
    title: "High Performance Computing",
    desc: "Our services are focused on delivering customised high-performance computing solutions to meet the most demanding computational needs. Your customers benefit from our expertise, ensuring their systems are powerful, scalable, and capable of driving innovation and efficiency.",
    number: "05",
  },
  {
    icon: ShieldCheck,
    title: "Business Continuity",
    desc: "Our services are dedicated to delivering customised business continuity solutions that minimise disruptions and safeguard critical operations. Your customers benefit from our expertise, gaining reliable, scalable strategies to ensure seamless functionality during unexpected challenges.",
    number: "06",
  },
];

//@ts-ignore
function ServiceRow({ svc }) {
  const Icon = svc.icon;
  return (
    <div className="group flex flex-col md:flex-row items-start py-10 hover:bg-white transition-colors duration-300 px-6 -mx-6 cursor-default">
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
}

export default function PracticeCloudDCPage() {
  return (
    <div className="font-body text-dark antialiased bg-white overflow-x-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative flex items-center">
        <img
          src="/images/logos/connectivity.jpg"
          alt="Cloud DC"
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
            <span className="block text-4xl md:text-5xl lg:text-6xl">Cloud, DC &</span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-400 mt-1">Compute</span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-lg mb-16">
            End-to-end cloud strategy, data centre infrastructure, and high-performance compute — designed, delivered, and managed with precision.
          </p>
          <div className="flex flex-wrap gap-12 border-t border-white/10 pt-8 max-w-lg">
            {["12 Services", "Cloud Native", "End-to-End"].map((s, i) => (
              <div key={i}>
                <p className="text-white text-xs font-bold uppercase tracking-widest">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOUD INTRO ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            <div className="lg:col-span-5 lg:border-r border-slate-100 py-10 lg:py-20 lg:pr-12">
              <div className="sticky top-24">
                <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
                  Cloud. Simplified.
                </h4>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
                  Cloud Strategy & Migration
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Specialist knowledge in cloud strategy and implementation.",
                    "Emphasis on cost optimisation.",
                    "Resolute commitment to data integrity.",
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
                    src="/images/cloud.png"
                    alt="Cloud"
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:py-4 lg:py-20 lg:pl-12 flex flex-col justify-center">
              <div className="hidden lg:block w-1 h-24 bg-[#70309d] mb-10 rounded-full" />
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                IT Cloud services are evolving, driven by advancements in automation, AI, hybrid and multi-cloud strategies, and the increasing demand for scalability and security. Businesses are shifting from traditional infrastructure to hybrid and cloud-native solutions, leveraging serverless and edge computing, VDI environments and AI-powered analytics.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                As cloud adoption grows, organisations face challenges such as managing complexity, reducing their costs, whilst ensuring security and compliance. At Collective IP, we take a commercial approach in navigating this landscape by providing practical advice and services based on 20 years of channel experience. We provide cloud strategy, architecture, migration, and management services with extensive technical expertise with core providers.
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
                  "Agile. Scalable. <span className="text-brand-400">Always Optimised.</span>"
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CLOUD SERVICES ── */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
              Cloud Capabilities
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Cloud Services
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
                Tailored migration, connectivity, and artificial intelligence solutions deployed with commercial certainty.
              </p>
            </div>
            <div className="mt-5 h-[1px] w-full bg-[#70309d]/20" />
          </div>
          <div className="divide-y divide-slate-200">
            {cloudServices.map((svc, i) => <ServiceRow key={i} svc={svc} />)}
          </div>
        </div>
      </section>

      {/* ── DC INTRO ── */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left on desktop, but image goes second on mobile */}
            <div className="lg:col-span-7 md:py-4 lg:py-20 lg:pr-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="hidden lg:block w-1 h-24 bg-[#70309d] mb-10 rounded-full" />
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6">
                IT data centre and compute services are rapidly evolving to address the growing demands for scalability, efficiency, and cutting-edge technology. With the increasing adoption of cloud computing, virtualisation, and edge computing, businesses are seeking more agile, secure, and cost-effective solutions to manage their workloads.
              </p>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                As data centres transition towards greener practices and advanced automation, the complexity of integrating new technologies and maintaining robust systems continues to rise. At Collective IP we play an active role in navigating these changes, offering the expertise to design, implement, and optimise infrastructure tailored to an organisation's unique needs. By providing strategic guidance, proactive support, and scalable solutions, we ensure businesses can leverage the latest advancements to drive growth and enhance performance.
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
                  "Resilient. Efficient. <span className="text-brand-400">Future Ready.</span>"
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 lg:border-l border-slate-100 py-10 lg:py-20 lg:pl-12 order-1 lg:order-2">
              <div className="sticky top-24">
                <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
                  Data Centre & Compute
                </h4>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#70309D] uppercase mb-6 leading-tight">
                  Compute & Resilient Infrastructure
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    "Maximising IOPS per unit of cost.",
                    "Energy efficient architectures.",
                    "Secure designs.",
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
                    src="/images/logos/data-center.jpg"
                    alt="Data Centre"
                    className="w-full h-48 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── DC SERVICES ── */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h4 className="text-[10px] font-bold text-[#70309d] uppercase tracking-[0.25em] mb-3">
              Infrastructure Capabilities
            </h4>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#70309D] uppercase leading-none">
                Data Centre & Compute Services
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed max-w-full md:max-w-[60%] lg:max-w-[65%] md:text-right">
                Enterprise-grade backup, high-performance compute, and business continuity systems built with technical assurance.
              </p>
            </div>
            <div className="mt-5 h-[1px] w-full bg-[#70309d]/20" />
          </div>
          <div className="divide-y divide-slate-200">
            {dcServices.map((svc, i) => <ServiceRow key={i} svc={svc} />)}
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
              Ready to transform your infrastructure?
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