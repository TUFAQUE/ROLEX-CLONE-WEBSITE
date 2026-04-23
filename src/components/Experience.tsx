import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000000, suffix: "+", label: "Timepieces crafted yearly" },
  { value: 120, suffix: "yr", label: "Of horological excellence" },
  { value: 150, suffix: "+", label: "Countries worldwide" },
  { value: 28, suffix: "", label: "World records set" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  const display = to >= 1000 ? `${(v / 1000).toFixed(0)}k` : v.toString();
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 lg:px-10 bg-rolex-green-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.42_0.11_155/0.6),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.78_0.13_85/0.15),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs uppercase tracking-luxury text-accent mb-6">The Rolex Experience</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground leading-tight">
            Excellence, <span className="italic text-gradient-gold">measured.</span>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Each timepiece is the result of meticulous craftsmanship — tested, certified,
            and perfected to the standards only Rolex demands.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-accent/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-rolex-green-deep p-10 text-center"
            >
              <p className="font-display text-5xl md:text-6xl text-gradient-gold mb-3">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs uppercase tracking-luxury text-foreground/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
