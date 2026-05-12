import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
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
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
          style={{
            background: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(197, 197, 199, 0.1)'
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
            >
              CorAromance
            </motion.button>

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-sm tracking-wide hover:opacity-100 transition-opacity"
                style={{ color: 'var(--titanium)', opacity: 0.8 }}
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm tracking-wide hover:opacity-100 transition-opacity"
                style={{ color: 'var(--titanium)', opacity: 0.8 }}
              >
                О нас
              </button>
              <motion.a
                href="https://t.me/coraromance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm"
                style={{
                  background: 'linear-gradient(135deg, #c5c5c7 0%, #8a8a8d 100%)',
                  color: '#000'
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
