import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-watch.jpg";

interface HeroProps {
  onExplore: () => void;
  onHeritage: () => void;
  onBook: () => void;
}

const wordVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero({ onExplore, onHeritage, onBook }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const words = ["Crafted", "for", "Legends."];

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Parallax image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          src={heroImg}
          alt="Rolex luxury timepiece"
          width={1920}
          height={1080}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10 pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xs uppercase tracking-luxury text-accent mb-6"
        >
          The Oyster Perpetual Collection
        </motion.p>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.95] text-foreground max-w-5xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="show"
              className="inline-block mr-4 last:mr-0"
            >
              {i === words.length - 1 ? <span className="italic text-gradient-gold">{w}</span> : w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed"
        >
          A century of unrelenting pursuit of perfection. Every Rolex tells a story —
          of precision, performance, and the enduring spirit of human achievement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <button
            onClick={onExplore}
            className="group relative inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-xs uppercase tracking-luxury font-medium overflow-hidden transition-transform duration-300 hover:scale-105 shadow-gold-glow"
          >
            <span className="relative z-10">Explore Collection</span>
            <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <button
            onClick={onHeritage}
            className="group inline-flex items-center gap-3 border border-foreground/30 text-foreground px-8 py-4 text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:scale-105"
          >
            Discover Heritage
          </button>

          <button
            onClick={onBook}
            className="group inline-flex items-center gap-3 text-foreground/80 px-4 py-4 text-xs uppercase tracking-luxury font-medium transition-all duration-300 hover:text-accent"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-[10px] uppercase tracking-luxury">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
