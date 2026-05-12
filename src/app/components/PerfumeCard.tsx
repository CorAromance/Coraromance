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
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a]/80 to-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-[0_20px_60px_rgba(197,197,199,0.2)] h-full flex flex-col"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20" style={{ background: 'rgba(197, 197, 199, 0.15)' }}>
          <p className="text-sm" style={{ color: 'var(--platinum)' }}>
            {price}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'var(--titanium)', opacity: 0.7 }}>
            {brand}
          </p>
          <h3 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--platinum)' }}>
            {name}
          </h3>
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--titanium)', opacity: 0.85 }}>
          {description}
        </p>

        {/* Notes Pyramid */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="flex items-start gap-2">
            <span className="text-xs uppercase tracking-wider min-w-[60px]" style={{ color: 'var(--titanium)', opacity: 0.5 }}>
              Верх:
            </span>
            <span className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.8 }}>
              {notes.top.join(', ')}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs uppercase tracking-wider min-w-[60px]" style={{ color: 'var(--titanium)', opacity: 0.5 }}>
              Сердце:
            </span>
            <span className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.8 }}>
              {notes.middle.join(', ')}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs uppercase tracking-wider min-w-[60px]" style={{ color: 'var(--titanium)', opacity: 0.5 }}>
              База:
            </span>
            <span className="text-xs" style={{ color: 'var(--titanium)', opacity: 0.8 }}>
              {notes.base.join(', ')}
            </span>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(197,197,199,0.1)]" />
      </div>
    </motion.div>
  );
}
