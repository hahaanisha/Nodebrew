import Image from "next/image";
import logo1 from "@/assets/logo/1password.png";
import logo2 from "@/assets/logo/balsamiq.png";
import logo3 from "@/assets/logo/interviewcake.png";
import logo4 from "@/assets/logo/janestreet.png";
import logo5 from "@/assets/logo/linode.png";
import logo6 from "@/assets/logo/magoosh.png";
import logo7 from "@/assets/logo/mlh.png";
import logo8 from "@/assets/logo/qoom.png";
import logo9 from "@/assets/logo/rstudio.png";
import logo10 from "@/assets/logo/sashido.png";
import logo11 from "@/assets/logo/taskade.png";
import logo12 from "@/assets/logo/wolfram.png";

// Define the sponsors array with the imported images
const sponsors = [
  { id: 1, name: "1Password", logoUrl: logo1, aiHint: "company logo" },
  { id: 2, name: "Balsamiq", logoUrl: logo2, aiHint: "company logo" },
  { id: 3, name: "Interview Cake", logoUrl: logo3, aiHint: "company logo" },
  { id: 4, name: "Jane Street", logoUrl: logo4, aiHint: "company logo" },
  { id: 5, name: "Linode", logoUrl: logo5, aiHint: "company logo" },
  { id: 6, name: "Magoosh", logoUrl: logo6, aiHint: "company logo" },
  { id: 7, name: "MLH", logoUrl: logo7, aiHint: "company logo" },
  { id: 8, name: "Qoom", logoUrl: logo8, aiHint: "company logo" },
  { id: 9, name: "RStudio", logoUrl: logo9, aiHint: "company logo" },
  { id: 10, name: "Sashido", logoUrl: logo10, aiHint: "company logo" },
  { id: 11, name: "Taskade", logoUrl: logo11, aiHint: "company logo" },
  { id: 12, name: "Wolfram", logoUrl: logo12, aiHint: "company logo" },
];

export default function MarqueeSection() {
  // Duplicate sponsors for seamless looping effect
  const doubledSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors-marquee"
      className="py-12 bg-secondary/50 overflow-hidden"
    >
      <div className="relative w-full">
        <div className="flex whitespace-nowrap marquee-content">
          {doubledSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="inline-block mx-4 flex-shrink-0"
            >
              <Image
                src={sponsor.logoUrl}
                alt={sponsor.name}
              
                className="object-contain h-8 w-auto"
                data-ai-hint={sponsor.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
