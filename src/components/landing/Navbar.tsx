"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, CodeXml } from "lucide-react";

import { siteConfig, type NavItem } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    if (item.dropdown) {
      return (
        <DropdownMenu key={item.title}>
          <DropdownMenuTrigger
            asChild
            className={cn(
              "transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-1",
              isMobile ? "w-full justify-start p-2 text-base" : "text-sm"
            )}
          >
            <Button variant="ghost">
              {item.title}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isMobile ? "start" : "center"} className="bg-card">
            {item.dropdown.map((subItem) => (
              <DropdownMenuItem key={subItem.title} asChild>
                <Link
                  href={subItem.href}
                  className="hover:text-foreground/80"
                  onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
                >
                  {subItem.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        key={item.title}
        href={item.href}
        className={cn(
          "transition-colors hover:text-foreground/80 text-foreground/60",
          isMobile ? "block p-2 text-base" : "text-sm"
        )}
        onClick={isMobile ? () => setMobileMenuOpen(false) : undefined}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.mainNav.map((item) => renderNavItem(item))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-1/2 bg-background">
              <div className="flex flex-col space-y-4 p-4">
              <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setMobileMenuOpen(false)}>
                  <CodeXml className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">{siteConfig.name}</span>
                </Link>
                {siteConfig.mainNav.map((item) => renderNavItem(item, true))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
