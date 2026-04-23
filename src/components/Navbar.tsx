import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, User, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onBookAppointment: () => void;
}

export function Navbar({ onBookAppointment }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Watches", href: "#collection" },
    { label: "Heritage", href: "#heritage" },
    { label: "Experience", href: "#experience" },
    { label: "Boutiques", href: "#footer" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logo} alt="Rolex" className="h-8 w-auto" />
          <span className="font-display text-xl font-bold tracking-[0.3em] text-foreground">
            ROLEX
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="relative text-xs uppercase tracking-luxury text-foreground/80 hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Search className="h-4 w-4 text-foreground/70 hover:text-accent transition cursor-pointer" />
          <User className="h-4 w-4 text-foreground/70 hover:text-accent transition cursor-pointer" />
          <button
            onClick={onBookAppointment}
            className="text-xs uppercase tracking-luxury border border-accent/40 text-accent px-5 py-2.5 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Appointment
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass mt-3 mx-6 px-6 py-6 flex flex-col gap-4"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-luxury text-foreground/80 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBookAppointment();
            }}
            className="mt-2 text-xs uppercase tracking-luxury border border-accent/40 text-accent px-5 py-2.5"
          >
            Appointment
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
