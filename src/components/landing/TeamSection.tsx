import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "professional portrait",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Maria Garcia",
    role: "Head of Community",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "professional headshot",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sam Lee",
    role: "Lead Event Coordinator",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "person smiling",
    socials: { linkedin: "#", twitter: "#" }
  },
    {
    name: "Jordan Green",
    role: "Mentorship Program Lead",
    imageUrl: "https://placehold.co/300x300.png",
    aiHint: "developer photo",
    socials: { linkedin: "#", twitter: "#" }
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            The passionate individuals driving Nodebrew's mission forward.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative w-full h-64 bg-muted">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  data-ai-hint={member.aiHint}
                />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
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
