// import React, { useState } from "react";
// import {
//   Search,
//   SlidersHorizontal,
//   Heart,
//   BedDouble,
//   Bath,
//   Square,
//   MapPin,
//   BarChart3,
//   CalendarDays,
//   Sparkles,
//   TrendingUp,
// } from "lucide-react";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("portfolio");

//   // Dynamic Tabs
//   const tabs = [
//     {
//       id: "portfolio",
//       title: "Property Portfolio",
//       subtitle: "AI-matched property search",
//       icon: Search,
//     },
//     {
//       id: "valuation",
//       title: "Instant Valuation",
//       subtitle: "AI property valuation",
//       icon: TrendingUp,
//     },
//     {
//       id: "market",
//       title: "Market Intelligence",
//       subtitle: "Live market analytics",
//       icon: BarChart3,
//     },
//     {
//       id: "scheduler",
//       title: "Smart Scheduler",
//       subtitle: "AI viewing optimisation",
//       icon: CalendarDays,
//     },
//   ];

//   // Dynamic Property Data
//   const properties = [
//     {
//       id: 1,
//       title: "Period Conversion",
//       location: "14 Elm Park Gardens, Chelsea",
//       price: "£1,850,000",
//       beds: 3,
//       baths: 2,
//       sqft: 1420,
//       match: "97% match",
//       badge: "JUST LISTED",
//       image:
//         "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Garden", "Period Features", "Chain Free"],
//     },
//     {
//       id: 2,
//       title: "Victorian Terrace",
//       location: "8 Markham Square, SW3",
//       price: "£1,975,000",
//       beds: 3,
//       baths: 2,
//       sqft: 1580,
//       match: "94% match",
//       badge: "PRICE REDUCED",
//       image:
//         "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Roof Terrace", "Renovated", "Parking"],
//     },
//     {
//       id: 3,
//       title: "Mansion Flat",
//       location: "22 Draycott Avenue, Chelsea",
//       price: "£1,695,000",
//       beds: 3,
//       baths: 1,
//       sqft: 1280,
//       match: "91% match",
//       badge: "NEW INSTRUCTION",
//       image:
//         "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Porter", "Lift", "Communal Gardens"],
//     },
//     {
//       id: 4,
//       title: "Garden Flat",
//       location: "5 Cadogan Place, Knightsbridge",
//       price: "£3,250,000",
//       beds: 4,
//       baths: 3,
//       sqft: 2100,
//       match: "99% match",
//       badge: "EXCLUSIVE",
//       image:
//         "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Private Garden", "Mews Parking", "Concierge"],
//     },
//     {
//       id: 5,
//       title: "Maisonette",
//       location: "31 Onslow Gardens, SW7",
//       price: "£2,450,000",
//       beds: 4,
//       baths: 2,
//       sqft: 1850,
//       match: "92% match",
//       badge: "UNDER OFFER",
//       image:
//         "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Two Floors", "Garden Access", "Original Fireplaces"],
//     },
//     {
//       id: 6,
//       title: "Townhouse",
//       location: "17 Lennox Gardens, SW1X",
//       price: "£4,100,000",
//       beds: 5,
//       baths: 3,
//       sqft: 2650,
//       match: "98% match",
//       badge: "JUST LISTED",
//       image:
//         "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=2070&auto=format&fit=crop",
//       tags: ["Freehold", "Garage", "Staff Quarters"],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#05060b] px-4 py-6 text-white sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Top Tabs */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {tabs.map((tab) => {
//             const Icon = tab.icon;
//             const active = activeTab === tab.id;

//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
//                   active
//                     ? "border-brand-500/50 bg-brand-900/10 shadow-[0_0_0_1px_rgba(112,48,157,0.25)]"
//                     : "border-white/10 bg-[#0b0d14] hover:border-white/20"
//                 }`}
//               >
//                 <Icon
//                   size={22}
//                   className={`mb-4 ${
//                     active ? "text-brand-300" : "text-white/60"
//                   }`}
//                 />

//                 <h3 className="text-base font-semibold">{tab.title}</h3>

//                 <p className="mt-1 text-sm text-white/50">{tab.subtitle}</p>
//               </button>
//             );
//           })}
//         </div>

//         {/* Search Bar */}
//         <div className="mt-8 flex flex-col gap-4 lg:flex-row">
//           {/* Search */}
//           <div className="relative flex-1">
//             <Search
//               size={20}
//               className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
//             />

