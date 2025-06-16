import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Button asChild variant="outline" className="mb-8 group">
        <Link href="/#about-us">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl mb-8 text-center">
        Our Story
      </h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
        <p>
          Welcome to the full story of Nodebrew!We're excited to share more about our journey,
          values, and the incredible community we're building together.
        </p>

        <p>
          Nodebrew was founded with a simple yet powerful vision: to create a
          space where women in technology can connect, learn, and thrive. We
          believe in the power of community to foster growth, innovation, and
          leadership.
        </p>

        <p>Our core values include:</p>

        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <strong>Inclusivity:</strong> Creating a welcoming environment for
            everyone.
          </li>
          <li>
            <strong>Empowerment:</strong> Providing resources and support for
            personal and professional growth.
          </li>
          <li>
            <strong>Collaboration:</strong> Fostering connections and teamwork.
          </li>
          <li>
            <strong>Innovation:</strong> Encouraging creative problem-solving
            and learning.
          </li>
        </ul>

        <p>
          Stay tuned as we continue to build this community and share more details
          about our impact, programs, and the amazing individuals who make
          Nodebrew what it is.
        </p>

        <p>
          In the meantime, feel free to explore other sections of our website or
          join our community discussions!
        </p>
      </div>
    </div>
  );
}
