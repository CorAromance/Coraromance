import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickQuestions = [
  "Свежий аромат для лета",
  "Вечерний парфюм",
  "Гурманские ноты",
  "Древесные композиции"
];

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Здравствуйте! Я ваш AI-помощник по подбору ароматов. Расскажите о ваших предпочтениях: какие ноты вам нравятся, для какого случая нужен парфюм, или выберите один из вариантов ниже."
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = { role: "user", content: messageText };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responses: Record<string, string> = {
        "свежий": "Для свежего летнего аромата рекомендую:\n• Dior Sauvage (₽8,500) — пряная свежесть с бергамотом\n• Creed Green Irish Tweed (₽30,500) — классический фужер\n• Byredo Blanche (₽18,500) — чистая белоцветочная композиция",
        "вечерний": "Для вечерних выходов идеально подойдут:\n• Baccarat Rouge 540 (₽24,500) — роскошный янтарно-цветочный\n• Tom Ford Tobacco Vanille (₽28,000) — богатая восточная композиция\n• Initio Oud for Greatness (₽33,000) — мощный и харизматичный уд",
        "гурман": "Сладкие гурманские ароматы:\n• Kilian Angels' Share (₽27,500) — коньяк и ваниль\n• Xerjoff Erba Pura (₽35,000) — фруктово-ванильный шедевр\n• Initio Side Effect (₽31,500) — табак и ром с ванилью",
        "древесн": "Древесные композиции:\n• Tom Ford Ombre Leather (₽26,500) — кожа и пачули\n• Chanel Bleu de Chanel (₽10,500) — кедр и сандал\n• Creed Aventus (₽32,000) — береза и дубовый мох"
      };

      let response = "Отличный выбор! Рекомендую обратить внимание на:\n• Dior Sauvage (₽8,500)\n• Chanel Bleu de Chanel (₽10,500)\n• Baccarat Rouge 540 (₽24,500)\n\nНапишите нам в Telegram для персональной консультации!";

      for (const [key, value] of Object.entries(responses)) {
        if (messageText.toLowerCase().includes(key)) {
          response = value;
          break;
        }
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1500);
  };

  return (
    <>
      <motion.button
        onClick={() => {
          setIsOpen(true);
          setShowPulse(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 w-20 h-20 rounded-full bg-gradient-to-br from-[#c5c5c7] to-[#8a8a8d] shadow-2xl flex items-center justify-center group"
      >
        <Bot className="w-9 h-9 text-black" />
        {showPulse && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-white/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.button>

      {/* Hint Tooltip */}
      <AnimatePresence>
        {!isOpen && showPulse && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-24 right-8 z-50 px-4 py-3 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl max-w-xs"
            style={{ background: 'rgba(26, 26, 26, 0.95)' }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" style={{ color: 'var(--platinum)' }} />
              <p className="text-sm" style={{ color: 'var(--titanium)' }}>
                Нужна помощь в выборе аромата?
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 w-[420px] h-[650px] rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: "rgba(18, 18, 18, 0.98)",
              backdropFilter: "blur(60px)",
              border: "1px solid rgba(197, 197, 199, 0.15)"
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-white/10" style={{ background: 'rgba(26, 26, 26, 0.5)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c5c5c7] to-[#8a8a8d] flex items-center justify-center shadow-lg">
                    <Bot className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>
                      AI Помощник
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.6 }}>
                      Персональный подбор ароматов
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <X className="w-5 h-5" style={{ color: 'var(--titanium)' }} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-5 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-br from-[#c5c5c7] to-[#8a8a8d] text-black shadow-lg'
                          : 'bg-white/5 border border-white/10'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line" style={msg.role === 'assistant' ? { color: 'var(--titanium)' } : {}}>
                        {msg.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ background: 'var(--titanium)' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ background: 'var(--titanium)' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 rounded-full"
                          style={{ background: 'var(--titanium)' }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {messages.length === 1 && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {quickQuestions.map((question, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleSend(question)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                        style={{ color: 'var(--titanium)' }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5 border-t border-white/10" style={{ background: 'rgba(26, 26, 26, 0.5)' }}>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Опишите ваши предпочтения..."
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-white/25 transition-colors text-sm"
                    style={{ color: 'var(--platinum)' }}
                  />
                  <button
                    onClick={() => handleSend()}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c5c5c7] to-[#8a8a8d] flex items-center justify-center hover:opacity-90 transition-all hover:scale-105 shadow-lg"
                  >
                    <Send className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
