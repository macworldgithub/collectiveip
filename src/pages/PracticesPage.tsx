import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Practices from '../components/Practices';
import { Wifi, Shield, Cloud, Server, Monitor, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const practiceDetails = [
  {
    icon: <Wifi size={32} />,
    title: 'Connectivity',
    tagline: 'Complex Networks, Expertly Designed',
    description:
      'From personal area networks to global wide area networks, we design and deliver connectivity solutions that meet the most demanding requirements. Our speciality lies in complex wireless environments — dense, high-throughput, mission-critical.',
    capabilities: [
      'Campus & enterprise wireless (802.11ax/Wi-Fi 6E)',
      'SD-WAN design and deployment',
      'Site survey, RF planning and optimisation',
      'Secure remote access and VPN architecture',
      'Network monitoring and management',
      'Multi-site and global WAN delivery',
    ],
    vendors: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Meraki'],
  },
  {
    icon: <Shield size={32} />,
    title: 'Security',
    tagline: 'End-to-End Protection for Complex Environments',
    description:
      'Cyber threats are evolving faster than ever. We help partners protect their customers across every layer of the stack — from network perimeter to endpoint, from identity to data — using frameworks and tooling that scale with the business.',
    capabilities: [
      'Network security architecture and firewall deployment',
      'Endpoint detection and response (EDR/XDR)',
      'Vulnerability assessment and penetration testing',
      'Zero Trust Network Access (ZTNA)',
      'Security Operations Centre (SOC) integration',
      'Compliance-aligned security programmes',
    ],
    vendors: ['CrowdStrike', 'Palo Alto', 'Fortinet', 'SentinelOne', 'Tenable'],
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud',
    tagline: 'Secure, Scalable, Multi-Cloud Delivery',
    description:
      'We design, migrate and manage cloud environments across public, private and hybrid models. Our approach is architecture-led — focused on security, cost optimisation, and operational resilience.',
    capabilities: [
      'Cloud architecture and migration planning',
      'Infrastructure as Code (Terraform, Ansible)',
      'Azure, AWS and GCP delivery',
      'Private cloud and hyperconverged infrastructure',
      'Cloud cost management and FinOps',
      'Hybrid connectivity and integration',
    ],
    vendors: ['Azure', 'AWS', 'GCP', 'VMware', 'Nutanix'],
  },
  {
    icon: <Server size={32} />,
    title: 'Datacentre & Compute',
    tagline: 'High-Performance Infrastructure at Scale',
    description:
      'We design and deliver datacentre environments that support modern compute requirements — from traditional virtualisation platforms to high-performance computing and GPU-accelerated workloads.',
    capabilities: [
      'Server and storage architecture',
      'HPC cluster design and deployment',
      'Virtualisation and containerisation',
      'Hyperconverged infrastructure (HCI)',
      'Datacentre consolidation and migration',
      'Power, cooling and physical infrastructure',
    ],
    vendors: ['Dell', 'HPE', 'Lenovo', 'Pure Storage', 'NetApp'],
  },
  {
    icon: <Monitor size={32} />,
    title: 'Endpoint',
    tagline: 'Secure, Managed Devices at Every Layer',
    description:
      'Modern workplaces demand consistent, secure, and manageable endpoint environments. We help partners deploy and manage device fleets with policy-driven controls, unified management, and strong security posture.',
    capabilities: [
      'Unified Endpoint Management (UEM)',
      'Mobile Device Management (MDM)',
      'Device lifecycle management',
      'Policy and compliance enforcement',
      'Patch management and vulnerability remediation',
      'Endpoint security and anti-malware',
    ],
    vendors: ['Microsoft Intune', 'Jamf', 'CrowdStrike', 'Ivanti', 'Workspace ONE'],
  },
  {
    icon: <Zap size={32} />,
    title: 'Intelligent Automation',
    tagline: 'Automation That Scales Your Delivery',
    description:
      'Our Intelligent Automation practice helps partners reduce manual overhead and scale delivery without proportional headcount growth. We bring AI-enhanced tooling, smart workflows, and digital front-door solutions that change how partners engage customers.',
    capabilities: [
      'AI-enhanced knowledge and sales tools',
      'Workflow automation and orchestration',
      'Digital Front Door for partner-facing tools',
      'Customer engagement and qualification bots',
      'Infrastructure provisioning automation',
      'Monitoring and alerting automation',
    ],
    vendors: ['n8n', 'Ansible', 'Terraform', 'Custom AI tooling'],
  },
];

export default function PracticesPage() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.15),_transparent_60%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-sky-600/20 border border-sky-500/30 rounded-full text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
            Specialist Capability
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Our Practices</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Six core areas of deep technical expertise, designed to help partners build and deliver
            comprehensive, modern IT infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Practice Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-20">
          {practiceDetails.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <div className="text-sky-600 text-xs font-semibold uppercase tracking-widest mb-2">
                  {p.tagline}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{p.title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{p.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Get in touch about {p.title} <ArrowRight size={16} />
                </a>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} flex flex-col gap-4`}>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
                    Capabilities
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {p.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-sky-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-sky-600 rounded-xl p-5">
                  <h4 className="text-xs font-bold text-sky-200 uppercase tracking-wider mb-3">
                    Key Vendors & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {p.vendors.map((v) => (
                      <span
                        key={v}
                        className="px-3 py-1 bg-white/15 text-white text-xs font-medium rounded-full"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
