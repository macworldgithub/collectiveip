import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  MessageSquare,
  Activity,
  ShieldCheck,
  ArrowRight,
  Send,
  ChevronDown,
  Bot,
  FileText
} from 'lucide-react';

const tools = [
  {
    id: 'knowledge',
    icon: <MessageSquare size={18} />,
    title: 'Knowledge Assistant',
    subtitle: 'Capability & Case Study Finder',
    desc: 'Ask anything about our capabilities, delivery experience, or case studies.',
    placeholder: 'Ask about our capabilities...',
    sampleQuestions: [
      'Can you support a multi-site Cisco wireless rollout?',
      'What intelligent automation solutions do you offer?',
      'Can you deliver endpoint security for a large enterprise?',
      'How do you work with channel partners?',
    ],
  },
  {
    id: 'network',
    icon: <Activity size={18} />,
    title: 'Network Assessment',
    subtitle: 'Infrastructure Discovery',
    desc: 'Answer a few questions about your network environment to receive tailored recommendations.',
    fields: [
      { label: 'Number of sites', type: 'select', options: ['1', '2–5', '6–20', '21–50', '50+'] },
      { label: 'Primary concern', type: 'select', options: ['Performance', 'Security', 'Reliability', 'Cost', 'Scalability'] },
      { label: 'Current infrastructure age', type: 'select', options: ['Less than 2 years', '2–5 years', '5–10 years', '10+ years'] },
      { label: 'Approximate device count', type: 'select', options: ['Under 100', '100–500', '500–2,000', '2,000–10,000', '10,000+'] },
    ],
  },
  {
    id: 'security',
    icon: <ShieldCheck size={18} />,
    title: 'Security Posture Review',
    subtitle: 'Threat & Risk Analysis',
    desc: 'Get a rapid assessment of your current security posture based on industry frameworks.',
    fields: [
      { label: 'Industry sector', type: 'select', options: ['Healthcare', 'Finance', 'Manufacturing', 'Education', 'Retail', 'Other'] },
      { label: 'Endpoint management', type: 'select', options: ['Fully managed (MDM/UEM)', 'Partially managed', 'Unmanaged', 'Unknown'] },
      { label: 'Last security assessment', type: 'select', options: ['Within 12 months', '1–2 years ago', '2–3 years ago', 'Never / Unknown'] },
      { label: 'Primary security concern', type: 'select', options: ['Ransomware', 'Data breach', 'Insider threat', 'Compliance', 'All of the above'] },
    ],
  },
];

type Tool = (typeof tools)[0];

function KnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [
      ...m,
      { role: 'user', text },
      {
        role: 'ai',
        text: "Thanks for your question. Our team has deep expertise across all six practices. Based on what you've asked, I'd recommend connecting with our specialist team who can provide tailored guidance and relevant case studies. Would you like us to reach out?",
      },
    ]);
    setInput('');
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
              <h3 className="text-sm font-bold text-[#3B4041]">Collective IP Knowledge Assistant</h3>
              <p className="text-[10px] text-slate-400 font-medium">Ask about our capabilities, case studies, and approach</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Online</span>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#5C2882] mb-6">
                <Bot size={32} />
              </div>
              <h2 className="text-xl font-extrabold text-[#3B4041] mb-2 uppercase tracking-tight">How can I help you today?</h2>
              <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
                Ask about our capabilities, delivery approach, or how we could help with your specific requirements.
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
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'user' ? 'bg-slate-100 text-slate-500' : 'bg-[#F3E8FF] text-[#5C2882]'
                      }`}>
                      {m.role === 'user' ? 'U' : <Bot size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-xs leading-relaxed font-medium ${m.role === 'user'
                      ? 'bg-[#5C2882] text-white rounded-tr-none'
                      : 'bg-[#F9FAFB] text-slate-600 border border-slate-50 rounded-tl-none'
                      }`}>
                      {m.text}
                    </div>
                  </div>
                </div>
              ))}
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
            Demonstration of the Digital Front Door concept. In production, trained on the full company knowledge base.
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
                <h3 className="text-sm font-bold text-[#3B4041]">{tool.id === 'network' ? 'Network Infrastructure Assessment' : 'Security Posture Review'}</h3>
                <p className="text-[10px] text-slate-400 font-medium">
                  {tool.id === 'network'
                    ? 'Identify gaps, risks, and optimisation opportunities'
                    : 'Endpoint, network, cloud, and compliance evaluation'}
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
              {tool.id === 'network' ? 'NETWORK ASSESSMENT TOOL' : 'SECURITY POSTURE REVIEW'}
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
              {tool.id === 'network'
                ? 'This tool scans your network infrastructure to identify gaps, risks, and optimisation opportunities. Click below to run a sample assessment.'
                : 'Evaluate your security posture across endpoints, identity, network, cloud, and data protection. Click below to run a sample review.'}
            </p>
            <button
              onClick={() => setIsStarted(true)}
              className="flex items-center gap-3 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded-xl hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
            >
              {tool.icon} {tool.id === 'network' ? 'Run Sample Assessment' : 'Run Sample Review'}
            </button>
          </div>

          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center mb-6">
            {tool.id === 'network'
              ? 'Sample assessment with representative findings. Production tool connects to live infrastructure via API.'
              : 'Sample review with representative findings. Production tool integrates with your security stack via API.'}
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
            <h3 className="text-2xl font-extrabold text-[#3B4041] mb-3 uppercase">Assessment Received</h3>
            <p className="text-sm text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
              Thank you — one of our specialists will review your responses and be in touch within one
              business day with tailored recommendations and relevant case studies.
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
                <h2 className="text-xl font-extrabold text-[#3B4041] uppercase mb-2 tracking-tight">{tool.title}</h2>
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
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{f.label}</label>
                  <div className="relative">
                    <select
                      value={values[f.label] ?? ''}
                      onChange={(e) => setValues((v) => ({ ...v, [f.label]: e.target.value }))}
                      className="w-full appearance-none px-4 py-3.5 border border-slate-200 rounded-xl text-xs font-bold text-[#3B4041] focus:outline-none focus:border-[#8B5CF6] transition-all bg-white"
                    >
                      <option value="">Select Option…</option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>{o}</option>
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
            backgroundImage: 'url(/images/retail.png)',
          }}
        />

        {/* LEFT → RIGHT DARK OVERLAY (IMPORTANT FIX) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f3435]/95 via-[#2f3435]/85 to-transparent" />

        {/* Extra subtle dark layer */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Small Label */}
          <h4 className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-[0.25em] mb-6">
            EXPERIENCE OUR TOOLS
          </h4>

          {/* Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] mb-6 max-w-3xl">
            TOOLS YOUR CLIENTS CAN <br /> EXPERIENCE TODAY
          </h1>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-20">
            These are real tools we deploy for our partners. Try them now — ask questions, run assessments, and see the kind of value we deliver from day one.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-10 border-b border-white/10">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t)}
                className={`flex items-center gap-3 pb-5 relative transition-all duration-300
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

                <span className={`text-xs font-semibold tracking-wide ${activeTool.id === t.id ? "text-[#8B5CF6]" : "text-slate-400"}`}>
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
          {activeTool.id === 'knowledge' ? (
            <KnowledgeAssistant tool={activeTool} />
          ) : (
            <AssessmentTool tool={activeTool} />
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 overflow-hidden bg-[#3B4041]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/images/aerospace.png)',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white uppercase mb-8 tracking-tight">
            Want These Tools for Your Business?
          </h2>
          <p className="text-base text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We build custom Digital Front Door solutions trained on your knowledge base,
            branded to your identity, and deployed to your clients. Let's talk about
            what's possible.
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
              className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-white/30 text-white text-xs font-bold rounded hover:bg-white/10 transition-all duration-300"
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
