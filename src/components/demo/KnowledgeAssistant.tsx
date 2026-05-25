// import { useState, useRef, useEffect } from "react";
// import { Bot, Send, CheckCircle2, ChevronRight, Search, MessageSquare, Lightbulb } from "lucide-react";
// import { ChatMessage, getBotResponse } from "../../config/knowledgeBase";
// import { Tool } from "../../data/demoTools";

// export function KnowledgeAssistant({ tool }: { tool: Tool }) {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [input, setInput] = useState("");
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth"
//       });
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const send = async (text: string) => {
//     if (!text.trim()) return;
//     setMessages((m) => [...m, { role: "user", text }]);
//     setInput("");

//     const localResponse = getBotResponse(text);
    
//     if (localResponse) {
//       // Simulate small AI delay for local responses
//       setTimeout(() => {
//         setMessages((m) => [...m, localResponse]);
//       }, 400);
//     } else {
//       // Hit external API
//       try {
//         const res = await fetch("https://collective-bot.omnisuiteai.com/api/chat", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({ message: text, sessionId: null })
//         });
//         const data = await res.json();
//         setMessages((m) => [...m, { role: "ai", text: data.reply || "Sorry, I couldn't process your request." }]);
//       } catch (err) {
//         setMessages((m) => [...m, { role: "ai", text: "Sorry, I am having trouble connecting to the server right now." }]);
//       }
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
//         {/* Chat Header */}
//         <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 bg-[#70309d] rounded-lg flex items-center justify-center text-white">
//               <MessageSquare size={20} />
//             </div>
//             <div>
//               <h3 className="text-sm font-bold text-[#3B4041]">
//                 Collective IP Knowledge Assistant
//               </h3>
//               <p className="text-[10px] text-slate-400 font-medium">
//                 Ask about our capabilities, case studies, and approach
//               </p>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] text-brand-300 text-xs font-medium">
//             <span className="w-2 h-2 bg-brand-600 rounded-full" />
//             Online
//           </button>
//         </div>

//         {/* Chat Area */}
//         <div ref={chatContainerRef} className="flex-1 p-4 md:p-8 overflow-y-auto">
//           {messages.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-center">
//               <div className="w-16 h-16 bg-[#937bbd] rounded-full flex items-center justify-center text-[#70309d] mb-6">
//                 <Bot size={32} />
//               </div>
//               <h2 className="text-xl font-extrabold text-[#3B4041] mb-2 uppercase tracking-tight">
//                 How can I help you today?
//               </h2>
//               <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
//                 Ask about our capabilities, delivery approach, or how we could
//                 help with your specific requirements.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
//                 {tool.sampleQuestions?.map((q, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => send(q)}
//                     className="p-4 bg-[#efefef] border border-slate-100 rounded-xl text-left text-[11px] font-bold text-slate-500 hover:border-[#8B5CF6] hover:bg-white hover:shadow-md transition-all duration-300"
//                   >
//                     {q}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {messages.map((m, i) => (
//                 <div
//                   key={i}
//                   className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div
//                     className={`flex gap-2 md:gap-3 w-full max-w-full md:max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}
//                   >
//                     <div
//                       className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${m.role === "user"
//                         ? "bg-[#937bbd] text-[#efefef]"
//                         : "bg-[#937bbd] text-[#efefef]"
//                         }`}
//                     >
//                       {m.role === "user" ? "U" : <Bot size={14} />}
//                     </div>
//                     <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
//                       {m.text && (
//                         <div
//                           className={`p-4 rounded-2xl text-[13px] leading-relaxed font-medium inline-block w-fit ${m.role === "user"
//                             ? "bg-[#70309d] text-white rounded-tr-none"
//                             : "bg-[#efefef] text-slate-600 border border-slate-100 rounded-tl-none"
//                             }`}
//                         >
//                           {m.text.split("**").map((part, index) => 
//                             index % 2 === 1 ? <strong key={index} className={`font-bold ${m.role === "user" ? "text-white" : "text-[#3B4041]"}`}>{part}</strong> : part
//                           )}
//                         </div>
//                       )}

//                       {m.cards?.map((card, idx) => (
//                         card.type === "approach" ? (
//                           <div ke y={idx} className="w-full bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5 shadow-sm">
//                             <div className="flex items-center gap-2 mb-3">
//                               <Lightbulb size={16} className="text-[#D97706]" />
//                               <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-widest">{card.tag}</span>
//                             </div>
//                             <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
//                             <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
//                             {card.bullets && (
//                               <ul className="space-y-2 mt-2">
//                                 {card.bullets.map((b, bIdx) => (
//                                   <li key={bIdx} className="flex items-start gap-2.5">
//                                     <div className="w-1 h-1 rounded-full bg-[#D97706] mt-2 flex-shrink-0" />
//                                     <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         ) : (
//                           <div key={idx} className="w-full bg-[#fdfaff] border border-[#E9D5FF] rounded-xl p-5 shadow-sm">
//                             <div className="flex items-center gap-2 mb-3">
//                               {card.type === "capability" && <CheckCircle2 size={16} className="text-brand-300" />}
//                               {card.type === "case-study" && <ChevronRight size={16} className="text-brand-300" />}
//                               {card.type === "discovery" && <Search size={16} className="text-brand-300" />}
//                               <span className="text-[11px] font-bold text-brand-300 uppercase tracking-widest">{card.tag}</span>
//                             </div>

//                             <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
//                             <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>

//                             {card.bullets && (
//                               <ul className="space-y-2 mt-2">
//                                 {card.bullets.map((b, bIdx) => (
//                                   <li key={bIdx} className="flex items-start gap-2.5">
//                                     <div className="w-1 h-1 rounded-full bg-brand-300 mt-2 flex-shrink-0" />
//                                     <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}

//                             {card.stat && (
//                               <div className="mt-4 pt-4 border-t border-[#E9D5FF]/50 flex items-center gap-3">
//                                 <span className="text-2xl font-extrabold text-[#70309d]">{card.stat}</span>
//                                 <span className="text-[13px] font-medium text-slate-500">{card.statDesc}</span>
//                               </div>
//                             )}
//                           </div>
//                         )
//                       ))}

//                       {m.options && (
//                         <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mt-2 w-full md:w-auto">
//                           {m.options.map((opt, idx) => (
//                             <button
//                               key={idx}
//                               onClick={() => send(opt)}
//                               className="px-4 py-3 md:py-2.5 bg-white border border-slate-200 rounded-xl md:rounded-full text-[12px] font-medium text-slate-600 hover:border-[#8B5CF6] hover:text-brand-300 transition-colors text-left shadow-sm w-full md:w-auto"
//                             >
//                               {opt}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Chat Input */}
//         <div className="p-4 md:p-6 border-t border-slate-50 bg-[#efefef]">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               send(input);
//             }}
//             className="relative flex items-center"
//           >
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={tool.placeholder}
//               className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-xs font-medium focus:outline-none focus:border-[#8B5CF6] transition-all shadow-sm pr-14"
//             />
//             <button
//               type="submit"
//               className="absolute right-2 w-10 h-10 bg-brand-300 text-white rounded-lg flex items-center justify-center hover:bg-[#5a2680] transition-colors shadow-lg shadow-[#8B5CF6]/20"
//             >
//               <Send size={18} />
//             </button>
//           </form>
//           <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center mt-6">
//             Demonstration of the Digital Front Door concept. In production,
//             trained on the full company knowledge base.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState, useRef, useEffect } from "react";
// import {
//   Bot,
//   Send,
//   CheckCircle2,
//   ChevronRight,
//   Search,
//   MessageSquare,
//   Lightbulb,
//   Shield,
//   FileText,
//   Sparkles,
// } from "lucide-react";
// import { ChatMessage, getBotResponse } from "../../config/knowledgeBase";
// import { Tool } from "../../data/demoTools";

// export function KnowledgeAssistant({ tool }: { tool: Tool }) {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTo({
//         top: chatContainerRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const send = async (text: string) => {
//     if (!text.trim()) return;
//     setMessages((m) => [...m, { role: "user", text }]);
//     setInput("");
//     setIsTyping(true);

//     const localResponse = getBotResponse(text);

//     if (localResponse) {
//       setTimeout(() => {
//         setIsTyping(false);
//         setMessages((m) => [...m, localResponse]);
//       }, 520);
//     } else {
//       try {
//         const res = await fetch("https://collective-bot.omnisuiteai.com/api/chat", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: text, sessionId: null }),
//         });
//         const data = await res.json();
//         setIsTyping(false);
//         setMessages((m) => [
//           ...m,
//           { role: "ai", text: data.reply || "Sorry, I couldn't process your request." },
//         ]);
//       } catch {
//         setIsTyping(false);
//         setMessages((m) => [
//           ...m,
//           { role: "ai", text: "Sorry, I am having trouble connecting to the server right now." },
//         ]);
//       }
//     }
//   };

//   const sampleIcons = [Shield, FileText, Search, Sparkles];

//   return (
//     <div className="max-w-4xl mx-auto">
//       <div className="rounded-2xl overflow-hidden flex flex-col min-h-[620px] border border-purple-100 shadow-2xl shadow-purple-200/40">

//         {/* ── Header ── */}
//         <div
//           className="px-5 py-4 flex items-center justify-between flex-shrink-0"
//           style={{ background: "linear-gradient(135deg, #70309d 0%, #9b59c5 100%)" }}
//         >
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white border border-white/25 bg-white/15">
//               <MessageSquare size={20} />
//             </div>
//             <div>
//               <h3 className="text-[13px] font-semibold text-white">
//                 Collective IP Knowledge Assistant
//               </h3>
//               <p className="text-[11px] text-white/70 mt-0.5">
//                 Ask about capabilities, case studies, and approach
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] text-white border border-white/25 bg-white/15">
//             <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
//             Online
//           </div>
//         </div>

