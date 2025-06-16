import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can join Nodebrew?",
    answer:
      "Nodebrew is primarily for women and non-binary individuals in or aspiring to be in the technology field. We welcome allies who support our mission.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No, Nodebrew is a free community. Some specific events or workshops might have a nominal fee to cover costs, but core membership and most resources are free.",
  },
  {
    question: "How can I contribute to Nodebrew?",
    answer:
      "There are many ways to contribute! You can volunteer for events, become a mentor, share your expertise by hosting a workshop, or help spread the word about our community. Reach out to us to learn more.",
  },
  {
    question: "What kind of events do you host?",
    answer:
      "We host a variety of events including hackathons (Hackbrew), mentorship programs (Brewbridge), technical workshops, career development sessions, networking meetups, and speaker series featuring inspiring women in tech.",
  },
  {
    question: "How is Nodebrew different from other tech communities?",
    answer:
      "Nodebrew focuses specifically on creating a supportive and empowering ecosystem for women in tech. Our programs are tailored to address the unique challenges and opportunities women face in the industry, with a strong emphasis on mentorship and practical skill-building.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-8 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Find answers to common questions about Nodebrew.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-card"
              >
                <AccordionTrigger className="p-6 text-left font-semibold text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-base text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