//             <input
//               type="text"
//               placeholder="Search by address, type, or area..."
//               className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0d14] pl-12 pr-4 text-sm text-white outline-none transition focus:border-brand-500/40"
//             />
//           </div>

//           {/* Filter Button */}
//           <button className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0b0d14] px-6 text-sm font-medium transition hover:border-white/20">
//             <SlidersHorizontal size={18} />
//             Filters
//           </button>
//         </div>

//         {/* Property Grid */}
//         <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
//           {properties.map((property) => (
//             <div
//               key={property.id}
//               className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d14] transition duration-300 hover:-translate-y-1 hover:border-brand-500/30"
//             >
//               {/* Image */}
//               <div className="relative h-[250px] overflow-hidden">
//                 <img
//                   src={property.image}
//                   alt={property.title}
//                   className="h-full w-full object-cover transition duration-500 hover:scale-105"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

//                 {/* Badge */}
//                 <div className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
//                   {property.badge}
//                 </div>

//                 {/* Heart */}
//                 <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
//                   <Heart size={18} className="text-white" />
//                 </button>

//                 {/* Match */}
//                 <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-brand-300 backdrop-blur-sm">
//                   {property.match}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 {/* Price */}
//                 <h2 className="text-3xl font-black tracking-tight text-white">
//                   {property.price}
//                 </h2>

//                 {/* Title */}
//                 <p className="mt-1 text-sm text-white/50">{property.title}</p>

//                 {/* Location */}
//                 <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
//                   <MapPin size={16} className="text-white/40" />
//                   {property.location}
//                 </div>

