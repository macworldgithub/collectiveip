import React from "react";
import { ArrowLeft, Building2 } from "lucide-react";

export default function RealEstateHero() {
  // Dynamic Data
  const heroData = {
    company: "COLLECTIVE REAL ESTATE GROUP",
    poweredBy: "POWERED BY COLLECTIVE IP",
    badge: "AI-POWERED REAL ESTATE",
    title: "THE INTELLIGENT PROPERTY EXPERIENCE",
    description:
      "Four distinct AI tools working together to transform how premium estate agencies serve their clients.",
    backgroundImage:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroData.backgroundImage}
          alt="Real Estate"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
      </div>

      {/* Top Navbar */}
      <div className="absolute left-0 top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            {/* Back Button */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10">
              <ArrowLeft size={18} />
            </button>

            {/* Logo + Text */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#caa85c]/15 text-[#d4af37]">
                <Building2 size={20} />
              </div>

              <h2 className="text-sm font-bold uppercase tracking-wide text-[#d4af37] sm:text-base">
                {heroData.company}
              </h2>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden items-center gap-2 sm:flex">
            <div className="h-2 w-2 rounded-full bg-purple-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {heroData.poweredBy}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-28 sm:pt-32">
            {/* Badge */}
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37] sm:text-sm">
              {heroData.badge}
            </p>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[82px]">
              {heroData.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
              {heroData.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-[#d4af37] px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-[#c49b24]">
                Explore Platform
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Blur Effect */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
