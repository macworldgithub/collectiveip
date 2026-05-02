import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MessageSquare,
  Activity,
  ShieldCheck,
  ArrowRight,
  Send,
  ChevronDown,
  Bot,
  FileText,
  CheckCircle2,
  ChevronRight,
  Search,
} from "lucide-react";

type ChatCard = {
  type: "capability" | "case-study" | "discovery";
  tag: string;
  title: string;
  desc: string;
  bullets?: string[];
  stat?: string;
  statDesc?: string;
};

type ChatMessage = {
  role: "user" | "ai";
  text: string;
  cards?: ChatCard[];
  options?: string[];
};

function getBotResponse(q: string): ChatMessage {
  const norm = q.toLowerCase();

  if (
    norm.includes("cisco wireless rollout") ||
    norm.includes("sectors have you deployed cisco") ||
    norm.includes("multi-site cisco rollouts")
  ) {
    return {
      role: "ai",
      text: "Yes — Cisco deployments are a core capability across our Connectivity practice. We have extensive experience with Cisco wireless, switching, routing, and SD-WAN solutions across complex multi-site environments.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Cisco Delivery Capability",
          desc: "Our network engineering teams deliver Cisco solutions from design through to post-deployment optimisation. We support the full lifecycle including site surveys, HLD/LLD, deployment, configuration, and ongoing optimisation.",
          bullets: [
            "Cisco wireless (Wi-Fi 6/6E) design and deployment",
            "Cisco Catalyst and Meraki switching",
            "Cisco SD-WAN and routing architecture",
            "Multi-site rollouts with PMO coordination",
          ],
        },
        {
          type: "case-study",
          tag: "CASE STUDY",
          title: "NHS Hospital Trust — Wireless Transformation",
          desc: "We delivered a full wireless network refresh for an NHS Hospital Trust across multiple sites, including Cisco wireless infrastructure supporting 3,000+ concurrent devices with zero downtime during migration.",
          stat: "3,000+",
          statDesc: "Concurrent devices supported",
        },
      ],
      options: [
        "What sectors have you deployed Cisco solutions in?",
        "Can you handle multi-site Cisco rollouts?",
        "What's your approach to wireless design?",
      ],
    };
  }

  if (
    norm.includes("approach to wireless design") ||
    norm.includes("hospital wireless deployments") ||
    norm.includes("retail wireless solutions")
  ) {
    return {
      role: "ai",
      text: "Wireless network design and deployment is one of our strongest capabilities. We specialise in complex wireless environments across healthcare, retail, education, and hospitality sectors.",
      cards: [
        {
          type: "capability",
          tag: "CAPABILITY",
          title: "Wireless Expertise",
          desc: "Our team delivers bespoke wireless network solutions from initial site surveys and predictive design through to deployment, validation, and post-deployment optimisation.",
          bullets: [
            "Predictive and on-site wireless surveys",
            "High-density design for clinical and retail environments",
            "Wi-Fi 6/6E migration and refresh programmes",
            "IoT device integration and management",
            "Post-deployment optimisation and tuning",
          ],
        },
        {
          type: "case-study",
          tag: "CASE STUDY",
          title: "Hospital Trust Wireless Refresh",
          desc: "We delivered a complete wireless network transformation for an NHS Hospital Trust, achieving 100% coverage across all clinical areas with zero downtime during migration.",
          stat: "100%",
          statDesc: "Coverage across clinical areas",
        },
      ],
      options: [
        "Can you support hospital wireless deployments?",
        "What about retail wireless solutions?",
        "How do you handle IoT device connectivity?",
      ],
    };
  }

  return {
    role: "ai",
    text: "Thank you for your question. Collective IP delivers end-to-end IT infrastructure services across six core practices: Connectivity, Security, Cloud, Datacentre & Compute, Endpoint Infrastructure, and Intelligent Automation.",
    cards: [
      {
        type: "discovery",
        tag: "DISCOVERY",
        title: "Let Me Help You Explore",
        desc: "I can provide detailed information about any of our capabilities, delivery approach, or how we work with partners. Try asking about a specific area:",
        bullets: [
          "Network and wireless deployments (including Cisco)",
          "Security solutions and compliance",
          "Cloud migration and hybrid infrastructure",
          "HPC and datacentre solutions",
          "Intelligent automation capabilities",
          "Partner enablement and commercial models",
        ],
      },
    ],
    options: [
      "Can you support a Cisco wireless rollout?",
      "What intelligent automation solutions do you offer?",
      "How do you work with channel partners?",
    ],
  };
}

