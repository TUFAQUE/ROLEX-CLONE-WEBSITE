import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const cols = [
    {
      title: "Watches",
      items: ["New Models", "Collection", "Configurator", "Find a Retailer"],
    },
    {
      title: "World of Rolex",
      items: ["Heritage", "Craftsmanship", "Sustainability", "Sponsorships"],
    },
    {
      title: "Services",
      items: ["Servicing", "Warranty", "Authenticity", "Contact"],
    },
  ];

  const socials = [Instagram, Facebook, Twitter, Youtube];

  return (
    <footer id="footer" className="relative bg-background border-t border-border pt-24 pb-10 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Rolex" className="h-10 w-auto" />
              <span className="font-display text-2xl tracking-[0.3em]">ROLEX</span>
            </div>
            <p className="mt-6 text-foreground/60 max-w-sm leading-relaxed">
              A perpetual quest for excellence. Discover the timepieces that have shaped
              modern horology.
            </p>
            <div className="mt-8 flex gap-4">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 flex items-center justify-center border border-border rounded-full text-foreground/60 hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-luxury text-accent mb-6">{c.title}</h4>
              <ul className="space-y-3">
                {c.items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-accent transition-colors"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-foreground/50 uppercase tracking-luxury">
          <p>© {new Date().getFullYear()} Rolex Inspired Concept. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
