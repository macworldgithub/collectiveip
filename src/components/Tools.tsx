import { MessageSquare, Activity, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const tools = [
  {
    icon: <MessageSquare size={20} />,
    title: 'Knowledge Assistant',
    subtitle: 'Capability & Case Study Finder',
    id: 'knowledge'
  },
  {
    icon: <Activity size={20} />,
    title: 'Network Assessment',
    subtitle: 'Infrastructure Discovery',
    id: 'network'
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Security Posture Review',
    subtitle: 'Threat & Risk Analysis',
    id: 'security'
  },
];

export default function Tools() {
  const [activeTool, setActiveTool] = useState('knowledge');

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
            We build practical tools that demonstrate real value — answering questions, surfacing
            case studies, and helping qualify opportunities. Try them for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: Tool List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tools.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTool(t.id)}
                className={`flex items-start gap-4 p-5 rounded-md text-left transition-all duration-300 ${activeTool === t.id
                  ? 'bg-[#3B4041] text-white shadow-md'
                  : 'bg-[#F4F4F5] text-[#3B4041] hover:bg-[#E4E4E7]'
                  }`}
              >
                <div className={`mt-0.5 ${activeTool === t.id ? 'text-slate-400' : 'text-slate-500'}`}>
                  {t.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold mb-0.5">{t.title}</h3>
                  <p className={`text-xs ${activeTool === t.id ? 'text-[#A78BFA]' : 'text-slate-500'}`}>
                    {t.subtitle}
                  </p>
                </div>
              </button>
            ))}

            <a
              href="/demo"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-[#5C2882] text-white font-bold rounded-md hover:bg-[#7C3AED] transition-all duration-300 text-sm shadow-sm"
            >
              Try All Tools Live
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Side: Tool Preview */}
          <div className="lg:col-span-8 bg-[#3B4041] rounded-xl p-8 shadow-xl relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-brand-300">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Knowledge Assistant</h4>
                  <p className="text-brand-300 text-xs">Capability & Case Study Finder</p>
                </div>
              </div>
  <button
  className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] text-brand-300 text-xs font-medium"
>
  <span className="w-2 h-2 bg-brand-600 rounded-full" />
  Live
</button>
            </div>

            <div className="space-y-2">
              <p className="text-slate-300 text-sm leading-relaxed">
                Ask questions about our capabilities and get structured, credible answers drawn from actual delivery experience and case studies.
              </p>

              <div className="bg-[#454A4C] p-2 rounded-lg border border-transparent">
                <p className="text-slate-200 text-sm">Can you support a multi-site Cisco wireless refresh?</p>
              </div>

              <div className="bg-[#433D4E] border border-[#4C3A6D] p-4 rounded-lg">
                <div className="flex items-center gap-2 text-brand-300 mb-3 uppercase text-[10px] font-bold tracking-[0.15em]">
                  <CheckCircle2 size={14} /> Capability Match
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  Yes — this is a core capability. Our network engineering teams deliver bespoke wireless solutions from design through to post-deployment optimisation across healthcare, retail, and education sectors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-1 h-1 bg-brand-300 rounded-full" /> Natural language queries
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-1 h-1 bg-brand-300 rounded-full" /> Structured response cards
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-1 h-1 bg-brand-300 rounded-full" /> Case study references
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <div className="w-1 h-1 bg-brand-300 rounded-full" /> Follow-up suggestions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

