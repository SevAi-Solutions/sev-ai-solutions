import Hero from "../components/sections/Hero";
import StatsStrip from "../components/sections/StatsStrip";
import Proof from "../components/sections/Proof";
import HowItWorks from "../components/sections/HowItWorks";
import HowWeWork from "../components/sections/HowWeWork";
import CTA from "../components/sections/CTA";
import SectionDivider from "../components/SectionDivider";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />

      <SectionDivider />
      <StatsStrip />

      <SectionDivider />
      <Proof />

      <SectionDivider />
      <HowItWorks />

      <SectionDivider />
      <HowWeWork />

      <SectionDivider />
      <CTA />
    </main>
  );
}
