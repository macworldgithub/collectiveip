import React from "react";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  const heroData = {
    company: "COLLECTIVE BANKING",
    poweredBy: "POWERED BY COLLECTIVE IP",
    badge: "INTELLIGENT FINANCIAL SERVICES",
    title: "THE FUTURE OF DIGITAL BANKING",
    description:
      "Real-time fraud detection, AI mortgage advisory, intelligent wealth management, and predictive transaction insights.",
    backgroundImage:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2070&auto=format&fit=crop", // London skyline night
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="City Skyline"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Top Navbar */}
      <div className="absolute left-0 top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={18} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white font-bold text-xl">
                C
              </div>
              <h2 className="text-lg font-bold tracking-wide text-white">
                {heroData.company}
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {heroData.poweredBy}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 sm:pt-24">
            {/* Badge */}
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-300">
              {heroData.badge}
            </p>

            {/* Main Title */}
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-[1.05] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[82px] font-heading">
              {heroData.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-brand-600 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-brand-700">
                Get Started
              </button>

              <button className="rounded-full border border-white/30 bg-[#efefef] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-zinc-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
