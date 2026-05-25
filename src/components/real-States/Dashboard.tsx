import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  BedDouble,
  Bath,
  Square,
  MapPin,
  BarChart3,
  CalendarDays,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("portfolio");

  // Dynamic Tabs
  const tabs = [
    {
      id: "portfolio",
      title: "Property Portfolio",
      subtitle: "AI-matched property search",
      icon: Search,
    },
    {
      id: "valuation",
      title: "Instant Valuation",
      subtitle: "AI property valuation",
      icon: TrendingUp,
    },
    {
      id: "market",
      title: "Market Intelligence",
      subtitle: "Live market analytics",
      icon: BarChart3,
    },
    {
      id: "scheduler",
      title: "Smart Scheduler",
      subtitle: "AI viewing optimisation",
      icon: CalendarDays,
    },
  ];

  // Dynamic Property Data
  const properties = [
    {
      id: 1,
      title: "Period Conversion",
      location: "14 Elm Park Gardens, Chelsea",
      price: "£1,850,000",
      beds: 3,
      baths: 2,
      sqft: 1420,
      match: "97% match",
      badge: "JUST LISTED",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Garden", "Period Features", "Chain Free"],
    },
    {
      id: 2,
      title: "Victorian Terrace",
      location: "8 Markham Square, SW3",
      price: "£1,975,000",
      beds: 3,
      baths: 2,
      sqft: 1580,
      match: "94% match",
      badge: "PRICE REDUCED",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
      tags: ["Roof Terrace", "Renovated", "Parking"],
    },
    {
      id: 3,
      title: "Mansion Flat",
      location: "22 Draycott Avenue, Chelsea",
      price: "£1,695,000",
      beds: 3,
      baths: 1,
      sqft: 1280,
      match: "91% match",
      badge: "NEW INSTRUCTION",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      tags: ["Porter", "Lift", "Communal Gardens"],
    },
    {
      id: 4,
      title: "Garden Flat",
      location: "5 Cadogan Place, Knightsbridge",
      price: "£3,250,000",
      beds: 4,
      baths: 3,
      sqft: 2100,
      match: "99% match",
      badge: "EXCLUSIVE",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      tags: ["Private Garden", "Mews Parking", "Concierge"],
    },
    {
      id: 5,
      title: "Maisonette",
      location: "31 Onslow Gardens, SW7",
      price: "£2,450,000",
      beds: 4,
      baths: 2,
      sqft: 1850,
      match: "92% match",
      badge: "UNDER OFFER",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
      tags: ["Two Floors", "Garden Access", "Original Fireplaces"],
    },
    {
      id: 6,
      title: "Townhouse",
      location: "17 Lennox Gardens, SW1X",
      price: "£4,100,000",
      beds: 5,
      baths: 3,
      sqft: 2650,
      match: "98% match",
      badge: "JUST LISTED",
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop",
      tags: ["Freehold", "Garage", "Staff Quarters"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#05060b] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Tabs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active
                    ? "border-[#d4af37]/50 bg-[#1b1710] shadow-[0_0_0_1px_rgba(212,175,55,0.25)]"
                    : "border-white/10 bg-[#0b0d14] hover:border-white/20"
                }`}
              >
                <Icon
                  size={22}
                  className={`mb-4 ${
                    active ? "text-[#d4af37]" : "text-white/60"
                  }`}
                />

                <h3 className="text-base font-semibold">{tab.title}</h3>

                <p className="mt-1 text-sm text-white/50">{tab.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              placeholder="Search by address, type, or area..."
              className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0d14] pl-12 pr-4 text-sm text-white outline-none transition focus:border-[#d4af37]/40"
            />
          </div>

          {/* Filter Button */}
          <button className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0b0d14] px-6 text-sm font-medium transition hover:border-white/20">
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>

        {/* Property Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d14] transition duration-300 hover:-translate-y-1 hover:border-[#d4af37]/30"
            >
              {/* Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-[#d4af37] px-3 py-1 text-xs font-bold text-black">
                  {property.badge}
                </div>

                {/* Heart */}
                <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                  <Heart size={18} className="text-white" />
                </button>

                {/* Match */}
                <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-[#d4af37] backdrop-blur-sm">
                  {property.match}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Price */}
                <h2 className="text-3xl font-black tracking-tight text-white">
                  {property.price}
                </h2>

                {/* Title */}
                <p className="mt-1 text-sm text-white/50">{property.title}</p>

                {/* Location */}
                <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                  <MapPin size={16} className="text-white/40" />
                  {property.location}
                </div>

                {/* Specs */}
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <BedDouble size={16} />
                    {property.beds}
                  </div>

                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    {property.baths}
                  </div>

                  <div className="flex items-center gap-1">
                    <Square size={16} />
                    {property.sqft} sqft
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {property.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d4af37] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#c49b24]">
                  <Sparkles size={18} />
                  View AI Insights
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
