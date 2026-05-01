import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-dark">
      {/* Background image without blur, just darkened */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/image.png)',
          filter: 'brightness(0.35)',
        }}
      />
      
      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/60" />

      <div className="relative w-full max-w-7xl mx-auto px-6 py-32 text-left z-10">
        <div className="max-w-3xl">
          <p className="text-brand-300  font-bold tracking-[0.15em] uppercase text-base mb-4">
            Trusted IT Infrastructure Partner
          </p>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6 uppercase tracking-tight">
            HELPING PARTNERS<br />
            DELIVER, SCALE, AND<br />
            GROW
          </h1>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We are a specialist IT infrastructure services business built for the
            channel. We help partners expand their services portfolio, deliver
            efficiently, and create lasting commercial value — enhanced by
            intelligent automation.
          </p>

          <div className="flex flex-wrap gap-4 justify-start">
            <a
              href="/practices"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5CF6] text-white font-bold rounded hover:bg-[#7C3AED] transition-all duration-300 shadow-sm text-sm"
            >
              Explore Our Practices 
              <ArrowRight size={16} />
            </a>
            <a
              href="/demo"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white font-bold rounded hover:bg-white/10 transition-all duration-300 text-sm"
            >
              Experience Our Tools
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10">
        <div className="w-5 h-8 border-[1.5px] border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}


