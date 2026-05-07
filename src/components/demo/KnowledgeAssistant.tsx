import { useState, useRef, useEffect } from "react";
import { Bot, Send, CheckCircle2, ChevronRight, Search, MessageSquare, Lightbulb } from "lucide-react";
import { ChatMessage, getBotResponse } from "../../config/knowledgeBase";
import { Tool } from "../../data/demoTools";

export function KnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    // Simulate small AI delay
    setTimeout(() => {
      setMessages((m) => [...m, getBotResponse(text)]);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#70309d] rounded-lg flex items-center justify-center text-white">
              <MessageSquare size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#3B4041]">
                Collective IP Knowledge Assistant
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                Ask about our capabilities, case studies, and approach
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F4F5] text-brand-300 text-xs font-medium">
            <span className="w-2 h-2 bg-brand-600 rounded-full" />
            Online
          </button>
        </div>

        {/* Chat Area */}
        <div ref={chatContainerRef} className="flex-1 p-4 md:p-8 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-[#F3E8FF] rounded-full flex items-center justify-center text-[#70309d] mb-6">
                <Bot size={32} />
              </div>
              <h2 className="text-xl font-extrabold text-[#3B4041] mb-2 uppercase tracking-tight">
                How can I help you today?
              </h2>
              <p className="text-xs text-slate-500 max-w-sm mb-12 leading-relaxed">
                Ask about our capabilities, delivery approach, or how we could
                help with your specific requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
                {tool.sampleQuestions?.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => send(q)}
                    className="p-4 bg-[#F9FAFB] border border-slate-100 rounded-xl text-left text-[11px] font-bold text-slate-500 hover:border-[#8B5CF6] hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-2 md:gap-3 w-full max-w-full md:max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${m.role === "user"
                        ? "bg-slate-100 text-slate-500"
                        : "bg-[#F3E8FF] text-[#70309d]"
                        }`}
                    >
                      {m.role === "user" ? "U" : <Bot size={14} />}
                    </div>
                    <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
                      {m.text && (
                        <div
                          className={`p-4 rounded-2xl text-[13px] leading-relaxed font-medium inline-block w-fit ${m.role === "user"
                            ? "bg-[#70309d] text-white rounded-tr-none"
                            : "bg-[#F9FAFB] text-slate-600 border border-slate-100 rounded-tl-none"
                            }`}
                        >
                          {m.text.split("**").map((part, index) => 
                            index % 2 === 1 ? <strong key={index} className={`font-bold ${m.role === "user" ? "text-white" : "text-[#3B4041]"}`}>{part}</strong> : part
                          )}
                        </div>
                      )}

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
                              {card.type === "capability" && <CheckCircle2 size={16} className="text-[#8B5CF6]" />}
                              {card.type === "case-study" && <ChevronRight size={16} className="text-[#8B5CF6]" />}
                              {card.type === "discovery" && <Search size={16} className="text-[#8B5CF6]" />}
                              <span className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-widest">{card.tag}</span>
                            </div>

                            <h4 className="text-[15px] font-bold text-[#3B4041] mb-2 leading-tight">{card.title}</h4>
                            <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>

                            {card.bullets && (
                              <ul className="space-y-2 mt-2">
                                {card.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-2.5">
                                    <div className="w-1 h-1 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0" />
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

                      {m.options && (
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mt-2 w-full md:w-auto">
                          {m.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(opt)}
                              className="px-4 py-3 md:py-2.5 bg-white border border-slate-200 rounded-xl md:rounded-full text-[12px] font-medium text-slate-600 hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors text-left shadow-sm w-full md:w-auto"
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
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-4 md:p-6 border-t border-slate-50 bg-[#F9FAFB]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.placeholder}
              className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-xs font-medium focus:outline-none focus:border-[#8B5CF6] transition-all shadow-sm pr-14"
            />
            <button
              type="submit"
              className="absolute right-2 w-10 h-10 bg-[#8B5CF6] text-white rounded-lg flex items-center justify-center hover:bg-[#5a2680] transition-colors shadow-lg shadow-[#8B5CF6]/20"
            >
              <Send size={18} />
            </button>
          </form>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em] text-center mt-6">
            Demonstration of the Digital Front Door concept. In production,
            trained on the full company knowledge base.
          </p>
        </div>
      </div>
    </div>
  );
}
