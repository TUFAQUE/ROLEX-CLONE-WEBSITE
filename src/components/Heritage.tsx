import { motion } from "framer-motion";
import heritageImg from "@/assets/heritage-craft.jpg";

const milestones = [
  { year: "1905", text: "Hans Wilsdorf founds the company in London." },
  { year: "1926", text: "The Oyster — the world's first waterproof wristwatch." },
  { year: "1953", text: "The Submariner conquers the deep." },
  { year: "1963", text: "Cosmograph Daytona — racing legend is born." },
];

export function Heritage() {
  return (
    <section id="heritage" className="relative py-32 px-6 lg:px-10 bg-gradient-dark overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden shadow-luxury">
            <img
              src={heritageImg}
              alt="Rolex craftsmanship"
              loading="lazy"
              width={1200}
              height={1400}
              className="w-full h-[600px] object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-rolex-green-deep/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-8 py-6">
            <p className="font-display text-5xl leading-none">120</p>
            <p className="text-[10px] uppercase tracking-luxury mt-2">Years of mastery</p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-luxury text-accent mb-6"
          >
            The Heritage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-foreground leading-tight mb-8"
          >
            A Legacy <br />
            <span className="italic text-gradient-gold">in Motion.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground/70 leading-relaxed mb-12"
          >
            Since 1905, Rolex has been the embodiment of horological excellence —
            pioneering innovations that have changed the course of watchmaking history.
          </motion.p>

          <ol className="relative border-l border-accent/30 space-y-10 pl-8">
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                className="relative"
              >
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-accent shadow-gold-glow" />
                <p className="font-display text-2xl text-accent">{m.year}</p>
                <p className="text-foreground/70 mt-1">{m.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
