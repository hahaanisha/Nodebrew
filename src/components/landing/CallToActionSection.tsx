"use client"; // Mark as a client component to use Lottie player and dynamic import

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
// import { Zap } from "lucide-react"; // Zap icon is no longer needed
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Dynamically import the Player component with ssr: false
const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false } // Prevents server-side rendering, essential for browser-dependent libraries
);

export default function CallToActionSection() {
  return (
    <section
      id="cta"
      className="py-16 md:py-24 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Lottie Player placed above the h2 title */}
        <div className="flex justify-center mb-0 mt-0">
          {" "}
          {/* Adjusted margins to be zero */}
          <DynamicLottiePlayer
            autoplay
            loop
            src="/bolt.json" // Make sure this path is correct, e.g., public/assets/cta_animation.json
            style={{ height: "100px", width: "100px" }} // Adjust size as needed
          />
        </div>

        <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl md:text-5xl mt-0">
          {" "}
          {/* Added mt-0 for tight spacing */}
          Ready to Join the Nodebrew Community?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-primary-foreground/90">
          Become a part of our supportive network. Connect, learn, and grow with
          women in tech from around the globe.
        </p>
        <div className="mt-10">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-xl hover:shadow-2xl transition-shadow text-primary hover:bg-secondary/90"
          >
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our WhatsApp Community
            </Link>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/70">
            No credit card required. Ever.
          </p>
        </div>
      </div>
    </section>
  );
}
