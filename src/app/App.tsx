import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Mail, MapPin, ArrowDown } from "lucide-react";
import { PerfumeCard } from "./components/PerfumeCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { Navigation } from "./components/Navigation";
import { TelegramCTA } from "./components/TelegramCTA";
import { perfumes } from "../data/perfumes";

import creedaventus from "../assets/parfumes/creedaventus.jpeg";
import hommeintense from "../assets/perfumes/hommeintense.jpg";
import bleudechanel from "../assets/perfumes/bleudechanel.jpg";
import omberleather from "../assets/perfumes/omberleather.jpg";
import naxos from "../assets/perfumes/naxos.png";
import sideeffect from "../assets/perfumes/sideeffect.jpg";
import layton from "../assets/perfumes/layton.jpg";
import rouge540 from "../assets/perfumes/rouge540.jpg";
import delinaexclusif from "../assets/perfumes/delinaexclusif.jpg";
import cocomademoiselle from "../assets/perfumes/cocomademoiselle.jpg";
import libre from "../assets/perfumes/libre.jpg";
import blanche from "../assets/perfumes/blanche.jpg";
import lovedontbeshy from "../assets/perfumes/lovedontbeshy.jpg";
import atomicrose from "../assets/perfumes/atomicrose.jpg";
import angelsshare from "../assets/perfumes/angelsshare.jpg";
import erbapura from "../assets/perfumes/erbapura.jpg";
import oudforgreatness from "../assets/perfumes/oudforgreatness.jpg";
import gypsywater from "../assets/perfumes/gypsywater.jpeg";

