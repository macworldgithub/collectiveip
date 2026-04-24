import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageSquare, Network, Lock, ArrowRight, Send, ChevronDown } from 'lucide-react';

const tools = [
  {
    id: 'knowledge',
    icon: <MessageSquare size={24} />,
    title: 'Knowledge Assistant',
    subtitle: 'Capability & Case Study Finder',
    desc: 'Ask anything about our capabilities, delivery experience, or case studies.',
    placeholder: 'e.g. "What wireless experience do you have in healthcare?"',
    sampleQuestions: [
      'What wireless experience do you have in healthcare?',
      'Can you deliver HPC environments for research institutions?',
      'What security frameworks do you work with?',
      'Do you have experience in retail network deployments?',
    ],
    responses: {
      default:
        'Thank you for your question. Our team has extensive experience across all six core practices. For healthcare wireless, we have delivered multiple NHS Trust projects including high-density Wi-Fi 6 environments supporting 3,000+ concurrent devices. Would you like to speak with one of our specialists about your specific requirements?',
    },
  },
  {
    id: 'network',
    icon: <Network size={24} />,
    title: 'Network Assessment',
    subtitle: 'Infrastructure Discovery',
    desc: 'Answer a few questions about your network environment to receive tailored recommendations.',
    placeholder: null,
    fields: [
      { label: 'Number of sites', type: 'select', options: ['1', '2–5', '6–20', '21–50', '50+'] },
      {
        label: 'Primary concern',
        type: 'select',
        options: ['Performance', 'Security', 'Reliability', 'Cost', 'Scalability'],
      },
      {
        label: 'Current infrastructure age',
        type: 'select',
        options: ['Less than 2 years', '2–5 years', '5–10 years', '10+ years'],
      },
      {
        label: 'Approximate device count',
        type: 'select',
        options: ['Under 100', '100–500', '500–2,000', '2,000–10,000', '10,000+'],
      },
    ],
  },
  {
    id: 'security',
    icon: <Lock size={24} />,
    title: 'Security Posture Review',
    subtitle: 'Threat & Risk Analysis',
    desc: 'Get a rapid assessment of your current security posture based on industry frameworks.',
    placeholder: null,
    fields: [
      {
        label: 'Industry sector',
        type: 'select',
        options: ['Healthcare', 'Finance', 'Manufacturing', 'Education', 'Retail', 'Other'],
      },
      {
        label: 'Endpoint management',
        type: 'select',
        options: ['Fully managed (MDM/UEM)', 'Partially managed', 'Unmanaged', 'Unknown'],
      },
      {
        label: 'Last security assessment',
        type: 'select',
        options: ['Within 12 months', '1–2 years ago', '2–3 years ago', 'Never / Unknown'],
      },
      {
        label: 'Primary security concern',
        type: 'select',
        options: ['Ransomware', 'Data breach', 'Insider threat', 'Compliance', 'All of the above'],
      },
    ],
  },
];

type Tool = (typeof tools)[0];

function KnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    {
      role: 'ai',
      text: "Hello! I'm your Collective IP Knowledge Assistant. Ask me anything about our capabilities, services, or delivery experience.",
    },
  ]);
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
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-dark px-6 py-4 flex items-center gap-3">
        <div className="w-2 h-2 bg-green-400 rounded-full" />
        <span className="text-white text-sm font-medium">Knowledge Assistant — Online</span>
      </div>
      <div className="h-80 overflow-y-auto p-5 flex flex-col gap-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-brand-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-700 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 p-4">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tool.sampleQuestions?.slice(0, 2).map((q) => (
            <button
              key={q}
              onClick={() => send(q)}
              className="text-xs px-3 py-1.5 bg-brand-50 text-brand-600 rounded-full hover:bg-brand-100 transition-colors border border-brand-200"
            >
              {q.length > 40 ? q.slice(0, 40) + '…' : q}
            </button>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={tool.placeholder ?? ''}
            className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-brand-400 transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}

function AssessmentTool({ tool }: { tool: Tool }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allFilled = tool.fields?.every((f) => values[f.label]);

  return submitted ? (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center">
      <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
        {tool.icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-dark mb-2">Assessment Received</h3>
      <p className="text-dark-light text-sm mb-6 max-w-sm mx-auto">
        Thank you — one of our specialists will review your responses and be in touch within one
        business day with tailored recommendations.
      </p>
      <button
        onClick={() => {
          setValues({});
          setSubmitted(false);
        }}
        className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-md hover:bg-brand-700 transition-colors"
      >
        Start Again
      </button>
    </div>
  ) : (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-col gap-5 mb-6">
        {tool.fields?.map((f) => (
          <div key={f.label}>
            <label className="block text-sm font-semibold text-dark mb-1.5">{f.label}</label>
            <div className="relative">
              <select
                value={values[f.label] ?? ''}
                onChange={(e) => setValues((v) => ({ ...v, [f.label]: e.target.value }))}
                className="w-full appearance-none px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-brand-400 transition-colors bg-white"
              >
                <option value="">Select…</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        disabled={!allFilled}
        onClick={() => setSubmitted(true)}
        className="w-full flex items-center justify-center gap-2 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Submit Assessment <ArrowRight size={18} />
      </button>
    </div>
  );
}

export default function DemoPage() {
  const [activeTool, setActiveTool] = useState(tools[0]);

  return (
    <div className="font-body text-dark antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663337333551/h9wm5ZXmZd6BG5PjnWCKUN/london-hero-HWmTzZdNn2zdtwx65U2Lxz.webp)',
          }}
        />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 bg-brand-600/20 border border-brand-400/30 rounded-full text-brand-300 text-xs font-semibold tracking-wide uppercase mb-6">
            Interactive Demo
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-6 uppercase">
            Experience Our Tools
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Try our intelligent tools live. These are the same tools we put in front of partners
            and their customers to accelerate conversations and qualify opportunities.
          </p>
        </div>
      </section>

      {/* Tool Selector + Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t)}
                className={`flex-1 flex items-center gap-3 px-5 py-4 rounded-xl border text-left transition-all duration-200 ${
                  activeTool.id === t.id
                    ? 'bg-brand-600 border-brand-600 text-white shadow-lg shadow-brand-600/20'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-brand-300'
                }`}
              >
                <span
                  className={`flex-shrink-0 ${activeTool.id === t.id ? 'text-white' : 'text-brand-600'}`}
                >
                  {t.icon}
                </span>
                <div>
                  <div className="font-semibold text-sm">{t.title}</div>
                  <div
                    className={`text-xs ${activeTool.id === t.id ? 'text-brand-200' : 'text-gray-400'}`}
                  >
                    {t.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tool Description */}
          <div className="mb-6">
            <p className="text-dark-light">{activeTool.desc}</p>
          </div>

          {/* Active Tool */}
          {activeTool.id === 'knowledge' ? (
            <KnowledgeAssistant tool={activeTool} />
          ) : (
            <AssessmentTool tool={activeTool} />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-dark mb-4">
            Want These Tools for Your Business?
          </h2>
          <p className="text-dark-light mb-8">
            We can deploy these tools under your brand, configured with your content, case studies,
            and services portfolio — ready to put in front of your customers.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-600 text-white font-semibold rounded-md hover:bg-brand-700 transition-colors duration-200"
          >
            Talk to Us About Partnership <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
