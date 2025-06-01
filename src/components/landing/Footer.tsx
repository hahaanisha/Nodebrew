import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CodeXml } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <CodeXml className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold text-lg font-headline">{siteConfig.name}</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            {siteConfig.footerNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        {/* Optional: Add social links here if desired */}
        {/* <div className="mt-6 flex justify-center space-x-4">
          <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80"><Twitter /></a>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-foreground/80"><Github /></a>
        </div> */}
      </div>
    </footer>
  );
}
