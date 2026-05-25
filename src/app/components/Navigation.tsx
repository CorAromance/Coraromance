import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
          style={{
            background: 'rgba(10, 10, 11, 0.98)',
            backdropFilter: 'blur(30px)',
            borderBottom: '1px solid rgba(184, 184, 186, 0.06)'
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ opacity: 1 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl transition-opacity"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--titanium-light)',
                opacity: 0.95
              }}
            >
              CorAromance
            </motion.button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-sm tracking-wide transition-opacity hover:opacity-100"
                style={{
                  color: 'var(--natural-titanium)',
                  opacity: 0.7,
                  letterSpacing: '0.05em'
                }}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm tracking-wide transition-opacity hover:opacity-100"
                style={{
                  color: 'var(--natural-titanium)',
                  opacity: 0.7,
                  letterSpacing: '0.05em'
                }}
              >
                О нас
              </button>
              <motion.a
                href="https://t.me/cor_aromance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-all"
                style={{
                  background: 'linear-gradient(135deg, rgba(184, 184, 186, 0.15) 0%, rgba(158, 158, 160, 0.1) 100%)',
                  borderColor: 'rgba(184, 184, 186, 0.2)',
                  color: 'var(--titanium-light)',
                  border: '1px solid',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Telegram
              </motion.a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
