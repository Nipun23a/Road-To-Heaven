import HeroSection from "@/components/HeroSection";
import DestinationsShowcase from "@/components/DestinationShowcase";
import ExperiencesSection from "@/components/ExperienceSection";
import TestimonialsGallerySection from "@/components/TestimonialsGallerySection";



export default function Home() {
  return (
      <main>
          <HeroSection/>

          <DestinationsShowcase/>
          <ExperiencesSection/>
          <TestimonialsGallerySection/>


          {/* Additional content sections can go here */}
          <div className="grid items-center justify-items-center p-8 sm:p-20 gap-16">
              {/* Your other content sections */}
          </div>
      </main>
  );
}
