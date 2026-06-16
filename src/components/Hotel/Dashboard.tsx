// import React, { useState } from "react";
// import { Star, Sparkles, Coffee, Heart, Car, Wifi, Wine } from "lucide-react";

// export default function Dashboard() {
//   const [nights, setNights] = useState(3);
//   const [guests, setGuests] = useState(2);

//   // Dynamic Data
//   const features = [
//     {
//       icon: "🏠",
//       title: "Room Configurator",
//       desc: "AI-personalised stays",
//       color: "border-brand-500 bg-brand-950/20",
//     },
//     { icon: "❤️", title: "Guest Journey", desc: "End-to-end AI experience" },
//     { icon: "📈", title: "Revenue Intelligence", desc: "Dynamic pricing AI" },
//     { icon: "👑", title: "AI Concierge", desc: "Predictive service" },
//   ];

//   const rooms = [
//     {
//       title: "Deluxe King",
//       size: "35m² • Up to 2 guests",
//       price: 289,
//       rating: 4.8,
//       image:
//         "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
//     },
//     {
//       title: "Executive Suite",
//       size: "55m² • Up to 2 guests",
//       price: 459,
//       rating: 4.9,
//       image:
//         "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600",
//     },
//     {
//       title: "Penthouse Suite",
//       size: "120m² • Up to 4 guests",
//       price: 1250,
//       rating: 5.0,
//       image:
//         "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600",
//     },
//     {
//       title: "Family Grand",
//       size: "65m² • Up to 4 guests",
//       price: 389,
//       rating: 4.7,
//       image:
//         "https://images.unsplash.com/photo-1596394516093-501ba8a3e9f7?w=600",
//     },
//   ];

//   const addons = [
//     {
//       icon: <Coffee className="w-5 h-5" />,
//       title: "Full English Breakfast",
//       price: 35,
//     },
//     {
//       icon: <Heart className="w-5 h-5" />,
//       title: "Spa & Wellness Package",
//       price: 120,
//     },
//     {
//       icon: <Wine className="w-5 h-5" />,
//       title: "Fine Dining Experience",
//       price: 95,
//     },
//     { icon: <Car className="w-5 h-5" />, title: "Airport Transfer", price: 75 },
//     {
//       icon: <Wine className="w-5 h-5" />,
//       title: "Champagne & Flowers",
//       price: 65,
//     },
//     {
//       icon: <Wifi className="w-5 h-5" />,
//       title: "Premium WiFi & Workspace",
//       price: 25,
//     },
//   ];

//   const selectedRoom = rooms[0]; // Default selected

//   const total = selectedRoom.price * nights;

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Feature Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className={`p-5 rounded-2xl border border-zinc-800 hover:border-brand-500 transition-all ${i === 0 ? feature.color : "bg-zinc-900/50"}`}
//             >
//               <div className="text-3xl mb-3">{feature.icon}</div>
//               <h3 className="font-semibold text-lg">{feature.title}</h3>
//               <p className="text-sm text-zinc-400 mt-1">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* Room Selection Grid */}
//         <div className="mb-10">
//           <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white mb-6">Featured Rooms</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {rooms.map((room, i) => (
//               <div
//                 key={i}
//                 className={`group rounded-3xl overflow-hidden border transition-all cursor-pointer ${
//                   i === 0
//                     ? "border-brand-500 ring-1 ring-brand-500"
//                     : "border-zinc-800 hover:border-brand-500/50"
//                 }`}
//               >
//                 <div className="relative">
//                   <img
//                     src={room.image}
//                     alt={room.title}
//                     className="w-full h-52 object-cover"
//                   />
//                   <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
//                     <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
//                     {room.rating}
//                   </div>
//                 </div>

//                 <div className="p-5">
//                   <h3 className="font-semibold text-xl mb-1">{room.title}</h3>
//                   <p className="text-sm text-zinc-400 mb-3">{room.size}</p>
//                   <div className="flex justify-between items-end">
//                     <div>
//                       <span className="text-2xl font-bold">£{room.price}</span>
//                       <span className="text-zinc-400 text-sm">/night</span>
//                     </div>
//                     <button className="text-xs px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition">
//                       Select
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Configure Your Stay */}
//           <div className="lg:col-span-2 space-y-8">
//             <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">
//               <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
//                 CONFIGURE YOUR STAY
//               </h3>

//               <div className="grid grid-cols-2 gap-8">
//                 {/* Nights */}
//                 <div>
//                   <label className="block text-sm text-zinc-400 mb-3">
//                     NIGHTS
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={() => setNights(Math.max(1, nights - 1))}
//                       className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
//                     >
//                       −
//                     </button>
//                     <span className="text-4xl font-semibold w-12 text-center">
//                       {nights}
//                     </span>
//                     <button
//                       onClick={() => setNights(nights + 1)}
//                       className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>

