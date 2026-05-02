import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Loader2, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Tool } from "../../data/demoTools";

const scanSteps: Record<string, string[]> = {
  network: [
    "Initialising network discovery...",
    "Scanning infrastructure topology...",
    "Analysing access point configurations...",
    "Evaluating switch fabric health...",
    "Checking firmware versions...",
    "Assessing bandwidth utilisation...",
    "Identifying coverage gaps...",
    "Generating assessment report..."
  ],
  security: [
    "Initialising security review...",
    "Scanning endpoint configurations...",
    "Analysing identity & access management...",
    "Evaluating network perimeter...",
    "Checking compliance frameworks...",
    "Assessing cloud posture...",
    "Identifying vulnerabilities...",
    "Generating security report..."
  ]
};

const networkResults = {
  stats: [
    { value: "47", label: "Devices Scanned", numberColor: "text-slate-800" },
    { value: "1", label: "Critical Issues", numberColor: "text-red-500" },
    { value: "2", label: "High Priority", numberColor: "text-orange-500" },
    { value: "6", label: "Recommendations", numberColor: "text-[#5C2882]" }
  ],
  findings: [
    {
      level: "CRITICAL",
      category: "FIRMWARE",
      title: "12 access points running end-of-life firmware (v8.5)",
      rec: "Recommendation: Immediate upgrade to v17.9 — security patches no longer available",
      bg: "bg-red-50",
      border: "border-red-200",
      pillBg: "bg-red-500",
      text: "text-red-500"
    },
    {
      level: "HIGH",
      category: "COVERAGE",
      title: "3 coverage gaps detected in Building C, floors 2-4",
      rec: "Recommendation: Deploy 6 additional Wi-Fi 6E APs with predictive survey validation",
      bg: "bg-orange-50",
      border: "border-orange-200",
      pillBg: "bg-orange-500",
      text: "text-orange-500"
    },
    {
      level: "HIGH",
      category: "CAPACITY",
      title: "Peak utilisation exceeding 85% on 8 access points",
      rec: "Recommendation: Load balancing reconfiguration and additional AP deployment",
      bg: "bg-orange-50",
      border: "border-orange-200",
      pillBg: "bg-orange-500",
      text: "text-orange-500"
    },
    {
      level: "MEDIUM",
      category: "SECURITY",
      title: "WPA2-Personal still in use on guest SSID",
      rec: "Recommendation: Migrate to WPA3-Enterprise with RADIUS authentication",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      pillBg: "bg-yellow-500",
      text: "text-yellow-600"
    },
    {
      level: "MEDIUM",
      category: "REDUNDANCY",
      title: "Single point of failure on core switch stack",
      rec: "Recommendation: Implement redundant switch stack with VSS or StackWise",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      pillBg: "bg-yellow-500",
      text: "text-yellow-600"
    },
    {
      level: "LOW",
      category: "OPTIMISATION",
      title: "Channel overlap detected on 2.4GHz band",
      rec: "Recommendation: Implement dynamic channel assignment with RRM tuning",
      bg: "bg-blue-50",
      border: "border-blue-200",
      pillBg: "bg-blue-500",
      text: "text-blue-500"
    }
  ]
};

const securityResults = {
  stats: [
    { value: "128", label: "Endpoints Scanned", numberColor: "text-slate-800" },
    { value: "0", label: "Critical Issues", numberColor: "text-red-500" },
    { value: "3", label: "High Priority", numberColor: "text-orange-500" },
    { value: "8", label: "Recommendations", numberColor: "text-[#5C2882]" }
  ],
  findings: [
    {
      level: "HIGH",
      category: "ENDPOINT",
      title: "15 devices missing critical OS patches (>30 days)",
      rec: "Recommendation: Enforce automated patch management policies via MDM",
      bg: "bg-orange-50",
      border: "border-orange-200",
      pillBg: "bg-orange-500",
      text: "text-orange-500"
    },
    {
      level: "MEDIUM",
      category: "IDENTITY",
      title: "MFA not enforced for all administrative accounts",
      rec: "Recommendation: Implement conditional access policies requiring MFA for all admins",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      pillBg: "bg-yellow-500",
      text: "text-yellow-600"
    }
  ]
};

