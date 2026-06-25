import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyJulie } from "@/components/home/WhyJulie";
import { Testimonials } from "@/components/home/Testimonials";
import { Packages } from "@/components/home/Packages";
import { Gallery } from "@/components/home/Gallery";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyJulie />
      <Testimonials />
      <Gallery />
      <Packages />
      <FinalCTA />
    </>
  );
}
