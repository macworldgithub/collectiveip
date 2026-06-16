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
          { role: "ai", text: data.reply ? data.reply.replace(/info@collectiveip\.co\.uk/gi, 'contactus@collectiveip.co.uk') : "Sorry, I couldn't process that request." },
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
              className="w-full bg-slate-50 border border-slate-200 focus:border-[#8B5CF6] rounded-3xl pl-7 pr-16 py-5 text-[15px] focus:outline-none transition-all shadow-sm"
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