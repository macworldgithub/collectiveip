import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wifi, Shield, Cloud, Server, Monitor, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const practiceDetails = [
  {
    icon: <Wifi size={20} />,
    title: 'CONNECTIVITY',
    tagline: 'Network Design & Deployment',
    description:
      'Building environments from personal area to global wide area networks. Our optimisation pedigree enables us to deliver architectures that enforce company policy and support operational efficiency across diverse environments. We are design-led, security-driven and have a speciality in complex wireless.',
    capabilities: [
      'WAN connectivity and routing architecture',
      'Complex wireless network design',
      'Multi-site network rollouts',
      'Network strategy and transformation',
      'Post-deployment optimisation',
      'High-level and low-level design',
    ],
    sectors: ['Healthcare', 'Retail', 'Hospitality', 'Local Government', 'Automotive'],
  },
  {
    icon: <Shield size={20} />,
    title: 'SECURITY',
    tagline: 'End-to-End Protection',
    description:
      'Our Security practice delivers end-to-end solutions across network, endpoint, cloud, IoT and data centre. We advise, design and implement solutions to protect critical assets, reduce attack surfaces, enforce compliance and ensure infrastructure resilience against evolving threats.',
    capabilities: [
      'Global threat analysis',
      'Vulnerability assessments',
      'Endpoint security deployment',
      'Network security architecture',
      'Cloud security posture management',
      'Compliance and policy enforcement',
    ],
    sectors: ['Retail', 'Aerospace', 'Central Government', 'Financial Services'],
  },
  {
    icon: <Cloud size={20} />,
    title: 'CLOUD',
    tagline: 'Scalable Cloud Solutions',
    description:
      'Our Cloud Services practice designs and deploys secure, scalable solutions across public, private, and hybrid environments. We support workload migration, infrastructure-as-code, automation, and cost optimisation to enable digital transformation and operational efficiency.',
    capabilities: [
      'Public, private & hybrid cloud',
      'Workload migration',
      'Infrastructure-as-code',
      'Cloud automation',
      'Cost optimisation',
      'Digital transformation enablement',
    ],
    sectors: ['Enterprise', 'SMB', 'Public Sector', 'Healthcare'],
  },
  {
    icon: <Server size={20} />,
    title: 'DATACENTRE & COMPUTE',
    tagline: 'High-Performance Infrastructure',
    description:
      'Our Datacentre and Compute practice designs and implements traditional and hybrid solutions, integrating on-premises and cloud platforms. We specialise in HPC, storage and virtualisation to deliver energy-efficient environments that meet performance and capacity demands.',
    capabilities: [
      'HPC data stack design and build',
      'Storage architecture',
      'Virtualisation solutions',
      'Hybrid infrastructure integration',
      'Energy-efficient design',
      'Capacity planning and testing',
    ],
    sectors: ['Universities', 'Data Centre Providers', 'Pharmaceutical', 'Research'],
  },
  {
    icon: <Monitor size={20} />,
    title: 'ENDPOINT',
    tagline: 'Device Management & Protection',
    description:
      'Our Endpoint practice delivers secure, policy-driven solutions for device management, access control, and endpoint protection. We drive reliable connectivity, enforce compliance, and extend security controls across all user devices and IoT endpoints.',
    capabilities: [
      'Device management and MDM',
      'Access control policies',
      'Endpoint protection deployment',
      'IoT endpoint security',
      'Compliance enforcement',
      'User device lifecycle management',
    ],
    sectors: ['Enterprise', 'Healthcare', 'Education', 'Manufacturing'],
  },
  {
    icon: <Zap size={20} />,
    title: 'INTELLIGENT AUTOMATION',
    tagline: 'Automation-Enhanced Delivery',
    description:
      'Our Intelligent Automation practice embeds automation and AI into service delivery to reduce friction, improve efficiency, and help partners scale. From automated network operations to knowledge systems that support pre-sales, we deliver practical tools that create real commercial value.',
    capabilities: [
      'Automated network operations',
      'Intelligent process automation',
      'Predictive analytics and insights',
      'Automated deployment pipelines',
      'Digital front door solutions',
      'Custom knowledge systems',
    ],
    sectors: ['Channel Partners', 'Enterprise', 'Public Sector', 'Healthcare'],
    isDarkIcon: true,
    button: {
      text: 'Explore Intelligent Automation',
      link: '/intelligent-automation'
    }
  },
];

export default function PracticesPage() {
  return (
    <div className="font-body text-[#3B4041] antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: 'url(/images/education.png)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-[#8B5CF6] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Our Practices
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Six Practices, Expert Delivery
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Led by experts who've been customers, suppliers, and partners themselves.<br />
            We deliver end-to-end IT infrastructure services across six core disciplines.
          </p>
        </div>
      </section>

      {/* Practice Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-24">
          {practiceDetails.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}
            >
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''} flex flex-col pt-4`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0 ${p.isDarkIcon
                    ? 'bg-[#5C2882] text-white'
                    : 'border border-[#E9D5FF] bg-[#F9F5FF] text-[#5C2882]'
                    }`}>
                    {p.icon}
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase tracking-wide leading-none mb-1">
                      {p.title}
                    </h2>
                    <div className="text-slate-500 text-xs font-medium">
                      {p.tagline}
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mt-2">{p.description}</p>
                {p.button && (
                  <div className="mt-6">
                    <a
                      href={p.button.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C2882] text-white text-sm font-bold rounded-md hover:bg-[#4A1E6B] transition-all duration-300 shadow-sm"
                    >
                      {p.button.text} <ArrowRight size={16} />
                    </a>
                  </div>
                )}
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} bg-[#F3F4F6] rounded-xl p-8 shadow-sm`}>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Key Capabilities
                </h4>
                <ul className="flex flex-col gap-3 mb-4">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#8B5CF6] flex-shrink-0" />
                      <span className="text-slate-600 text-xs">{c}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {p.sectors.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-white border border-slate-200 text-slate-500 text-[10px] font-medium rounded-full shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#F3F4F6] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
            Need help identifying the right solution?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xl mx-auto">
            Our interactive tools can help you explore our capabilities and find the right
            approach for your requirements.
          </p>
          <a
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C2882] text-white text-sm font-bold rounded-md hover:bg-[#7C3AED] transition-all duration-300 shadow-sm"
          >
            Try Our Tools <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
