import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import submariner from "@/assets/watch-submariner.jpg";
import daytona from "@/assets/watch-daytona.jpg";
import datejust from "@/assets/watch-datejust.jpg";

const watches = [
  {
    name: "Submariner",
    tagline: "The reference among diving watches.",
    price: "From $9,750",
    image: submariner,
  },
  {
    name: "Cosmograph Daytona",
    tagline: "Born to race. Designed to win.",
    price: "From $34,650",
    image: daytona,
  },
  {
    name: "Datejust",
    tagline: "The classic watch of reference.",
    price: "From $7,950",
    image: datejust,
  },
];

export function Collection() {
  return (
    <section id="collection" className="relative py-32 px-6 lg:px-10 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-xs uppercase tracking-luxury text-accent mb-4">Featured Collection</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground leading-tight">
              Iconic <span className="italic text-gradient-gold">Timepieces</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 leading-relaxed">
            Discover the watches that have defined generations — engineered to endure,
            designed to inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {watches.map((w, i) => (
            <motion.article
              key={w.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-card border border-border hover:border-accent/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <motion.img
                  src={w.image}
                  alt={w.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{w.name}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{w.tagline}</p>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center border border-border rounded-full group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs uppercase tracking-luxury text-foreground/50">
                    {w.price}
                  </span>
                  <span className="text-xs uppercase tracking-luxury text-accent">Discover</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
