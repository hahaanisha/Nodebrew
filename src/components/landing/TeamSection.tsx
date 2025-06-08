"use client"; // Mark as a client component to use Lottie player and dynamic import

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Import your Avatar components
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Dynamically import the Player component with ssr: false
const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false } // Prevents server-side rendering, essential for browser-dependent libraries
);

const teamMembers = [
  {
    name: "Anjali Chaturvedi",
    role: "Lead",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "professional portrait",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Tasmiya Khan",
    role: "Technical Team",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "professional headshot",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Hasini Kanchetty",
    role: "Program Team",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "person smiling",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sanskruti Patke",
    role: "Program Team",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "developer photo",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Selorm Apeletey Mensah",
    role: "Program Team",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "developer photo",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sharon Wainaina",
    role: "Program Team",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "developer photo",
    socials: { linkedin: "#", twitter: "#" },
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Lottie Player placed above the h2 title */}
          <div className="flex justify-center mb-0 mt-0">
            <DynamicLottiePlayer
              autoplay
              loop
              src="/team.json" // Make sure this path is correct, e.g., public/assets/team_animation.json
              style={{ height: "100px", width: "100px" }} // Adjust size as needed
            />
          </div>

          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl mt-0">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            The passionate individuals driving Nodebrew's mission forward.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              // --- CHANGES HERE ---
              className="text-center bg-transparent shadow-none border-none transition-all duration-300" // Removed rounded-lg, shadow, border, made transparent
            >
              <CardHeader className="p-0 pt-6 flex flex-col items-center">
                <Avatar
                  className="h-44 w-44 mb-4 border-4 border-transparent hover:border-[#41BDA9] transition-colors duration-300" // Added transparent border and hover border
                >
                  <AvatarImage
                    src={member.imageUrl}
                    alt={member.name}
                    className="transition-all duration-300" // Removed grayscale classes
                  />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <CardTitle className="text-2xl font-semibold mb-1">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-lg text-primary">
                  {member.role}
                </CardDescription>
                <div className="mt-4 flex justify-center space-x-3">
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
