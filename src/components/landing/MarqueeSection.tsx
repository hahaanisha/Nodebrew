import Image from "next/image";

const sponsors = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Sponsor ${i + 1}`,
  logoUrl: `https://placehold.co/150x80.png?text=Sponsor+${i+1}`,
  aiHint: "company logo"
}));

export default function MarqueeSection() {
  // Duplicate sponsors for seamless looping effect
  const doubledSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors-marquee" className="py-12 bg-secondary/50 overflow-hidden">
      <div className="relative w-full">
        <div className="flex whitespace-nowrap marquee-content">
          {doubledSponsors.map((sponsor, index) => (
            <div key={`${sponsor.id}-${index}`} className="inline-block mx-6 flex-shrink-0">
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
                width={150}
                height={80}
                className="object-contain h-20 w-auto"
                data-ai-hint={sponsor.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
