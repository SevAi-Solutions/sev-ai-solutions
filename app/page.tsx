import Hero from "../components/sections/Hero";
import StatsStrip from "../components/sections/StatsStrip";
import Proof from "../components/sections/Proof";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <StatsStrip />
      <Proof />
      {/* Next: HowItWorks / HowWeWork / CTA */}
    </main>
  );
}
