import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Brain } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with like-minded women, share experiences, and grow together in a safe and encouraging environment.",
  },
  {
    icon: Zap,
    title: "Skill Development",
    description: "Access workshops, mentorship programs, and resources to enhance your technical and soft skills.",
  },
  {
    icon: Brain,
    title: "Networking Opportunities",
    description: "Expand your professional network through our events, connecting with industry leaders and peers.",
  },
  {
    icon: CheckCircle,
    title: "Career Advancement",
    description: "Find new opportunities, get career advice, and take the next step in your tech journey with our support.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose Nodebrew?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the unique benefits of being part of our vibrant and empowering community for women in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {reasons.map((reason, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-3">
                  <reason.icon className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
