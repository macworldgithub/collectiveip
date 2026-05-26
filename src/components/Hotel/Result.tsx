// import React from "react";
// import { ArrowUpRight } from "lucide-react";

// export default function Result() {
//   // Dynamic Stats Data
//   const stats = [
//     {
//       id: 1,
//       value: "94%",
//       label: "FASTER MATCHING",
//     },
//     {
//       id: 2,
//       value: "97.3%",
//       label: "VALUATION ACCURACY",
//     },
//     {
//       id: 3,
//       value: "+32%",
//       label: "LEAD CONVERSION",
//     },
//     {
//       id: 4,
//       value: "4.9/5",
//       label: "CLIENT RATING",
//     },
//     {
//       id: 5,
//       value: "+28%",
//       label: "REVENUE/AGENT",
//     },
//     {
//       id: 6,
//       value: "<8s",
//       label: "RESPONSE TIME",
//     },
//   ];

//   // Dynamic CTA Content
//   const ctaData = {
//     badge: "BUSINESS IMPACT",
//     heading: "MEASURABLE RESULTS",
//     title: "READY TO TRANSFORM YOUR AGENCY?",
//     description:
//       "This demonstration represents a fully deployable AI solution. Let's discuss how we can build this for your business.",
//     primaryButton: "Schedule a Presentation",
//     secondaryButton: "View Other Demos",
//     footerLeft: "Collective IP",
//     footerRight: "Demo experience — not connected to live data",
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#05060b] text-white">
//       {/* Top Section */}
//       <div className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-7xl">
//           {/* Badge */}
//           <div className="text-center">
//             <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-300">
//               {ctaData.badge}
//             </p>

//             {/* Heading */}
//             <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
//               {ctaData.heading}
//             </h2>
//           </div>

//           {/* Stats Grid */}
//           <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
//             {stats.map((item) => (
//               <div
//                 key={item.id}
//                 className="rounded-3xl border border-white/10 bg-[#0b0d14] p-6 text-center transition duration-300 hover:border-brand-500/40 hover:bg-[#10131b]"
//               >
//                 {/* Value */}
//                 <h3 className="text-3xl font-black tracking-tight text-brand-300 sm:text-4xl">
//                   {item.value}
//                 </h3>

//                 {/* Label */}
//                 <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="px-4 py-24 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl text-center">
//           {/* Title */}
//           <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
//             {ctaData.title}
//           </h2>

//           {/* Description */}
//           <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
//             {ctaData.description}
//           </p>

//           {/* Buttons */}
//           <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
//             {/* Primary Button */}
//             <button className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-brand-600 px-8 text-sm font-bold text-white transition duration-300 hover:bg-brand-700 sm:px-10">
//               {ctaData.primaryButton}

//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//               />
//             </button>

//             {/* Secondary Button */}
//             <button className="flex h-14 items-center justify-center rounded-2xl bg-[#efefef] px-8 text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 sm:px-10">
//               {ctaData.secondaryButton}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
//           {/* Left */}
//           <p className="text-sm text-white/30">{ctaData.footerLeft}</p>

//           {/* Right */}
//           <p className="text-sm text-white/30">{ctaData.footerRight}</p>
//         </div>
//       </div>

//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[120px]" />
//     </section>
//   );
// }

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();

  // Dynamic Stats Data
  const stats = [
    { id: 1, value: "94%", label: "FASTER MATCHING" },
    { id: 2, value: "97.3%", label: "VALUATION ACCURACY" },
    { id: 3, value: "+32%", label: "LEAD CONVERSION" },
    { id: 4, value: "4.9/5", label: "CLIENT RATING" },
    { id: 5, value: "+28%", label: "REVENUE/AGENT" },
    { id: 6, value: "<8s", label: "RESPONSE TIME" },
  ];

  // Dynamic CTA Content
  const ctaData = {
    badge: "BUSINESS IMPACT",
    heading: "MEASURABLE RESULTS",
    title: "READY TO TRANSFORM YOUR AGENCY?",
    description:
      "This demonstration represents a fully deployable AI solution. Let's discuss how we can build this for your business.",
    primaryButton: "Schedule a Presentation",
    secondaryButton: "View Other Demos",
    footerLeft: "Collective IP",
    footerRight: "Demo experience — not connected to live data",
  };

  return (
    <section className="relative overflow-hidden bg-[#05060b] text-white">
      {/* Top Section */}
      <div className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Badge */}
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-300">
              {ctaData.badge}
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
              {ctaData.heading}
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {stats.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-[#0b0d14] p-6 text-center transition duration-300 hover:border-brand-500/40 hover:bg-[#10131b]"
              >
                <h3 className="text-3xl font-black tracking-tight text-brand-300 sm:text-4xl">
                  {item.value}
                </h3>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:text-xs">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl font-heading">
            {ctaData.title}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {ctaData.description}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary Button → /about */}
            <button
              onClick={() => navigate("/about")}
              className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-brand-600 px-8 text-sm font-bold text-white transition duration-300 hover:bg-brand-700 sm:px-10"
            >
              {ctaData.primaryButton}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>

            {/* Secondary Button → /demo */}
            <button
              onClick={() => navigate("/demo")}
              className="flex h-14 items-center justify-center rounded-2xl bg-[#efefef] px-8 text-sm font-bold text-black transition duration-300 hover:bg-zinc-200 sm:px-10"
            >
              {ctaData.secondaryButton}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/30">{ctaData.footerLeft}</p>
          <p className="text-sm text-white/30">{ctaData.footerRight}</p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[120px]" />
    </section>
  );
}
