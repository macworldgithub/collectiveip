// import React from "react";
// import {
//   Shield,
//   Home,
//   TrendingUp,
//   Zap,
//   AlertTriangle,
//   Clock,
// } from "lucide-react";

// export default function Dashboard() {
//   // Dynamic Data
//   const features = [
//     {
//       icon: <Shield className="w-5 h-5" />,
//       title: "Fraud Detection",
//       desc: "Real-time threat monitoring",
//       active: true,
//     },
//     {
//       icon: <Home className="w-5 h-5" />,
//       title: "Mortgage AI",
//       desc: "Instant affordability",
//     },
//     {
//       icon: <TrendingUp className="w-5 h-5" />,
//       title: "Wealth Portfolio",
//       desc: "AI-managed investments",
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       title: "Smart Insights",
//       desc: "Transaction intelligence",
//     },
//   ];

//   const kpis = [
//     {
//       value: "£28,580",
//       label: "FRAUD BLOCKED (24H)",
//       change: "+12%",
//       color: "text-emerald-400",
//     },
//     {
//       value: "24",
//       label: "ACTIVE THREATS",
//       change: "-8%",
//       color: "text-rose-400",
//     },
//     {
//       value: "99.7%",
//       label: "ACCURACY RATE",
//       change: "+0.2%",
//       color: "text-emerald-400",
//     },
//     {
//       value: "0.3ms",
//       label: "AVG RESPONSE",
//       change: "-15%",
//       color: "text-emerald-400",
//     },
//   ];

//   const threats = [
//     {
//       risk: "HIGH RISK",
//       time: "2 min ago",
//       title: "Unknown Crypto Exchange",
//       location: "Lagos, Nigeria",
//       amount: "£4,250.00",
//       confidence: 98,
//       color: "bg-red-500",
//     },
//     {
//       risk: "MEDIUM RISK",
//       time: "5 min ago",
//       title: "Electronics Store",
//       location: "London, UK",
//       amount: "£890.00",
//       confidence: 87,
//       color: "bg-yellow-500",
//     },
//     {
//       risk: "HIGH RISK",
//       time: "8 min ago",
//       title: "Wire Transfer",
//       location: "Cayman Islands",
//       amount: "£12,500.00",
//       confidence: 95,
//       color: "bg-red-500",
//     },
//     {
//       risk: "LOW RISK",
//       time: "12 min ago",
//       title: "Amazon UK",
//       location: "London, UK",
//       amount: "£45.99",
//       confidence: 12,
//       color: "bg-emerald-500",
//     },
//     {
//       risk: "MEDIUM RISK",
//       time: "15 min ago",
//       title: "Luxury Goods Store",
//       location: "Paris, France",
//       amount: "£2,100.00",
//       confidence: 54,
//       color: "bg-yellow-500",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 lg:p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white">
//             Threat Intelligence
//           </h1>
//           <div className="text-sm text-zinc-400 flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             Live • Updated just now
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className={`p-5 rounded-2xl border transition-all duration-200 ${
//                 feature.active
//                   ? "border-brand-500 bg-brand-950/20"
//                   : "border-zinc-800 hover:border-brand-500/50 bg-zinc-900/50"
//               }`}
//             >
//               <div className="flex items-center gap-3 mb-3">
//                 <div
//                   className={`${feature.active ? "text-brand-300" : "text-zinc-400"}`}
//                 >
//                   {feature.icon}
//                 </div>
//                 <h3 className="font-semibold">{feature.title}</h3>
//               </div>
//               <p className="text-sm text-zinc-400">{feature.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* KPI Cards */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//           {kpis.map((kpi, i) => (
//             <div
//               key={i}
//               className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all"
//             >
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-3xl font-bold tracking-tight mb-1">
//                     {kpi.value}
//                   </p>
//                   <p className="text-sm text-zinc-400 uppercase tracking-widest">
//                     {kpi.label}
//                   </p>
//                 </div>
//                 <span className={`text-sm font-medium ${kpi.color}`}>
//                   {kpi.change}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Live Threat Feed */}
//         <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden">
//           <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
//             <div className="flex items-center gap-3">
//               <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
//               <h2 className="font-heading font-bold text-lg uppercase tracking-wider text-white">LIVE THREAT FEED</h2>
//             </div>
//             <div className="text-xs text-zinc-500">5 alerts</div>
//           </div>

