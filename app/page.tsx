import Hero from "../components/sections/Hero";
import StatsStrip from "../components/sections/StatsStrip";
import Proof from "../components/sections/Proof";
import HowItWorks from "../components/sections/HowItWorks";
import HowWeWork from "../components/sections/HowWeWork";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <StatsStrip />
      <Proof />
      <HowItWorks />
      <HowWeWork />
      {/* Next: CTA */}
    </main>
  );
}
