import { useState, useRef, useEffect } from "react";
import { Bot, Send, Search, Database } from "lucide-react";
import { AIChatMessage, getAIBotResponse } from "../../config/aiMatrixKnowledge";
import { Tool } from "../../data/demoTools";

export function AIKnowledgeAssistant({ tool }: { tool: Tool }) {
  const [messages, setMessages] = useState<AIChatMessage[]>([]);
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
      setMessages((m) => [...m, getAIBotResponse(text)]);
    }, 400);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden min-h-[600px] flex flex-col">
        {/* Chat Header */}
        <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0E7490] rounded-lg flex items-center justify-center text-white shadow-md">
              <Database size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#3B4041]">
                {tool.title}
              </h3>
              <p className="text-[10px] text-slate-400 font-medium">
                {tool.subtitle}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Online
          </button>
        </div>

        {/* Chat Area */}
        <div ref={chatContainerRef} className="flex-1 p-4 md:p-8 overflow-y-auto bg-slate-50/50">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center text-[#0E7490] mb-6 shadow-sm border border-cyan-100">
                <Bot size={40} />
              </div>
              <h2 className="text-2xl font-extrabold text-[#3B4041] mb-3 tracking-tight">
                AI Knowledge Base
              </h2>
              <p className="text-sm text-slate-500 max-w-md mb-10 leading-relaxed">
                Explore our service matrices and capabilities. Select a category below or ask a specific question.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-4xl">
                {tool.sampleQuestions?.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => send(q)}
                    className="p-4 bg-white border border-slate-200 rounded-xl text-left text-[13px] font-semibold text-slate-600 hover:border-[#0E7490] hover:text-[#0E7490] hover:shadow-md transition-all duration-300"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex gap-3 w-full max-w-full md:max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs shadow-sm border ${m.role === "user"
                        ? "bg-white border-slate-200 text-slate-500"
                        : "bg-cyan-50 border-cyan-100 text-[#0E7490]"
                        }`}
                    >
                      {m.role === "user" ? "U" : <Bot size={18} />}
                    </div>
                    <div className={`flex flex-col gap-3 min-w-0 w-full ${m.role === "user" ? "items-end" : "items-start"}`}>
                      {m.text && (
                        <div
                          className={`p-4 rounded-2xl text-[14px] leading-relaxed font-medium inline-block w-fit shadow-sm ${m.role === "user"
                            ? "bg-[#0E7490] text-white rounded-tr-none"
                            : "bg-white text-slate-700 border border-slate-200 rounded-tl-none"
                            }`}
                        >
                          {/* Basic markdown-like bold parsing */}
                          {m.text.split("**").map((part, index) => 
                            index % 2 === 1 ? <strong key={index} className="font-bold text-[#0E7490]">{part}</strong> : part
                          )}
                        </div>
                      )}

                      {m.cards?.map((card, idx) => (
                        <div key={idx} className="w-full bg-[#937bbd] border border-cyan-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                            <Search size={18} className="text-[#0E7490]" />
                            <span className="text-xs font-bold text-[#0E7490] uppercase tracking-widest">Service Details</span>
                          </div>

                          <h4 className="text-lg font-bold text-[#3B4041] mb-2">{card.title}</h4>
                          {card.desc && <p className="text-[14px] text-slate-500 leading-relaxed mb-4">{card.desc}</p>}

                          {card.bullets && (
                            <div className="bg-slate-50 rounded-lg p-4 mt-4">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                                {card.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#0E7490] mt-2 flex-shrink-0" />
                                    <span className="text-[13.5px] text-slate-600 leading-relaxed font-medium">{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}

                      {m.options && (
                        <div className="flex flex-col md:flex-row md:flex-wrap gap-2 mt-2 w-full">
                          {m.options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => send(opt)}
                              className="px-4 py-3 bg-white border border-slate-200 rounded-xl text-[13px] font-semibold text-slate-600 hover:border-[#0E7490] hover:text-[#0E7490] hover:shadow-sm transition-all text-left w-full md:w-auto flex-1 md:flex-none"
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
        <div className="p-4 md:p-6 border-t border-slate-100 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="relative flex items-center max-w-4xl mx-auto"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.placeholder || "Ask about a service matrix..."}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm font-medium focus:outline-none focus:border-[#0E7490] focus:ring-1 focus:ring-[#0E7490] transition-all shadow-inner pr-16"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="absolute right-2 w-12 h-12 bg-[#0E7490] text-white rounded-lg flex items-center justify-center hover:bg-[#0c5c73] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
