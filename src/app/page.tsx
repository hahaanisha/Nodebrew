import HeroSection from "@/components/landing/HeroSection";
import MarqueeSection from "@/components/landing/MarqueeSection";
import AboutUsSection from "@/components/landing/AboutUsSection";
import ImpactMetricsSection from "@/components/landing/ImpactMetricsSection";
import WhyChooseUsSection from "@/components/landing/WhyChooseUsSection";
import UpcomingEventsSection from "@/components/landing/UpcomingEventsSection";
import TeamSection from "@/components/landing/TeamSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FaqSection from "@/components/landing/FaqSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import SubstackSubscribeSection from "@/components/landing/SubstackSubscribeSection";
import ContactUsSection from "@/components/landing/ContactUsSection";
import ChatbaseScript from "@/components/landing/chatbot";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <ImpactMetricsSection />
      <WhyChooseUsSection />
      <UpcomingEventsSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactUsSection />
      <CallToActionSection />
      <SubstackSubscribeSection />
      <ChatbaseScript />
    </>
  );
}
