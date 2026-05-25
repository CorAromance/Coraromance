import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function TelegramCTA() {
  return (
    <motion.a
      href="https://t.me/cor_aromance"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 24px 64px rgba(184, 184, 186, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-10 py-4 rounded-full flex items-center gap-3 backdrop-blur-2xl border transition-all duration-300 group"
      style={{
        background: "linear-gradient(135deg, rgba(184, 184, 186, 0.98) 0%, rgba(158, 158, 160, 0.95) 100%)",
        borderColor: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 12px 48px rgba(184, 184, 186, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 1px rgba(0, 0, 0, 0.1)",
        color: "#0a0a0b"
      }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-medium tracking-wide text-sm md:text-base">
        Получить консультацию
      </span>

      {/* Subtle Pulse Effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)"
        }}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Chrome Reflection */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 50%)"
        }}
      />
    </motion.a>
  );
}
