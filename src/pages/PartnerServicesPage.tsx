import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Wrench,
  Truck,
  Zap,
  Shield,
} from "lucide-react";

export default function PartnerServicesPage() {
  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-[#3B4041]">
        <div className="relative max-w-7xl mx-auto px-6 text-left z-10">
          <p className="text-brand-300 text-[11px] text-base font-bold uppercase tracking-[0.2em] mb-4">
            Partner Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white mb-6 uppercase tracking-tight">
            End-to-End Partnership Support
          </h1>
          <p className="text-base text-slate-300 max-w-2xl leading-relaxed">
            Comprehensive service capabilities designed to help our partners
            scale, win, and deliver exceptional outcomes to their customers.
          </p>
        </div>
      </section>

      {/* Service Areas Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-4">
              Six Core Service Areas
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Supporting partners at every stage of the project lifecycle with
              practical, delivery-focused expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#project-ownership" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                End-to-End Project Ownership
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Complete project delivery from conception to completion with
                full accountability and commercial alignment.
              </p>
            </a>

            <a href="#technical-consultancy" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Wrench className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Technical Consultancy
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Expert technical consulting for complex deployments with
                technical depth and commercial awareness.
              </p>
            </a>

            <a href="#managed-resourcing" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Managed Resourcing
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Flexible resourcing solutions to scale your team with skilled
                technical professionals.
              </p>
            </a>

            <a href="#field-services" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Field Services
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                On-site technical support, installation, and maintenance across
                multiple locations.
              </p>
            </a>

            <a href="#mass-deployments" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Mass Deployments
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Large-scale deployment expertise with proven methodologies and
                automation support.
              </p>
            </a>

            <a href="#managed-services" className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors cursor-pointer block">
              <div className="w-12 h-12 bg-[#F9F5FF] rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#70309d]" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-3">
                Managed Services
              </h3>
              <p className="text-slate-500 text-sm mb-4">
                Ongoing management and support with clear SLAs and commercial
                accountability.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* End-to-End Project Ownership */}
          <div id="project-ownership" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              Effortless Oversight
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              End-to-End Project Ownership
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Our End-to-End Project Ownership service—often described by clients as "Effortless Oversight"—provides complete, risk-shared accountability for complex technology initiatives. From initial discovery and design to final operational transition, we take full responsibility for delivery quality, timelines, and commercial outcomes, allowing our partners to focus entirely on strengthening client relationships while we absorb technical execution complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Solutions Architecture & Design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Pre-Sales Engineering Support
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  PMO & Strategic Service Delivery
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Technical Quality Assurance
                </span>
              </div>
            </div>
          </div>

          {/* Technical Consultancy */}
          <div id="technical-consultancy" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              Strategic Expertise
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Technical Consultancy
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Collective IP's Technical Consultancy delivers deep engineering expertise aligned with sharp commercial awareness to solve your most complex digital transformation challenges. Our veteran consultants bring extensive real-world experience across multi-vendor environments, helping you design and implement strategic, secure, and compliant infrastructures that drive tangible business value and operational efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Enterprise Networking & SD-WAN
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Cloud & Hybrid-Cloud Architecture
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  DC & Compute Modernisation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Endpoint Infrastructure Engineering
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Cyber Security & Compliance
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Governance & Policy Frameworks
                </span>
              </div>
            </div>
          </div>

          {/* Managed Resourcing */}
          <div id="managed-resourcing" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              On-Demand Capability
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Managed Resourcing
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Scale your capacity instantly and maintain operational agility with our Managed Resourcing services. We go beyond traditional staffing by providing highly vetted, senior-level engineers and specialized consultants who integrate seamlessly into your existing team structures under flexible commercial models, ensuring you have the exact skills required to meet peak delivery demands without overhead.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Flexible & Rapid Team Augmentation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Virtual Specialist Team Approach (VTA)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Embedded Technical Resourcing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Resource-as-a-Service (RaaS) Models
                </span>
              </div>
            </div>
          </div>

          {/* Field Services */}
          <div id="field-services" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              On-Site Operational Support
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Field Services
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Ensure smooth physical deployments and reliable localized technical support with our comprehensive Field Services. Our certified field engineers deliver consistent, high-quality on-site installation, proactive maintenance, and rapid troubleshooting across diverse geographic locations, ensuring your critical infrastructure is correctly optimized, secured, and operational with minimal downtime.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  On-Site Technical Support & Dispatch
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Professional Installation & Configuration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Planned Maintenance & System Upgrades
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Infrastructure & System Optimisation
                </span>
              </div>
            </div>
          </div>

          {/* Mass Deployments */}
          <div id="mass-deployments" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              Scale & Automation
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Mass Deployments
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Execute large-scale, multi-site hardware and software rollouts smoothly with our specialized Mass Deployments service. Utilizing standardized, highly automated staging and validation processes, our team manages the end-to-end logistics and deployment lifecycle for thousands of endpoints or locations, delivering rapid time-to-value while ensuring total compliance and minimal disruption.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Site Assessment & Readiness Preparation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Process Standardisation & Automation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Rigorous Staging, Testing & Validation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Scalable Post-Deployment Support
                </span>
              </div>
            </div>
          </div>

          {/* Managed Services */}
          <div id="managed-services" className="bg-white rounded-xl p-8 shadow-sm scroll-mt-24">
            <h4 className="text-xs font-bold text-[#70309d] uppercase tracking-[0.2em] mb-3">
              Proactive Management
            </h4>
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Managed IT Services
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Protect your digital investments and ensure continuous operational excellence with our comprehensive Managed IT Services. We provide proactive 24/7 monitoring, robust security operations, and multi-tier help desk support under rigorous Service Level Agreements (SLAs), offering clear commercial accountability and predictable costs for your critical network, cloud, and application infrastructures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Network & Infrastructure Management
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Cloud Services Management & Optimization
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Enterprise Security Services & Monitoring
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-[#70309d] flex-shrink-0 mt-1"
                />
                <span className="text-slate-700 text-sm font-medium">
                  24/7 Multi-Tier Help Desk & Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#3B4041] uppercase mb-4">
            Ready to Scale Your Business?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Let's discuss how our partner services can help you win more
            business, deliver exceptional outcomes, and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#70309d] text-white text-sm font-bold rounded-md hover:bg-[#5a2680] transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-button-gray border border-slate-200 text-[#3B4041] text-sm font-bold rounded-md hover:bg-slate-50 transition-colors"
            >
              Try Our Tools <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
