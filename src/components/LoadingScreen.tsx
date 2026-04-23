import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <motion.img
              src={logo}
              alt="Rolex"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="h-16 w-auto"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 240 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-display text-2xl tracking-[0.4em] mt-6 text-foreground"
            >
              ROLEX
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-[10px] uppercase tracking-luxury text-foreground/50 mt-3"
            >
              A Crown for Every Achievement
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
