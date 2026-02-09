import { Metadata } from "next";
import { Container, Hero, FAQ, CTA } from "@/components";
import { AffordabilityCalculator } from "@/components/calculators";

export const metadata: Metadata = {
  title: "Home Loan Affordability Calculator | What Can You Afford? | TBSG",
  description: "Calculate how much home you can afford based on your income and expenses. Free affordability calculator to help you plan your property purchase.",
};

const faqs = [
  {
    question: "How is affordability calculated?",
    answer: "Banks typically allow up to 30% of your gross income for bond repayments. We use this ratio along with your deposit and expected interest rate to estimate the maximum property price you could afford.",
  },
  {
    question: "What if I have a partner/spouse?",
    answer: "You can include your combined household income in the gross income field. Joint applications often qualify for higher amounts as banks consider both incomes.",
  },
  {
    question: "Do I need a deposit?",
    answer: "Not always, but a deposit improves your chances of approval and may get you a better interest rate. First-time buyers can sometimes get 100% bonds, but 10-20% deposits are common.",
  },
  {
    question: "How does my credit score affect affordability?",
    answer: "Your credit score affects the interest rate you'll be offered, which in turn affects affordability. A better score typically means a lower rate and higher affordability.",
  },
];

export default function AffordabilityCalculatorPage() {
  return (
    <>
      <Hero
        badge="Free Calculator"
        title="Home Loan Affordability Calculator"
        subtitle="Find out how much home you can afford based on your income, expenses, and deposit. Get an instant estimate before you start house hunting."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <AffordabilityCalculator />
        </Container>
      </section>

      <FAQ
        title="Affordability FAQs"
        items={faqs}
      />

      <CTA
        title="Ready to Get Pre-Approved?"
        subtitle="Get an accurate affordability assessment from the banks"
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
