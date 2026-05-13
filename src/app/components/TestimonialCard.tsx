import { motion } from "motion/react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="p-8 rounded-2xl backdrop-blur-2xl border h-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(15, 15, 16, 0.7) 0%, rgba(10, 10, 11, 0.5) 100%)",
        borderColor: "rgba(184, 184, 186, 0.08)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            style={{
              color: i < rating ? "var(--natural-titanium)" : "var(--dark-titanium)",
              fill: i < rating ? "var(--natural-titanium)" : "transparent",
              opacity: i < rating ? 0.9 : 0.3
            }}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p
        className="text-sm md:text-base leading-relaxed flex-1 mb-6"
        style={{ color: "var(--natural-titanium)", opacity: 0.85 }}
      >
        {text}
      </p>

      {/* Author */}
      <div
        className="pt-4"
        style={{ borderTop: "1px solid rgba(184, 184, 186, 0.06)" }}
      >
        <p
          className="text-sm font-medium"
          style={{
            color: "var(--titanium-light)",
            letterSpacing: "0.02em"
          }}
        >
          {name}
        </p>
      </div>
    </motion.div>
  );
}