const tools = [
  {
    id: "knowledge",
    icon: <MessageSquare size={18} />,
    title: "Knowledge Assistant",
    subtitle: "Capability & Case Study Finder",
    desc: "Ask anything about our capabilities, delivery experience, or case studies.",
    placeholder: "Ask about our capabilities...",
    sampleQuestions: [
      "Can you support a multi-site Cisco wireless rollout?",
      "What intelligent automation solutions do you offer?",
      "Can you deliver endpoint security for a large enterprise?",
      "How do you work with channel partners?",
    ],
  },
  {
    id: "network",
    icon: <Activity size={18} />,
    title: "Network Assessment",
    subtitle: "Infrastructure Discovery",
    desc: "Answer a few questions about your network environment to receive tailored recommendations.",
    fields: [
      {
        label: "Number of sites",
        type: "select",
        options: ["1", "2–5", "6–20", "21–50", "50+"],
      },
      {
        label: "Primary concern",
        type: "select",
        options: [
          "Performance",
          "Security",
          "Reliability",
          "Cost",
          "Scalability",
        ],
      },
      {
        label: "Current infrastructure age",
        type: "select",
        options: ["Less than 2 years", "2–5 years", "5–10 years", "10+ years"],
      },
      {
        label: "Approximate device count",
        type: "select",
        options: [
          "Under 100",
          "100–500",
          "500–2,000",
          "2,000–10,000",
          "10,000+",
        ],
      },
    ],
  },
  {
    id: "security",
    icon: <ShieldCheck size={18} />,
    title: "Security Posture Review",
    subtitle: "Threat & Risk Analysis",
    desc: "Get a rapid assessment of your current security posture based on industry frameworks.",
    fields: [
      {
        label: "Industry sector",
        type: "select",
        options: [
          "Healthcare",
          "Finance",
          "Manufacturing",
          "Education",
          "Retail",
          "Other",
        ],
      },
      {
        label: "Endpoint management",
        type: "select",
        options: [
          "Fully managed (MDM/UEM)",
          "Partially managed",
          "Unmanaged",
          "Unknown",
        ],
      },
      {
        label: "Last security assessment",
        type: "select",
        options: [
          "Within 12 months",
          "1–2 years ago",
          "2–3 years ago",
          "Never / Unknown",
        ],
      },
      {
        label: "Primary security concern",
        type: "select",
        options: [
          "Ransomware",
          "Data breach",
          "Insider threat",
          "Compliance",
          "All of the above",
        ],
      },
    ],
  },
];

type Tool = (typeof tools)[0];

function KnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    // Simulate small AI delay
    setTimeout(() => {
      setMessages((m) => [...m, getBotResponse(text)]);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5C2882] rounded-lg flex items-center justify-center text-white">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#3B4041]">
                Collective IP Knowledge Assistant
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                Ask about our capabilities, case studies, and approach
              </p>
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Online</span>
          </div> */}
          <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] text-brand-300 text-xs font-medium">
            <span className="w-2 h-2 bg-brand-600 rounded-full" />
            Online
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#5C2882] mb-6">
                <Bot size={32} />
              </div>
              <h2 className="text-xl font-extrabold text-[#3B4041] mb-2 uppercase tracking-tight">
                How can I help you today?
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
                Ask about our capabilities, delivery approach, or how we could
                help with your specific requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
                {tool.sampleQuestions?.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => send(q)}
                    className="p-4 bg-[#F9FAFB] border border-slate-100 rounded-xl text-left text-[11px] font-bold text-slate-500 hover:border-[#8B5CF6] hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-3 w-full max-w-[95%] md:max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        m.role === "user"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-[#F3E8FF] text-[#5C2882]"
                      }`}
                    >
                      {m.role === "user" ? "U" : <Bot size={16} />}
                    </div>
                    <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
                      {m.text && (
                        <div
                          className={`p-4 rounded-2xl text-[13px] leading-relaxed font-medium inline-block w-fit ${
                            m.role === "user"
                              ? "bg-[#5C2882] text-white rounded-tr-none"
                              : "bg-[#F9FAFB] text-slate-600 border border-slate-100 rounded-tl-none"
                          }`}
                        >
                          {m.text}
                        </div>
                      )}

                      {m.cards?.map((card, idx) => (
                        <div key={idx} className="w-full bg-[#fdfaff] border border-[#E9D5FF] rounded-xl p-5 shadow-sm">
                           <div className="flex items-center gap-2 mb-3">
                             {card.type === "capability" && <CheckCircle2 size={16} className="text-[#8B5CF6]" />}
                             {card.type === "case-study" && <ChevronRight size={16} className="text-[#8B5CF6]" />}
                             {card.type === "discovery" && <Search size={16} className="text-[#8B5CF6]" />}
                             <span className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-widest">{card.tag}</span>
                           </div>
                           
                           <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
                           <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                           
                           {card.bullets && (
                             <ul className="space-y-2 mt-2">
                               {card.bullets.map((b, bIdx) => (
                                 <li key={bIdx} className="flex items-start gap-2.5">
                                   <div className="w-1 h-1 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
                                   <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
                                 </li>
                               ))}
                             </ul>
                           )}

                           {card.stat && (
                             <div className="mt-4 pt-4 border-t border-[#E9D5FF]/50 flex items-center gap-3">
                               <span className="text-2xl font-extrabold text-[#5C2882]">{card.stat}</span>
                               <span className="text-[13px] font-medium text-slate-500">{card.statDesc}</span>
                             </div>
                           )}
                        </div>
                      ))}

                      {m.options && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {m.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(opt)}
                              className="px-4 py-2.5 bg-white border border-slate-200 rounded-full text-[12px] font-medium text-slate-600 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors text-left shadow-sm"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-slate-50 bg-[#F9FAFB]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.placeholder}
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-xs font-medium focus:outline-none focus:border-[#8B5CF6] transition-all shadow-sm pr-14"
            />
            <button
              type="submit"
              className="absolute right-2 w-10 h-10 bg-[#8B5CF6] text-white rounded-lg flex items-center justify-center hover:bg-[#7C3AED] transition-colors shadow-lg shadow-[#8B5CF6]/20"
            >
              <Send size={18} />
            </button>
          </form>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center mt-6">
            Demonstration of the Digital Front Door concept. In production,
            trained on the full company knowledge base.
          </p>
        </div>
      </div>
    </div>
  );
}

function AssessmentTool({ tool }: { tool: Tool }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [isStarted, setIsStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const allFilled = tool.fields?.every((f) => values[f.label]);

  if (!isStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
          {/* Tool Header */}
          <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#5C2882] rounded-lg flex items-center justify-center text-white">
                {tool.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#3B4041]">
                  {tool.id === "network"
                    ? "Network Infrastructure Assessment"
                    : "Security Posture Review"}
                </h3>
                <p className="text-[10px] text-slate-400 font-medium">
                  {tool.id === "network"
                    ? "Identify gaps, risks, and optimisation opportunities"
                    : "Endpoint, network, cloud, and compliance evaluation"}
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#5C2882] mb-6">
              {tool.icon}
            </div>
            <h2 className="text-xl font-extrabold text-[#3B4041] mb-4 uppercase tracking-tight">
              {tool.id === "network"
                ? "NETWORK ASSESSMENT TOOL"
                : "SECURITY POSTURE REVIEW"}
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
              {tool.id === "network"
                ? "This tool scans your network infrastructure to identify gaps, risks, and optimisation opportunities. Click below to run a sample assessment."
                : "Evaluate your security posture across endpoints, identity, network, cloud, and data protection. Click below to run a sample review."}
            </p>
            <button
              onClick={() => setIsStarted(true)}
              className="flex items-center gap-3 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded-xl hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
            >
              {tool.icon}{" "}
              {tool.id === "network"
                ? "Run Sample Assessment"
                : "Run Sample Review"}
            </button>
          </div>

          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center mb-6">
            {tool.id === "network"
              ? "Sample assessment with representative findings. Production tool connects to live infrastructure via API."
              : "Sample review with representative findings. Production tool integrates with your security stack via API."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-10">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-[#F3E8FF] text-[#5C2882] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              {tool.icon}
            </div>
            <h3 className="text-2xl font-extrabold text-[#3B4041] mb-3 uppercase">
              Assessment Received
            </h3>
            <p className="text-sm text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
              Thank you — one of our specialists will review your responses and
              be in touch within one business day with tailored recommendations
              and relevant case studies.
            </p>
            <button
              onClick={() => {
                setValues({});
                setSubmitted(false);
                setIsStarted(false);
              }}
              className="px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
            >
              Start New Assessment
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[#3B4041] uppercase mb-2 tracking-tight">
                  {tool.title}
                </h2>
                <p className="text-xs text-slate-500">{tool.desc}</p>
              </div>
              <button
                onClick={() => setIsStarted(false)}
                className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-[#5C2882]"
              >
                Back
              </button>
            </div>
            <div className="space-y-6 mb-10">
              {tool.fields?.map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                    {f.label}
                  </label>
                  <div className="relative">
                    <select
                      value={values[f.label] ?? ""}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, [f.label]: e.target.value }))
                      }
                      className="w-full appearance-none px-4 py-3.5 border border-slate-200 rounded-xl text-xs font-bold text-[#3B4041] focus:outline-none focus:border-[#8B5CF6] transition-all bg-white"
                    >
                      <option value="">Select Option…</option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              disabled={!allFilled}
              onClick={() => setSubmitted(true)}
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#5C2882] text-white text-xs font-bold rounded-xl hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit for Review <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

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

          {/* Tabs */}
          <div className="flex flex-wrap gap-10 border-b border-white/10">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t)}
                className={`flex items-center gap-3 pb-5 relative transition-all duration-300
          ${
            activeTool.id === t.id
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
              >
                <span
                  className={`${
                    activeTool.id === t.id ? "text-[#8B5CF6]" : "text-slate-400"
                  }`}
                >
                  {t.icon}
                </span>

                <span
                  className={`text-xs font-semibold tracking-wide ${activeTool.id === t.id ? "text-[#8B5CF6]" : "text-slate-400"}`}
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
      </section>

      {/* Demo Content */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          {activeTool.id === "knowledge" ? (
            <KnowledgeAssistant tool={activeTool} />
          ) : (
            <AssessmentTool tool={activeTool} />
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
