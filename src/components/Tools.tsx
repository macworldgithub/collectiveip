import { MessageSquare, Network, Lock, ArrowRight } from 'lucide-react';

const tools = [
  {
    icon: <MessageSquare size={24} />,
    title: 'Knowledge Assistant',
    subtitle: 'Capability & Case Study Finder',
    desc: 'Ask questions about our capabilities, services, and delivery experience. Get instant, relevant answers.',
  },
  {
    icon: <Network size={24} />,
    title: 'Network Assessment',
    subtitle: 'Infrastructure Discovery',
    desc: 'Understand your network environment, identify gaps, and get tailored recommendations.',
  },
  {
    icon: <Lock size={24} />,
    title: 'Security Posture Review',
    subtitle: 'Threat & Risk Analysis',
    desc: 'Assess your current security posture against industry frameworks and identify priority actions.',
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
            Put Real Tools in Front of Your Customers
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tools You Can Experience</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Practical, intelligent tools that help partners and prospects explore our capabilities
            and start meaningful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tools.map((t) => (
            <div
              key={t.title}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-11 h-11 bg-sky-600 text-white rounded-lg flex items-center justify-center mb-5">
                {t.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{t.title}</h3>
              <div className="text-sky-600 text-xs font-semibold uppercase tracking-wider mb-3">
                {t.subtitle}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition-colors duration-200"
          >
            Try All Tools Live
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
