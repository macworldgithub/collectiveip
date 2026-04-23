import { Wifi, Shield, Cloud, Server, Monitor, Zap, ChevronRight } from 'lucide-react';

const practices = [
  {
    icon: <Wifi size={28} />,
    title: 'Connectivity',
    desc: 'Design-led network solutions from personal area to global wide area networks, with a speciality in complex wireless environments.',
  },
  {
    icon: <Shield size={28} />,
    title: 'Security',
    desc: 'End-to-end protection across network, endpoint, cloud, IoT and data centre. Reducing attack surfaces and safeguarding critical assets.',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud',
    desc: 'Secure, scalable solutions across public, private, and hybrid environments. Migration, infrastructure as code, and cost optimisation.',
  },
  {
    icon: <Server size={28} />,
    title: 'Datacentre & Compute',
    desc: 'Traditional and hybrid solutions integrating on-premises and cloud platforms. HPC, storage, and virtualisation expertise.',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Endpoint',
    desc: 'Secure, policy-driven solutions for device management, access control, and endpoint protection across all user devices.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Intelligent Automation',
    desc: 'Automation and AI-enhanced delivery that reduces friction, improves efficiency, and helps partners scale service delivery.',
  },
];

export default function Practices() {
  return (
    <section id="practices" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Specialist Capability Across Six Core Practices
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Practices</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Specialist expertise across every layer of IT infrastructure, designed to help partners
            build and deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((p) => (
            <div
              key={p.title}
              className="group p-8 border border-gray-100 rounded-xl hover:border-sky-200 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-sky-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn more <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
