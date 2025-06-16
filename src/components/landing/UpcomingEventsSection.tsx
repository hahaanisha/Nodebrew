"use client"; // Mark as a client component to use Lottie player and dynamic import

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering of Lottie player

// Dynamically import the Player component with ssr: false
const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false } // Prevents server-side rendering, essential for browser-dependent libraries
);

const events = [
  {
    title: "Hackbrew",
    description:
      "Join our flagship hackathon event! Innovate, collaborate, and build amazing projects with a supportive community. Open to all skill levels.",
    imageUrl: "/HackBrew.svg",
    aiHint: "hackathon coding",
    learnMoreLink: "#",
    date: "October 26-28, 2024",
  },
  {
    title: "Brewbridge",
    description:
      "Our mentorship program connecting experienced professionals with aspiring women in tech. Bridge the gap and accelerate your career growth.",
    imageUrl: "/BrewBridge.svg",
    aiHint: "mentorship program",
    learnMoreLink: "#",
    date: "Applications Open Sept 1st",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section id="upcoming-events" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-8 md:py-24">
        <div className="text-center mb-12">
          {/* Lottie Player placed above the h2 title */}
          <div className="flex justify-center mb-1 mt-0">
            {" "}
            {/* Adjusted margins to be zero */}
            <DynamicLottiePlayer
              autoplay
              loop
              src="/event.json" // Make sure this path is correct, e.g., public/assets/events_animation.json
              style={{ height: "80px", width: "80px" }} // Adjust size as needed
            />
          </div>

          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl mt-0">
            {" "}
            {/* Added mt-0 for tight spacing */}
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Don't miss out on our exciting events and programs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map((event) => (
            <Card
              key={event.title}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto w-full max-w-md"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={event.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {event.title}
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground pt-1">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-foreground/80 leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full md:w-auto group"
                >
                  <Link href={event.learnMoreLink}>
                    Learn More{" "}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