//         {/* ── Chat area ── */}
//         <div
//           ref={chatContainerRef}
//           className="flex-1 overflow-y-auto p-5 bg-white"
//           style={{ scrollbarWidth: "thin", scrollbarColor: "#d8b4fe transparent" }}
//         >
//           {messages.length === 0 ? (
//             /* ── Empty state ── */
//             <div className="flex flex-col items-center text-center pt-4">
//               <div
//                 className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-4"
//                 style={{ background: "linear-gradient(135deg, #9b59c5, #c084fc)", boxShadow: "0 8px 24px rgba(112,48,157,0.28)" }}
//               >
//                 <Bot size={30} />
//               </div>
//               <h2 className="text-[15px] font-semibold text-[#3B4041] mb-2">
//                 How can I help you today?
//               </h2>
//               <p className="text-[12px] text-slate-500 max-w-xs mb-6 leading-relaxed">
//                 Ask about our capabilities, delivery approach, or how we could
//                 help with your specific requirements.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 w-full max-w-2xl">
//                 {tool.sampleQuestions?.map((q, idx) => {
//                   const Icon = sampleIcons[idx % sampleIcons.length];
//                   return (
//                     <button
//                       key={idx}
//                       onClick={() => send(q)}
//                       className="flex items-start gap-2.5 p-3.5 bg-slate-50 border border-purple-100 rounded-xl text-left text-[11px] text-slate-500 hover:border-purple-400 hover:bg-white hover:text-purple-700 transition-all duration-200 group"
//                     >
//                       <Icon size={14} className="mt-0.5 text-purple-300 group-hover:text-purple-500 flex-shrink-0" />
//                       {q}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ) : (
//             /* ── Messages ── */
//             <div className="flex flex-col gap-4">
//               {messages.map((m, i) => (
//                 <div
//                   key={i}
//                   className={`flex gap-2.5 items-start ${m.role === "user" ? "flex-row-reverse" : ""}`}
//                   style={{ animation: "fadeUp 0.25s ease forwards" }}
//                 >
//                   {/* Avatar */}
//                   <div
//                     className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs"
//                     style={
//                       m.role === "user"
//                         ? { background: "#70309d" }
//                         : { background: "linear-gradient(135deg,#9b59c5,#c084fc)" }
//                     }
//                   >
//                     {m.role === "user" ? "U" : <Bot size={13} />}
//                   </div>

