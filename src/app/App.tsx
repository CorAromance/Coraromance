import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { PerfumeCard } from "./components/PerfumeCard";
import { AIAssistant } from "./components/AIAssistant";
import { TestimonialCard } from "./components/TestimonialCard";
import { Navigation } from "./components/Navigation";

const perfumes = [
  {
    brand: "Dior",
    name: "Sauvage",
    description: "Свежий, пряный и мужественный аромат, вдохновлённый открытыми пространствами. Создан Франсуа Деманши.",
    image: "https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽8 500",
    notes: {
      top: ["Бергамот Калабрия", "Перец"],
      middle: ["Лаванда", "Герань", "Пачули"],
      base: ["Амброксан", "Кедр", "Лабданум"]
    }
  },
  {
    brand: "Dior",
    name: "Homme Intense",
    description: "Утончённая древесно-цветочная композиция с ирисом. Элегантность и сила в одном флаконе.",
    image: "https://images.unsplash.com/photo-1698877779289-d546e6376001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽9 200",
    notes: {
      top: ["Бергамот", "Лаванда"],
      middle: ["Ирис", "Амбретта"],
      base: ["Кедр", "Ветивер"]
    }
  },
  {
    brand: "Dior",
    name: "J'adore",
    description: "Роскошный цветочный букет для женщин. Символ женственности и чувственности от Dior.",
    image: "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽9 800",
    notes: {
      top: ["Бергамот", "Груша", "Дыня"],
      middle: ["Жасмин", "Роза", "Фиалка"],
      base: ["Сандал", "Мускус"]
    }
  },
  {
    brand: "Chanel",
    name: "Bleu de Chanel",
    description: "Воплощение свободы и решительности. Древесно-ароматический парфюм для современного мужчины.",
    image: "https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽10 500",
    notes: {
      top: ["Грейпфрут", "Лимон", "Мята"],
      middle: ["Имбирь", "Жасмин", "Мускатный орех"],
      base: ["Кедр", "Сандал", "Ладан"]
    }
  },
  {
    brand: "Chanel",
    name: "Coco Mademoiselle",
    description: "Свежий и современный восточный аромат. Символ независимой и элегантной женщины.",
    image: "https://images.unsplash.com/photo-1774280347934-9c74dff6ab2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽11 200",
    notes: {
      top: ["Апельсин", "Мандарин", "Бергамот"],
      middle: ["Роза", "Жасмин", "Личи"],
      base: ["Пачули", "Ваниль", "Белый мускус"]
    }
  },
  {
    brand: "Chanel",
    name: "Chance",
    description: "Искрящаяся цветочная композиция. Аромат неожиданности и очарования.",
    image: "https://images.unsplash.com/photo-1773527142304-58116364b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽10 800",
    notes: {
      top: ["Розовый перец", "Лимон"],
      middle: ["Жасмин", "Гиацинт"],
      base: ["Пачули", "Белый мускус", "Ваниль"]
    }
  },
  {
    brand: "Maison Francis Kurkdjian",
    name: "Baccarat Rouge 540",
    description: "Легендарный янтарно-цветочный аромат. Светящийся, воздушный и неповторимый.",
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽24 500",
    notes: {
      top: ["Шафран", "Жасмин"],
      middle: ["Амбревуд", "Амбергрис"],
      base: ["Пихта", "Кедр"]
    }
  },
  {
    brand: "Giorgio Armani",
    name: "Si",
    description: "Шипровый фруктовый аромат. Символ женской силы и современной элегантности.",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽8 900",
    notes: {
      top: ["Черная смородина", "Мандарин"],
      middle: ["Роза", "Фрезия"],
      base: ["Пачули", "Ваниль", "Амброксан"]
    }
  },
  {
    brand: "Giorgio Armani",
    name: "Stronger With You",
    description: "Тёплый пряно-сладкий аромат. Создан для мужчин, которые ценят близость и страсть.",
    image: "https://images.unsplash.com/photo-1775210727378-7b0e9a50b660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽7 900",
    notes: {
      top: ["Розовый перец", "Кардамон", "Фиолетовые листья"],
      middle: ["Шалфей", "Корица"],
      base: ["Ваниль", "Кашемировое дерево", "Каштан"]
    }
  },
  {
    brand: "Tom Ford",
    name: "Tobacco Vanille",
    description: "Насыщенный восточно-пряный аромат. Роскошь табачного листа и тёплой ванили.",
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽28 000",
    notes: {
      top: ["Табачный лист", "Специи"],
      middle: ["Ваниль", "Какао", "Сухофрукты"],
      base: ["Древесные ноты"]
    }
  },
  {
    brand: "Tom Ford",
    name: "Ombre Leather",
    description: "Чувственная кожаная композиция. Аромат, передающий дух пустыни и свободы.",
    image: "https://images.unsplash.com/photo-1698877779289-d546e6376001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽26 500",
    notes: {
      top: ["Кардамон"],
      middle: ["Кожа", "Жасмин самбак"],
      base: ["Пачули", "Амбер", "Мох"]
    }
  },
  {
    brand: "Creed",
    name: "Aventus",
    description: "Легендарный фруктово-древесный аромат. Символ силы, успеха и харизмы.",
    image: "https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽32 000",
    notes: {
      top: ["Ананас", "Черная смородина", "Яблоко", "Бергамот"],
      middle: ["Роза", "Береза", "Пачули", "Жасмин"],
      base: ["Мускус", "Дубовый мох", "Амбергрис", "Ваниль"]
    }
  },
  {
    brand: "Creed",
    name: "Green Irish Tweed",
    description: "Свежий фужерный аромат. Воплощение ирландской природы и аристократической элегантности.",
    image: "https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽30 500",
    notes: {
      top: ["Лимон", "Мята"],
      middle: ["Фиалка"],
      base: ["Сандал", "Амбергрис"]
    }
  },
  {
    brand: "Byredo",
    name: "Blanche",
    description: "Чистый, свежий аромат белого цвета. Минималистичная композиция для ценителей простоты.",
    image: "https://images.unsplash.com/photo-1774280347934-9c74dff6ab2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽18 500",
    notes: {
      top: ["Альдегиды", "Розовый перец", "Белая роза"],
      middle: ["Пион", "Фиалка", "Нероли"],
      base: ["Мускус", "Сандал"]
    }
  },
  {
    brand: "Byredo",
    name: "Gypsy Water",
    description: "Свежий древесный аромат. История романтического путешествия и цыганской свободы.",
    image: "https://images.unsplash.com/photo-1773527142304-58116364b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽19 200",
    notes: {
      top: ["Бергамот", "Лимон", "Можжевельник", "Перец"],
      middle: ["Сосна", "Ладан"],
      base: ["Ваниль", "Сандал", "Амбер"]
    }
  },
  {
    brand: "Kilian",
    name: "Angels' Share",
    description: "Сладкий гурманский аромат с коньяком. Роскошь и соблазн в каждой ноте.",
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽27 500",
    notes: {
      top: ["Коньяк", "Дубовая эссенция", "Корица"],
      middle: ["Тонка", "Пралине"],
      base: ["Ваниль", "Сандал"]
    }
  },
  {
    brand: "Kilian",
    name: "Love, Don't Be Shy",
    description: "Сладкая цветочно-фруктовая композиция. Аромат, который невозможно забыть.",
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽26 800",
    notes: {
      top: ["Нероли"],
      middle: ["Роза", "Апельсиновый цвет"],
      base: ["Зефир", "Мускус", "Ваниль", "Ирис"]
    }
  },
  {
    brand: "Xerjoff",
    name: "Erba Pura",
    description: "Фруктово-цитрусовый шедевр. Средиземноморская свежесть и роскошь в одном флаконе.",
    image: "https://images.unsplash.com/photo-1775210727378-7b0e9a50b660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽35 000",
    notes: {
      top: ["Апельсин", "Лимон", "Бергамот"],
      middle: ["Фрукты", "Персик"],
      base: ["Ваниль", "Белый мускус", "Амбер"]
    }
  },
  {
    brand: "Xerjoff",
    name: "Naxos",
    description: "Восточно-древесный аромат с мёдом и табаком. Тёплая, обволакивающая роскошь.",
    image: "https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽36 500",
    notes: {
      top: ["Лаванда", "Лимон", "Бергамот"],
      middle: ["Мёд", "Корица", "Кашмеран"],
      base: ["Табак", "Ваниль", "Сандал"]
    }
  },
  {
    brand: "Yves Saint Laurent",
    name: "Libre",
    description: "Цветочный фужерный аромат. Свобода, сила и чувственность в каждой капле.",
    image: "https://images.unsplash.com/photo-1621962728420-a7328f6ea8ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽9 500",
    notes: {
      top: ["Мандарин", "Лаванда", "Черная смородина"],
      middle: ["Апельсиновый цвет", "Жасмин", "Лаванда"],
      base: ["Мускус", "Ваниль", "Амбер"]
    }
  },
  {
    brand: "Yves Saint Laurent",
    name: "La Nuit de l'Homme",
    description: "Чувственный восточно-древесный аромат. Идеален для вечерних выходов и особых случаев.",
    image: "https://images.unsplash.com/photo-1698877779289-d546e6376001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽8 800",
    notes: {
      top: ["Кардамон", "Бергамот"],
      middle: ["Кедр", "Лаванда"],
      base: ["Кумарин", "Ветивер"]
    }
  },
  {
    brand: "Initio",
    name: "Oud for Greatness",
    description: "Мощный восточный аромат с удом. Величие и харизма в каждой ноте.",
    image: "https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽33 000",
    notes: {
      top: ["Шафран", "Мускус"],
      middle: ["Лавандин", "Уд"],
      base: ["Пачули"]
    }
  },
  {
    brand: "Initio",
    name: "Side Effect",
    description: "Табачно-ванильная композиция. Опьяняющий, чувственный и незабываемый аромат.",
    image: "https://images.unsplash.com/photo-1769038933775-305885b212c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    price: "₽31 500",
    notes: {
      top: ["Ром", "Корица"],
      middle: ["Табак", "Ваниль"],
      base: ["Сандал", "Гедион"]
    }
  }
];

