import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collection } from "@/components/Collection";
import { Heritage } from "@/components/Heritage";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { AppointmentModal } from "@/components/AppointmentModal";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rolex — Crafted for Legends" },
      {
        name: "description",
        content:
          "Discover the world of Rolex — iconic timepieces engineered with precision, crafted for legends. Explore the collection, heritage, and book a private appointment.",
      },
      { property: "og:title", content: "Rolex — Crafted for Legends" },
      {
        property: "og:description",
        content: "Iconic luxury timepieces. A perpetual quest for excellence.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
