import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <StatsStrip />
      {/* Next: Proof / HowItWorks / HowWeWork / CTA */}
    </main>
  );
}
