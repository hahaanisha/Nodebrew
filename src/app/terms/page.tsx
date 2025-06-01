import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
       <Button asChild variant="outline" className="mb-8 group">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl mb-8 text-center">
        Terms of Service
      </h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
        <p>
          This Terms of Service page is currently a placeholder. In a real application, this section would outline the rules and regulations for the use of Nodebrew's website and services.
        </p>
        <h2 className="text-2xl font-semibold pt-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
        </p>
        <h2 className="text-2xl font-semibold pt-4">2. User Conduct</h2>
        <p>
          Users agree not to use the service for any illegal or unauthorized purpose. Users agree to comply with all local laws regarding online conduct and acceptable content.
        </p>
        <h2 className="text-2xl font-semibold pt-4">3. Intellectual Property</h2>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of Nodebrew and its licensors.
        </p>
        <h2 className="text-2xl font-semibold pt-4">4. Termination</h2>
        <p>
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
          Please check back later for our full Terms of Service.
        </p>
        <p className="text-sm text-muted-foreground pt-4">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
