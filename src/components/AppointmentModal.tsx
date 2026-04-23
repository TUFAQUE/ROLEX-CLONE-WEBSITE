import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function AppointmentModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) setSubmitted(false);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg glass border border-accent/20 p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-foreground/60 hover:text-accent transition"
              aria-label="close"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                  <span className="text-accent text-2xl">✓</span>
                </div>
                <h3 className="font-display text-3xl mb-3">Thank You</h3>
                <p className="text-foreground/70">
                  Your appointment request has been received. Our concierge will reach out within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 text-xs uppercase tracking-luxury border border-accent/40 text-accent px-6 py-3 hover:bg-accent hover:text-accent-foreground transition"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-luxury text-accent mb-3">Private Appointment</p>
                <h3 className="font-display text-3xl mb-2">Book Your Visit</h3>
                <p className="text-sm text-foreground/60 mb-8">
                  Reserve a personalized session with our boutique concierge.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="First name" type="text" />
                    <Field label="Last name" type="text" />
                  </div>
                  <Field label="Email" type="email" />
                  <Field label="Preferred date" type="date" />
                  <div>
                    <label className="block text-[10px] uppercase tracking-luxury text-foreground/60 mb-2">
                      Interested in
                    </label>
                    <select
                      required
                      defaultValue=""
                      className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-sm text-foreground transition"
                    >
                      <option value="" disabled>Select a collection</option>
                      <option className="bg-background">Submariner</option>
                      <option className="bg-background">Cosmograph Daytona</option>
                      <option className="bg-background">Datejust</option>
                      <option className="bg-background">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-accent text-accent-foreground py-4 text-xs uppercase tracking-luxury font-medium hover:scale-[1.02] transition-transform shadow-gold-glow"
                  >
                    Confirm Appointment
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-luxury text-foreground/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        required
        className="w-full bg-transparent border border-border focus:border-accent outline-none px-4 py-3 text-sm text-foreground transition placeholder:text-foreground/30"
      />
    </div>
  );
}
