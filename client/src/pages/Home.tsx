import HeroSection from '@/components/HeroSection';
import ConsultationSection from '@/components/ConsultationSection';
import PlansSection from '@/components/PlansSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <ConsultationSection />
        <PlansSection />
        <ContactSection />
      </main>
    </div>
  );
}
