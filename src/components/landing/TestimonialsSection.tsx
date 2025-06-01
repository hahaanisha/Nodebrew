"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Nodebrew has been a game-changer for my career. The support and resources are incredible!",
    author: "Sarah L.",
    role: "Software Engineer",
    avatarUrl: "https://placehold.co/100x100.png",
    aiHint: "woman smiling"
  },
  {
    id: 2,
    quote: "I found my mentor through Nodebrew, and it has accelerated my learning curve immensely. Highly recommend!",
    author: "Jessica M.",
    role: "UX Designer",
    avatarUrl: "https://placehold.co/100x100.png",
    aiHint: "person portrait"
  },
  {
    id: 3,
    quote: "The hackathons are so much fun and a great way to learn new technologies in a supportive environment.",
    author: "Emily R.",
    role: "Data Scientist",
    avatarUrl: "https://placehold.co/100x100.png",
    aiHint: "professional headshot"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Real stories from women who've grown with Nodebrew.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-primary/50 mx-auto mb-6" />
              <p className="text-xl italic text-foreground/90 mb-6 leading-relaxed">
                "{current.quote}"
              </p>
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={current.avatarUrl}
                  alt={current.author}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                  data-ai-hint={current.aiHint}
                />
                <div>
                  <p className="font-semibold text-foreground">{current.author}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-full rounded-full h-12 w-12 shadow-md"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-full rounded-full h-12 w-12 shadow-md"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
         <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-muted-foreground/50 hover:bg-muted-foreground"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