//                   {/* Content */}
//                   <div className={`flex flex-col gap-2.5 max-w-[82%] ${m.role === "user" ? "items-end" : "items-start"}`}>
//                     {m.text && (
//                       <div
//                         className={`px-4 py-2.5 rounded-2xl text-[12px] leading-relaxed inline-block ${
//                           m.role === "user"
//                             ? "text-white rounded-tr-sm"
//                             : "bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-sm"
//                         }`}
//                         style={
//                           m.role === "user"
//                             ? { background: "linear-gradient(135deg,#70309d,#9b59c5)" }
//                             : {}
//                         }
//                       >
//                         {m.text.split("**").map((part, index) =>
//                           index % 2 === 1 ? (
//                             <strong
//                               key={index}
//                               className={`font-semibold ${m.role === "user" ? "text-white" : "text-[#3B4041]"}`}
//                             >
//                               {part}
//                             </strong>
//                           ) : (
//                             part
//                           )
//                         )}
//                       </div>
//                     )}

//                     {/* Cards */}
//                     {m.cards?.map((card, idx) =>
//                       card.type === "approach" ? (
//                         <div
//                           key={idx}
//                           className="w-full bg-amber-50 border border-amber-200 rounded-xl p-4"
//                         >
//                           <div className="flex items-center gap-2 mb-2">
//                             <Lightbulb size={14} className="text-amber-500" />
//                             <span className="text-[10px] font-semibold text-amber-600 uppercase tracking-widest">
//                               {card.tag}
//                             </span>
//                           </div>
//                           <h4 className="text-[13px] font-semibold text-[#3B4041] mb-1.5 leading-snug">
//                             {card.title}
//                           </h4>
//                           <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{card.desc}</p>
//                           {card.bullets && (
//                             <ul className="flex flex-col gap-1.5">
//                               {card.bullets.map((b, bIdx) => (
//                                 <li key={bIdx} className="flex items-start gap-2">
//                                   <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
//                                   <span className="text-[12px] text-slate-600 leading-relaxed">{b}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       ) : (
//                         <div
//                           key={idx}
//                           className="w-full rounded-xl p-4"
//                           style={{ background: "#faf5ff", border: "0.5px solid #d8b4fe" }}
//                         >
//                           <div className="flex items-center gap-2 mb-2">
//                             {card.type === "capability" && <CheckCircle2 size={14} className="text-purple-500" />}
//                             {card.type === "case-study" && <ChevronRight size={14} className="text-purple-500" />}
//                             {card.type === "discovery" && <Search size={14} className="text-purple-500" />}
//                             <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-widest">
//                               {card.tag}
//                             </span>
//                           </div>
//                           <h4 className="text-[13px] font-semibold text-[#3B4041] mb-1.5 leading-snug">
//                             {card.title}
//                           </h4>
//                           <p className="text-[12px] text-slate-500 leading-relaxed mb-3">{card.desc}</p>
//                           {card.bullets && (
//                             <ul className="flex flex-col gap-1.5">
//                               {card.bullets.map((b, bIdx) => (
//                                 <li key={bIdx} className="flex items-start gap-2">
//                                   <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
//                                   <span className="text-[12px] text-slate-600 leading-relaxed">{b}</span>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                           {card.stat && (
//                             <div className="mt-3 pt-3 border-t border-purple-100 flex items-baseline gap-2">
//                               <span className="text-xl font-semibold text-[#70309d]">{card.stat}</span>
//                               <span className="text-[11px] text-slate-500">{card.statDesc}</span>
//                             </div>
//                           )}
//                         </div>
//                       )
//                     )}

