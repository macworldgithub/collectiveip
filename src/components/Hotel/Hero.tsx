import React from "react";
import { ArrowLeft, Crown } from "lucide-react";

export default function Hero() {
  const heroData = {
    company: "COLLECTIVE HOTELS",
    poweredBy: "POWERED BY COLLECTIVE IP",
    badge: "INTELLIGENT HOSPITALITY",
    title: "THE ART OF ANTICIPATION",
    description:
      "AI that knows your guests better than they know themselves — personalised stays, predictive service, and intelligent revenue optimisation.",
    backgroundImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", // Luxury hotel lobby
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Luxury Hotel Lobby"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Top Navbar */}
      <div className="absolute left-0 top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 md:h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10">
              <ArrowLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                <Crown size={22} />
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-wider text-white">
                {heroData.company}
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
            <p className="hidden sm:block text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {heroData.poweredBy}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl pt-20 md:pt-24">
            {/* Badge */}
            <p className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400">
              {heroData.badge}
            </p>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter text-white">
              {heroData.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-white/90">
                Explore Experiences
              </button>
              <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
                Watch the Film
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