//           <div className="divide-y divide-zinc-800">
//             {threats.map((threat, i) => (
//               <div
//                 key={i}
//                 className="px-6 py-5 hover:bg-zinc-800/50 transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
//               >
//                 <div className="flex items-center gap-3 md:w-72">
//                   <div className={`w-2 h-2 rounded-full ${threat.color}`} />
//                   <div>
//                     <p className="font-medium text-sm">{threat.risk}</p>
//                     <p className="text-xs text-zinc-500">{threat.time}</p>
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <p className="font-semibold">{threat.title}</p>
//                   <p className="text-sm text-zinc-400">{threat.location}</p>
//                 </div>

//                 <div className="text-right md:text-left md:w-40">
//                   <p className="font-mono font-bold text-lg">{threat.amount}</p>
//                 </div>

//                 <div className="md:w-28">
//                   <div className="flex items-center justify-between text-xs mb-1">
//                     <span className="text-zinc-400">Confidence</span>
//                     <span className="font-medium">{threat.confidence}%</span>
//                   </div>
//                   <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
//                     <div
//                       className={`h-full ${threat.color}`}
//                       style={{ width: `${threat.confidence}%` }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useMemo } from "react";
import {
  Shield,
  Home,
  TrendingUp,
  Zap,
  AlertTriangle,
  Clock,
} from "lucide-react";

// ─── Purple-tinted theme tokens ───────────────────────────────────────────────
// brand = purple (#7c3aed base)
// bg    = #0a0a0f
// card  = #111118
// border= #1e1e2e

// ─── Types ────────────────────────────────────────────────────────────────────
type Tab = "fraud" | "mortgage" | "wealth" | "insights";

const CATEGORY_FILTERS = ["All", "Groceries", "Income", "Subscriptions", "Transport", "Savings", "Dining"] as const;
type Category = typeof CATEGORY_FILTERS[number];

// ─── Shared nav features ──────────────────────────────────────────────────────
const NAV_ITEMS: { id: Tab; icon: React.ReactNode; title: string; desc: string }[] = [
  { id: "fraud",    icon: <Shield className="w-5 h-5" />,    title: "Fraud Detection", desc: "Real-time threat monitoring" },
  { id: "mortgage", icon: <Home className="w-5 h-5" />,      title: "Mortgage AI",     desc: "Instant affordability" },
  { id: "wealth",   icon: <TrendingUp className="w-5 h-5" />,title: "Wealth Portfolio",desc: "AI-managed investments" },
  { id: "insights", icon: <Zap className="w-5 h-5" />,       title: "Smart Insights",  desc: "Transaction intelligence" },
];

