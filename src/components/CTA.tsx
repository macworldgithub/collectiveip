import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-32 bg-dark flex flex-col items-center justify-center min-h-[60vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/education.png)',
        }}
      />
      {/* Blur and Dark Overlay */}
      <div className="absolute inset-0 bg-[#3B4041]/70 backdrop-blur-sm" />

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
          Ready to Expand Your Capabilities?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Whether you're looking to expand your services portfolio, improve delivery efficiency, or
          explore intelligent automation — we're here to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5  bg-[#F4F4F5] border border-white/30 text-black
            font-bold rounded-lg hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
          >
            Explore Our Tools 
          </a>
        </div>
      </div>
    </section>
  );
}