//                     {/* Option pills */}
//                     {m.options && (
//                       <div className="flex flex-wrap gap-1.5 mt-1">
//                         {m.options.map((opt, idx) => (
//                           <button
//                             key={idx}
//                             onClick={() => send(opt)}
//                             className="px-3 py-1.5 bg-white border border-purple-200 rounded-full text-[11px] text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-150"
//                           >
//                             {opt}
//                           </button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}

//               {/* Typing indicator */}
//               {isTyping && (
//                 <div className="flex gap-2.5 items-start" style={{ animation: "fadeUp 0.25s ease forwards" }}>
//                   <div
//                     className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white"
//                     style={{ background: "linear-gradient(135deg,#9b59c5,#c084fc)" }}
//                   >
//                     <Bot size={13} />
//                   </div>
//                   <div className="flex items-center gap-1 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl rounded-tl-sm">
//                     {[0, 1, 2].map((i) => (
//                       <span
//                         key={i}
//                         className="w-1.5 h-1.5 rounded-full bg-purple-400"
//                         style={{ animation: `bounce 1.2s infinite ${i * 0.2}s` }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* ── Input footer ── */}
//         <div className="px-4 py-3 border-t border-purple-100 bg-slate-50 flex-shrink-0">
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && send(input)}
//               placeholder={tool.placeholder ?? "Ask about our capabilities or approach…"}
//               className="w-full bg-white border border-purple-200 rounded-xl px-4 py-3 text-[12px] focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all pr-12"
//             />
//             <button
//               onClick={() => send(input)}
//               className="absolute right-2 w-8 h-8 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-85"
//               style={{ background: "linear-gradient(135deg,#70309d,#9b59c5)" }}
//             >
//               <Send size={15} />
//             </button>
//           </div>
//           <p className="text-[9px] text-slate-400 text-center mt-3 uppercase tracking-widest">
//             Demonstration of the Digital Front Door concept · In production, trained on the full company knowledge base
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(6px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes bounce {
//           0%, 60%, 100% { transform: translateY(0); }
//           30%            { transform: translateY(-5px); }
//         }
//       `}</style>
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import { Bot, Send, CheckCircle2, ChevronRight, Search, MessageSquare, Lightbulb, Sparkles } from "lucide-react";
// import { ChatMessage, getBotResponse } from "../../config/knowledgeBase";
// import { Tool } from "../../data/demoTools";

// export function KnowledgeAssistant({ tool }: { tool: Tool }) {
//   const [messages, setMessages] = useState<ChatMessage[]>([]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const chatContainerRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     chatContainerRef.current?.scrollTo({
//       top: chatContainerRef.current.scrollHeight,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   // Enhanced text renderer for better formatting (numbered lists, paragraphs, bold)
//   const renderMessageText = (text: string) => {
//     if (!text) return null;

//     const paragraphs = text.split(/\n\s*\n/);

//     return paragraphs.map((para, pIndex) => {
//       const lines = para.split('\n');
//       return (
//         <div key={pIndex} className="mb-3 last:mb-0">
//           {lines.map((line, lineIndex) => {
//             const trimmed = line.trim();

//             if (/^\d+\.\s/.test(trimmed)) {
//               return (
//                 <div key={lineIndex} className="flex gap-3 mb-2.5">
//                   <span className="font-semibold text-[#70309d] flex-shrink-0">
//                     {trimmed.match(/^\d+\./)?.[0]}
//                   </span>
//                   <span className="flex-1">
//                     {trimmed.replace(/^\d+\.\s*/, '')}
//                   </span>
//                 </div>
//               );
//             }

//             if (/^[-•]\s/.test(trimmed)) {
//               return (
//                 <div key={lineIndex} className="flex gap-3 mb-2">
//                   <span className="text-[#8B5CF6] mt-1">•</span>
//                   <span className="flex-1">{trimmed.replace(/^[-•]\s*/, '')}</span>
//                 </div>
//               );
//             }

//             return (
//               <p key={lineIndex} className="mb-2 last:mb-0">
//                 {trimmed.split("**").map((part, idx) =>
//                   idx % 2 === 1 ? (
//                     <strong key={idx} className="font-bold">
//                       {part}
//                     </strong>
//                   ) : (
//                     part
//                   )
//                 )}
//               </p>
//             );
//           })}
//         </div>
//       );
//     });
//   };

//   const send = async (text: string) => {
//     if (!text.trim()) return;

//     setMessages((prev) => [...prev, { role: "user", text }]);
//     setInput("");
//     setIsTyping(true);

//     await new Promise((resolve) => setTimeout(resolve, 600));

//     const localResponse = getBotResponse(text);

//     if (localResponse) {
//       setIsTyping(false);
//       setMessages((prev) => [...prev, localResponse]);
//     } else {
//       try {
//         const res = await fetch("https://collective-bot.omnisuiteai.com/api/chat", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ message: text, sessionId: null }),
//         });
//         const data = await res.json();
        
//         setIsTyping(false);
//         setMessages((prev) => [
//           ...prev,
//           { role: "ai", text: data.reply || "Sorry, I couldn't process that request." },
//         ]);
//       } catch (err) {
//         setIsTyping(false);
//         setMessages((prev) => [
//           ...prev,
//           { role: "ai", text: "Sorry, I'm having trouble connecting right now." },
//         ]);
//       }
//     }
//   };

//   return (
//     <div className="max-w-5xl mx-auto">
//       <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden min-h-[640px] flex flex-col">
//         {/* Modern Header */}
//         <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-[#70309d] to-[#8B5CF6] text-white">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
//                 <MessageSquare size={28} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold tracking-tight">Collective IP Knowledge Assistant</h3>
//                 <p className="text-sm opacity-90">Powered by your company knowledge base</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm">
//                 <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
//                 <span className="font-medium">Online</span>
//               </div>
//               <Sparkles className="w-5 h-5 opacity-80" />
//             </div>
//           </div>
//         </div>

//         {/* Chat Area */}
//         <div
//           ref={chatContainerRef}
//           className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#fafafa] space-y-8"
//         >
//           {messages.length === 0 ? (
//             <div className="h-full flex flex-col items-center justify-center text-center px-4">
//               <div className="w-20 h-20 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-purple-500/30">
//                 <Bot size={48} className="text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-[#3B4041] mb-3 tracking-tight">
//                 How can I help you today?
//               </h2>
//               <p className="text-slate-500 max-w-md mb-10">
//                 Ask about our capabilities, delivery approach, or how we could help with your specific requirements.
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
//                 {tool.sampleQuestions?.map((q, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => send(q)}
//                     className="group p-5 bg-white border border-slate-200 hover:border-[#8B5CF6] rounded-2xl text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
//                   >
//                     <div className="flex items-start gap-3">
//                       <div className="mt-1">
//                         <Sparkles className="w-5 h-5 text-[#8B5CF6] group-hover:rotate-12 transition-transform" />
//                       </div>
//                       <span className="text-sm font-medium text-slate-700 leading-snug">{q}</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-7">
//               {messages.map((m, i) => (
//                 <div
//                   key={i}
//                   className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
//                 >
//                   <div className={`flex gap-4 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
//                     {/* Avatar */}
//                     <div
//                       className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
//                         m.role === "user"
//                           ? "bg-[#70309d] text-white"
//                           : "bg-gradient-to-br from-[#70309d] to-[#8B5CF6] text-white"
//                       }`}
//                     >
//                       {m.role === "user" ? "U" : <Bot size={18} />}
//                     </div>

//                     {/* Message Content - Using your original structure */}
//                     <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
//                       {m.text && (
//                         <div
//                           className={`p-4 rounded-2xl text-[15px] leading-relaxed font-medium inline-block w-fit ${
//                             m.role === "user"
//                               ? "bg-[#70309d] text-white rounded-tr-none"
//                               : "bg-white border border-slate-100 rounded-tl-none"
//                           }`}
//                         >
//                           {renderMessageText(m.text)}
//                         </div>
//                       )}

//                       {/* Original Card Rendering */}
//                       {m.cards?.map((card, idx) => (
//                         card.type === "approach" ? (
//                           <div key={idx} className="w-full bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5 shadow-sm">
//                             <div className="flex items-center gap-2 mb-3">
//                               <Lightbulb size={16} className="text-[#D97706]" />
//                               <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-widest">{card.tag}</span>
//                             </div>
//                             <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
//                             <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
//                             {card.bullets && (
//                               <ul className="space-y-2 mt-2">
//                                 {card.bullets.map((b, bIdx) => (
//                                   <li key={bIdx} className="flex items-start gap-2.5">
//                                     <div className="w-1 h-1 rounded-full bg-[#D97706] mt-2 flex-shrink-0" />
//                                     <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         ) : (
//                           <div key={idx} className="w-full bg-[#fdfaff] border border-[#E9D5FF] rounded-xl p-5 shadow-sm">
//                             <div className="flex items-center gap-2 mb-3">
//                               {card.type === "capability" && <CheckCircle2 size={16} className="text-brand-300" />}
//                               {card.type === "case-study" && <ChevronRight size={16} className="text-brand-300" />}
//                               {card.type === "discovery" && <Search size={16} className="text-brand-300" />}
//                               <span className="text-[11px] font-bold text-brand-300 uppercase tracking-widest">{card.tag}</span>
//                             </div>

//                             <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
//                             <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>

//                             {card.bullets && (
//                               <ul className="space-y-2 mt-2">
//                                 {card.bullets.map((b, bIdx) => (
//                                   <li key={bIdx} className="flex items-start gap-2.5">
//                                     <div className="w-1 h-1 rounded-full bg-brand-300 mt-2 flex-shrink-0" />
//                                     <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}

//                             {card.stat && (
//                               <div className="mt-4 pt-4 border-t border-[#E9D5FF]/50 flex items-center gap-3">
//                                 <span className="text-2xl font-extrabold text-[#70309d]">{card.stat}</span>
//                                 <span className="text-[13px] font-medium text-slate-500">{card.statDesc}</span>
//                               </div>
//                             )}
//                           </div>
//                         )
//                       ))}

//                       {/* Original Options Rendering */}
//                       {m.options && (
//                         <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mt-2 w-full md:w-auto">
//                           {m.options.map((opt, idx) => (
//                             <button
//                               key={idx}
//                               onClick={() => send(opt)}
//                               className="px-4 py-3 md:py-2.5 bg-white border border-slate-200 rounded-xl md:rounded-full text-[12px] font-medium text-slate-600 hover:border-[#8B5CF6] hover:text-brand-300 transition-colors text-left shadow-sm w-full md:w-auto"
//                             >
//                               {opt}
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {/* Typing Indicator */}
//               {isTyping && (
//                 <div className="flex items-start gap-4">
//                   <div className="w-9 h-9 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white">
//                     <Bot size={18} />
//                   </div>
//                   <div className="bg-white border border-slate-100 px-6 py-4 rounded-3xl rounded-tl-none flex items-center gap-2">
//                     <div className="flex gap-1">
//                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
//                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
//                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300" />
//                     </div>
//                     <span className="text-slate-500 text-sm">Thinking...</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Modern Input Area */}
//         <div className="p-6 bg-white border-t">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               send(input);
//             }}
//             className="relative"
//           >
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={tool.placeholder || "Ask about our services, capabilities, or case studies..."}
//               className="w-full bg-slate-50 border border-slate-200 focus:border-[#8B5CF6] rounded-3xl px-7 py-5 text-[15px] focus:outline-none transition-all shadow-sm"
//             />
//             <button
//               type="submit"
//               disabled={!input.trim()}
//               className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] disabled:opacity-50 text-white rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
//             >
//               <Send size={20} />
//             </button>
//           </form>

//           <p className="text-center text-[10px] text-slate-400 mt-5 font-medium tracking-widest">
//             DEMO — Trained on Collective IP Knowledge Base
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useRef, useEffect } from "react";
import { Bot, Send, CheckCircle2, ChevronRight, Search, MessageSquare, Lightbulb, Sparkles } from "lucide-react";
import { ChatMessage, getBotResponse } from "../../config/knowledgeBase";
import { Tool } from "../../data/demoTools";

export function KnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Advanced Message Text Renderer
  const renderMessageText = (text: string) => {
    if (!text) return null;

    const paragraphs = text.split(/\n\s*\n/);

    return paragraphs.map((para, pIndex) => {
      const lines = para.split('\n');

      return (
        <div key={pIndex} className="space-y-4">
          {lines.map((line, lineIndex) => {
            const trimmed = line.trim();

            // Main Numbered Section (e.g., "1. **Title:**")
            if (/^\d+\.\s/.test(trimmed)) {
              const content = trimmed.replace(/^\d+\.\s*/, '');
              return (
                <div key={lineIndex} className="mb-4">
                  <div className="font-semibold text-[#70309d] text-[15px] mb-2">
                    {content.split("**").map((part, i) =>
                      i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
                    )}
                  </div>
                </div>
              );
            }

            // Bullet points with possible **bold** inside
            if (/^[-•]\s/.test(trimmed)) {
              const content = trimmed.replace(/^[-•]\s*/, '');
              return (
                <div key={lineIndex} className="flex gap-3 text-[14.5px] leading-relaxed">
                  <span className="text-[#8B5CF6] mt-1.5 flex-shrink-0">•</span>
                  <span>
                    {content.split("**").map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="font-semibold text-[#3B4041]">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </span>
                </div>
              );
            }

            // Regular lines with **bold** support
            return (
              <p key={lineIndex} className="text-[15px] leading-relaxed">
                {trimmed.split("**").map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="font-bold text-[#3B4041]">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>
      );
    });
  };

  const send = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const localResponse = getBotResponse(text);

    if (localResponse) {
      setIsTyping(false);
      setMessages((prev) => [...prev, localResponse]);
    } else {
      try {
        const res = await fetch("https://collective-bot.omnisuiteai.com/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, sessionId: null }),
        });
        const data = await res.json();
        
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: data.reply || "Sorry, I couldn't process that request." },
        ]);
      } catch (err) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: "Sorry, I'm having trouble connecting right now." },
        ]);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden min-h-[640px] flex flex-col">
        {/* Modern Header */}
        <div className="px-8 py-6 border-b border-slate-100 bg-gradient-to-r from-[#70309d] to-[#8B5CF6] text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Collective IP Knowledge Assistant</h3>
                <p className="text-sm opacity-90">Powered by your company knowledge base</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-sm">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="font-medium">Online</span>
              </div>
              <Sparkles className="w-5 h-5 opacity-80" />
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          ref={chatContainerRef}
          className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#fafafa] space-y-8"
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-purple-500/30">
                <Bot size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-[#3B4041] mb-3 tracking-tight">
                How can I help you today?
              </h2>
              <p className="text-slate-500 max-w-md mb-10">
                Ask about our capabilities, delivery approach, or how we could help with your specific requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                {tool.sampleQuestions?.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => send(q)}
                    className="group p-5 bg-white border border-slate-200 hover:border-[#8B5CF6] rounded-2xl text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Sparkles className="w-5 h-5 text-[#8B5CF6] group-hover:rotate-12 transition-transform" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-snug">{q}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-7">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-4 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div
                      className={`w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm ${
                        m.role === "user"
                          ? "bg-[#70309d] text-white"
                          : "bg-gradient-to-br from-[#70309d] to-[#8B5CF6] text-white"
                      }`}
                    >
                      {m.role === "user" ? "U" : <Bot size={18} />}
                    </div>

                    <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
                      {m.text && (
                        <div
                          className={`p-5 rounded-2xl text-[15px] leading-relaxed font-medium inline-block w-fit ${
                            m.role === "user"
                              ? "bg-[#70309d] text-white rounded-tr-none"
                              : "bg-white border border-slate-100 rounded-tl-none"
                          }`}
                        >
                          {renderMessageText(m.text)}
                        </div>
                      )}

                      {/* Original Card Rendering */}
                      {m.cards?.map((card, idx) => (
                        card.type === "approach" ? (
                          <div key={idx} className="w-full bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <Lightbulb size={16} className="text-[#D97706]" />
                              <span className="text-[11px] font-bold text-[#D97706] uppercase tracking-widest">{card.tag}</span>
                            </div>
                            <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
                            <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                            {card.bullets && (
                              <ul className="space-y-2 mt-2">
                                {card.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-[#D97706] mt-2 flex-shrink-0" />
                                    <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ) : (
                          <div key={idx} className="w-full bg-[#fdfaff] border border-[#E9D5FF] rounded-xl p-5 shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              {card.type === "capability" && <CheckCircle2 size={16} className="text-brand-300" />}
                              {card.type === "case-study" && <ChevronRight size={16} className="text-brand-300" />}
                              {card.type === "discovery" && <Search size={16} className="text-brand-300" />}
                              <span className="text-[11px] font-bold text-brand-300 uppercase tracking-widest">{card.tag}</span>
                            </div>
                            <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
                            <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>
                            {card.bullets && (
                              <ul className="space-y-2 mt-2">
                                {card.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-brand-300 mt-2 flex-shrink-0" />
                                    <span className="text-[13px] text-slate-600 leading-relaxed">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {card.stat && (
                              <div className="mt-4 pt-4 border-t border-[#E9D5FF]/50 flex items-center gap-3">
                                <span className="text-2xl font-extrabold text-[#70309d]">{card.stat}</span>
                                <span className="text-[13px] font-medium text-slate-500">{card.statDesc}</span>
                              </div>
                            )}
                          </div>
                        )
                      ))}

                      {/* Original Options */}
                      {m.options && (
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mt-2 w-full md:w-auto">
                          {m.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(opt)}
                              className="px-4 py-3 md:py-2.5 bg-white border border-slate-200 rounded-xl md:rounded-full text-[12px] font-medium text-slate-600 hover:border-[#8B5CF6] hover:text-brand-300 transition-colors text-left shadow-sm w-full md:w-auto"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] rounded-2xl flex items-center justify-center text-white">
                    <Bot size={18} />
                  </div>
                  <div className="bg-white border border-slate-100 px-6 py-4 rounded-3xl rounded-tl-none flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-300" />
                    </div>
                    <span className="text-slate-500 text-sm">Thinking...</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t">
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.placeholder || "Ask about our services, capabilities, or case studies..."}
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#8B5CF6] rounded-3xl px-7 py-5 text-[15px] focus:outline-none transition-all shadow-sm"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#70309d] to-[#8B5CF6] disabled:opacity-50 text-white rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <Send size={20} />
            </button>
          </form>

          <p className="text-center text-[10px] text-slate-400 mt-5 font-medium tracking-widest">
            DEMO — Trained on Collective IP Knowledge Base
          </p>
        </div>
      </div>
    </div>
  );
}