// ─── Fraud Detection Tab ──────────────────────────────────────────────────────
function FraudTab() {
  const kpis = [
    { value: "£28,580", label: "FRAUD BLOCKED (24H)", change: "+12%", up: true },
    { value: "24",      label: "ACTIVE THREATS",      change: "-8%",  up: false },
    { value: "99.7%",   label: "ACCURACY RATE",       change: "+0.2%",up: true },
    { value: "0.3ms",   label: "AVG RESPONSE",        change: "-15%", up: true },
  ];

  const threats = [
    { risk: "HIGH RISK",   time: "2 min ago",  title: "Unknown Crypto Exchange", location: "Lagos, Nigeria",   amount: "£4,250.00",  confidence: 98, level: "high" },
    { risk: "MEDIUM RISK", time: "5 min ago",  title: "Electronics Store",       location: "London, UK",        amount: "£890.00",    confidence: 87, level: "medium" },
    { risk: "HIGH RISK",   time: "8 min ago",  title: "Wire Transfer",           location: "Cayman Islands",    amount: "£12,500.00", confidence: 95, level: "high" },
    { risk: "LOW RISK",    time: "12 min ago", title: "Amazon UK",               location: "London, UK",        amount: "£45.99",     confidence: 12, level: "low" },
    { risk: "MEDIUM RISK", time: "15 min ago", title: "Luxury Goods Store",      location: "Paris, France",     amount: "£2,100.00",  confidence: 54, level: "medium" },
  ];

  const dotColor = (level: string) =>
    level === "high" ? "#ef4444" : level === "medium" ? "#eab308" : "#10b981";
  const barColor = (level: string) =>
    level === "high" ? "bg-red-500" : level === "medium" ? "bg-yellow-500" : "bg-emerald-500";

  return (
    <div>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <div key={i} style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-2xl p-6 hover:border-purple-500/40 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-3xl font-bold tracking-tight mb-1 text-white">{kpi.value}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">{kpi.label}</p>
              </div>
              <span className={`text-sm font-medium ${kpi.up ? "text-emerald-400" : "text-rose-400"}`}>{kpi.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Threat Feed */}
      <div style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-3xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid #1e1e2e" }}>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h2 className="font-bold text-lg uppercase tracking-wider text-white">LIVE THREAT FEED</h2>
          </div>
          <div className="text-xs text-zinc-500">5 alerts</div>
        </div>

        <div>
          {threats.map((t, i) => (
            <div key={i} className="px-6 py-5 hover:bg-purple-500/5 transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-6" style={{ borderBottom: i < threats.length - 1 ? "1px solid #1e1e2e" : "none" }}>
              <div className="flex items-center gap-3 md:w-72">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor(t.level) }} />
                <div>
                  <p className="font-medium text-sm text-white">{t.risk}</p>
                  <p className="text-xs text-zinc-500">{t.time}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white">{t.title}</p>
                <p className="text-sm text-zinc-400">{t.location}</p>
              </div>
              <div className="md:w-40">
                <p className="font-mono font-bold text-lg text-white">{t.amount}</p>
              </div>
              <div className="md:w-28">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-zinc-400">Confidence</span>
                  <span className="font-medium text-white">{t.confidence}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#1e1e2e" }}>
                  <div className={`h-full ${barColor(t.level)}`} style={{ width: `${t.confidence}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Mortgage AI Tab ──────────────────────────────────────────────────────────
function MortgageTab() {
  const [propertyValue, setPropertyValue] = useState(575000);
  const [deposit, setDepositRaw] = useState(145000);
  const [term, setTerm] = useState(25);
  const [income, setIncome] = useState(85000);

  const loanAmount = propertyValue - deposit;
  const ltv = Math.round((loanAmount / propertyValue) * 100);
  const maxBorrow = income * 4.5;

  const rates = [
    { label: "2-Year Fixed", rate: 4.29, best: true },
    { label: "5-Year Fixed", rate: 4.49, best: false },
    { label: "10-Year Fixed", rate: 4.89, best: false },
    { label: "Tracker (BBR+0.99%)", rate: 5.24, best: false },
  ];

  const monthlyPayment = (r: number) => {
    const mr = r / 100 / 12;
    const n = term * 12;
    return Math.round((loanAmount * mr * Math.pow(1 + mr, n)) / (Math.pow(1 + mr, n) - 1));
  };

  const bestRate = rates[0].rate;
  const monthly = monthlyPayment(bestRate);
  const affordability = Math.round((monthly * 12 / income) * 1000) / 10;
  const preApproved = loanAmount <= maxBorrow && affordability < 40;

  const fmt = (v: number) => "£" + v.toLocaleString("en-GB");

  return (
    <div style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-3xl p-6">
      <h2 className="text-xl font-extrabold uppercase tracking-tight text-white mb-1">AI Mortgage Advisor</h2>
      <p className="text-sm text-zinc-400 mb-6">Instant affordability assessment with AI-optimised rate matching across 90+ lenders.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders */}
        <div className="space-y-6">
          {/* Property Value */}
          <div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 mb-2">
              <span>Property Value</span><span className="text-purple-400 font-bold">{fmt(propertyValue)}</span>
            </div>
            <input type="range" min={100000} max={2000000} step={5000} value={propertyValue}
              onChange={e => setPropertyValue(+e.target.value)}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#7c3aed" }} />
          </div>
          {/* Deposit */}
          <div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 mb-2">
              <span style={{ color: "#7c3aed", fontSize: "11px" }}>{fmt(deposit)} ({ltv}% LTV)</span>
              <span className="text-purple-400 font-bold">{fmt(deposit)} ({ltv}% LTV)</span>
            </div>
            <input type="range" min={10000} max={propertyValue * 0.9} step={5000} value={deposit}
              onChange={e => setDepositRaw(+e.target.value)}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#06b6d4" }} />
          </div>
          {/* Term */}
          <div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 mb-2">
              <span>Term (Years)</span><span className="text-purple-400 font-bold">{term} years</span>
            </div>
            <input type="range" min={5} max={40} step={1} value={term}
              onChange={e => setTerm(+e.target.value)}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#7c3aed" }} />
          </div>
          {/* Income */}
          <div>
            <div className="flex justify-between text-xs uppercase tracking-widest text-zinc-400 mb-2">
              <span>Annual Income</span><span className="text-purple-400 font-bold">{fmt(income)}</span>
            </div>
            <input type="range" min={20000} max={500000} step={1000} value={income}
              onChange={e => setIncome(+e.target.value)}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{ accentColor: "#7c3aed" }} />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div style={{ background: "#0d0d16", border: "1px solid #2a1f4e" }} className="rounded-2xl p-5">
            <p className="text-xs text-zinc-400 mb-1">Monthly Payment</p>
            <p className="text-4xl font-extrabold text-white">£{monthly.toLocaleString("en-GB")}</p>
            <p className="text-xs text-zinc-500 mt-1">Based on best available 2-year fixed rate (4.29%)</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div style={{ background: "#0d0d16", border: "1px solid #1e1e2e" }} className="rounded-2xl p-4">
              <p className="text-xs text-zinc-400 mb-1">Loan Amount</p>
              <p className="text-xl font-bold text-white">{fmt(loanAmount)}</p>
            </div>
            <div style={{ background: "#0d0d16", border: "1px solid #1e1e2e" }} className="rounded-2xl p-4">
              <p className="text-xs text-zinc-400 mb-1">LTV Ratio</p>
              <p className="text-xl font-bold text-white">{ltv}%</p>
            </div>
            <div style={{ background: "#0d0d16", border: "1px solid #1e1e2e" }} className="rounded-2xl p-4">
              <p className="text-xs text-zinc-400 mb-1">Affordability</p>
              <p className={`text-xl font-bold ${affordability < 35 ? "text-emerald-400" : affordability < 45 ? "text-yellow-400" : "text-red-400"}`}>{affordability}%</p>
            </div>
            <div style={{ background: "#0d0d16", border: "1px solid #1e1e2e" }} className="rounded-2xl p-4">
              <p className="text-xs text-zinc-400 mb-1">Max Borrowing</p>
              <p className="text-xl font-bold text-white">{fmt(Math.round(maxBorrow))}</p>
            </div>
          </div>
          {preApproved ? (
            <div style={{ background: "#052e16", border: "1px solid #14532d" }} className="rounded-2xl p-4 flex gap-3 items-start">
              <span className="text-emerald-400 text-lg">✓</span>
              <div>
                <p className="text-emerald-400 font-semibold text-sm">Pre-Approved</p>
                <p className="text-xs text-zinc-400 mt-0.5">Based on your income and deposit, you meet the criteria for immediate pre-approval with 12 lenders.</p>
              </div>
            </div>
          ) : (
            <div style={{ background: "#2d1515", border: "1px solid #7f1d1d" }} className="rounded-2xl p-4 flex gap-3 items-start">
              <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-red-400 font-semibold text-sm">Not Pre-Approved</p>
                <p className="text-xs text-zinc-400 mt-0.5">Loan exceeds max borrowing capacity or affordability is too high. Try a larger deposit or longer term.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Matched Rates */}
      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">AI-Matched Rates</p>
        <div className="space-y-3">
          {rates.map((r, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl px-5 py-4 transition-all"
              style={{ background: r.best ? "#1a103a" : "#0d0d16", border: `1px solid ${r.best ? "#4c1d95" : "#1e1e2e"}` }}>
              <div className="flex items-center gap-3">
                {r.best && <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#7c3aed", color: "#fff" }}>BEST MATCH</span>}
                <span className="text-white font-medium">{r.label}</span>
              </div>
              <div className="flex items-center gap-6 text-right">
                <span className="text-purple-400 font-bold">{r.rate.toFixed(2)}%</span>
                <span className="text-white font-mono">£{monthlyPayment(r.rate).toLocaleString("en-GB")}/mo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Wealth Portfolio Tab ─────────────────────────────────────────────────────
function WealthTab() {
  const allocations = [
    { name: "UK Equities",   value: 245000, pct: 28, change: +3.2, color: "#06b6d4" },
    { name: "Global Bonds",  value: 185000, pct: 21, change: +1.3, color: "#8b5cf6" },
    { name: "Property Fund", value: 150000, pct: 17, change: +5.8, color: "#f59e0b" },
    { name: "US Tech",       value: 130000, pct: 15, change: +8.4, color: "#10b981" },
    { name: "Cash & Savings",value: 95000,  pct: 11, change: +0.2, color: "#6b7280" },
    { name: "Alternative",   value: 70000,  pct: 8,  change: -1.3, color: "#ef4444" },
  ];

  const total = allocations.reduce((s, a) => s + a.value, 0);
  const monthChange = 29140;

  const recommendations = [
    { tag: "REBALANCE",  color: "#f59e0b", bg: "#451a03", text: "UK Equities are 3% over target allocation. Consider trimming £8,200 to Global Bonds." },
    { tag: "OPPORTUNITY",color: "#10b981", bg: "#022c22", text: "Emerging Markets showing strong momentum. AI suggests 5% allocation shift from Cash." },
    { tag: "RISK ALERT", color: "#ef4444", bg: "#450a0a", text: "US Tech concentration at 15% exceeds your risk profile. Review exposure." },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-3xl p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">Total Portfolio Value</p>
            <p className="text-5xl font-extrabold text-white">£875k</p>
            <p className="text-emerald-400 text-sm mt-1">+£{monthChange.toLocaleString("en-GB")} (3.3%) this month</p>
          </div>
          <div style={{ background: "#1a103a", border: "1px solid #4c1d95" }} className="rounded-full px-4 py-2 flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-300 font-medium">AI Risk Score: Moderate-Growth</span>
          </div>
        </div>

        {/* Stacked bar */}
        <div className="h-4 rounded-full overflow-hidden flex mb-6">
          {allocations.map((a, i) => (
            <div key={i} style={{ width: `${a.pct}%`, background: a.color }} className="transition-all" title={`${a.name}: ${a.pct}%`} />
          ))}
        </div>

        {/* Allocation grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {allocations.map((a, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: a.color }} />
                <div>
                  <p className="text-sm text-white font-medium">{a.name}</p>
                  <p className="text-xs text-zinc-500">£{(a.value / 1000).toFixed(0)}k · {a.pct}%</p>
                </div>
              </div>
              <span className={`text-xs font-bold ${a.change >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                {a.change >= 0 ? "+" : ""}{a.change}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Recommendations */}
      <div style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-3xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-purple-400" />
          <p className="text-sm font-bold text-white uppercase tracking-widest">AI Portfolio Recommendations</p>
        </div>
        <div className="space-y-3">
          {recommendations.map((r, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl px-4 py-3" style={{ background: "#0d0d16", border: "1px solid #1e1e2e" }}>
              <span className="text-xs font-bold px-2 py-1 rounded shrink-0" style={{ background: r.bg, color: r.color, border: `1px solid ${r.color}40` }}>{r.tag}</span>
              <p className="text-sm text-zinc-300">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Smart Insights Tab ───────────────────────────────────────────────────────
function InsightsTab() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const transactions = [
    { name: "Tesco Express",     time: "Today, 14:32",   category: "Groceries",     amount: -42.80,   insight: "12% above your weekly grocery average" },
    { name: "Salary - Acme Corp",time: "Today, 09:00",   category: "Income",        amount: +5420.00, insight: "On schedule — next payment expected 1st June" },
    { name: "Netflix Premium",   time: "Yesterday",      category: "Subscriptions", amount: -17.99,   insight: "You have 4 active streaming services totalling £52/mo" },
    { name: "TfL Contactless",   time: "Yesterday",      category: "Transport",     amount: -8.40,    insight: "Weekly cap reached — remaining journeys free" },
    { name: "Savings Transfer",  time: "Yesterday",      category: "Savings",       amount: -500.00,  insight: "On track for £6,000 annual savings goal (83% complete)" },
    { name: "Costa Coffee",      time: "2 days ago",     category: "Dining",        amount: -4.95,    insight: "Coffee spend this month: £38.40 (up 15% from last month)" },
  ];

  const filtered = activeCategory === "All" ? transactions : transactions.filter(t => t.category === activeCategory);

  return (
    <div>
      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "SPENT THIS MONTH", value: "£2,847",  color: "text-white" },
          { label: "INCOME",           value: "£5,420",  color: "text-emerald-400" },
          { label: "REMAINING",        value: "£2,573",  color: "text-cyan-400" },
        ].map((s, i) => (
          <div key={i} style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-2xl p-5 text-center">
            <p className={`text-2xl font-extrabold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORY_FILTERS.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
            style={activeCategory === cat
              ? { background: "#06b6d4", color: "#000" }
              : { background: "#111118", border: "1px solid #1e1e2e", color: "#a1a1aa" }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div style={{ background: "#111118", border: "1px solid #1e1e2e" }} className="rounded-3xl overflow-hidden">
        {filtered.map((t, i) => (
          <div key={i} className="px-6 py-5 hover:bg-purple-500/5 transition-all" style={{ borderBottom: i < filtered.length - 1 ? "1px solid #1e1e2e" : "none" }}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{t.time} · {t.category}</p>
              </div>
              <p className={`font-mono font-bold text-lg ${t.amount > 0 ? "text-emerald-400" : "text-white"}`}>
                {t.amount > 0 ? "+" : ""}£{Math.abs(t.amount).toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Zap className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <p className="text-xs text-zinc-400">{t.insight}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="px-6 py-12 text-center text-zinc-500 text-sm">No transactions in this category.</div>
        )}
      </div>
    </div>
  );
}

// ─── Root Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("fraud");

  return (
    <div className="min-h-screen text-white p-4 md:p-6 lg:p-8" style={{ background: "#0a0a0f" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold uppercase tracking-tight text-white">
            {activeTab === "fraud"    ? "Threat Intelligence" :
             activeTab === "mortgage" ? "Mortgage AI" :
             activeTab === "wealth"   ? "Wealth Portfolio" :
             "Smart Insights"}
          </h1>
          <div className="text-sm text-zinc-400 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Live · Updated just now
          </div>
        </div>

        {/* Nav Feature Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className="p-5 rounded-2xl transition-all duration-200 text-left"
              style={activeTab === item.id
                ? { background: "rgba(124,58,237,0.12)", border: "1px solid #7c3aed" }
                : { background: "rgba(17,17,24,0.7)", border: "1px solid #1e1e2e" }}>
              <div className="flex items-center gap-3 mb-3">
                <div style={{ color: activeTab === item.id ? "#a78bfa" : "#71717a" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
              </div>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "fraud"    && <FraudTab />}
        {activeTab === "mortgage" && <MortgageTab />}
        {activeTab === "wealth"   && <WealthTab />}
        {activeTab === "insights" && <InsightsTab />}
      </div>
    </div>
  );
}
