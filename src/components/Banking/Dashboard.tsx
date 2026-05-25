import React from "react";
import {
  Shield,
  Home,
  TrendingUp,
  Zap,
  AlertTriangle,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  // Dynamic Data
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Fraud Detection",
      desc: "Real-time threat monitoring",
      active: true,
    },
    {
      icon: <Home className="w-5 h-5" />,
      title: "Mortgage AI",
      desc: "Instant affordability",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Wealth Portfolio",
      desc: "AI-managed investments",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Smart Insights",
      desc: "Transaction intelligence",
    },
  ];

  const kpis = [
    {
      value: "£28,580",
      label: "FRAUD BLOCKED (24H)",
      change: "+12%",
      color: "text-emerald-400",
    },
    {
      value: "24",
      label: "ACTIVE THREATS",
      change: "-8%",
      color: "text-rose-400",
    },
    {
      value: "99.7%",
      label: "ACCURACY RATE",
      change: "+0.2%",
      color: "text-emerald-400",
    },
    {
      value: "0.3ms",
      label: "AVG RESPONSE",
      change: "-15%",
      color: "text-emerald-400",
    },
  ];

  const threats = [
    {
      risk: "HIGH RISK",
      time: "2 min ago",
      title: "Unknown Crypto Exchange",
      location: "Lagos, Nigeria",
      amount: "£4,250.00",
      confidence: 98,
      color: "bg-red-500",
    },
    {
      risk: "MEDIUM RISK",
      time: "5 min ago",
      title: "Electronics Store",
      location: "London, UK",
      amount: "£890.00",
      confidence: 87,
      color: "bg-yellow-500",
    },
    {
      risk: "HIGH RISK",
      time: "8 min ago",
      title: "Wire Transfer",
      location: "Cayman Islands",
      amount: "£12,500.00",
      confidence: 95,
      color: "bg-red-500",
    },
    {
      risk: "LOW RISK",
      time: "12 min ago",
      title: "Amazon UK",
      location: "London, UK",
      amount: "£45.99",
      confidence: 12,
      color: "bg-emerald-500",
    },
    {
      risk: "MEDIUM RISK",
      time: "15 min ago",
      title: "Luxury Goods Store",
      location: "Paris, France",
      amount: "£2,100.00",
      confidence: 54,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Threat Intelligence
          </h1>
          <div className="text-sm text-zinc-400 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Live • Updated just now
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border transition-all duration-200 ${
                feature.active
                  ? "border-cyan-500 bg-cyan-950/30"
                  : "border-zinc-800 hover:border-zinc-700 bg-zinc-900/50"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`${feature.active ? "text-cyan-400" : "text-zinc-400"}`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <div
              key={i}
              className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-3xl font-bold tracking-tight mb-1">
                    {kpi.value}
                  </p>
                  <p className="text-sm text-zinc-400 uppercase tracking-widest">
                    {kpi.label}
                  </p>
                </div>
                <span className={`text-sm font-medium ${kpi.color}`}>
                  {kpi.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Threat Feed */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              <h2 className="font-semibold text-lg">LIVE THREAT FEED</h2>
            </div>
            <div className="text-xs text-zinc-500">5 alerts</div>
          </div>

          <div className="divide-y divide-zinc-800">
            {threats.map((threat, i) => (
              <div
                key={i}
                className="px-6 py-5 hover:bg-zinc-800/50 transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
              >
                <div className="flex items-center gap-3 md:w-72">
                  <div className={`w-2 h-2 rounded-full ${threat.color}`} />
                  <div>
                    <p className="font-medium text-sm">{threat.risk}</p>
                    <p className="text-xs text-zinc-500">{threat.time}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-semibold">{threat.title}</p>
                  <p className="text-sm text-zinc-400">{threat.location}</p>
                </div>

                <div className="text-right md:text-left md:w-40">
                  <p className="font-mono font-bold text-lg">{threat.amount}</p>
                </div>

                <div className="md:w-28">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-zinc-400">Confidence</span>
                    <span className="font-medium">{threat.confidence}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${threat.color}`}
                      style={{ width: `${threat.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
