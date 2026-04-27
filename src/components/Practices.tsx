import { Wifi, Shield, Cloud, Server, Monitor, ChevronRight, Cpu } from 'lucide-react';

const practices = [
  {
    icon: <Wifi size={24} />,
    title: 'CONNECTIVITY',
    desc: 'Design-led network solutions from personal area to global wide area networks, with a speciality in complex wireless environments.',
    isDark: false
  },
  {
    icon: <Shield size={24} />,
    title: 'SECURITY',
    desc: 'End-to-end protection across network, endpoint, cloud, IoT and data centre. Reducing attack surfaces and safeguarding critical assets.',
    isDark: false,
    isHighlighted: true
  },
  {
    icon: <Cloud size={24} />,
    title: 'CLOUD',
    desc: 'Secure, scalable solutions across public, private, and hybrid environments. Migration, infrastructure as code, and cost optimisation.',
    isDark: false
  },
  {
    icon: <Server size={24} />,
    title: 'DATACENTRE & COMPUTE',
    desc: 'Traditional and hybrid solutions integrating on-premises and cloud platforms. HPC, storage, and virtualisation expertise.',
    isDark: false
  },
  {
    icon: <Monitor size={24} />,
    title: 'ENDPOINT',
    desc: 'Secure, policy-driven solutions for device management, access control, and endpoint protection across all user devices.',
    isDark: false
  },
  {
    icon: <Cpu size={24} />,
    title: 'INTELLIGENT AUTOMATION',
    desc: 'Automation and AI-enhanced delivery that reduces friction, improves efficiency, and helps partners scale service delivery.',
    isDark: true
  },
];

export default function Practices() {
  return (
    <section id="practices" className="py-24 bg-[#EFEFEF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
            Our Practices 
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#3B4041] mb-6 leading-tight uppercase max-w-2xl">
            Specialist Capability Across Six Core Practices
          </h2>
          <p className="text-md text-gray-500 max-w-3xl leading-relaxed">
            Led by experts who've been customers, suppliers, and partners themselves —
            we understand your challenges and deliver with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <div
              key={p.title}
              className={`p-6 rounded-md transition-all duration-300 flex flex-col h-full border hover:border-brand-500 ${p.isDark
                ? 'bg-[#3B4041] border-[#3B4041] text-white'
                : 'bg-white border-transparent shadow-sm hover:shadow-md'
                }`}
            >
              <div className={`mb-6 ${p.isDark ? 'text-brand-400' : 'text-brand-600'}`}>
                {p.icon}
              </div>
              <h3 className={`font-heading text-lg font-bold mb-3 tracking-wide uppercase ${p.isDark ? 'text-white' : 'text-[#3B4041]'}`}>
                {p.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 flex-grow ${p.isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                {p.desc}
              </p>
              <a
                href="#"
                className={`inline-flex items-center gap-1 text-sm font-bold transition-all duration-200 hover:gap-2 ${p.isDark ? 'text-slate-400 hover:text-slate-300' : 'text-brand-600'
                  }`}
              >
                Learn more <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


