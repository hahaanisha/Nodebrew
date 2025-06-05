export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  dropdown?: NavItem[];
};

export const siteConfig = {
  name: "Nodebrew",
  description: "A women-oriented community empowering through technology.",
  mainNav: [
    { title: "About Us", href: "#about-us" },
    { title: "Why Choose Us", href: "#why-choose-us" },
    {
      title: "Events",
      href: "#upcoming-events",
      dropdown: [
        { title: "Hackbrew", href: "#upcoming-events" }, 
        { title: "Brewbridge", href: "#upcoming-events" },
      ],
    },
    { title: "Team", href: "#team" },
    { title: "Contact Us", href: "#contact-us" },
  ] satisfies NavItem[],
  links: {
    whatsapp: "https://wa.me/1234567890", 
    github: "https://github.com/your-org/nodebrew", 
    twitter: "https://twitter.com/nodebrew", 
    substack: "https://nodebrew.substack.com", 
  },
  footerNav: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
  ]
};

export type SiteConfig = typeof siteConfig;
