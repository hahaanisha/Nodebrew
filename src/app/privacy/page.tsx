import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <Button asChild variant="outline" className="mb-8 group">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>
      </Button>
      <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground sm:text-5xl mb-8 text-center">
        Privacy Policy
      </h1>
      <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
        <p>
          This Privacy Policy page is currently a placeholder. In a real application, this section would detail how user data is collected, used, and protected by Nodebrew.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Information We Collect</h2>
        <p>
          We may collect personal identification information (Name, email address, phone number, etc.) and non-personal identification information (browser name, type of computer, etc.).
        </p>
        <h2 className="text-2xl font-semibold pt-4">How We Use Collected Information</h2>
        <p>
          Nodebrew may collect and use Users personal information for the following purposes:
        </p>
        <ul className="list-disc list-inside space-y-1 pl-4">
            <li>To improve customer service</li>
            <li>To personalize user experience</li>
            <li>To send periodic emails</li>
        </ul>
        <h2 className="text-2xl font-semibold pt-4">Sharing Your Personal Information</h2>
        <p>
            We do not sell, trade, or rent Users personal identification information to others.
        </p>
        <h2 className="text-2xl font-semibold pt-4">Changes to This Privacy Policy</h2>
        <p>
            Nodebrew has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page.
        </p>
        <p>
          Please check back later for our full Privacy Policy.
        </p>
        <p className="text-sm text-muted-foreground pt-4">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