export function AssessmentTool({ tool }: { tool: Tool }) {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const steps = scanSteps[tool.id as string] || scanSteps.network;
  const results = tool.id === "network" ? networkResults : securityResults;

  // Simulate scanning process
  useEffect(() => {
    if (isScanning && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 800); // 800ms per step
      return () => clearTimeout(timer);
    } else if (isScanning && currentStep >= steps.length) {
      const finishTimer = setTimeout(() => {
        setIsScanning(false);
        setSubmitted(true);
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [isScanning, currentStep, steps.length]);

  const handleStartScan = () => {
    setIsStarted(true);
    setIsScanning(true);
    setCurrentStep(0);
  };

  const reset = () => {
    setSubmitted(false);
    setIsStarted(false);
    setIsScanning(false);
    setCurrentStep(0);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
        {/* Constant Header */}
        <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#5C2882] rounded-lg flex items-center justify-center text-white">
              {tool.icon}
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#3B4041]">
                {tool.id === "network"
                  ? "Network Infrastructure Assessment"
                  : "Security Posture Review"}
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                {tool.id === "network"
                  ? "Identify gaps, risks, and optimisation opportunities"
                  : "Endpoint, network, cloud, and compliance evaluation"}
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {!isStarted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#5C2882] mb-6">
                {tool.icon}
              </div>
              <h2 className="text-xl font-extrabold text-[#3B4041] mb-4 uppercase tracking-tight">
                {tool.id === "network"
                  ? "NETWORK ASSESSMENT TOOL"
                  : "SECURITY POSTURE REVIEW"}
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
                {tool.id === "network"
                  ? "This tool scans your network infrastructure to identify gaps, risks, and optimisation opportunities. Click below to run a sample assessment."
                  : "Evaluate your security posture across endpoints, identity, network, cloud, and data protection. Click below to run a sample review."}
              </p>
              <button
                onClick={handleStartScan}
                className="flex items-center gap-3 px-8 py-3.5 bg-[#5C2882] text-white text-xs font-bold rounded-xl hover:bg-[#4C1D95] transition-all duration-300 shadow-lg shadow-[#5C2882]/20"
              >
                {tool.icon}{" "}
                {tool.id === "network"
                  ? "Run Sample Assessment"
                  : "Run Sample Review"}
              </button>
            </div>
          ) : isScanning ? (
            <div className="flex-1 flex flex-col items-center justify-center py-16 px-8">
              <div className="flex items-center gap-4 mb-10 w-full max-w-sm">
                <div className="w-10 h-10 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#5C2882] shadow-sm">
                  {tool.icon}
                </div>
                <div className="text-left">
                  <h3 className="text-[15px] font-bold text-[#3B4041]">Assessment in Progress</h3>
                  <p className="text-xs text-slate-500">Scanning infrastructure...</p>
                </div>
              </div>
              <div className="w-full max-w-sm flex flex-col gap-3">
                {steps.map((step, idx) => {
                  const isComplete = idx < currentStep;
                  const isCurrent = idx === currentStep;
                  const isPending = idx > currentStep;

                  return (
                    <div key={idx} className={`flex items-center gap-3 text-sm transition-all duration-300 ${isPending ? 'opacity-20' : 'opacity-100'}`}>
                      {isComplete && <CheckCircle2 size={16} className="text-[#5C2882]" />}
                      {isCurrent && <Loader2 size={16} className="text-[#5C2882] animate-spin" />}
                      {isPending && <Circle size={16} className="text-slate-300" />}
                      <span className={`${isCurrent || isComplete ? 'text-[#3B4041] font-medium' : 'text-slate-500'}`}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : submitted ? (
            <div className="flex-1 flex flex-col p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {results.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center">
                    <div className={`text-3xl font-extrabold mb-1 ${stat.numberColor}`}>{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Findings & Recommendations */}
              <h3 className="text-sm font-bold text-[#3B4041] mb-4">Findings & Recommendations</h3>
              <div className="space-y-3 mb-8">
                {results.findings.map((f, idx) => (
                  <div key={idx} className={`border rounded-xl p-5 ${f.bg} ${f.border}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${f.pillBg}`}>
                        {f.level}
                      </span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${f.text}`}>{f.category}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#3B4041] mb-1">{f.title}</h4>
                    <p className="text-xs text-slate-600 font-medium">{f.rec}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={reset}
                  className="px-6 py-3 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Run Again
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="flex items-center gap-2 px-6 py-3 bg-[#5C2882] text-white text-xs font-bold rounded-xl hover:bg-[#4C1D95] transition-all shadow-lg shadow-[#5C2882]/20"
                >
                  Discuss Findings <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-50 bg-[#F9FAFB] mt-auto">
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center">
            {tool.id === "network"
              ? "Sample assessment with representative findings. Production tool connects to live infrastructure via API."
              : "Sample review with representative findings. Production tool integrates with your security stack via API."}
          </p>
        </div>
      </div>
    </div>
  );
}
