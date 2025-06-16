import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function ChaptersPage() {
  return (
    <div section-id="chapters" className="container mx-auto px-4 py-16 md:py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold tracking-tight text-foreground mb-6">
          Start a Nodebrew Chapter
        </h1>
        <p className="text-lg text-foreground/80">
          Join a growing network of women-led tech communities. Empower your
          campus, spark innovation, and lead change with full support from
          Nodebrew.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="https://forms.gle/your-chapter-form" target="_blank">
              Apply Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Benefits
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="h-full shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Start a Chapter */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-foreground">
          Why Start a Chapter?
        </h2>
        {whys.map((why, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {why.title}
            </h3>
            <p className="text-foreground/80">{why.description}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-foreground/70 mb-6">
          Can't find what you were looking for? Reach out at{" "}
          <a
            href="mailto:hello@nodebrew.tech"
            className="text-primary underline"
          >
            hello@nodebrew.tech
          </a>
        </p>
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl mx-auto space-y-4"
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer || "Coming soon..."}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

// Data Definitions

const benefits = [
  {
    title: "Truly Full-Service Community",
    description:
      "Whether you're starting with workshops or hosting national hackathons, we've got your back!",
  },
  {
    title: "Legal & Financial Backend",
    description:
      "Enjoy nonprofit status benefits with none of the paperwork. Includes FDIC-insured banking and Stripe payment processing.",
  },
  {
    title: "Visa Credit Cards",
    description:
      "Unlimited free Visa cards for your team. Spend directly and upload receipts—we’ll handle the accounting.",
  },
  {
    title: "$25k+ in Free Software",
    description:
      "Google Workspace, AWS credits, and more. We partner with tech giants to give you the best tools—100% free.",
  },
  {
    title: "Liability Waiver Management",
    description:
      "Photo releases, legal waivers, all handled automatically via our registration system.",
  },
  {
    title: "24-Hour Support",
    description:
      "Dedicated chapter support with <12 hour replies before events and <24 hour responses year-round.",
  },
  {
    title: "Corporate Partner Access",
    description:
      "We’ll connect you with 19+ corporate sponsors to elevate your events and collaborations.",
  },
];

const whys = [
  {
    title: "Forge Connections",
    description:
      "Build a lasting network and foster meaningful relationships within your campus community.",
  },
  {
    title: "Drive Change",
    description:
      "Lead initiatives that positively impact your community and inspire others to follow.",
  },
  {
    title: "Develop Leadership",
    description:
      "Gain valuable leadership experience and make a lasting impact on your peers and future career.",
  },
];

const faqs = [
  {
    question: "What is the College Chapter Program?",
    answer:
      "The Nodebrew College Chapter Program enables students to launch and run official Nodebrew communities on their campuses. Chapters host events, workshops, and initiatives to empower women in tech with support from the main Nodebrew team.",
  },
  {
    question: "Who can join the College Chapter Program?",
    answer:
      "Any college student who is passionate about technology, inclusion, and community building can start or join a chapter. We encourage teams of students to apply, but individuals are also welcome to take initiative.",
  },
  {
    question: "What are the benefits of joining?",
    answer:
      "Chapters receive full legal and financial backing, access to corporate sponsors, $25K+ in software tools, dedicated support, Visa credit cards for expenses, and more—all at no cost to you.",
  },
  {
    question: "How can my college start a chapter?",
    answer:
      "Apply through our official form (linked above). We'll review your application, schedule a quick call, and guide you through the onboarding process. It’s fast, easy, and free.",
  },
  {
    question: "Is there a fee to join?",
    answer:
      "No, there is absolutely no cost to start or run a Nodebrew chapter. We’re backed by our nonprofit status and corporate sponsors so you can focus on leading, not fundraising.",
  },
  {
    question: "How are chapters supported?",
    answer:
      "Every chapter gets personalized guidance, 24-hour support, event resources, and connections to mentors and partners. We’re here to help every step of the way—from your first event to national-scale initiatives.",
  },
];
  