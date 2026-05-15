import { Wifi, Cloud, Monitor, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const practices = [
  {
    icon: <Wifi size={24} />,
    title: "CONNECTIVITY",
    desc: "Design-led network solutions from personal area to global wide area networks, with a speciality in complex wireless environments.",
    link: "/practices/connectivity"
  },
  {
    icon: <Zap size={24} />,
    title: "INTELLIGENT AUTOMATION",
    desc: "Practical, outcome-driven automation that reduces cost, accelerates delivery, and transforms how you operate, built on real delivery experience.",
    link: "/practices/automation"
  },  
  {
    icon: <Cloud size={24} />,
    title: "CLOUD, DC AND COMPUTE",
    desc: "End-to-end cloud strategy, data centre infrastructure, and high-performance compute, designed, delivered, and managed with precision.",
    link: "/practices/cloud-dc-compute"
  },
  {
    icon: <Monitor size={24} />,
    title: "ENDPOINT INFRASTRUCTURE",
    desc: "Secure, policy-driven solutions for device management, access control, and endpoint protection across all user devices.",
    link: "/practices/endpoint-infrastructure"
  },
];

export default function Practices() {
  return (
    <section id="practices" className="py-20 bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
            Our Practices
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#3B4041] mb-6 leading-tight uppercase max-w-2xl">
            Specialist Capability Across Four Core Practices
          </h2>
          <p className="text-md text-gray-500 max-w-3xl leading-relaxed">
        Led by experts who’ve been customers, suppliers, and partners themselves, we understand your challenges and deliver with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <Link
              key={p.title}
              to={p.link}
              className="group p-6 rounded-md transition-all duration-300 flex flex-col h-full border bg-white shadow-sm hover:shadow-md hover:bg-[#3B4041] hover:border-[#3B4041]"
            >
              <div className="mb-6 text-brand-600 group-hover:text-brand-400">
                {p.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-3 tracking-wide uppercase text-[#3B4041] group-hover:text-white">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-8 flex-grow text-slate-500 group-hover:text-slate-300">
                {p.desc}
              </p>
              <div className="inline-flex items-center gap-1 text-sm font-bold transition-all duration-200 hover:gap-2 text-brand-600 group-hover:text-slate-300">
                Learn more <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
