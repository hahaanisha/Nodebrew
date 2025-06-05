"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic"; // Import dynamic

// Dynamically import the Player component with ssr: false
const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false } // This is the key: prevents server-side rendering
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="flex justify-center mb-0">
        {" "}
        {/* Adjust margin as discussed before */}
        <DynamicLottiePlayer // Use the dynamically imported component
          autoplay
          loop
          src="/cup.json" // Ensure this path is correct relative to public/
          style={{ height: "150px", width: "150px" }}
        />
      </div>

      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-top-12 duration-1000 ease-out">
          Empowering Women in Tech, Together.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-300">
          Nodebrew is a vibrant community dedicated to supporting and uplifting
          women in the technology space. Join us to connect, learn, and grow.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out delay-600">
          <Button
            asChild
            size="lg"
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href="#about-us">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
