
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { tools } from "../data/demoTools";
import { AssessmentTool } from "./demo/AssessmentTool";

// Static preview items derived from knowledgeBase.ts responses
const knowledgePreviewItems = [
  {
    question: "Can you support a multi-site Cisco wireless rollout?",
    tag: "CAPABILITY MATCH",
    answer:
      "Yes — this is a core capability. Our network engineering teams deliver bespoke wireless solutions from design through to post-deployment optimisation across healthcare, retail, and education sectors.",
    bullets: [
      "Cisco wireless (Wi-Fi 6/6E) design and deployment",
      "Multi-site rollouts with PMO coordination",
      "NHS Hospital Trust — 3,000+ concurrent devices, zero downtime",
    ],
  },
  {
    question: "What intelligent automation solutions do you offer?",
    tag: "SERVICE DETAILS",
    answer:
      "Our Intelligent Automation practice delivers outcome-driven solutions — from automated network operations to digital front door knowledge systems — with measurable commercial value.",
    bullets: [
      "Automated network operations and monitoring",
      "Digital front door / knowledge systems",
      "Predictive analytics and insights",
    ],
  },
  {
    question: "Can you deliver endpoint security for a large enterprise?",
    tag: "CAPABILITY MATCH",
    answer:
      "Yes — our Security practice delivers end-to-end solutions across network, endpoint, cloud, and data centre environments. We achieved a 95% reduction in security incidents for a major aerospace client.",
    bullets: [
      "Endpoint security deployment across 5,000+ endpoints",
      "Global threat analysis and vulnerability assessments",
      "Compliance and policy enforcement",
    ],
  },
  {
    question: "How do you work with channel partners?",
    tag: "PARTNER ENABLEMENT",
    answer:
      "We support partners across four key areas to drive mutual growth and success.",
    bullets: [
      "Expanding your services portfolio and creating new white space",
      "Reducing fixed cost base through flexible specialist resource",
      "Extending security services capabilities",
      "Driving annuity revenue through value-added services"
    ],
  },
];

function KnowledgeAssistantPreview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = knowledgePreviewItems[activeIdx];

  return (
    <div className="flex flex-col h-full bg-[#1e2223] rounded-xl overflow-hidden border border-white/10 shadow-2xl min-h-[480px]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#70309d] rounded-lg flex items-center justify-center">
            <MessageSquare size={15} className="text-white" />
          </div>
          <div>
            <p className="text-white text-xs font-bold leading-none">Knowledge Assistant</p>
            <p className="text-slate-400 text-[10px] mt-0.5">Capability &amp; Case Study Finder</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Live
        </span>
      </div>

      {/* Question Pills */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-3">
          Try asking:
        </p>
        <div className="flex flex-col gap-2">
          {knowledgePreviewItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`text-left text-[11px] font-medium px-3 py-2 rounded-lg border transition-all duration-200 ${
                activeIdx === idx
                  ? "bg-[#70309d]/20 border-[#70309d] text-white"
                  : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-300"
              }`}
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>

      {/* Answer Card */}
      <div className="flex-1 px-5 pb-4 pt-3">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 size={13} className="text-[#a855f7]" />
            <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-widest">
              {active.tag}
            </span>
          </div>
          <p className="text-slate-300 text-[12px] leading-relaxed mb-3">
            {active.answer}
          </p>
          <ul className="space-y-1.5">
            {active.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <ChevronRight size={12} className="text-[#a855f7] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-[11px] leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features footer */}
      {/* <div className="px-5 pb-4 grid grid-cols-2 gap-2">
        {[
          "Natural language queries",
          "Structured response cards",
          "Case study references",
          "Follow-up suggestions",
        ].map((f) => (
          <div key={f} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-[#70309d]" />
            <span className="text-slate-500 text-[10px]">{f}</span>
          </div>
        ))}
      </div> */}

      {/* CTA */}
      <div className="px-5 pb-5">
        <a
          href="/demo"
          className="flex items-center justify-center gap-2 w-full py-3 bg-[#70309d] hover:bg-[#5a2680] text-white text-xs font-bold rounded-lg transition-all duration-300 shadow-lg shadow-[#70309d]/30"
        >
          Explore Here <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Tools() {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
            Tools You Can Experience
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#3B4041] mb-6 leading-tight uppercase max-w-2xl">
            Put Real Tools in Front of Your Customers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            We build practical tools that demonstrate real value — answering
            questions, surfacing case studies, and helping qualify
            opportunities. Try them for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Tool List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t)}
                className={`flex items-start gap-4 p-5 rounded-md text-left transition-all duration-300 ${
                  activeTool.id === t.id
                    ? "bg-[#3B4041] text-white shadow-md"
                    : "bg-[#efefef] text-[#3B4041] hover:bg-[#E4E4E7]"
                }`}
              >
                <div
                  className={`mt-0.5 ${activeTool.id === t.id ? "text-slate-400" : "text-slate-500"}`}
                >
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold mb-0.5">
                    {t.title}
                  </h3>
                  <p
                    className={`text-xs ${activeTool.id === t.id ? "text-brand-300" : "text-slate-500"}`}
                  >
                    {t.subtitle}
                  </p>
                </div>
              </button>
            ))}
            <a
              href="/demo"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-[#70309d] text-white font-bold rounded-md hover:bg-[#5a2680] transition-all duration-300 text-sm shadow-sm"
            >
              Try All Tools Live
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Side: Tool Preview */}
          <div className="lg:col-span-8 rounded-xl shadow-xl relative overflow-hidden">
            {activeTool.id === "knowledge" ? (
              <KnowledgeAssistantPreview />
            ) : (
              <AssessmentTool key={activeTool.id} tool={activeTool} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}