//                 {/* Guests */}
//                 <div>
//                   <label className="block text-sm text-zinc-400 mb-3">
//                     GUESTS
//                   </label>
//                   <div className="flex items-center gap-4">
//                     <button
//                       onClick={() => setGuests(Math.max(1, guests - 1))}
//                       className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
//                     >
//                       −
//                     </button>
//                     <span className="text-4xl font-semibold w-12 text-center">
//                       {guests}
//                     </span>
//                     <button
//                       onClick={() => setGuests(guests + 1)}
//                       className="w-12 h-12 rounded-2xl bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-xl font-light transition"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhance Your Experience */}
//             <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8">
//               <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
//                 ENHANCE YOUR EXPERIENCE
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {addons.map((addon, i) => (
//                   <div
//                     key={i}
//                     className="flex items-center gap-4 p-4 bg-zinc-950/50 border border-zinc-800 rounded-2xl hover:border-brand-500/50 transition-all cursor-pointer"
//                   >
//                     <div className="text-brand-300">{addon.icon}</div>
//                     <div className="flex-1">
//                       <p className="font-medium">{addon.title}</p>
//                       <p className="text-sm text-emerald-400">
//                         £{addon.price}/night
//                       </p>
//                     </div>
//                     <button className="text-xs px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full transition">
//                       Add
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Booking Summary Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="bg-gradient-to-br from-zinc-900 to-black border border-brand-500/30 rounded-3xl p-8 sticky top-6">
//               <h3 className="uppercase tracking-widest text-sm text-brand-300 mb-6 font-heading">
//                 BOOKING SUMMARY
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex justify-between">
//                   <div>
//                     <p className="font-semibold">{selectedRoom.title}</p>
//                     <p className="text-sm text-zinc-400">
//                       £{selectedRoom.price} × {nights} nights
//                     </p>
//                   </div>
//                   <p className="font-bold text-xl">£{total}</p>
//                 </div>

//                 <div className="h-px bg-zinc-800" />

//                 <div>
//                   <p className="text-sm text-zinc-400">Total</p>
//                   <p className="text-4xl font-bold text-brand-300">£{total}</p>
//                   <p className="text-xs text-zinc-500 mt-1">
//                     {nights} nights • {guests} guests
//                   </p>
//                 </div>

//                 <button className="w-full bg-brand-600 hover:bg-brand-700 py-4 rounded-2xl font-bold text-lg text-white transition-all active:scale-95">
//                   Book Now
//                 </button>

//                 <div className="text-center text-xs text-brand-300 flex items-center justify-center gap-2">
//                   <Sparkles className="w-4 h-4" />
//                   AI suggests: Add breakfast for 23% savings vs. à la carte
//                   dining
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";

// import React, { useState } from "react";
// import {
//   Star,
//   Sparkles,
//   Coffee,
//   Heart,
//   Car,
//   Wifi,
//   Wine,
//   CheckCircle,
//   AlertCircle,
// } from "lucide-react";

// const P  = "#5A2680";
// const P2 = "#7B3AAE";                    // lighter purple for hover/accents
// const PBG   = "rgba(90,38,128,0.15)";
// const PBDR  = "rgba(90,38,128,0.30)";
// const PFAINT = "rgba(90,38,128,0.08)";
// const PBAR_HI  = "#5A2680";             // chart bars – high occupancy
// const PBAR_LO  = "rgba(90,38,128,0.35)"; // chart bars – low occupancy

// export default function Dashboard() {
//   const [activeTab, setActiveTab]       = useState("configurator");
//   const [nights, setNights]             = useState(1);
//   const [guests, setGuests]             = useState(2);
//   const [selectedRoom, setSelectedRoom] = useState(0);
//   const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
//   const [selectedGuest, setSelectedGuest]   = useState<number>(0);

//   /* ── data ─────────────────────────────────────────────────────────── */
//   const tabs = [
//     { id: "configurator", title: "Room Configurator",    subtitle: "AI-personalised stays"      },
//     { id: "journey",      title: "Guest Journey",        subtitle: "End-to-end AI experience"   },
//     { id: "revenue",      title: "Revenue Intelligence", subtitle: "Dynamic pricing AI"         },
//     { id: "concierge",    title: "AI Concierge",         subtitle: "Predictive service"         },
//   ];

//   const rooms = [
//     { id: 0, title: "Deluxe King",     size: "35m²",  guests: "Up to 2 guests", price: 289,  rating: 4.8, image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600" },
//     { id: 1, title: "Executive Suite", size: "55m²",  guests: "Up to 2 guests", price: 459,  rating: 4.9, image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop" },
//     { id: 2, title: "Penthouse Suite", size: "120m²", guests: "Up to 4 guests", price: 1250, rating: 5.0, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop" },
//     { id: 3, title: "Family Grand",    size: "65m²",  guests: "Up to 4 guests", price: 389,  rating: 4.7, image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop" },
//   ];

//   const addons = [
//     { icon: <Coffee className="w-5 h-5" />, title: "Full English Breakfast",    price: 35  },
//     { icon: <Heart  className="w-5 h-5" />, title: "Spa & Wellness Package",    price: 120 },
//     { icon: <Wine   className="w-5 h-5" />, title: "Fine Dining Experience",    price: 95  },
//     { icon: <Car    className="w-5 h-5" />, title: "Airport Transfer",          price: 75  },
//     { icon: <Wine   className="w-5 h-5" />, title: "Champagne & Flowers",       price: 65  },
//     { icon: <Wifi   className="w-5 h-5" />, title: "Premium WiFi & Workspace",  price: 25  },
//   ];

//   const toggleAddon = (i: number) =>
//     setSelectedAddons(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);

//   const addonsTotal  = selectedAddons.reduce((s, i) => s + addons[i].price, 0);
//   const room         = rooms[selectedRoom];
//   const grandTotal   = room.price * nights + addonsTotal * nights;

//   const guestProfiles = [
//     {
//       id: 0, name: "Mr. James Thornton", room: "Executive Suite", visits: "1st visit", satisfaction: "88%",
//       preferences: ["Vegan dietary requirements","Late checkout requested","Quiet room preferred","Business centre access"],
//       predictions:  ["Conference attendee — suggest group dining","May extend stay (67% confidence)","Likely to join loyalty programme"],
//     },
//     {
//       id: 1, name: "Dr. Sarah Chen", room: "Family Grand", visits: "2nd visit", satisfaction: "95%",
//       preferences: ["Halal dining options","Kids activities booked","Airport transfer confirmed","Interconnecting rooms"],
//       predictions:  ["Will book kids club again (92% confidence)","Previous positive spa review — suggest family package","High lifetime value guest"],
//     },
//     {
//       id: 2, name: "The Al-Rashid Family", room: "Penthouse Suite", visits: "3rd visit", satisfaction: "92%",
//       preferences: ["Oat milk latte at 7am","Extra firm pillows","The Times delivered","22°C room temp"],
//       predictions:  ["Will likely book spa (85% confidence)","Prefers window table at restaurant","Anniversary next month — send offer"],
//     },
//   ];

//   const journeyPoints = [
//     { phase: "Pre-Arrival", type: "AI-DETECTED",    done: true,  actions: ["Preferences survey sent","Dietary requirements collected","Transport arranged","Room temperature set to 21°C"],    insight: "AI detected guest's anniversary — upgraded to suite, arranged champagne" },
//     { phase: "Check-In",   type: "DAY OF ARRIVAL",  done: true,  actions: ["Digital key sent to app","Welcome message personalised","Luggage tracking active","Room ready notification"],        insight: "Facial recognition enabled express check-in — 45 seconds average" },
//     { phase: "In-Stay",    type: "DURING VISIT",    done: false, actions: ["Real-time preference learning","Proactive service triggers","Dynamic pricing for F&B","Contextual recommendations"], insight: "Guest ordered room service twice — AI suggests dinner reservation at restaurant" },
//     { phase: "Experience", type: "ACTIVITIES",      done: false, actions: ["Personalised itinerary","Weather-adaptive suggestions","Partner venue bookings","Exclusive access arranged"],        insight: "Rain forecast tomorrow — AI rescheduled outdoor tour, arranged indoor offers" },
//   ];

//   const revenueMetrics = [
//     { label: "OCCUPANCY",        value: "87%",   color: "#22c55e" },
//     { label: "ADR",              value: "£341",  color: "#60a5fa" },
//     { label: "REVPAR",           value: "£298",  color: "#fbbf24" },
//     { label: "MONTHLY REVENUE",  value: "£2.8M", color: P2 },
//   ];

//   const occupancyData = [65,70,75,80,88,92,85,78,80,82,88,95];
//   const months        = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

//   const pricingAlerts = [
//     { title: "High Demand Detected",   detail: "Deluxe King rate increased £289 — £329 (+14%)",             revenue: "+£12,400/week"    },
//     { title: "Low Midweek Occupancy",  detail: "Tuesday–Thursday rates reduced 15%, spa package added free", revenue: "+22% bookings"    },
//     { title: "Event Proximity",        detail: "Wimbledon week — all rates adjusted +35%, minimum 3 nights", revenue: "+£54,000 revenue" },
//   ];

//   /* ── shared style snippets ───────────────────────────────────────── */
//   const card   = { background: "rgba(24,24,27,0.7)", border: "1px solid #27272a", borderRadius: 20, padding: 24 } as React.CSSProperties;
//   const label  = { fontSize: 11, fontWeight: 800, letterSpacing: "0.18em", color: P, textTransform: "uppercase" as const, marginBottom: 20 };

//   /* ── render ──────────────────────────────────────────────────────── */
//   return (
//     <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#fff", padding: 24, fontFamily: "'Inter',sans-serif" }}>
//       <div style={{ maxWidth: 1200, margin: "0 auto" }}>

//         {/* ── TABS ── */}
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 32 }}>
//           {tabs.map(tab => {
//             const on = activeTab === tab.id;
//             return (
//               <button key={tab.id} onClick={() => setActiveTab(tab.id)}
//                 style={{ padding: 20, borderRadius: 16, border: `1px solid ${on ? P : "#27272a"}`, background: on ? PBG : "rgba(24,24,27,0.7)", cursor: "pointer", textAlign: "left", outline: "none", transition: "all .2s" }}>
//                 <div style={{ fontWeight: 700, fontSize: 14, color: on ? "#fff" : "#d4d4d8", marginBottom: 4 }}>{tab.title}</div>
//                 <div style={{ fontSize: 12, color: on ? "rgba(255,255,255,.6)" : "#71717a" }}>{tab.subtitle}</div>
//               </button>
//             );
//           })}
//         </div>

//         {/* ═══════════════ ROOM CONFIGURATOR ═══════════════ */}
//         {activeTab === "configurator" && (
//           <>
//             {/* Room cards */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
//               {rooms.map(r => {
//                 const sel = selectedRoom === r.id;
//                 return (
//                   <div key={r.id} onClick={() => setSelectedRoom(r.id)}
//                     style={{ borderRadius: 16, overflow: "hidden", border: `${sel ? 2 : 1}px solid ${sel ? P : "#27272a"}`, background: "#18181b", cursor: "pointer", transition: "all .2s" }}>
//                     <div style={{ position: "relative" }}>
//                       <img src={r.image} alt={r.title} style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }} />
//                       {sel && (
//                         <div style={{ position: "absolute", top: 10, right: 10, width: 28, height: 28, borderRadius: "50%", border: `2px solid ${P}`, background: PBG, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                           <div style={{ width: 10, height: 10, borderRadius: "50%", background: P }} />
//                         </div>
//                       )}
//                       <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(0,0,0,.7)", borderRadius: 20, padding: "3px 10px", display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
//                         <Star style={{ width: 13, height: 13, fill: "#facc15", color: "#facc15" }} />
//                         <span>{r.rating}</span>
//                       </div>
//                     </div>
//                     <div style={{ padding: 16 }}>
//                       <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 2 }}>{r.title}</div>
//                       <div style={{ fontSize: 12, color: "#71717a", marginBottom: 10 }}>{r.size} · {r.guests}</div>
//                       <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
//                         <span style={{ fontSize: 20, fontWeight: 800, color: P2 }}>£{r.price}</span>
//                         <span style={{ fontSize: 13, color: "#71717a" }}>/night</span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Configure + Summary */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 24 }}>
//               <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

//                 {/* Configure your stay */}
//                 <div style={{ ...card, padding: 32 }}>
//                   <div style={label}>Configure Your Stay</div>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
//                     {([{ lbl: "NIGHTS", val: nights, set: setNights, min: 1 }, { lbl: "GUESTS", val: guests, set: setGuests, min: 1 }] as const).map(({ lbl, val, set, min }: { lbl: string; val: number; set: (n: number) => void; min: number }) => (
//                       <div key={lbl}>
//                         <div style={{ fontSize: 11, color: "#71717a", marginBottom: 16, letterSpacing: "0.1em" }}>{lbl}</div>
//                         <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
//                           <button onClick={() => set(Math.max(min, val - 1))}
//                             style={{ width: 44, height: 44, borderRadius: 12, background: "#27272a", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
//                           <span style={{ fontSize: 36, fontWeight: 700, minWidth: 40, textAlign: "center" }}>{val}</span>
//                           <button onClick={() => set(val + 1)}
//                             style={{ width: 44, height: 44, borderRadius: 12, background: "#27272a", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Enhance your experience */}
//                 <div style={{ ...card, padding: 32 }}>
//                   <div style={label}>Enhance Your Experience</div>
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                     {addons.map((addon, i) => {
//                       const on = selectedAddons.includes(i);
//                       return (
//                         <div key={i} onClick={() => toggleAddon(i)}
//                           style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: on ? PBG : "rgba(10,10,10,.5)", border: `1px solid ${on ? P : "#27272a"}`, borderRadius: 14, cursor: "pointer", transition: "all .2s", position: "relative" }}>
//                           <div style={{ color: P, flexShrink: 0 }}>{addon.icon}</div>
//                           <div style={{ flex: 1 }}>
//                             <div style={{ fontSize: 14, fontWeight: 500, color: on ? "#fff" : "#d4d4d8" }}>{addon.title}</div>
//                             <div style={{ fontSize: 12, color: "#4ade80", marginTop: 2 }}>£{addon.price}/night</div>
//                           </div>
//                           {on && (
//                             <div style={{ position: "absolute", top: 8, right: 10, width: 18, height: 18, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                               <span style={{ fontSize: 10, color: "#fff" }}>✓</span>
//                             </div>
//                           )}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               {/* Booking Summary */}
//               <div style={{ background: PFAINT, border: `1px solid ${PBDR}`, borderRadius: 20, padding: 32, alignSelf: "start", position: "sticky", top: 24 }}>
//                 <div style={label}>Booking Summary</div>

//                 {/* Room row */}
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
//                   <span style={{ color: "#a1a1aa", fontSize: 14 }}>{room.title}</span>
//                   <span style={{ fontWeight: 600, fontSize: 14 }}>£{room.price} × {nights}</span>
//                 </div>
//                 {/* Addon rows */}
//                 {selectedAddons.map(i => (
//                   <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
//                     <span style={{ color: "#a1a1aa", fontSize: 13 }}>{addons[i].title}</span>
//                     <span style={{ fontSize: 13, color: "#d4d4d8" }}>£{addons[i].price} × {nights}</span>
//                   </div>
//                 ))}

//                 <div style={{ borderTop: `1px solid ${PBDR}`, margin: "14px 0" }} />

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
//                   <span style={{ fontSize: 20, fontWeight: 700 }}>Total</span>
//                   <span style={{ fontSize: 28, fontWeight: 800, color: P2 }}>£{grandTotal.toLocaleString()}</span>
//                 </div>
//                 <div style={{ fontSize: 12, color: "#71717a", marginBottom: 24 }}>
//                   {nights} night{nights !== 1 ? "s" : ""} · {guests} guest{guests !== 1 ? "s" : ""}
//                   {selectedAddons.length > 0 && ` · ${selectedAddons.length} add-on${selectedAddons.length !== 1 ? "s" : ""}`}
//                 </div>

//                 <button style={{ width: "100%", background: P, border: "none", borderRadius: 14, padding: 14, fontSize: 15, fontWeight: 700, color: "#fff", cursor: "pointer", marginBottom: 14, transition: "background .2s" }}>
//                   Book Now
//                 </button>
//                 <div style={{ display: "flex", alignItems: "center", gap: 6, justifyContent: "center" }}>
//                   <Sparkles style={{ width: 14, height: 14, color: P }} />
//                   <span style={{ fontSize: 12, color: "#71717a" }}>AI suggests: Add breakfast for 23% savings vs. à la carte dining</span>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}

//         {/* ═══════════════ GUEST JOURNEY ═══════════════ */}
//         {activeTab === "journey" && (
//           <>
//             <h2 style={{ fontSize: 22, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>AI-Powered Guest Journey</h2>
//             <p style={{ color: "#71717a", fontSize: 14, marginBottom: 32 }}>Every touchpoint is personalised by AI — from booking to post-stay loyalty.</p>
//             <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//               {journeyPoints.map((pt, i) => (
//                 <div key={i} style={{ border: `1px solid ${pt.done ? "rgba(34,197,94,.3)" : PBDR}`, background: pt.done ? "rgba(20,83,45,.15)" : PFAINT, borderRadius: 20, padding: 24 }}>
//                   <div style={{ display: "flex", gap: 16 }}>
//                     <div style={{ flexShrink: 0, marginTop: 2 }}>
//                       {pt.done
//                         ? <CheckCircle style={{ width: 22, height: 22, color: "#22c55e" }} />
//                         : <AlertCircle style={{ width: 22, height: 22, color: P }} />}
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
//                         <h3 style={{ fontWeight: 700, fontSize: 18 }}>{pt.phase}</h3>
//                         <span style={{ fontSize: 11, color: "#71717a" }}>{pt.type}</span>
//                       </div>
//                       <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
//                         {pt.actions.map((a, j) => (
//                           <span key={j} style={{ fontSize: 12, padding: "4px 14px", background: "rgba(39,39,42,.5)", borderRadius: 20, color: "#d4d4d8" }}>{a}</span>
//                         ))}
//                       </div>
//                       <p style={{ fontSize: 13, color: "#71717a" }}><span style={{ color: P }}>→ </span>{pt.insight}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* ═══════════════ REVENUE INTELLIGENCE ═══════════════ */}
//         {activeTab === "revenue" && (
//           <>
//             <h2 style={{ fontSize: 22, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 28 }}>Revenue Metrics &amp; Insights</h2>

//             {/* Metric cards */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
//               {revenueMetrics.map((m, i) => (
//                 <div key={i} style={{ ...card, padding: 24 }}>
//                   <div style={{ width: 28, height: 3, borderRadius: 2, background: m.color, marginBottom: 16 }} />
//                   <div style={{ fontSize: 32, fontWeight: 800, color: m.color, marginBottom: 6 }}>{m.value}</div>
//                   <div style={{ fontSize: 11, color: "#71717a", letterSpacing: "0.12em", textTransform: "uppercase" }}>{m.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* Occupancy chart */}
//             <div style={{ ...card, padding: 32, marginBottom: 24 }}>
//               <h3 style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 28 }}>Occupancy Forecast (12 Months)</h3>
//               <div style={{ display: "flex", alignItems: "flex-end", height: 220, gap: 10, marginBottom: 12 }}>
//                 {occupancyData.map((val, i) => (
//                   <div key={i} style={{ flex: 1, height: `${val}%`, borderRadius: "6px 6px 0 0", background: val >= 85 ? PBAR_HI : PBAR_LO, transition: "height .3s ease" }} />
//                 ))}
//               </div>
//               <div style={{ display: "flex", paddingTop: 8, borderTop: "1px solid #27272a" }}>
//                 {months.map(m => (
//                   <span key={m} style={{ fontSize: 11, color: "#71717a", flex: 1, textAlign: "center" }}>{m}</span>
//                 ))}
//               </div>
//             </div>

//             {/* Pricing engine */}
//             <div style={{ background: PFAINT, border: `1px solid ${PBDR}`, borderRadius: 20, padding: 32 }}>
//               <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
//                 <Sparkles style={{ width: 18, height: 18, color: P }} />
//                 <h3 style={{ fontWeight: 700, fontSize: 17 }}>AI Dynamic Pricing Engine</h3>
//               </div>
//               {pricingAlerts.map((a, i) => (
//                 <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderBottom: i < pricingAlerts.length - 1 ? `1px solid ${PFAINT}` : "none" }}>
//                   <div>
//                     <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{a.title}</div>
//                     <div style={{ fontSize: 13, color: "#71717a" }}>{a.detail}</div>
//                   </div>
//                   <div style={{ color: "#4ade80", fontWeight: 700, fontSize: 14, flexShrink: 0, marginLeft: 24 }}>{a.revenue}</div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}

//         {/* ═══════════════ AI CONCIERGE ═══════════════ */}
//         {activeTab === "concierge" && (
//           <>
//             <h2 style={{ fontSize: 22, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>AI Concierge Intelligence</h2>
//             <p style={{ color: "#71717a", fontSize: 14, marginBottom: 28 }}>Predictive guest profiles that anticipate needs before they're expressed.</p>

//             {/* Guest selector pills */}
//             <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
//               {guestProfiles.map(g => (
//                 <button key={g.id} onClick={() => setSelectedGuest(g.id)}
//                   style={{ padding: "10px 22px", borderRadius: 12, border: `1px solid ${selectedGuest === g.id ? P : "#27272a"}`, background: selectedGuest === g.id ? P : "transparent", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all .2s" }}>
//                   {g.name}
//                 </button>
//               ))}
//             </div>

//             {(() => {
//               const g = guestProfiles[selectedGuest];
//               return (
//                 <div>
//                   {/* Info row */}
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
//                     {[{ lbl: "Room", val: g.room, clr: "#fff" }, { lbl: "Visit History", val: g.visits, clr: "#fff" }, { lbl: "Satisfaction Score", val: g.satisfaction, clr: "#4ade80" }].map(({ lbl, val, clr }) => (
//                       <div key={lbl} style={{ ...card, padding: 20 }}>
//                         <div style={{ fontSize: 11, color: "#71717a", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em" }}>{lbl}</div>
//                         <div style={{ fontWeight: 700, fontSize: 16, color: clr }}>{val}</div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Preferences + Predictions */}
//                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
//                     <div style={{ ...card, padding: 24 }}>
//                       <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "#71717a", textTransform: "uppercase", marginBottom: 18 }}>Known Preferences</div>
//                       <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                         {g.preferences.map((pref, j) => (
//                           <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(10,10,10,.4)", borderRadius: 12 }}>
//                             <CheckCircle style={{ width: 16, height: 16, color: "#22c55e", flexShrink: 0 }} />
//                             <span style={{ fontSize: 14, color: "#22c55e" }}>{pref}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     <div style={{ ...card, padding: 24 }}>
//                       <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", color: "#71717a", textTransform: "uppercase", marginBottom: 18 }}>AI Predictions</div>
//                       <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//                         {g.predictions.map((pred, j) => (
//                           <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: "rgba(10,10,10,.4)", borderRadius: 12 }}>
//                             <AlertCircle style={{ width: 16, height: 16, color: P2, flexShrink: 0 }} />
//                             <span style={{ fontSize: 14, color: P2 }}>{pred}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })()}
//           </>
//         )}

//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import {
  Star,
  Sparkles,
  Coffee,
  Heart,
  Car,
  Wifi,
  Wine,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const P = "#5A2680";
const P2 = "#7B3AAE";
const PBG = "rgba(90,38,128,0.15)";
const PBDR = "rgba(90,38,128,0.30)";
const PFAINT = "rgba(90,38,128,0.08)";
const PBAR_HI = "#5A2680";
const PBAR_LO = "rgba(90,38,128,0.35)";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("configurator");
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState<number[]>([]);
  const [selectedGuest, setSelectedGuest] = useState<number>(0);

  const tabs = [
    { id: "configurator", title: "Room Configurator", subtitle: "AI-personalised stays" },
    { id: "journey", title: "Guest Journey", subtitle: "End-to-end AI experience" },
    { id: "revenue", title: "Revenue Intelligence", subtitle: "Dynamic pricing AI" },
    { id: "concierge", title: "AI Concierge", subtitle: "Predictive service" },
  ];

  const rooms = [
    {
      id: 0,
      title: "Deluxe King",
      size: "35m²",
      guests: "Up to 2 guests",
      price: 289,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    },
    {
      id: 1,
      title: "Executive Suite",
      size: "55m²",
      guests: "Up to 2 guests",
      price: 459,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Penthouse Suite",
      size: "120m²",
      guests: "Up to 4 guests",
      price: 1250,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Family Grand",
      size: "65m²",
      guests: "Up to 4 guests",
      price: 389,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop",
    },
  ];

  const addons = [
    { icon: <Coffee className="h-5 w-5" />, title: "Full English Breakfast", price: 35 },
    { icon: <Heart className="h-5 w-5" />, title: "Spa & Wellness Package", price: 120 },
    { icon: <Wine className="h-5 w-5" />, title: "Fine Dining Experience", price: 95 },
    { icon: <Car className="h-5 w-5" />, title: "Airport Transfer", price: 75 },
    { icon: <Wine className="h-5 w-5" />, title: "Champagne & Flowers", price: 65 },
    { icon: <Wifi className="h-5 w-5" />, title: "Premium WiFi & Workspace", price: 25 },
  ];

  const toggleAddon = (i: number) => {
    setSelectedAddons((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const addonsTotal = selectedAddons.reduce((s, i) => s + addons[i].price, 0);
  const room = rooms[selectedRoom];
  const grandTotal = room.price * nights + addonsTotal * nights;

  const guestProfiles = [
    {
      id: 0,
      name: "Mr. James Thornton",
      room: "Executive Suite",
      visits: "1st visit",
      satisfaction: "88%",
      preferences: [
        "Vegan dietary requirements",
        "Late checkout requested",
        "Quiet room preferred",
        "Business centre access",
      ],
      predictions: [
        "Conference attendee — suggest group dining",
        "May extend stay (67% confidence)",
        "Likely to join loyalty programme",
      ],
    },
    {
      id: 1,
      name: "Dr. Sarah Chen",
      room: "Family Grand",
      visits: "2nd visit",
      satisfaction: "95%",
      preferences: [
        "Halal dining options",
        "Kids activities booked",
        "Airport transfer confirmed",
        "Interconnecting rooms",
      ],
      predictions: [
        "Will book kids club again (92% confidence)",
        "Previous positive spa review — suggest family package",
        "High lifetime value guest",
      ],
    },
    {
      id: 2,
      name: "The Al-Rashid Family",
      room: "Penthouse Suite",
      visits: "3rd visit",
      satisfaction: "92%",
      preferences: [
        "Oat milk latte at 7am",
        "Extra firm pillows",
        "The Times delivered",
        "22°C room temp",
      ],
      predictions: [
        "Will likely book spa (85% confidence)",
        "Prefers window table at restaurant",
        "Anniversary next month — send offer",
      ],
    },
  ];

  const journeyPoints = [
    {
      phase: "Pre-Arrival",
      type: "AI-DETECTED",
      done: true,
      actions: [
        "Preferences survey sent",
        "Dietary requirements collected",
        "Transport arranged",
        "Room temperature set to 21°C",
      ],
      insight:
        "AI detected guest's anniversary — upgraded to suite, arranged champagne",
    },
    {
      phase: "Check-In",
      type: "DAY OF ARRIVAL",
      done: true,
      actions: [
        "Digital key sent to app",
        "Welcome message personalised",
        "Luggage tracking active",
        "Room ready notification",
      ],
      insight:
        "Facial recognition enabled express check-in — 45 seconds average",
    },
    {
      phase: "In-Stay",
      type: "DURING VISIT",
      done: false,
      actions: [
        "Real-time preference learning",
        "Proactive service triggers",
        "Dynamic pricing for F&B",
        "Contextual recommendations",
      ],
      insight:
        "Guest ordered room service twice — AI suggests dinner reservation at restaurant",
    },
    {
      phase: "Experience",
      type: "ACTIVITIES",
      done: false,
      actions: [
        "Personalised itinerary",
        "Weather-adaptive suggestions",
        "Partner venue bookings",
        "Exclusive access arranged",
      ],
      insight:
        "Rain forecast tomorrow — AI rescheduled outdoor tour, arranged indoor offers",
    },
  ];

  const revenueMetrics = [
    { label: "OCCUPANCY", value: "87%", color: "#22c55e" },
    { label: "ADR", value: "£341", color: "#60a5fa" },
    { label: "REVPAR", value: "£298", color: "#fbbf24" },
    { label: "MONTHLY REVENUE", value: "£2.8M", color: P2 },
  ];

  const occupancyData = [65, 70, 75, 80, 88, 92, 85, 78, 80, 82, 88, 95];
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

  const pricingAlerts = [
    {
      title: "High Demand Detected",
      detail: "Deluxe King rate increased £289 — £329 (+14%)",
      revenue: "+£12,400/week",
    },
    {
      title: "Low Midweek Occupancy",
      detail: "Tuesday–Thursday rates reduced 15%, spa package added free",
      revenue: "+22% bookings",
    },
    {
      title: "Event Proximity",
      detail: "Wimbledon week — all rates adjusted +35%, minimum 3 nights",
      revenue: "+£54,000 revenue",
    },
  ];

  const cardStyle: React.CSSProperties = {
    background: "rgba(24,24,27,0.7)",
    border: "1px solid #27272a",
    borderRadius: 20,
    padding: 24,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "0.18em",
    color: P,
    textTransform: "uppercase",
    marginBottom: 20,
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="space-y-6 lg:space-y-8">
          {/* Tabs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {tabs.map((tab) => {
              const on = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-2xl border p-5 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                    on
                      ? "border-transparent text-white"
                      : "border-zinc-800 bg-zinc-900/70 text-zinc-300"
                  }`}
                  style={{
                    background: on ? PBG : "rgba(24,24,27,0.7)",
                    borderColor: on ? P : "#27272a",
                  }}
                >
                  <div className="mb-1 text-sm font-bold">{tab.title}</div>
                  <div className={`text-xs ${on ? "text-white/60" : "text-zinc-500"}`}>
                    {tab.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Room Configurator */}
          {activeTab === "configurator" && (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {rooms.map((r) => {
                  const sel = selectedRoom === r.id;
                  return (
                    <div
                      key={r.id}
                      onClick={() => setSelectedRoom(r.id)}
                      role="button"
                      tabIndex={0}
                      className={`overflow-hidden rounded-2xl border bg-zinc-900 transition-all duration-200 hover:scale-[1.01] ${
                        sel ? "border-2" : "border"
                      } cursor-pointer`}
                      style={{ borderColor: sel ? P : "#27272a" }}
                    >
                      <div className="relative">
                        <img
                          src={r.image}
                          alt={r.title}
                          className="h-48 w-full object-cover sm:h-52"
                        />
                        {sel && (
                          <div
                            className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border-2"
                            style={{ borderColor: P, background: PBG }}
                          >
                            <div className="h-2.5 w-2.5 rounded-full" style={{ background: P }} />
                          </div>
                        )}
                        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span>{r.rating}</span>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5">
                        <div className="mb-1 text-[17px] font-bold">{r.title}</div>
                        <div className="mb-3 text-xs text-zinc-500">
                          {r.size} · {r.guests}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-extrabold" style={{ color: P2 }}>
                            £{r.price}
                          </span>
                          <span className="text-sm text-zinc-500">/night</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="flex min-w-0 flex-col gap-6">
                  <div className="rounded-3xl p-5 sm:p-8" style={cardStyle}>
                    <div style={labelStyle}>Configure Your Stay</div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                      {[
                        { lbl: "NIGHTS", val: nights, set: setNights, min: 1 },
                        { lbl: "GUESTS", val: guests, set: setGuests, min: 1 },
                      ].map(({ lbl, val, set, min }) => (
                        <div key={lbl}>
                          <div className="mb-4 text-xs tracking-[0.1em] text-zinc-500">
                            {lbl}
                          </div>
                          <div className="flex items-center gap-4 sm:gap-5">
                            <button
                              type="button"
                              onClick={() => set(Math.max(min, val - 1))}
                              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 text-2xl text-white transition hover:bg-zinc-700"
                            >
                              −
                            </button>
                            <span className="min-w-10 text-center text-4xl font-bold">
                              {val}
                            </span>
                            <button
                              type="button"
                              onClick={() => set(val + 1)}
                              className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 text-2xl text-white transition hover:bg-zinc-700"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl p-5 sm:p-8" style={cardStyle}>
                    <div style={labelStyle}>Enhance Your Experience</div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {addons.map((addon, i) => {
                        const on = selectedAddons.includes(i);
                        return (
                          <div
                            key={i}
                            onClick={() => toggleAddon(i)}
                            role="button"
                            tabIndex={0}
                            className="relative flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-all duration-200 hover:scale-[1.01]"
                            style={{
                              background: on ? PBG : "rgba(10,10,10,.5)",
                              borderColor: on ? P : "#27272a",
                            }}
                          >
                            <div className="flex-shrink-0" style={{ color: P }}>
                              {addon.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-zinc-200">
                                {addon.title}
                              </div>
                              <div className="mt-1 text-xs text-green-400">
                                £{addon.price}/night
                              </div>
                            </div>
                            {on && (
                              <div
                                className="absolute right-3 top-3 flex h-[18px] w-[18px] items-center justify-center rounded-full"
                                style={{ background: P }}
                              >
                                <span className="text-[10px] leading-none text-white">✓</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-3xl p-5 sm:p-8 lg:sticky lg:top-6"
                  style={{ background: PFAINT, border: `1px solid ${PBDR}` }}
                >
                  <div style={labelStyle}>Booking Summary</div>

                  <div className="mb-2 flex items-start justify-between gap-4">
                    <span className="text-sm text-zinc-400">{room.title}</span>
                    <span className="text-sm font-semibold">
                      £{room.price} × {nights}
                    </span>
                  </div>

                  {selectedAddons.map((i) => (
                    <div key={i} className="mb-2 flex items-start justify-between gap-4">
                      <span className="text-sm text-zinc-400">{addons[i].title}</span>
                      <span className="text-sm text-zinc-300">
                        £{addons[i].price} × {nights}
                      </span>
                    </div>
                  ))}

                  <div className="my-4 border-t" style={{ borderColor: PBDR }} />

                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-3xl font-extrabold" style={{ color: P2 }}>
                      £{grandTotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="mb-6 text-sm text-zinc-500">
                    {nights} night{nights !== 1 ? "s" : ""} · {guests} guest
                    {guests !== 1 ? "s" : ""}
                    {selectedAddons.length > 0 &&
                      ` · ${selectedAddons.length} add-on${selectedAddons.length !== 1 ? "s" : ""}`}
                  </div>

                  <button
                    type="button"
                    className="mb-4 w-full rounded-2xl px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                    style={{ background: P }}
                  >
                    Book Now
                  </button>

                  <div className="flex items-center justify-center gap-2 text-center">
                    <Sparkles className="h-4 w-4 flex-shrink-0" style={{ color: P }} />
                    <span className="text-xs text-zinc-500">
                      AI suggests: Add breakfast for 23% savings vs. à la carte dining
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Guest Journey */}
          {activeTab === "journey" && (
            <>
              <h2 className="mb-2 text-xl font-extrabold uppercase tracking-[0.05em] sm:text-2xl">
                AI-Powered Guest Journey
              </h2>
              <p className="mb-8 text-sm text-zinc-500 sm:text-base">
                Every touchpoint is personalised by AI — from booking to post-stay loyalty.
              </p>

              <div className="flex flex-col gap-4">
                {journeyPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="rounded-3xl p-5 sm:p-6"
                    style={{
                      border: `1px solid ${pt.done ? "rgba(34,197,94,.3)" : PBDR}`,
                      background: pt.done ? "rgba(20,83,45,.15)" : PFAINT,
                    }}
                  >
                    <div className="flex gap-4 sm:gap-5">
                      <div className="mt-1 flex-shrink-0">
                        {pt.done ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <AlertCircle className="h-6 w-6" style={{ color: P }} />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="text-lg font-bold">{pt.phase}</h3>
                          <span className="text-xs text-zinc-500">{pt.type}</span>
                        </div>

                        <div className="mb-4 flex flex-wrap gap-2">
                          {pt.actions.map((a, j) => (
                            <span
                              key={j}
                              className="rounded-full bg-zinc-800/60 px-3 py-1 text-xs text-zinc-300"
                            >
                              {a}
                            </span>
                          ))}
                        </div>

                        <p className="text-sm text-zinc-500">
                          <span style={{ color: P }}>→ </span>
                          {pt.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Revenue Intelligence */}
          {activeTab === "revenue" && (
            <>
              <h2 className="mb-7 text-xl font-extrabold uppercase tracking-[0.05em] sm:text-2xl">
                Revenue Metrics &amp; Insights
              </h2>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {revenueMetrics.map((m, i) => (
                  <div key={i} className="rounded-3xl p-5 sm:p-6" style={cardStyle}>
                    <div
                      className="mb-4 h-1 rounded-full"
                      style={{ background: m.color }}
                    />
                    <div
                      className="mb-2 text-3xl font-extrabold"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6 rounded-3xl p-5 sm:p-8" style={cardStyle}>
                <h3 className="mb-6 text-xs font-extrabold uppercase tracking-[0.1em] text-zinc-300 sm:text-sm">
                  Occupancy Forecast (12 Months)
                </h3>

                <div className="flex h-56 items-end gap-2 sm:gap-3">
                  {occupancyData.map((val, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="rounded-t-md transition-all duration-300"
                        style={{
                          height: `${val}%`,
                          background: val >= 85 ? PBAR_HI : PBAR_LO,
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-12 border-t border-zinc-800 pt-3">
                  {months.map((m) => (
                    <span
                      key={m}
                      className="text-center text-[10px] text-zinc-500 sm:text-xs"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="rounded-3xl p-5 sm:p-8"
                style={{ background: PFAINT, border: `1px solid ${PBDR}` }}
              >
                <div className="mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5" style={{ color: P }} />
                  <h3 className="text-base font-bold sm:text-lg">
                    AI Dynamic Pricing Engine
                  </h3>
                </div>

                {pricingAlerts.map((a, i) => (
                  <div
                    key={i}
                    className={`flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between ${
                      i < pricingAlerts.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="mb-1 text-sm font-bold">{a.title}</div>
                      <div className="text-sm text-zinc-500">{a.detail}</div>
                    </div>
                    <div className="flex-shrink-0 text-sm font-bold text-green-400 sm:ml-6">
                      {a.revenue}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* AI Concierge */}
          {activeTab === "concierge" && (
            <>
              <h2 className="mb-2 text-xl font-extrabold uppercase tracking-[0.05em] sm:text-2xl">
                AI Concierge Intelligence
              </h2>
              <p className="mb-7 text-sm text-zinc-500 sm:text-base">
                Predictive guest profiles that anticipate needs before they&apos;re expressed.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {guestProfiles.map((g) => {
                  const on = selectedGuest === g.id;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGuest(g.id)}
                      className="rounded-2xl px-4 py-2.5 text-sm font-semibold transition"
                      style={{
                        border: `1px solid ${on ? P : "#27272a"}`,
                        background: on ? P : "transparent",
                        color: "#fff",
                      }}
                    >
                      {g.name}
                    </button>
                  );
                })}
              </div>

              {(() => {
                const g = guestProfiles[selectedGuest];
                return (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {[
                        { lbl: "Room", val: g.room, clr: "#fff" },
                        { lbl: "Visit History", val: g.visits, clr: "#fff" },
                        { lbl: "Satisfaction Score", val: g.satisfaction, clr: "#4ade80" },
                      ].map(({ lbl, val, clr }) => (
                        <div key={lbl} className="rounded-3xl p-5" style={cardStyle}>
                          <div className="mb-2 text-xs uppercase tracking-[0.08em] text-zinc-500">
                            {lbl}
                          </div>
                          <div className="text-base font-bold" style={{ color: clr }}>
                            {val}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                      <div className="rounded-3xl p-5 sm:p-6" style={cardStyle}>
                        <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-500">
                          Known Preferences
                        </div>
                        <div className="flex flex-col gap-3">
                          {g.preferences.map((pref, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-3 rounded-2xl bg-zinc-900/50 px-4 py-3"
                            >
                              <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                              <span className="text-sm text-green-500">{pref}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-3xl p-5 sm:p-6" style={cardStyle}>
                        <div className="mb-5 text-xs font-extrabold uppercase tracking-[0.12em] text-zinc-500">
                          AI Predictions
                        </div>
                        <div className="flex flex-col gap-3">
                          {g.predictions.map((pred, j) => (
                            <div
                              key={j}
                              className="flex items-center gap-3 rounded-2xl bg-zinc-900/50 px-4 py-3"
                            >
                              <AlertCircle className="h-4 w-4 flex-shrink-0" style={{ color: P2 }} />
                              <span className="text-sm" style={{ color: P2 }}>
                                {pred}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
