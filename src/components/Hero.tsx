import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(14,165,233,0.1),_transparent_50%)]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-600/20 border border-sky-500/30 rounded-full text-sky-300 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
            IT Infrastructure Services for the Channel
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Helping Partners{' '}
            <span className="text-sky-400">Deliver</span>,{' '}
            <span className="text-sky-400">Scale</span>, and{' '}
            <span className="text-sky-400">Grow</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            We are a specialist IT infrastructure services business built for the channel. We help
            partners expand their services portfolio, deliver efficiently, and create lasting
            commercial value — enhanced by intelligent automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#practices"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-500 transition-all duration-200 hover:gap-3"
            >
              Explore Our Practices
              <ChevronRight size={18} />
            </a>
            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-md hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Experience Our Tools
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
