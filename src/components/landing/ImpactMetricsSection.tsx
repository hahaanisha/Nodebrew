"use client"; // <--- Add this line here

import AnimatedNumber from "@/components/AnimatedNumber";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Briefcase, Zap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const metrics = [
  {
    id: 1,
    title: "People Impacted",
    value: 70000,
    suffix: "+",
    Icon: Users,
    aiHint: "community growth",
  },
  {
    id: 2,
    title: "Countries Reached",
    value: 46,
    Icon: Globe,
    aiHint: "global reach",
  },
  {
    id: 3,
    title: "Sponsors",
    value: 19,
    Icon: Briefcase,
    aiHint: "partnerships business",
  },
  { id: 4, title: "Hackathons", value: 4, Icon: Zap, aiHint: "coding event" },
];

export default function ImpactMetricsSection() {
  // Now this hook call is valid because ImpactMetricsSection is a client component
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="impact-metrics"
      className="py-16 md:py-24 bg-secondary/50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-foreground sm:text-4xl">
            Our Impact by the Numbers
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Making a difference, one milestone at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card
              key={metric.id}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-500"
            >
              <CardHeader className="flex flex-col items-center pb-2">
                <metric.Icon className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl font-semibold text-foreground/90">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AnimatedNumber
                  targetNumber={metric.value}
                  suffix={metric.suffix}
                  className="text-4xl font-bold text-primary"
                  animateOnView={isSectionInView}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
