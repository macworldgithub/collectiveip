import { ArrowRight } from 'lucide-react';

const features = [
  { title: 'Answers Real Questions', desc: 'Based on actual delivery experience' },
  { title: 'Highlights Case Studies', desc: 'Surfaces relevant proof points' },
  { title: 'Qualifies Opportunities', desc: 'Routes enquiries to the right team' },
];

export default function DigitalFrontDoor() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-sky-600/20 text-sky-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              Your Always-On Sales Engineer
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Digital Front Door</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Put practical tools in front of your prospects and partners. Our Digital Front Door
              answers real questions, surfaces relevant case studies, and guides conversations
              toward scoped engagements — 24/7.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-500 transition-colors duration-200"
            >
              Experience the Tools
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition-colors duration-300"
              >
                <div className="w-2 h-2 mt-2 bg-sky-500 rounded-full flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
