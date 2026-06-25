import { Hero } from "@/components/home/Hero";
import { MarqueeStrip } from "@/components/home/MarqueeStrip";
import { Services } from "@/components/home/Services";
import { WhyJulie } from "@/components/home/WhyJulie";
import { Therapists } from "@/components/home/Therapists";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { Packages } from "@/components/home/Packages";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Services />
      <WhyJulie />
      <Therapists />
      <Testimonials />
      <Gallery />
      <Packages />
      <FinalCTA />
    </>
  );
}