//                 {/* Specs */}
//                 <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/60">
//                   <div className="flex items-center gap-1">
//                     <BedDouble size={16} />
//                     {property.beds}
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <Bath size={16} />
//                     {property.baths}
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <Square size={16} />
//                     {property.sqft} sqft
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 <div className="mt-5 flex flex-wrap gap-2">
//                   {property.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Bottom */}
//                 <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700">
//                   <Sparkles size={18} />
//                   View AI Insights
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState, useMemo } from "react";
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
  Zap,
  CheckCircle2,
  Loader,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("portfolio");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState("Mayfair");
  const [valuationLoading, setValuationLoading] = useState(false);
  const [valuationAddress, setValuationAddress] = useState("");
  const [valuationResult, setValuationResult] = useState<any>(null);

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

  // Market Intelligence Data
  const marketData: Record<
    string,
    {
      avgPrice: string;
      growth: string;
      demand: string;
      transactions: string;
      daysOnMarket: string;
    }
  > = {
    Chelsea: {
      avgPrice: "£5.8M",
      growth: "+5.2%",
      demand: "High",
      transactions: "54",
      daysOnMarket: "41",
    },
    Kensington: {
      avgPrice: "£6.2M",
      growth: "+4.8%",
      demand: "High",
      transactions: "48",
      daysOnMarket: "45",
    },
    Knightsbridge: {
      avgPrice: "£4.5M",
      growth: "+7.1%",
      demand: "Very High",
      transactions: "67",
      daysOnMarket: "22",
    },
    Mayfair: {
      avgPrice: "£5.8M",
      growth: "+5.2%",
      demand: "High",
      transactions: "54",
      daysOnMarket: "41",
    },
    Belgravia: {
      avgPrice: "£4.9M",
      growth: "+6.3%",
      demand: "Very High",
      transactions: "62",
      daysOnMarket: "28",
    },
    "Notting Hill": {
      avgPrice: "£3.8M",
      growth: "+8.1%",
      demand: "Very High",
      transactions: "78",
      daysOnMarket: "18",
    },
  };

  const regions = [
    "Chelsea",
    "Kensington",
    "Knightsbridge",
    "Mayfair",
    "Belgravia",
    "Notting Hill",
  ];

  const schedulerProperties = properties.slice(0, 4);
  const quickSelectAddresses = [
    "42 Kings Road, Chelsea",
    "15 Cadogan Square, SW1",
    "8 Holland Park, W11",
  ];

  // Generate dates for scheduler (next 7 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date(2024, 4, 27); // May 27, 2024

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);

      const days = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
      ];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      dates.push({
        key: date.toISOString().split("T")[0],
        day: days[date.getDay()],
        date: date.getDate(),
        month: months[date.getMonth()],
      });
    }
    return dates;
  };

  const dates = generateDates();
  const timeSlots = [
    "09:00",
    "10:30",
    "12:00",
    "14:00",
    "15:30",
    "17:00",
  ];

  // Filter properties based on search
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const query = searchQuery.toLowerCase();
      return (
        property.location.toLowerCase().includes(query) ||
        property.title.toLowerCase().includes(query) ||
        property.price.toLowerCase().includes(query) ||
        property.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        )
      );
    });
  }, [searchQuery]);

  // Handle valuation
  const handleValuation = (address: string) => {
    setValuationAddress(address);
    setValuationLoading(true);
    setValuationResult(null);

    // Simulate API call
    setTimeout(() => {
      setValuationResult({
        address: address,
        estimatedValue: "£3.25M",
        range: "£3.1M — £3.4M",
        yoyGrowth: "+8.2%",
        avgGrowth: "+5.1%",
        pricePerSqft: "£1,847",
        comparableSales: 127,
        analysisTime: "6.2s",
        marketPosition: "Top 20%",
        comparables: [
          {
            address: "38 Kings Road, SW3",
            price: "£3.1M",
            date: "Sold Mar 2026",
            sqft: 1720,
          },
          {
            address: "55 Kings Road, SW3",
            price: "£3.4M",
            date: "Sold Jan 2026",
            sqft: 1890,
          },
          {
            address: "29 Kings Road, SW3",
            price: "£3.05M",
            date: "Sold Feb 2026",
            sqft: 1650,
          },
        ],
      });
      setValuationLoading(false);
    }, 2000);
  };

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
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery("");
                }}
                className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active
                    ? "border-brand-500/50 bg-brand-900/10 shadow-[0_0_0_1px_rgba(90,38,128,0.25)]"
                    : "border-white/10 bg-[#0b0d14] hover:border-white/20"
                }`}
              >
                <Icon
                  size={22}
                  className={`mb-4 ${
                    active ? "text-brand-300" : "text-white/60"
                  }`}
                />

                <h3 className="text-base font-semibold">{tab.title}</h3>

                <p className="mt-1 text-sm text-white/50">{tab.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* PORTFOLIO TAB */}
        {activeTab === "portfolio" && (
          <>
            {/* Search Bar */}
            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <div className="relative flex-1">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                />

                <input
                  type="text"
                  placeholder="Search by address, type, or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b0d14] pl-12 pr-4 text-sm text-white outline-none transition focus:border-brand-500/40"
                />
              </div>

              {/* <button className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#0b0d14] px-6 text-sm font-medium transition hover:border-white/20">
                <SlidersHorizontal size={18} />
                Filters
              </button> */}
            </div>

            {/* Property Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div
                    key={property.id}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0d14] transition duration-300 hover:-translate-y-1 hover:border-brand-500/30"
                  >
                    <div className="relative h-[250px] overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      <div className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">
                        {property.badge}
                      </div>

                      <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition">
                        <Heart size={18} className="text-white" />
                      </button>

                      <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-brand-300 backdrop-blur-sm">
                        {property.match}
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="text-3xl font-black tracking-tight text-white">
                        {property.price}
                      </h2>

                      <p className="mt-1 text-sm text-white/50">
                        {property.title}
                      </p>

                      <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                        <MapPin size={16} className="text-white/40" />
                        {property.location}
                      </div>

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

                      {/* <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700">
                        <Sparkles size={18} />
                        View AI Insights
                      </button> */}
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-white/50">
                    No properties found matching{" "}
                    <span className="font-semibold">"{searchQuery}"</span>
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* VALUATION TAB */}
        {activeTab === "valuation" && (
          <div className="mt-8 space-y-8">
            {!valuationResult ? (
              <>
                {/* Valuation Input Section */}
                <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-8">
                  <h2 className="text-2xl font-bold">AI PROPERTY VALUATION</h2>
                  <p className="mt-2 text-white/60">
                    Enter any London address and our AI will analyse 127+ data
                    points to deliver an instant, accurate valuation.
                  </p>

                  <div className="mt-6 flex flex-col gap-4 lg:flex-row">
                    <input
                      type="text"
                      placeholder="Enter property address (e.g. 42 Kings Road, Chelsea)"
                      value={valuationAddress}
                      onChange={(e) => setValuationAddress(e.target.value)}
                      className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#05060b] px-4 text-white outline-none transition focus:border-brand-500/40"
                    />
                    <button
                      onClick={() =>
                        valuationAddress &&
                        handleValuation(valuationAddress)
                      }
                      disabled={!valuationAddress || valuationLoading}
                      className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-8 text-sm font-bold text-white transition hover:bg-brand-700 disabled:opacity-50"
                    >
                      {valuationLoading ? (
                        <Loader size={18} className="animate-spin" />
                      ) : (
                        <Zap size={18} />
                      )}
                      {valuationLoading ? "Analysing..." : "Value Property"}
                    </button>
                  </div>

                  {/* Quick Select */}
                  <div className="mt-6">
                    <p className="mb-3 text-sm text-white/60">Quick select:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickSelectAddresses.map((address, index) => (
                        <button
                          key={index}
                          onClick={() => handleValuation(address)}
                          disabled={valuationLoading}
                          className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/10 disabled:opacity-50"
                        >
                          {address}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Loading State */}
                {valuationLoading && (
                  <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-12 text-center">
                    <div className="mx-auto mb-6 h-32 w-32">
                      <svg viewBox="0 0 100 100" className="h-full w-full">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#5A2680"
                          strokeWidth="2"
                          strokeDasharray="70.7 282.7"
                          strokeLinecap="round"
                          className="animate-spin"
                        />
                        <text
                          x="50"
                          y="55"
                          textAnchor="middle"
                          className="fill-brand-300 text-2xl font-bold"
                        >
                          36%
                        </text>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">ANALYSING PROPERTY</h3>
                    <p className="mt-2 text-white/60">{valuationAddress}</p>
                    <p className="mt-4 text-sm text-white/50">
                      Evaluating market conditions...
                    </p>
                  </div>
                )}

                {/* Info Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-[#0b0d14] p-6">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-brand-400" />
                      <span className="text-sm text-white/60">
                        127+ Data Points
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/80">
                      Comparable sales, market trends, and property
                      characteristics
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0d14] p-6">
                    <div className="flex items-center gap-3">
                      <Zap size={20} className="text-brand-400" />
                      <span className="text-sm text-white/60">
                        Instant Results
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/80">
                      Full valuation report generated in under 8 seconds
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0b0d14] p-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-brand-400" />
                      <span className="text-sm text-white/60">
                        97.3% Accuracy
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-white/80">
                      Validated against actual sale prices over 12 months
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Results Header */}
                <div className="rounded-3xl border border-brand-500/30 bg-[#0b0d14] p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold tracking-wider text-brand-400">
                        AI VALUATION COMPLETE
                      </p>
                      <h2 className="mt-2 text-4xl font-black uppercase">
                        {valuationResult.address}
                      </h2>
                    </div>
                    <div className="rounded-lg bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                      ✓ 94% Confidence
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-white/60">Estimated Value</p>
                      <p className="mt-1 text-4xl font-black text-brand-300">
                        {valuationResult.estimatedValue}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        Range: {valuationResult.range}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/60">YoY Growth</p>
                      <p className="mt-1 text-4xl font-black text-green-400">
                        {valuationResult.yoyGrowth}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        vs. +5.1% area average
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-white/60">Price per sq ft</p>
                      <p className="mt-1 text-3xl font-black text-white">
                        {valuationResult.pricePerSqft}
                      </p>
                      <p className="mt-1 text-xs text-white/50">
                        Top 15% for postcode
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-4 gap-4">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold text-brand-300">
                        {valuationResult.comparableSales}
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        COMPARABLE SALES
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold text-white">340+</p>
                      <p className="mt-1 text-xs text-white/60">DATA POINTS</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold text-white">
                        {valuationResult.analysisTime}
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        ANALYSIS TIME
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-bold text-green-400">
                        {valuationResult.marketPosition}
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        MARKET POSITION
                      </p>
                    </div>
                  </div>
                </div>

                {/* Comparable Sales */}
                <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-8">
                  <h3 className="text-xl font-bold">TOP COMPARABLE SALES</h3>
                  <div className="mt-6 space-y-3">
                    {valuationResult.comparables.map(
                      (comp: any, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-4"
                        >
                          <div>
                            <p className="font-semibold text-white">
                              {comp.address}
                            </p>
                            <p className="text-sm text-white/60">
                              {comp.date} · {comp.sqft} sq ft
                            </p>
                          </div>
                          <p className="text-2xl font-bold text-brand-300">
                            {comp.price}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setValuationResult(null);
                    setValuationAddress("");
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Value Another Property
                </button>
              </>
            )}
          </div>
        )}

        {/* MARKET INTELLIGENCE TAB */}
        {activeTab === "market" && (
          <div className="mt-8 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">LIVE MARKET DASHBOARD</h2>
                  <p className="mt-1 text-white/60">
                    Real-time analytics across prime London postcodes
                  </p>
                </div>
                <div className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                  ● Live Data
                </div>
              </div>

              {/* Region Buttons */}
              <div className="mt-6 flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      selectedRegion === region
                        ? "border-brand-500 bg-brand-600 text-white"
                        : "border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* Market Stats */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm text-white/60">Avg. Price</p>
                  <p className="mt-2 text-3xl font-black text-brand-300">
                    {marketData[selectedRegion].avgPrice}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm text-white/60">12M Growth</p>
                  <p className="mt-2 text-3xl font-black text-green-400">
                    {marketData[selectedRegion].growth}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm text-white/60">Demand</p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {marketData[selectedRegion].demand}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm text-white/60">Transactions</p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {marketData[selectedRegion].transactions}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-sm text-white/60">Days on Market</p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {marketData[selectedRegion].daysOnMarket}
                  </p>
                </div>
              </div>
            </div>

            {/* Price Trend Chart */}
            <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-8">
              <h3 className="text-xl font-bold">PRICE TREND (12 MONTHS)</h3>
              <div className="mt-6 flex h-72 items-end justify-around gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-lg bg-yellow-700/40 transition"
                    style={{
                      height: `${40 + Math.random() * 40}%`,
                      backgroundColor:
                        i === 11 ? "#eab308" : "rgba(180, 140, 50, 0.4)",
                    }}
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-between text-sm text-white/60">
                <span>Jan 2025</span>
                <span>Dec 2025</span>
              </div>
            </div>
          </div>
        )}

        {/* SCHEDULER TAB */}
        {activeTab === "scheduler" && (
          <div className="mt-8 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#0b0d14] p-8">
              <h2 className="text-2xl font-bold">
                AI-OPTIMISED VIEWING SCHEDULER
              </h2>
              <p className="mt-2 text-white/60">
                Our AI analyses agent availability, travel routes, and buyer
                preferences to suggest optimal viewing times.
              </p>

              {/* SELECT PROPERTY */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-white/80">
                  SELECT PROPERTY
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {schedulerProperties.map((property) => (
                    <button
                      key={property.id}
                      onClick={() => setSelectedProperty(property.id)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        selectedProperty === property.id
                          ? "border-brand-500 bg-brand-900/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <h4 className="font-bold text-white">
                        {property.location}
                      </h4>
                      <p className="mt-1 text-sm text-white/60">
                        {property.price} · {property.beds} bed -{" "}
                        {property.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* SELECT DATE */}
              {selectedProperty && (
                <>
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-white/80">
                      SELECT DATE
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.key}
                          onClick={() => setSelectedDate(d.key)}
                          className={`rounded-2xl border px-4 py-3 text-center transition ${
                            selectedDate === d.key
                              ? "border-brand-500 bg-brand-600 text-white"
                              : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                          }`}
                        >
                          <div className="text-xs font-semibold">
                            {d.day}
                          </div>
                          <div className="text-lg font-bold">{d.date}</div>
                          <div className="text-xs text-white/60">
                            {d.month}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AVAILABLE TIMES */}
                  {selectedDate && (
                    <div className="mt-8">
                      <p className="text-sm font-semibold text-white/80">
                        AVAILABLE TIMES
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                              selectedTime === time
                                ? "border-brand-500 bg-brand-600 text-white"
                                : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CONFIRMATION */}
                  {selectedProperty &&
                    selectedDate &&
                    selectedTime && (
                      <button className="mt-8 w-full rounded-2xl bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700">
                        Book Viewing for{" "}
                        {selectedTime}
                      </button>
                    )}
                </>
              )}

              {/* AI INSIGHTS */}
              <div className="mt-8 rounded-2xl border border-brand-500/30 bg-brand-900/10 p-6">
                <h4 className="flex items-center gap-2 font-bold text-white">
                  <Sparkles size={18} className="text-brand-400" />
                  AI Scheduling Insights
                </h4>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>
                    • Saturday mornings have 34% higher conversion to offers
                    for this property type
                  </li>
                  <li>
                    • This buyer&apos;s preference history suggests they prefer
                    afternoon viewings
                  </li>
                  <li>
                    • 3 other buyers have requested viewings this week —
                    recommend prioritising
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
