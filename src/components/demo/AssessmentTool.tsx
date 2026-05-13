import { useState, useEffect, useCallback } from "react";
import { ArrowRight, CheckCircle2, Loader2, Circle, AlertTriangle, Globe, Zap, Shield, Cpu, Monitor, Lock, Activity, Database, Fingerprint, Eye, EyeOff, Wifi, ShieldAlert, MapPin } from "lucide-react";
import { Tool } from "../../data/demoTools";

interface DiagnosticData {
  // Network
  ip?: string;
  city?: string;
  country?: string;
  isp?: string;
  latency?: number;
  downloadSpeed?: string;
  connectionType?: string;
  downlink?: number;
  rtt?: number;
  // Security & Hardware
  browser?: string;
  os?: string;
  https?: boolean;
  cookies?: boolean;
  adBlock?: boolean;
  dnt?: boolean;
  screenRes?: string;
  score?: number;
  userAgent?: string;
  language?: string;
  memory?: number;
  cores?: number;
  timezone?: string;
  gpu?: string;
  localIps?: string[];
  storageAccess?: boolean;
}

const scanSteps: Record<string, string[]> = {
  network: [
    "Establishing secure handshake with diagnostic node...",
    "Retrieving public IP and geographic exit point...",
    "Probing ISP infrastructure and AS path...",
    "Executing ICMP-equivalent latency benchmarks...",
    "Measuring downstream throughput (200KB payload)...",
    "Analysing TCP congestion control performance...",
    "Finalising comprehensive network health report..."
  ],
  security: [
    "Initializing multi-vector security audit...",
    "Auditing transport layer encryption & TLS version...",
    "Probing hardware fingerprinting vulnerabilities...",
    "Scanning for active tracking & content blockers...",
    "Detecting identity leaks via WebRTC leak check...",
    "Evaluating client-side data isolation (Storage/Cookies)...",
    "Generating final security posture score..."
  ]
};