const testimonials = [
  {
    name: "Анна К.",
    text: "Невероятный подбор ароматов! Консультация в Telegram помогла найти идеальный парфюм. Baccarat Rouge 540 — это любовь с первого вдоха.",
    rating: 5
  },
  {
    name: "Дмитрий Р.",
    text: "Заказываю нишевую парфюмерию только здесь. Оригинальность гарантирована, доставка в Ростов быстрая. Creed Aventus — мой фаворит!",
    rating: 5
  },
  {
    name: "Елена М.",
    text: "AI-помощник действительно помог определиться с выбором. Купила Byredo Gypsy Water — именно то, что искала для повседневной носки.",
    rating: 5
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Premium Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.h1
                className="text-6xl mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CorAromance
              </motion.h1>
              <motion.div
                className="w-32 h-[1px] mx-auto"
                style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)' }}>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Multiple Perfume Bottles */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 gap-4 absolute inset-0 p-12 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1698867928110-2408e8e2f44a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
              alt="Dior"
              className="w-full h-auto object-contain"
            />
            <img
              src="https://images.unsplash.com/photo-1721190171118-c5c0921ea6c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
              alt="Chanel"
              className="w-full h-auto object-contain mt-20"
            />
            <img
              src="https://images.unsplash.com/photo-1770301410072-f6ef6dad65b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
              alt="MFK"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black" />

          {/* Enhanced Smoke/Mist Effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
            <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-[#c5c5c7]/8 rounded-full blur-[140px]" style={{ animation: 'float 10s ease-in-out infinite reverse' }} />
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[180px]" style={{ animation: 'float 12s ease-in-out infinite' }} />
          </div>

          {/* Premium Light Rays */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-white/20 via-transparent to-transparent transform -skew-x-12" />
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-white/15 via-transparent to-transparent transform skew-x-12" />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-7xl md:text-9xl mb-6 tracking-tight"
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--platinum)',
                textShadow: '0 8px 40px rgba(0, 0, 0, 0.9), 0 0 80px rgba(197, 197, 199, 0.1)'
              }}
              initial={{ letterSpacing: '0.2em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              CorAromance
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-6 tracking-[0.4em] uppercase"
              style={{ color: 'var(--titanium)', opacity: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Искусство аромата
            </motion.p>
            <motion.div
              className="w-24 h-[1px] mx-auto mb-8"
              style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <motion.p
              className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'var(--titanium)', opacity: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Эксклюзивная нишевая парфюмерия в Ростове-на-Дону.<br />
              Откройте для себя мир изысканных ароматов от ведущих мировых брендов:<br />
              Dior • Chanel • Tom Ford • Creed • Byredo • Kilian • Xerjoff • Initio
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 15px 50px rgba(197, 197, 199, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full text-xl transition-all duration-300 shadow-2xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #c5c5c7 0%, #8a8a8d 100%)',
                color: '#000',
                fontFamily: 'var(--font-sans)'
              }}
              onClick={() => window.scrollTo({ top: document.getElementById('catalog')?.offsetTop, behavior: 'smooth' })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <span className="relative z-10">Подобрать аромат</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-11 rounded-full border-2 flex justify-center pt-2" style={{ borderColor: 'var(--titanium)', opacity: 0.4 }}>
            <motion.div
              className="w-1 h-3 rounded-full"
              style={{ background: 'var(--titanium)' }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(20px, -30px) scale(1.1); }
          }
        `}</style>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-32 px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#c5c5c7]/30 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2
              className="text-6xl md:text-7xl mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
            >
              Коллекция ароматов
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--titanium)', opacity: 0.75 }}>
              Эксклюзивная подборка нишевой парфюмерии от ведущих мировых домов.
              Каждый аромат — произведение искусства.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {perfumes.map((perfume, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (idx % 9) * 0.08, duration: 0.7, ease: "easeOut" }}
              >
                <PerfumeCard {...perfume} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg mb-6" style={{ color: 'var(--titanium)', opacity: 0.8 }}>
              Не нашли нужный аромат? Напишите нам — у нас более 500 позиций!
            </p>
            <motion.a
              href="https://t.me/coraromance"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_10px_40px_rgba(197,197,199,0.25)]"
              style={{
                background: 'linear-gradient(135deg, rgba(197, 197, 199, 0.15) 0%, rgba(138, 138, 141, 0.1) 100%)',
                border: '1px solid rgba(197, 197, 199, 0.2)',
                color: 'var(--platinum)'
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Полный каталог в Telegram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#c5c5c7]/15 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#c5c5c7]/15 rounded-full blur-[180px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2
              className="text-6xl md:text-7xl mb-12"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
            >
              О бутике
            </h2>
            <div className="space-y-8 text-lg md:text-xl leading-relaxed" style={{ color: 'var(--titanium)' }}>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span style={{ color: 'var(--platinum)', fontFamily: 'var(--font-serif)', fontSize: '1.3em' }}>CorAromance</span> — премиальный бутик нишевой парфюмерии
                в Ростове-на-Дону. Мы создаём пространство, где искусство ароматов встречается с безупречным сервисом.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.85, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Наша коллекция включает эксклюзивные композиции от легендарных домов: <strong style={{ color: 'var(--platinum)' }}>Dior, Chanel,
                Tom Ford, Creed, Byredo, Kilian, Xerjoff, Initio</strong> и других мастеров парфюмерного искусства.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.85, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Каждый флакон — произведение искусства. Мы гарантируем <strong style={{ color: 'var(--platinum)' }}>100% оригинальность</strong> всей продукции
                и предлагаем персональный подход к каждому клиенту.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="pt-6"
              >
                <div className="inline-block px-8 py-4 rounded-2xl border border-white/10" style={{ background: 'rgba(26, 26, 26, 0.5)' }}>
                  <p className="text-base" style={{ color: 'var(--titanium)', opacity: 0.9 }}>
                    AI-ассистент + персональные консультации в Telegram = ваш идеальный аромат
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[#c5c5c7]/30 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2
              className="text-6xl md:text-7xl mb-6"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
            >
              Отзывы
            </h2>
            <p className="text-xl" style={{ color: 'var(--titanium)', opacity: 0.75 }}>
              Мнение наших клиентов — наша главная награда
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.7 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c5c5c7]/10 rounded-full blur-[200px]" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="w-16 h-[1px] mx-auto mb-6"
              style={{ background: 'linear-gradient(90deg, transparent, var(--titanium), transparent)' }}
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2
              className="text-6xl md:text-7xl mb-8"
              style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
            >
              Свяжитесь с нами
            </h2>
            <p className="text-xl mb-16 max-w-2xl mx-auto" style={{ color: 'var(--titanium)', opacity: 0.8 }}>
              Готовы подобрать ваш идеальный аромат? Напишите нам, и наши эксперты помогут вам.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl backdrop-blur-xl border border-white/10 transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--platinum)' }} />
                <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>Локация</p>
                <p style={{ color: 'var(--titanium)', opacity: 0.85 }}>Ростов-на-Дону</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl backdrop-blur-xl border border-white/10 transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <MessageCircle className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--platinum)' }} />
                <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>Telegram</p>
                <p style={{ color: 'var(--titanium)', opacity: 0.85 }}>@coraromance</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl backdrop-blur-xl border border-white/10 transition-all"
                style={{
                  background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: 'var(--platinum)' }} />
                <p className="text-lg mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>Email</p>
                <p style={{ color: 'var(--titanium)', opacity: 0.85 }}>info@coraromance.ru</p>
              </motion.div>
            </div>

            <motion.a
              href="https://t.me/coraromance"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, boxShadow: '0 15px 50px rgba(197, 197, 199, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-14 py-6 rounded-full text-xl transition-all duration-300 shadow-2xl relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #c5c5c7 0%, #8a8a8d 100%)',
                color: '#000',
                fontFamily: 'var(--font-sans)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <MessageCircle className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Написать в Telegram</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3
                className="text-3xl mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}
              >
                CorAromance
              </h3>
              <p className="text-sm tracking-[0.3em] uppercase" style={{ color: 'var(--titanium)', opacity: 0.6 }}>
                Искусство аромата
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex gap-4">
                <motion.a
                  href="https://t.me/coraromance"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" style={{ color: 'var(--titanium)' }} />
                </motion.a>
                <motion.a
                  href="mailto:info@coraromance.ru"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 transition-all"
                >
                  <Mail className="w-5 h-5" style={{ color: 'var(--titanium)' }} />
                </motion.a>
              </div>
              <p className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.5 }}>
                Ростов-на-Дону
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm mb-1" style={{ color: 'var(--titanium)', opacity: 0.7 }}>
                Эксклюзивная нишевая<br />парфюмерия
              </p>
              <p className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.5 }}>
                © 2026 CorAromance
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 text-center">
            <p className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.4 }}>
              Все товары оригинальные и сертифицированные
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
      </div>
    </>
  );
}