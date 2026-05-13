import { motion } from "motion/react";

interface PerfumeCardProps {
  name: string;
  brand: string;
  description: string;
  image: string;
  price: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
}

export function PerfumeCard({ name, brand, description, image, price, notes }: PerfumeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      className="group relative overflow-hidden rounded-2xl backdrop-blur-2xl border h-full flex flex-col"
      style={{
        background: "linear-gradient(135deg, rgba(15, 15, 16, 0.8) 0%, rgba(10, 10, 11, 0.6) 100%)",
        borderColor: "rgba(184, 184, 186, 0.08)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)"
      }}
    >
      <div className="relative h-80 overflow-hidden bg-gradient-to-b from-black/20 to-black/40">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        {/* Price Badge - Titanium Glass */}
        <div
          className="absolute top-5 right-5 px-4 py-2 rounded-full backdrop-blur-xl border"
          style={{
            background: "rgba(184, 184, 186, 0.12)",
            borderColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
          }}
        >
          <p className="text-sm font-medium" style={{ color: "var(--titanium-light)" }}>
            {price}
          </p>
        </div>
      </div>

      <div className="p-7 space-y-4 flex-1 flex flex-col">
        <div className="space-y-1">
          <p
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--dark-titanium)" }}
          >
            {brand}
          </p>
          <h3
            className="text-2xl leading-tight"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--titanium-light)",
              fontWeight: 500
            }}
          >
            {name}
          </h3>
        </div>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--natural-titanium)", opacity: 0.8 }}
        >
          {description}
        </p>

        {/* Olfactory Pyramid */}
        <div className="space-y-2.5 pt-4" style={{ borderTop: "1px solid rgba(184, 184, 186, 0.06)" }}>
          <div className="flex items-start gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.15em] font-medium min-w-[55px] pt-0.5"
              style={{ color: "var(--dark-titanium)" }}
            >
              Top
            </span>
            <span
              className="text-xs leading-relaxed"
              style={{ color: "var(--natural-titanium)", opacity: 0.75 }}
            >
              {notes.top.join(' • ')}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.15em] font-medium min-w-[55px] pt-0.5"
              style={{ color: "var(--dark-titanium)" }}
            >
              Heart
            </span>
            <span
              className="text-xs leading-relaxed"
              style={{ color: "var(--natural-titanium)", opacity: 0.75 }}
            >
              {notes.middle.join(' • ')}
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.15em] font-medium min-w-[55px] pt-0.5"
              style={{ color: "var(--dark-titanium)" }}
            >
              Base
            </span>
            <span
              className="text-xs leading-relaxed"
              style={{ color: "var(--natural-titanium)", opacity: 0.75 }}
            >
              {notes.base.join(' • ')}
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Chrome Reflection */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(184, 184, 186, 0.03) 0%, transparent 60%)"
        }}
      />
    </motion.div>
  );
}
