import { useCallback, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Heritage } from "@/components/Heritage";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { AppointmentModal } from "@/components/AppointmentModal";
import { LoadingScreen } from "@/components/LoadingScreen";

export function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />

      <main>
        <Hero
          onExplore={() => scrollTo("collection")}
          onHeritage={() => scrollTo("heritage")}
          onBook={() => setAppointmentOpen(true)}
        />
        <Collection />
        <Heritage />
        <Experience />
      </main>

      <Footer />

      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  );
}
