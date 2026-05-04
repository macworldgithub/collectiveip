import { ArrowRight, BarChart3, CheckCircle, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Answers Real Questions',
    desc: 'Based on actual delivery experience',
    icon: <BarChart3 size={20} />
  },
  {
    title: 'Highlights Case Studies',
    desc: 'Surfaces relevant proof points',
    icon: <CheckCircle size={20} />
  },
  {
    title: 'Qualifies Opportunities',
    desc: 'Routes enquiries to the right team',
    icon: <MessageSquare size={20} />
  },
];

export default function DigitalFrontDoor() {
  return (
    <section className="relative py-32 bg-dark flex flex-col items-center justify-center min-h-[80vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/aerospace.png)',
        }}
      />
      {/* Blur and Dark Overlay */}
      <div className="absolute inset-0 bg-[#3B4041]/70 backdrop-blur-sm" />

      <div className="relative max-w-5xl mx-auto px-6 text-center w-full z-10">
        <div className="mb-12">
          <p className="text-white text-lg font-bold uppercase tracking-widest mb-4">
            Digital Front Door
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
            Your Always-On Sales Engineer
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Put practical tools in front of your prospects and partners. Our Digital Front Door
            answers real questions, surfaces relevant case studies, and guides conversations
            toward scoped engagements — 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center gap-3 p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-brand-400 mb-2">
                {item.icon}
              </div>
              <div className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</div>
              <div className="text-slate-300 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>

        <a
          href="/demo"
          className="inline-flex items-center gap-2 px-8 py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors duration-200 shadow-lg"
        >
          Experience the Tools
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

