import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import HeroScene from "@/components/scenes/HeroScene";
import CampusScene from "@/components/scenes/CampusScene";
import FacilitiesScene from "@/components/scenes/FacilitiesScene";
import ResultsScene from "@/components/scenes/ResultsScene";
import TestimonialsScene from "@/components/scenes/TestimonialsScene";
import AdmissionScene from "@/components/scenes/AdmissionScene";
import CTAScene from "@/components/scenes/CTAScene";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroScene />
        <CampusScene />
        <FacilitiesScene />
        <TestimonialsScene />
        <ResultsScene />
        <AdmissionScene />
        <CTAScene />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
