import { Metadata } from "next";
import { Container, Hero, FAQ, CTA } from "@/components";
import { BridgingCalculator } from "@/components/calculators";

export const metadata: Metadata = {
  title: "Bridging Finance Calculator | Estimate Your Advance | TBSG",
  description: "Calculate how much bridging finance you could get on your property sale. Estimate costs, advance amounts, and net proceeds. Free calculator.",
};

const faqs = [
  {
    question: "How accurate is this calculator?",
    answer: "This calculator provides estimates based on typical bridging finance parameters. Actual amounts depend on your specific circumstances, property details, and our assessment. Contact us for an accurate quote.",
  },
  {
    question: "What does the daily rate cover?",
    answer: "The daily rate is the cost of borrowing, expressed as a percentage per day. For example, 0.15% per day on R100,000 would cost R150 per day. This is the main cost of bridging finance.",
  },
  {
    question: "Why can I only advance up to 80%?",
    answer: "We retain a margin to cover any unforeseen costs, delays, or adjustments during the transfer process. This protects both you and us. In some cases, different advance percentages may apply.",
  },
  {
    question: "How do I reduce my bridging costs?",
    answer: "Bridging costs are primarily driven by time. Faster transfers mean lower costs. Ensure all documentation is ready, rates and levies are up to date, and the conveyancing process runs smoothly.",
  },
];

export default function BridgingCalculatorPage() {
  return (
    <>
      <Hero
        badge="Free Calculator"
        title="Bridging Finance Calculator"
        subtitle="Estimate how much you could advance on your property sale and what it might cost. Adjust the sliders to match your situation."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <BridgingCalculator />
        </Container>
      </section>

      <FAQ
        title="Calculator FAQs"
        items={faqs}
      />

      <CTA
        title="Ready to Apply?"
        subtitle="Get a real quote based on your specific circumstances"
        primaryCTA={{ text: "Apply for Bridging", href: "/bridging-finance/sellers" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
