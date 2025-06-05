"use client"; // This component needs to be a client component to use Lottie player and dynamic import

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
// import { Mail } from "lucide-react"; // Mail icon is no longer needed
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering of Lottie player

// Dynamically import the Player component with ssr: false
const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false } // Prevents server-side rendering, essential for browser-dependent libraries
);

export default function SubstackSubscribeSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // In a real app, you'd submit this to Substack or your backend
    console.log("Subscribing with email:", email);
    toast({
      title: "Subscribed!",
      description: `Thank you for subscribing with ${email}. (This is a demo)`,
    });
    setEmail(""); // Clear input after pseudo-submission
  };

  return (
    <section id="substack-subscribe" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          {/* Lottie Player placed above the h2 title */}
          <div className="flex justify-center mb-0 mt-0">
            {" "}
            {/* Adjusted margins to be zero */}
            <DynamicLottiePlayer
              autoplay
              loop
              src="/envelope.json" // Make sure this path is correct, e.g., public/assets/subscribe_animation.json
              style={{ height: "150px", width: "150px" }} // Adjust size as needed
            />
          </div>

          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl mt-0">
            {" "}
            {/* Added mt-0 for tight spacing */}
            Stay Updated with Nodebrew
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Subscribe to our Substack newsletter for the latest news, events,
            and insights from our community.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow text-base shadow-sm"
              aria-label="Email for newsletter"
            />
            <Button
              type="submit"
              size="lg"
              className="shadow-md hover:shadow-lg transition-shadow"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
