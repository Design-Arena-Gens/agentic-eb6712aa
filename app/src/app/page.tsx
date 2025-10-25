import { HeroSection } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Capabilities } from "@/components/sections/capabilities";
import { CaseStudies } from "@/components/sections/case-studies";
import { Methodology } from "@/components/sections/methodology";
import { StrategicCTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="space-y-16 pb-24">
      <HeroSection />
      <TrustedBy />
      <Capabilities />
      <CaseStudies />
      <Methodology />
      <StrategicCTA />
    </div>
  );
}
