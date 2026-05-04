import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, FileText } from "lucide-react";

import { tools } from "../data/demoTools";
import { KnowledgeAssistant } from "../components/demo/KnowledgeAssistant";
import { AssessmentTool } from "../components/demo/AssessmentTool";

export default function DemoPage() {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <div className="font-body text-dark antialiased bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-16 overflow-hidden bg-[#3B4041]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/retail.png)",
          }}
        />

        {/* LEFT → RIGHT DARK OVERLAY (IMPORTANT FIX) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />

        {/* Extra subtle dark layer */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Small Label */}
          <h4 className="text-base font-bold text-[#8B5CF6] uppercase tracking-[0.25em] mb-6">
            EXPERIENCE OUR TOOLS
          </h4>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
            TOOLS YOUR CLIENTS CAN <br /> EXPERIENCE TODAY
          </h1>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-20">
            These are real tools we deploy for our partners. Try them now — ask
            questions, run assessments, and see the kind of value we deliver
            from day one.
          </p>

        </div>
      </section>

      {/* Sticky Tabs */}
      <div className="sticky top-20 z-40 bg-[#3B4041] border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-wrap gap-10 pt-4">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t)}
                className={`flex items-center gap-3 pb-4 relative transition-all duration-300
          ${activeTool.id === t.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                  }`}
              >
                <span
                  className={`${activeTool.id === t.id ? "text-[#8B5CF6]" : "text-slate-400"
                    }`}
                >
                  {t.icon}
                </span>

                <span
                  className={`text-xs font-semibold tracking-wide ${activeTool.id === t.id ? "text-[#8B5CF6]" : "text-slate-400"
                    }`}
                >
                  {t.title}
                </span>

                {activeTool.id === t.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8B5CF6]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          {activeTool.id === "knowledge" ? (
            <KnowledgeAssistant key={activeTool.id} tool={activeTool} />
          ) : (
            <AssessmentTool key={activeTool.id} tool={activeTool} />
          )}
        </div>
      </section>

      {/* Unbranded Demo Sites */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-base font-bold text-[#5C2882] uppercase tracking-[0.2em] mb-4">
              UNBRANDED DEMO SITES
            </h4>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#3B4041] uppercase mb-4">
              Ready-to-Deploy Customer Experiences
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              These are unbranded demo sites that can be quickly deployed for
              your customers, showcasing modern digital experiences powered by
              our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#5C2882] transition-colors">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">
                  Network Assessment Portal
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Interactive network infrastructure assessment tool with
                  automated recommendations.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Live Demo Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Custom Branding
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#5C2882] text-xs font-bold hover:gap-3 transition-all"
                >
                  View Demo <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#5C2882] transition-colors">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">
                  Security Knowledge Base
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  AI-powered security knowledge assistant with threat
                  intelligence and compliance guidance.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Live Demo Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      GPT-4 Powered
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#5C2882] text-xs font-bold hover:gap-3 transition-all"
                >
                  View Demo <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#5C2882] transition-colors">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">
                  Cloud Cost Optimizer
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Multi-cloud cost analysis and optimization tool with ROI
                  calculator.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Live Demo Available
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Multi-Cloud Support
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#5C2882] text-xs font-bold hover:gap-3 transition-all"
                >
                  View Demo <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#5C2882] transition-colors">
              <div className="h-32 bg-gradient-to-br from-orange-500 to-orange-600"></div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-[#3B4041] mb-2">
                  Automation Workflow Builder
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Visual workflow designer for IT automation with pre-built
                  templates.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">
                      Low-Code/No-Code
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#5C2882] text-xs font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-[#F3E8FF] p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-[#3B4041] mb-4">
                Knowledge Tool Integration
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Our knowledge tool capabilities can be integrated into any of
                these demo sites, providing intelligent assistance and
                automation powered by your specific expertise and service
                offerings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Custom Training
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Trained on your specific knowledge base and service
                    offerings.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    White-Label Solution
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Fully branded to your identity with custom domains.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-heading text-sm font-bold text-[#3B4041] mb-2">
                    Quick Deployment
                  </h4>
                  <p className="text-slate-600 text-xs">
                    Deploy in days, not months, with full technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(/images/aerospace.png)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white uppercase mb-8 tracking-tight">
            Want These Tools for Your Business?
          </h2>
          <p className="text-base text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build custom Digital Front Door solutions trained on your
            knowledge base, branded to your identity, and deployed to your
            clients. Let's talk about what's possible.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#8B5CF6] text-white text-xs font-bold rounded hover:bg-[#7C3AED] transition-all duration-300 shadow-xl shadow-[#8B5CF6]/30"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-10 py-4 bg-button-gray text-black border border-white/30  text-xs font-bold rounded hover:bg-white/10 transition-all duration-300"
            >
              <FileText size={18} /> View Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