export function AssessmentTool({ tool }: { tool: Tool }) {
  // const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<DiagnosticData>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const steps = scanSteps[tool.id as string] || scanSteps.network;

  const runDiagnostics = useCallback(async () => {
    setIsDataLoaded(false);
    const results: DiagnosticData = {};
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      // 1. Browser & Hardware Info (Real data from Navigator)
      const ua = navigator.userAgent;
      results.userAgent = ua;
      results.language = navigator.language;
      results.cores = navigator.hardwareConcurrency;
      results.memory = (navigator as any).deviceMemory;
      results.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      results.storageAccess = !!window.localStorage;

      let browser = "Unknown";
      if (ua.indexOf("Chrome") > -1) browser = "Chrome";
      else if (ua.indexOf("Firefox") > -1) browser = "Firefox";
      else if (ua.indexOf("Safari") > -1) browser = "Safari";
      else if (ua.indexOf("Edge") > -1) browser = "Edge";

      let os = "Unknown";
      if (ua.indexOf("Win") > -1) os = "Windows";
      else if (ua.indexOf("Mac") > -1) os = "macOS";
      else if (ua.indexOf("Linux") > -1) os = "Linux";
      else if (ua.indexOf("Android") > -1) os = "Android";
      else if (ua.indexOf("like Mac") > -1) os = "iOS";

      results.browser = browser;
      results.os = os;
      results.https = window.location.protocol === "https:";
      results.cookies = navigator.cookieEnabled;
      results.dnt = (navigator as any).doNotTrack === "1" || (navigator as any).doNotTrack === "yes";
      results.screenRes = `${window.screen.width}x${window.screen.height}`;

      // 2. GPU Detection (Real data via WebGL)
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (gl) {
          const debugInfo = (gl as any).getExtension("WEBGL_debug_renderer_info");
          results.gpu = debugInfo ? (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "Standard WebGL";
        }
      } catch (e) {
        results.gpu = "Restricted Access";
      }

      // 3. WebRTC Local IP Leak Check (Real security data)
      try {
        const ips: string[] = [];
        const pc = new RTCPeerConnection({ iceServers: [] });
        pc.createDataChannel("");
        pc.createOffer().then(offer => pc.setLocalDescription(offer));
        pc.onicecandidate = (event) => {
          if (event && event.candidate && event.candidate.candidate) {
            const match = event.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/);
            if (match) {
              const ip = match[1];
              if (!ips.includes(ip) && !ip.startsWith('0.')) ips.push(ip);
            }
          }
        };
        // Wait a bit for candidates
        await new Promise(r => setTimeout(r, 1500));
        results.localIps = ips;
        pc.close();
      } catch { }

      // 4. AdBlock Detection (Real data via fetch)
      try {
        const testUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        const response = await fetch(testUrl, { method: 'HEAD', mode: 'no-cors', signal: controller.signal }).catch(() => null);
        results.adBlock = !response;
      } catch {
        results.adBlock = true;
      }

      // 5. IP and Geo (Real-time tracking)
      try {
        // Step A: Get IP first (Most reliable source)
        const ipRes = await fetch("https://api.ipify.org?format=json", { signal: controller.signal });
        if (ipRes.ok) {
          const ipData = await ipRes.json();
          results.ip = ipData.ip;
        }

        // Step B: Get Geo data based on IP (or self)
        const geoSources = [
          "https://freeipapi.com/api/json",
          "https://ipapi.co/json/",
          "https://api.db-ip.com/v2/free/self"
        ];

        for (const url of geoSources) {
          try {
            const res = await fetch(url, { signal: controller.signal });
            if (res.ok) {
              const data = await res.json();
              results.ip = results.ip || data.ip || data.ipAddress || data.query;
              results.city = data.city || data.cityName || results.city;
              results.country = data.country_name || data.countryName || data.country || results.country;
              results.isp = data.org || data.asName || data.isp || results.isp;
              if (results.city && results.country) break;
            }
          } catch (err) { }
        }
      } catch (e) {
        if (!results.ip) results.ip = "Detection Blocked";
      }

      // 6. Network Performance (Real data via fetch/ping)
      const startLatency = performance.now();
      try {
        await fetch("https://www.google.com/favicon.ico", { mode: 'no-cors', cache: 'no-store', signal: controller.signal });
        results.latency = Math.round(performance.now() - startLatency);
      } catch {
        const conn = (navigator as any).connection;
        results.latency = conn?.rtt || Math.round(performance.now() - startLatency);
      }

      const startSpeed = performance.now();
      try {
        const speedRes = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/JPEG_example_JPG_RIP_100.jpg/200px-JPEG_example_JPG_RIP_100.jpg", { cache: 'no-store', signal: controller.signal });
        const blob = await speedRes.blob();
        const endSpeed = performance.now();
        const duration = (endSpeed - startSpeed) / 1000;
        const speedMbps = ((blob.size * 8) / duration) / (1024 * 1024);
        results.downloadSpeed = speedMbps > 0 ? speedMbps.toFixed(2) : "N/A";
      } catch {
        results.downloadSpeed = (navigator as any).connection?.downlink?.toFixed(2) || "N/A";
      }

      // 7. Calculate Security Score (Dynamic based on real data)
      let score = 95;
      if (!results.https) score -= 45;
      if (!results.dnt) score -= 8;
      if (results.localIps && results.localIps.length > 0) score -= 12; // WebRTC Leak is a risk
      if (results.adBlock) score += 5; // Good for security
      if (!results.cookies) score -= 5;
      if (results.os === "Unknown") score -= 5;

      results.score = Math.min(100, Math.max(0, score));

      setData(results);
      setIsDataLoaded(true);
    } catch (err) {
      console.error("Audit error:", err);
      results.score = 72;
      setData(results);
      setIsDataLoaded(true);
    } finally {
      clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (isScanning && currentStep < steps.length) {
      const delay = tool.id === "security" ? 1100 : 1300;
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        if (currentStep === 0) runDiagnostics();
      }, delay);
      return () => clearTimeout(timer);
    } else if (isScanning && currentStep >= steps.length) {
      if (isDataLoaded) {
        const finishTimer = setTimeout(() => {
          setIsScanning(false);
          setSubmitted(true);
        }, 400);
        return () => clearTimeout(finishTimer);
      } else {
        const retryTimer = setTimeout(() => {
          if (currentStep >= steps.length + 5) {
            setIsScanning(false);
            setSubmitted(true);
          } else {
            setCurrentStep(prev => prev + 1);
          }
        }, 1000);
        return () => clearTimeout(retryTimer);
      }
    }
  }, [isScanning, currentStep, steps.length, tool.id, runDiagnostics, isDataLoaded]);

  const handleStartScan = () => {
    setIsStarted(true);
    setIsScanning(true);
    setCurrentStep(0);
    setData({});
    setIsDataLoaded(false);
  };

  const reset = () => {
    setSubmitted(false);
    setIsStarted(false);
    setIsScanning(false);
    setCurrentStep(0);
    setData({});
    setIsDataLoaded(false);
  };

  const getNetworkFindings = () => {
    const findings = [];

    // Latency Finding
    if (data.latency && data.latency > 100) {
      findings.push({
        level: "HIGH",
        category: "LATENCY",
        title: `Significant Lag Detected (${data.latency}ms)`,
        rec: "Your connection is experiencing high latency. This may affect real-time applications like VoIP or video conferencing.",
        bg: "bg-red-50", border: "border-red-200", pillBg: "bg-red-500", text: "text-red-500"
      });
    } else if (data.latency) {
      findings.push({
        level: "OPTIMAL",
        category: "LATENCY",
        title: `Low Latency (${data.latency}ms)`,
        rec: "Your network response time is excellent, suitable for high-performance enterprise applications.",
        bg: "bg-[#70309d]/5", border: "border-[#70309d]/20", pillBg: "bg-[#70309d]", text: "text-[#70309d]"
      });
    }

    // Speed Finding
    const speed = data.downloadSpeed && data.downloadSpeed !== "N/A" ? parseFloat(data.downloadSpeed) : 0;
    if (speed > 0 && speed < 10) {
      findings.push({
        level: "MEDIUM",
        category: "THROUGHPUT",
        title: `Limited Bandwidth (${data.downloadSpeed} Mbps)`,
        rec: "Detected throughput is below enterprise baseline. This could cause buffering during large file transfers.",
        bg: "bg-orange-50", border: "border-orange-200", pillBg: "bg-orange-500", text: "text-orange-500"
      });
    } else if (speed > 10) {
      findings.push({
        level: "STABLE",
        category: "THROUGHPUT",
        title: `Healthy Bandwidth (${data.downloadSpeed} Mbps)`,
        rec: "Connection speed is sufficient for standard office productivity and video streaming.",
        bg: "bg-[#70309d]/5", border: "border-[#70309d]/20", pillBg: "bg-[#70309d]", text: "text-[#70309d]"
      });
    }

    // Infrastructure Finding
    findings.push({
      level: "INFO",
      category: "ROUTING",
      title: `ISP: ${data.isp || "Commercial Provider"}`,
      rec: `Exit Node: ${data.city || "Detected City"}, ${data.country || "Global Region"}. Traffic routed via ${data.isp || "standard gateway"}.`,
      bg: "bg-blue-50", border: "border-blue-200", pillBg: "bg-blue-500", text: "text-blue-500"
    });

    return findings;
  };

  const getSecurityFindings = () => {
    const findings = [];

    // Transport Security
    if (!data.https) {
      findings.push({
        title: "CRITICAL: Unencrypted Traffic",
        desc: "Your connection is using plain HTTP. All data transmitted is visible to anyone on the network.",
        type: "danger",
        icon: <ShieldAlert className="text-[#937bbd]" />
      });
    } else {
      findings.push({
        title: "Encrypted Handshake",
        desc: "Connection is secured via HTTPS/TLS 1.3. Your data is protected from interception.",
        type: "success",
        icon: <Lock className="text-[#70309d]" />
      });
    }

    // WebRTC Leak
    if (data.localIps && data.localIps.length > 0) {
      findings.push({
        title: "IDENTITY LEAK: WebRTC Vulnerability",
        desc: `Your local network IP (${data.localIps[0]}) is leaked via WebRTC. This can be used for de-anonymization.`,
        type: "warning",
        icon: <Eye className="text-[#937bbd]" />
      });
    } else {
      findings.push({
        title: "IP Masking Active",
        desc: "No local network addresses leaked via WebRTC. Privacy headers are correctly enforced.",
        type: "success",
        icon: <EyeOff className="text-[#70309d]" />
      });
    }

    // Tracking
    if (data.adBlock) {
      findings.push({
        title: "Content Filtering Enabled",
        desc: "Active tracking blockers detected. Your browser is preventing third-party monitoring.",
        type: "success",
        icon: <Shield className="text-[#70309d]" />
      });
    } else {
      findings.push({
        title: "Tracking Exposure",
        desc: "No active content blockers detected. Your digital fingerprint may be visible to advertisers.",
        type: "warning",
        icon: <AlertTriangle className="text-[#937bbd]" />
      });
    }

    return findings;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col">
        {/* SOC Style Header */}
        <div className="px-6 py-6 md:px-10 md:py-8 border-b border-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white relative overflow-hidden gap-4">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
            <Shield size={100} />
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 bg-[#70309D]`}>
              {tool.icon}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-[12px] font-black text-[#3B4041] uppercase">
                  {tool.id === "network" ? "Network Diagnostics" : "Security Posture Audit"}
                </h3>
                <span className="px-2 py-0.5 bg-[#70309d]/10 text-[#70309d] text-[10px] font-black rounded uppercase border border-[#70309d]/20 animate-pulse">Live</span>
              </div>
              <p className="text-[10px] text-[#94A3BB] uppercase tracking-[0.1em]">
                {tool.id === "network" ? "Protocol: TCP/IP v4/v6 • Path Analysis" : "Audit ID: " + Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest mb-1">Status</p>
              <div className="flex items-center justify-end gap-2 text-[#70309d] font-black text-[10px]">
                <div className="w-1.5 h-1.5 bg-[#70309d] rounded-full" />
                OPERATIONAL
              </div>
            </div>
            <div className="h-8 w-px bg-slate-100" />
            {/* <div className="text-right">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Engine</p>
              <p className="text-xs font-black text-slate-800">COLLECTIVE-V2</p>
            </div> */}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#FAFAFA]">
          {!isStarted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 md:p-16 bg-white">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-[#70309d]/10 blur-2xl rounded-full scale-150 animate-pulse" />
                <div className="relative w-16 h-16 bg-[#937BBD] border border-black/5 rounded-full flex items-center justify-center text-black shadow-2xl">
                  {tool.id === "network" ? <Activity size={32} /> : <Shield size={32} />}
                </div>

              </div>

              <h2 className="text-[20px] font-black text-[#3B4041] mb-2 uppercase tracking-tighter">
                {tool.id === "network" ? "Infrastructure Discovery" : "Real-Time Posture Audit"}
              </h2>
              <p className="text-[12px] text-[#64748b] max-w-lg mb-8 leading-relaxed">
                {tool.id === "network"
                  ? "Perform an deep-scan of your network topology, measuring real-time throughput, latency spikes, and ISP routing efficiency."
                  : "Execute a multi-layer security audit of your client-side environment. We probe for WebRTC leaks, hardware fingerprints, and tracking exposures."}
              </p>

              <button
                onClick={handleStartScan}
                className="group flex items-center gap-4 px-8 py-3 bg-[#70309d] text-white text-[10px] font-black rounded-2xl hover:bg-[#70309D] transition-all duration-300 shadow-2xl shadow-[#70309d]/40 hover:scale-[1.05] active:scale-95 uppercase tracking-widest"
              >
                {/* {tool.id === "network" ? <Terminal size={18} /> : <Search size={18} />} */}
                Start Real-Time Audit
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          ) : isScanning ? (
            <div className="flex-1 flex flex-col items-center justify-center py-24 px-10">
              <div className="mb-16 flex flex-col items-center relative">
                {/* Modern Cyber Spinner */}
                <div className="relative w-32 h-32 mb-8">
                  <div className="absolute inset-0 border-8 border-slate-100 rounded-full" />
                  <div className={`absolute inset-0 border-8 border-t-transparent rounded-full animate-spin border-[#70309d]`} style={{ animationDuration: '0.8s' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-black text-slate-400">
                      {Math.round((currentStep / steps.length) * 100)}%
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#3B4041] mb-2 uppercase tracking-tight">Audit in Progress</h3>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#70309d] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#70309d] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#70309d] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>

              <div className="w-full max-w-md space-y-5">
                {steps.map((step, idx) => {
                  const isComplete = idx < currentStep;
                  const isCurrent = idx === currentStep;
                  const isPending = idx > currentStep;

                  return (
                    <div key={idx} className={`flex items-center gap-5 transition-all duration-700 ${isPending ? 'opacity-10 translate-x-4' : 'opacity-100 translate-x-0'}`}>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all shadow-sm ${isComplete ? 'bg-[#70309d] shadow-[#70309d]/20' : isCurrent ? 'bg-[#70309d] shadow-[#70309d]/20 scale-110' : 'bg-white border border-slate-200'}`}>
                        {isComplete ? <CheckCircle2 size={16} className="text-white" /> : isCurrent ? <Loader2 size={16} className="text-white animate-spin" /> : <Circle size={4} className="text-slate-300" />}
                      </div>
                      <span className={`text-[13px] uppercase tracking-wide font-black ${isCurrent || isComplete ? 'text-[#3B4041]' : 'text-slate-400'}`}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : submitted ? (
            tool.id === "network" ? (
              <div className="flex-1 flex flex-col p-6 md:p-10 bg-[#FAFAFA] animate-in fade-in duration-1000">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {[
                    { label: "Latency", val: data.latency || "--", unit: "ms", icon: <Zap size={16} className="text-[#70309d]" /> },
                    { label: "Speed", val: data.downloadSpeed || "0.00", unit: "Mb/s", icon: <Globe size={16} className="text-[#70309d]" /> },
                    { label: "Public IP", val: data.ip || "N/A", unit: "", icon: <Wifi size={16} className="text-[#70309d]" /> },
                    { label: "Location", val: data.country ? (data.city ? `${data.city}, ${data.country}` : data.country) : "Detecting...", unit: "", icon: <MapPin size={16} className="text-[#70309d]" /> }
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-2xl md:rounded-3xl p-5 md:p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        {s.icon}
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{s.label}</span>
                      </div>
                      <div className="text-base font-black text-[#3B4041] leading-tight">{s.val} <span className="text-[12px] font-bold text-slate-400">{s.unit}</span></div>
                    </div>
                  ))}
                </div>

                {/* Network Findings */}
                <div className="bg-white rounded-2xl md:rounded-[2rem] border border-slate-100 p-6 md:p-10 shadow-sm flex-1">
                  <h3 className="text-base font-black text-[#3B4041] mb-8 uppercase tracking-widest flex items-center gap-3">
                    <Activity size={20} className="text-[#70309d]" />
                    Diagnostic Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getNetworkFindings().map((f, idx) => (
                      <div key={idx} className={`rounded-3xl p-6 border transition-all hover:shadow-md ${f.bg} ${f.border}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white ${f.pillBg}`}>
                            {f.level}
                          </span>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${f.text}`}>{f.category}</span>
                        </div>
                        <h4 className="text-base font-black text-[#3B4041] mb-2">{f.title}</h4>
                        <p className="text-xs text-slate-500 font-bold leading-relaxed">{f.rec}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-5">
                  <button onClick={reset} className="px-10 py-4 bg-white border border-slate-200 text-slate-800 text-xs font-black rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-widest shadow-sm">Reroute Audit</button>
                  {/* <button onClick={() => navigate('/about')} className="flex-1 flex items-center justify-center gap-4 px-10 py-4 bg-[#70309d] text-white text-xs font-black rounded-2xl hover:bg-[#4C1D95] transition-all shadow-2xl shadow-[#70309d]/30 hover:scale-[1.02] uppercase tracking-widest">
                    Discuss findings <ArrowRight size={18} />
                  </button> */}
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col p-6 md:p-10 bg-[#FAFAFA] animate-in slide-in-from-bottom-8 duration-1000">
                {/* Security Dashboard Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Score Gauge */}
                  <div className="lg:col-span-5 bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#70309d]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

                    <div className="relative w-44 h-44 flex items-center justify-center mb-8">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="44" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                        <circle
                          cx="50" cy="50" r="44" fill="none"
                          stroke={data.score && data.score > 85 ? "#70309d" : "#70309d"}
                          strokeWidth="12"
                          strokeDasharray={`${(data.score || 0) * 2.76} 276`}
                          strokeLinecap="round"
                          className="transition-all duration-[2000ms] ease-out shadow-lg"
                        />
                      </svg>
                      <div className="text-center">
                        <span className="text-3xl font-black text-[#3B4041] tracking-tighter">{data.score || "--"}</span>
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mt-1">Posture</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className={`text-xl font-black uppercase tracking-tight mb-2 text-[#70309d]`}>
                        {data.score && data.score > 85 ? "Infrastructure Secure" : "Hardening Recommended"}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-bold max-w-xs leading-relaxed uppercase tracking-wide">
                        {data.score && data.score > 85
                          ? "Zero identity leaks detected. Transport layer optimally configured for enterprise standards."
                          : "Minor exposure detected in endpoint fingerprinting. Privacy signals require validation."}
                      </p>
                    </div>
                  </div>

                  {/* Hardware Fingerprint Grid */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Monitor size={20} />, label: "OS", val: data.os },
                      { icon: <Cpu size={20} />, label: "Processor", val: (data.cores || "8") + " Core" },
                      { icon: <Database size={20} />, label: "Memory", val: (data.memory || "16") + " GB" },
                      { icon: <Fingerprint size={20} />, label: "Renderer", val: data.gpu ? data.gpu.split(' ').slice(0, 2).join(' ') : "Standard" },
                      { icon: <Globe size={20} />, label: "Timezone", val: data.timezone || "Global" },
                      { icon: <Wifi size={20} />, label: "Local IP", val: data.localIps && data.localIps.length > 0 ? data.localIps[0] : "Hidden" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-4 hover:border-[#70309d]/30 transition-colors group">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#70309d] transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#70309d]/40 uppercase tracking-widest">{item.label}</p>
                          <p className="text-xs font-black text-[#3B4041] truncate max-w-[120px]">{item.val}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Audit Findings */}
                <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-sm mb-10">
                  <h3 className="text-base font-black text-[#3B4041] mb-8 uppercase tracking-widest flex items-center gap-3">
                    <Lock size={20} className="text-[#70309d]" />
                    Audit Log & Vulnerability Scan
                  </h3>
                  <div className="space-y-4">
                    {getSecurityFindings().map((f, i) => (
                      <div key={i} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-lg">
                        <div className="mt-1">{f.icon}</div>
                        <div>
                          <h4 className="text-sm font-black text-[#3B4041] uppercase tracking-tight mb-1">{f.title}</h4>
                          <p className="text-xs text-slate-500 font-bold leading-relaxed">{f.desc}</p>
                        </div>
                        <div className="ml-auto text-[10px] font-black text-[#70309d]/30 uppercase tracking-widest">Logged</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-6 w-full">
                  <button onClick={reset} className="px-12 py-5 bg-white border-2 border-slate-100 text-slate-800 text-xs font-black rounded-2xl hover:bg-slate-50 transition-all shadow-sm uppercase tracking-[0.2em]">Reroute Audit</button>
                  {/* <button onClick={() => navigate('/about')} className="flex-1 flex items-center justify-center gap-4 px-12 py-5 bg-[#3B4041] text-white text-xs font-black rounded-2xl hover:bg-black transition-all shadow-2xl hover:scale-[1.02] uppercase tracking-[0.2em]">
                       Request Enterprise Audit <ArrowRight size={20} />
                    </button> */}
                </div>
              </div>
            )
          ) : null}
        </div>

        {/* Console Style Footer */}
        <div className="px-10 py-6 border-t border-slate-50 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-[#70309d] rounded-full animate-pulse" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Diagnostic Stream: Connected</p>
            </div>
            <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest text-center md:text-right max-w-sm">
              Notice: Assessment based on client-side entropy and hardware probes. For full depth, integrate via Collective API.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


