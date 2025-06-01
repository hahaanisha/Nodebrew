"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactUsSection() {
  // Basic form handling simulation
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! We'll get back to you soon. (This is a demo)");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact-us" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MessageSquare className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </p>
        </div>
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-1">Full Name</label>
                  <Input type="text" name="name" id="name" required className="shadow-sm" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1">Email Address</label>
                  <Input type="email" name="email" id="email" required className="shadow-sm" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/90 mb-1">Subject</label>
                <Input type="text" name="subject" id="subject" required className="shadow-sm" placeholder="Regarding..." />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-1">Message</label>
                <Textarea name="message" id="message" rows={5} required className="shadow-sm resize-none" placeholder="Your message here..." />
              </div>
              <div>
                <Button type="submit" className="w-full md:w-auto shadow-md hover:shadow-lg transition-shadow">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
