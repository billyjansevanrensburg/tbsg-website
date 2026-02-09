import Link from "next/link";
import { Container, Button } from "@/components";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-8xl font-heading font-bold text-tbsg-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl font-heading font-bold text-tbsg-charcoal mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-tbsg-charcoal/70 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" href="/">
              Go Home
            </Button>
            <Button variant="ghost" href="/contact">
              Contact Us
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <p className="text-sm text-tbsg-charcoal/60 mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/bridging-finance" className="text-tbsg-primary hover:underline">
                Bridging Finance
              </Link>
              <Link href="/home-loans" className="text-tbsg-primary hover:underline">
                Home Loans
              </Link>
              <Link href="/tools" className="text-tbsg-primary hover:underline">
                Calculators
              </Link>
              <Link href="/faq" className="text-tbsg-primary hover:underline">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
