import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-[0_15px_50px_rgba(197,197,199,0.15)] transition-all duration-500 h-full flex flex-col relative overflow-hidden group"
      style={{
        background: "linear-gradient(135deg, rgba(26, 26, 26, 0.6) 0%, rgba(10, 10, 10, 0.4) 100%)"
      }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-16 h-16" style={{ color: 'var(--platinum)' }} />
      </div>

      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          >
            <Star
              className={`w-5 h-5 ${i < rating ? 'fill-[#c5c5c7]' : 'fill-transparent'}`}
              style={{ color: 'var(--titanium)' }}
            />
          </motion.div>
        ))}
      </div>

      <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: 'var(--titanium)', opacity: 0.9 }}>
        "{text}"
      </p>

      <div className="pt-4 border-t border-white/5">
        <p className="text-base" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>
          {name}
        </p>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent" />
      </div>
    </motion.div>
  );
}
