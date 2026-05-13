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
            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>

            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>

            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>

            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>

            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>

            <div className="p-6 border border-slate-200 rounded-lg hover:border-[#70309d] transition-colors">
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
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-24 bg-[#efefef]">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* End-to-End Project Ownership */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              End-to-End Project Ownership
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Complete project delivery with full commercial accountability. We
              take ownership from initial discovery through to operational
              handover, ensuring partners can focus on customer relationships
              while we handle delivery complexity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-brand-300 flex-shrink-0 mt-1"
                />
                <span className="text-slate-600 text-sm">
                  Fixed-price commercial models
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-brand-300 flex-shrink-0 mt-1"
                />
                <span className="text-slate-600 text-sm">
                  Risk and reward sharing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-brand-300 flex-shrink-0 mt-1"
                />
                <span className="text-slate-600 text-sm">
                  Full project lifecycle management
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="text-brand-300 flex-shrink-0 mt-1"
                />
                <span className="text-slate-600 text-sm">
                  Commercial outcome focus
                </span>
              </div>
            </div>
          </div>

          {/* Telecom Consultancy */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Technical Consultancy
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Technical consulting with commercial grounding. Our consultants
              bring real-world delivery experience to help partners solve
              complex technical challenges while maintaining commercial
              viability and customer satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  Network
                </h4>
                <p className="text-slate-600 text-xs">
                  Infrastructure design and optimisation
                </p>
              </div>
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  Cloud
                </h4>
                <p className="text-slate-600 text-xs">
                  Migration and integration services
                </p>
              </div>
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  Security
                </h4>
                <p className="text-slate-600 text-xs">
                  Risk assessment and compliance
                </p>
              </div>
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  DC & Compute
                </h4>
                <p className="text-slate-600 text-xs">
                  Infrastructure modernisation
                </p>
              </div>
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  Endpoint
                </h4>
                <p className="text-slate-600 text-xs">
                  Device management and security
                </p>
              </div>
              <div className="text-center p-4 bg-[#F9F5FF] rounded-lg">
                <h4 className="font-heading sm:text-sm lg:text-xl font-bold text-[#3B4041] mb-2">
                  Governance and Compliance
                </h4>
                <p className="text-slate-600 text-xs">
                  Compliance and policy frameworks
                </p>
              </div>
            </div>
          </div>

          {/* Managed Resourcing */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Managed Resourcing
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Flexible technical resourcing that scales with your business. We
              provide skilled professionals who integrate seamlessly with your
              teams, bringing Collective IP expertise while maintaining your
              operational control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Consultancy Level Resourcing
                </h4>
                <p className="text-slate-500 text-sm mb-3">
                  Senior technical experts who provide strategic guidance and
                  hands-on delivery.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-brand-300 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">
                      Technical architects and engineers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-brand-300 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">
                      Project and programme managers
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-3">
                  Flexible Engagement Models
                </h4>
                <p className="text-slate-500 text-sm mb-3">
                  Resourcing solutions that adapt to your business needs and
                  commercial requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-brand-300 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">
                      Short-term specialist support
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={14}
                      className="text-brand-300 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">
                      Long-term team augmentation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Field Services */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Field Services
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              On-site technical expertise delivered across multiple locations.
              Our field services teams provide hands-on support for
              installation, maintenance, and optimisation with consistent
              quality and commercial accountability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                  On-site Technical Support
                </h4>
                <p className="text-slate-600 text-xs">
                  Responsive technical assistance at customer locations with
                  rapid deployment capability.
                </p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                  Maintenance and Upgrades
                </h4>
                <p className="text-slate-600 text-xs">
                  Planned maintenance and system upgrades with minimal
                  disruption to operations.
                </p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                  Installation and Configuration
                </h4>
                <p className="text-slate-600 text-xs">
                  Professional installation services with standardised
                  configuration and testing.
                </p>
              </div>
              <div className="p-4 border border-slate-200 rounded-lg">
                <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                  System Optimisation
                </h4>
                <p className="text-slate-600 text-xs">
                  Performance tuning and optimisation to maximise infrastructure
                  efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Mass Deployments */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Mass Deployments
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Large-scale deployment expertise with proven methodologies. We
              handle complex, multi-site deployments with automation support and
              standardisation to ensure consistent outcomes across your entire
              estate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-[#F9F5FF] rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Assessment and Preparation
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Detailed site assessment and preparation planning to ensure
                    deployment readiness.
                  </p>
                </div>
                <div className="p-4 bg-[#F9F5FF] rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Testing and Validation
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Comprehensive testing protocols and validation before
                    full-scale deployment.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9F5FF] rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Standardisation
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Standardised deployment processes and configurations for
                    consistency.
                  </p>
                </div>
                <div className="p-4 bg-[#F9F5FF] rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Automation Support and Scalability
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Automation tools and scalable processes for efficient
                    large-scale deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Managed Services */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-extrabold text-[#3B4041] uppercase mb-6">
              Managed Services
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Ongoing management and support with clear SLAs and commercial
              accountability. Our managed services provide operational stability
              while allowing partners to focus on growth and customer
              relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-[#3B4041] mb-4">
                  Core Managed Services
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-brand-300 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#3B4041]">
                        Network and Infrastructure Management
                      </h5>
                      <p className="text-slate-600 text-xs">
                        24/7 monitoring and management of network and
                        infrastructure environments.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-brand-300 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#3B4041]">
                        Intelligent Automation as a Service
                      </h5>
                      <p className="text-slate-600 text-xs">
                        Automation solutions delivered as a service with ongoing
                        optimisation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-brand-300 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#3B4041]">
                        Cloud Services Management
                      </h5>
                      <p className="text-slate-600 text-xs">
                        Multi-cloud environment management with cost
                        optimisation and governance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-brand-300 flex-shrink-0 mt-1"
                    />
                    <div>
                      <h5 className="font-heading text-sm font-bold text-[#3B4041]">
                        Help Desk and Technical Support
                      </h5>
                      <p className="text-slate-600 text-xs">
                        Multi-tier technical support with clear SLAs and
                        escalation paths.
                      </p>
                    </div>
                  </div>
                </div>
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
