import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            About Nodebrew
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Discover our mission and the impact we're making.
          </p>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Our Community, Our Strength
                </h3>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  Nodebrew is a global community dedicated to fostering an inclusive environment for women in technology. We aim to empower our members through mentorship, skill development, and networking opportunities, creating a supportive space where women can thrive and lead in the tech industry. Our initiatives focus on bridging gender gaps and promoting diversity across all tech roles.
                </p>
                <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow ">
                  <Link href="/about">Read Full Story</Link>
                </Button>
              </div>
              <div className="bg-muted h-64 md:h-full flex items-center justify-center">
                <Image
                  src="/Nodebrew.png"
                  alt="Nodebrew Community GIF Placeholder"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint="community collaboration"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