const testimonials = [
  {
    name: "Александра В.",
    text: "Baccarat Rouge 540 — это нечто невероятное. Шлейф держится весь день, комплименты не прекращаются. Консультация в Telegram помогла выбрать идеальную концентрацию.",
    rating: 5
  },
  {
    name: "Михаил К.",
    text: "Creed Aventus — легенда неспроста. Стойкость 10+ часов, аромат раскрывается волнами. CorAromance гарантировал оригинальность, флакон с батч-кодом.",
    rating: 5
  },
  {
    name: "Екатерина Л.",
    text: "Initio Atomic Rose превзошёл все ожидания. Мощный, роскошный, провокационный. Бутик предложил тестер перед покупкой — профессиональный подход.",
    rating: 5
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Premium Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #0a0a0b 0%, #141415 100%)"
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-5xl md:text-6xl tracking-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)"
                }}
              >
                CorAromance
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="min-h-screen h-auto"
        style={{
          background: "linear-gradient(180deg, #0a0a0b 0%, #14141 50%, #0a0a0b 100%)"
        }}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section - Ultra Premium */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-24 md:py-0">
          {/* Background - Dark Studio */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{ background: "#0a0a0b" }} />

            {/* Subtle Titanium Glow */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px]"
                style={{ background: "radial-gradient(circle, rgba(184, 184, 186, 0.15) 0%, transparent 70%)" }}
              />
              <div
                className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px]"
                style={{ background: "radial-gradient(circle, rgba(184, 184, 186, 0.1) 0%, transparent 70%)" }}
              />
            </div>

            {/* Brushed Titanium Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 1px,
                    rgba(184, 184, 186, 0.3) 1px,
                    rgba(184, 184, 186, 0.3) 2px
                  )
                `
              }}
            />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Main Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-6 md:mb-8 tracking-tight leading-none px-2"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em"
                }}
              >
                CorAromance
              </motion.h1>

              {/* Divider */}
              <motion.div
                className="w-24 h-[1px] mx-auto mb-8"
                style={{
                  background: "linear-gradient(90deg, transparent, var(--satin-chrome), transparent)"
                }}
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Subtitle */}
              <motion.p
                className="text-sm sm:text-base md:text-2xl mb-8 md:mb-12 tracking-[0.25em] uppercase px-4"
                style={{
                  color: "var(--natural-titanium)",
                  fontWeight: 400,
                  letterSpacing: "0.3em"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ delay: 1, duration: 1 }}
              >
                ИСКУССТВО ЛЮБВИ К ПАРФЮМЕРИИ
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-base md:text-xl mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed px-4"
                style={{ color: "var(--natural-titanium)", opacity: 0.75 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.75, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                Нишевая и люксовая парфюмерия в Ростове-на-Дону.<br />
                Baccarat Rouge • Creed • Tom Ford • Xerjoff • Byredo • Kilian • Initio
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <motion.button
                  onClick={() => scrollToSection('catalog')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-full border transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(184, 184, 186, 0.12) 0%, rgba(158, 158, 160, 0.08) 100%)",
                    borderColor: "rgba(184, 184, 186, 0.2)",
                    color: "var(--titanium-light)",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
                  }}
                >
                  Смотреть каталог
                </motion.button>

                <motion.a
                  href="https://t.me/coraromance"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-full flex items-center gap-3 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(184, 184, 186, 0.95) 0%, rgba(158, 158, 160, 0.9) 100%)",
                    color: "#0a0a0b",
                    boxShadow: "0 8px 32px rgba(184, 184, 186, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Написать в Telegram
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={() => scrollToSection('catalog')}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown
              className="w-6 h-6"
              style={{ color: "var(--dark-titanium)", opacity: 0.4 }}
            />
          </motion.button>
        </section>

        {/* Catalog Section */}
        <section id="catalog" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2
                className="text-5xl md:text-6xl mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)",
                  fontWeight: 500
                }}
              >
                Коллекция
              </h2>
              <p
                className="text-lg max-w-2xl mx-auto"
                style={{ color: "var(--natural-titanium)", opacity: 0.7 }}
              >
                Тщательно отобранные ароматы от ведущих нишевых и люксовых парфюмерных домов
              </p>
            </motion.div>

            {/* Perfume Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {perfumes.map((perfume, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: (idx % 9) * 0.06,
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <PerfumeCard {...perfume} />
                </motion.div>
              ))}
            </div>

            {/* Catalog CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center mt-20"
            >
              <p
                className="text-lg mb-6"
                style={{ color: "var(--natural-titanium)", opacity: 0.7 }}
              >
                Не нашли нужный аромат? У нас более 500 позиций.
              </p>
              <motion.a
                href="https://t.me/coraromance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border transition-all"
                style={{
                  borderColor: "rgba(184, 184, 186, 0.15)",
                  color: "var(--natural-titanium)"
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Полный каталог в Telegram
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]"
              style={{ background: "radial-gradient(circle, rgba(184, 184, 186, 0.2) 0%, transparent 70%)" }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2
                className="text-5xl md:text-6xl mb-12"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)",
                  fontWeight: 500
                }}
              >
                О бутике
              </h2>

              <div
                className="space-y-8 text-lg md:text-xl leading-relaxed"
                style={{ color: "var(--natural-titanium)" }}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.85, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <span
                    style={{
                      color: "var(--titanium-light)",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15em"
                    }}
                  >
                    CorAromance
                  </span>{" "}
                  — премиальный бутик нишевой парфюмерии в Ростове-на-Дону. Мы создаём пространство,
                  где искусство ароматов встречается с безупречным сервисом.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.8, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Наша коллекция включает эксклюзивные композиции от легендарных домов:{" "}
                  <span style={{ color: "var(--titanium-light)" }}>
                    Maison Francis Kurkdjian, Creed, Tom Ford, Xerjoff, Byredo, Kilian, Initio, Parfums
                    de Marly, Nishane
                  </span>{" "}
                  и других мастеров парфюмерного искусства.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.8, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Каждый флакон — произведение искусства. Мы гарантируем{" "}
                  <span style={{ color: "var(--titanium-light)" }}>100% оригинальность</span> всей
                  продукции с батч-кодами и сертификатами.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="pt-6"
                >
                  <div
                    className="inline-block px-8 py-4 rounded-2xl border"
                    style={{
                      background: "rgba(15, 15, 16, 0.6)",
                      borderColor: "rgba(184, 184, 186, 0.08)"
                    }}
                  >
                    <p style={{ color: "var(--natural-titanium)", opacity: 0.85 }}>
                      Персональные консультации в Telegram • Тестеры перед покупкой • Доставка по России
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2
                className="text-5xl md:text-6xl mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)",
                  fontWeight: 500
                }}
              >
                Отзывы
              </h2>
              <p
                className="text-lg"
                style={{ color: "var(--natural-titanium)", opacity: 0.7 }}
              >
                Что говорят наши клиенты
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.7 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2
                className="text-5xl md:text-6xl mb-8"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--titanium-light)",
                  fontWeight: 500
                }}
              >
                Связь
              </h2>
              <p
                className="text-xl mb-16 max-w-2xl mx-auto"
                style={{ color: "var(--natural-titanium)", opacity: 0.75 }}
              >
                Напишите нам для персональной консультации по подбору аромата
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border backdrop-blur-xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(15, 15, 16, 0.7) 0%, rgba(10, 10, 11, 0.5) 100%)",
                    borderColor: "rgba(184, 184, 186, 0.08)"
                  }}
                >
                  <MapPin
                    className="w-8 h-8 mx-auto mb-4"
                    style={{ color: "var(--natural-titanium)" }}
                  />
                  <p
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--titanium-light)"
                    }}
                  >
                    Локация
                  </p>
                  <p style={{ color: "var(--natural-titanium)", opacity: 0.75 }}>
                    г. Ростов-на-Дону, ул. Маршала Жукова, д.18
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border backdrop-blur-xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(15, 15, 16, 0.7) 0%, rgba(10, 10, 11, 0.5) 100%)",
                    borderColor: "rgba(184, 184, 186, 0.08)"
                  }}
                >
                  <MessageCircle
                    className="w-8 h-8 mx-auto mb-4"
                    style={{ color: "var(--natural-titanium)" }}
                  />
                  <p
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--titanium-light)"
                    }}
                  >
                    Telegram
                  </p>
                  <p style={{ color: "var(--natural-titanium)", opacity: 0.75 }}>
                    @coraromance
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl border backdrop-blur-xl transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(15, 15, 16, 0.7) 0%, rgba(10, 10, 11, 0.5) 100%)",
                    borderColor: "rgba(184, 184, 186, 0.08)"
                  }}
                >
                  <Mail
                    className="w-8 h-8 mx-auto mb-4"
                    style={{ color: "var(--natural-titanium)" }}
                  />
                  <p
                    className="text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--titanium-light)"
                    }}
                  >
                    Email
                  </p>
                  <p style={{ color: "var(--natural-titanium)", opacity: 0.75 }}>
                    coraromance@ya.ru
                  </p>
                </motion.div>
              </div>

              <motion.a
                href="https://t.me/coraromance"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-12 py-5 rounded-full transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(184, 184, 186, 0.95) 0%, rgba(158, 158, 160, 0.9) 100%)",
                  color: "#0a0a0b",
                  boxShadow: "0 8px 32px rgba(184, 184, 186, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.3)"
                }}
              >
                <MessageCircle className="w-6 h-6" />
                Написать в Telegram
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-16 px-6 border-t"
          style={{ borderColor: "rgba(184, 184, 186, 0.05)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h3
                  className="text-3xl mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--titanium-light)"
                  }}
                >
                  CorAromance
                </h3>
                <p
                  className="text-sm tracking-[0.3em] uppercase"
                  style={{ color: "var(--dark-titanium)" }}
                >
                  Искусство любви к парфюмерии
                </p>
              </div>

              <div className="text-center md:text-right">
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--natural-titanium)", opacity: 0.7 }}
                >
                  Нишевая парфюмерия<br />Ростов-на-Дону
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--dark-titanium)", opacity: 0.5 }}
                >
                  © 2026 CorAromance
                </p>
              </div>
            </div>

            <div
              className="mt-12 pt-6 border-t text-center"
              style={{ borderColor: "rgba(184, 184, 186, 0.05)" }}
            >
              <p
                className="text-xs"
                style={{ color: "var(--dark-titanium)", opacity: 0.4 }}
              >
                Все товары 100% оригинальные и сертифицированные
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky Telegram CTA */}
        <TelegramCTA />
      </div>
    </>
  );
}
