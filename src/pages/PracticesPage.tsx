import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Wifi,
  Cloud,
  Monitor,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const practiceDetails = [
  {
    icon: <Wifi size={20} />,
    title: "CONNECTIVITY",
    tagline: "Network Design & Deployment",
    description:
      "Building environments from personal area to global wide area networks. We deliver architectures that enforce company policy and support operational efficiency across diverse environments. Design-led, security-driven with speciality in complex wireless.",
    capabilities: [
      "WAN connectivity and routing architecture",
      "Complex wireless network design",
      "Multi-site network rollouts",
      "Network strategy and transformation",
      "Post-deployment optimisation",
      "High-level and low-level design",
    ],
    sectors: [
      "Healthcare",
      "Retail",
      "Hospitality",
      "Local Government",
      "Automotive",
    ],
  },
  {
    icon: <Zap size={20} />,
    title: "AUTOMATION",
    tagline: "Intelligent Process Automation",
    description:
      "Embedding automation and AI into service delivery to reduce friction, improve efficiency, and help partners scale. From automated network operations to knowledge systems that support pre-sales, we deliver practical tools that create real commercial value.",
    capabilities: [
      "Automated network operations",
      "Intelligent process automation",
      "Predictive analytics and insights",
      "Automated deployment pipelines",
      "Digital front door solutions",
      "Custom knowledge systems",
    ],
    sectors: ["Channel Partners", "Enterprise", "Public Sector", "Healthcare"],
    isDarkIcon: true,
  },
  {
    icon: <Cloud size={20} />,
    title: "CLOUD, DC AND COMPUTE",
    tagline: "High-Performance Infrastructure",
    description:
      "Designing and implementing traditional and hybrid solutions, integrating on-premises and cloud platforms. We specialise in HPC, storage and virtualisation to deliver energy-efficient environments that meet performance and capacity demands.",
    capabilities: [
      "HPC data stack design and build",
      "Storage architecture",
      "Virtualisation solutions",
      "Hybrid infrastructure integration",
      "Energy-efficient design",
      "Public, private & hybrid cloud",
    ],
    sectors: [
      "Universities",
      "Data Centre Providers",
      "Pharmaceutical",
      "Research",
      "Enterprise",
    ],
  },
  {
    icon: <Monitor size={20} />,
    title: "ENDPOINT INFRASTRUCTURE",
    tagline: "Device Management & Protection",
    description:
      "Delivering secure, policy-driven solutions for device management, access control, and endpoint protection. We drive reliable connectivity, enforce compliance, and extend security controls across all user devices and IoT endpoints.",
    capabilities: [
      "Device management and MDM",
      "Access control policies",
      "Endpoint protection deployment",
      "IoT endpoint security",
      "Compliance enforcement",
      "User device lifecycle management",
    ],
    sectors: ["Enterprise", "Healthcare", "Education", "Manufacturing"],
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
            backgroundImage: "url(/images/education.png)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B4041] via-[#3B4041]/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-brand-300 text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
            Our Practices
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            Four Practices, Expert Delivery
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Led by experts who've been customers, suppliers, and partners
            themselves.
            <span className="block mt-2">
              We deliver end-to-end IT infrastructure services across four core
              disciplines.
            </span>
          </p>
        </div>
      </section>

      {/* Practice Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-24">
          {practiceDetails.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start`}
            >
              <div
                className={`${i % 2 === 1 ? "lg:order-2" : ""} flex flex-col pt-4`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-[10px] flex items-center justify-center flex-shrink-0 ${
                      p.isDarkIcon
                        ? "bg-[#70309D] text-white"
                        : "border border-[#E9D5FF] bg-[#F9F5FF] text-[#70309d]"
                    }`}
                  >
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
                <p className="text-slate-500 text-sm leading-relaxed mt-2">
                  {p.description}
                </p>
              </div>

              <div
                className={`${i % 2 === 1 ? "lg:order-1" : ""} bg-[#efefef] rounded-xl p-8 shadow-sm`}
              >
                <h4 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Key Capabilities
                </h4>
                <ul className="flex flex-col gap-3 mb-4">
                  {p.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <CheckCircle
                        size={16}
                        className="text-brand-300 flex-shrink-0"
                      />
                      <span className="text-slate-600 text-xs">{c}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {p.sectors.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-[#efefef] border border-slate-200 text-slate-500 text-[10px] font-medium rounded-full shadow-sm"
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

      {/* Security Across Every Practice Section */}
      <section className="py-20 bg-[#efefef]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
              Security Across Every Practice
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-sm leading-relaxed">
              Security is not a standalone workstream at Collective IP. It is
              built into the way we design, deliver and manage infrastructure
              across connectivity, automation, cloud, data centre, compute and
              endpoint environments.
            </p>
            <p className="text-slate-500 max-w-3xl mx-auto text-sm leading-relaxed mt-4">
              Our role is to help partners and clients reduce operational risk
              without slowing delivery. We apply practical security thinking at
              each stage of the lifecycle: from discovery and design through
              deployment, transition and ongoing service management.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-heading text-xl font-bold text-[#3B4041] uppercase mb-8 text-center">
              Cross-Practice Security Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Secure Architecture and Design
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We assess the security implications of infrastructure
                  decisions early, helping ensure networks, cloud platforms,
                  endpoints and automation workflows are designed with
                  appropriate controls, segmentation and resilience from the
                  outset.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Identity, Access and Control
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We support the implementation of access models that are
                  proportionate, manageable and aligned to operational needs.
                  This includes privileged access, role-based access, endpoint
                  control and secure administration across distributed
                  environments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Infrastructure Hardening
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We help reduce exposure across network, cloud, compute and
                  endpoint estates through configuration review, baseline
                  standards, patching approaches, secure build patterns and
                  technical remediation planning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Secure Deployment and Change
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Security is embedded into deployment activity, not added
                  afterwards. We support controlled rollouts, testing,
                  validation, documentation and operational handover to ensure
                  changes are secure, repeatable and supportable.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Governance, Risk and Compliance Support
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We help partners and clients evidence good practice through
                  practical governance, technical documentation, risk tracking
                  and compliance-aligned delivery support. The focus is on
                  clarity, accountability and operational control.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Security-Aware Automation
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Automation can improve consistency and reduce manual risk, but
                  it needs appropriate safeguards. We design automation
                  workflows with control, auditability, access management and
                  exception handling in mind.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="font-heading text-xl font-bold text-[#3B4041] uppercase mb-4">
              Why It Matters
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Modern infrastructure is interconnected. A weakness in one area
              can quickly affect performance, availability, compliance or
              customer confidence elsewhere. By treating security as a
              cross-practice capability, we help ensure it is considered
              consistently across every project, service and technical decision.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our approach is practical, technical and delivery-focused: secure
              enough to reduce risk, simple enough to operate, and structured
              enough to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#efefef] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
            Need help identifying the right solution?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-4 max-w-xl mx-auto">
            Our interactive tools can help you explore our capabilities and find
            the right approach for your requirements.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#70309D] text-white text-sm font-bold rounded-md hover:bg-[#5a2680] transition-all duration-300 shadow-sm"
          >
            Try Our Tools <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
