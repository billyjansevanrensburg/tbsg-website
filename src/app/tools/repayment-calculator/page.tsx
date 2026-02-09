import { Metadata } from "next";
import { Container, Hero, FAQ, CTA } from "@/components";
import { RepaymentCalculator } from "@/components/calculators";

export const metadata: Metadata = {
  title: "Home Loan Repayment Calculator | Monthly Payments | TBSG",
  description: "Calculate your monthly home loan repayments. See how loan amount, interest rate, and term affect your payments. Compare standard rates vs TBSG rates.",
};

const faqs = [
  {
    question: "How is the monthly payment calculated?",
    answer: "We use the standard amortisation formula used by banks. The payment includes both principal and interest, calculated to pay off the loan over your chosen term.",
  },
  {
    question: "Does the payment include other costs?",
    answer: "No, this calculator shows only the bond repayment. Your total monthly housing cost will also include rates, levies (if sectional title), insurance, and maintenance.",
  },
  {
    question: "Can I pay more than the calculated amount?",
    answer: "Yes! Paying extra reduces your term and total interest. Even small additional payments can save you years and hundreds of thousands of rands over the life of the loan.",
  },
  {
    question: "How realistic is the 0.95% savings?",
    answer: "This is the average rate improvement our clients achieve compared to going directly to a bank. Your actual savings depend on your profile and the banks' offers.",
  },
];

export default function RepaymentCalculatorPage() {
  return (
    <>
      <Hero
        badge="Free Calculator"
        title="Home Loan Repayment Calculator"
        subtitle="Calculate your monthly home loan repayments. See how much you could save with TBSG's better interest rates."
        variant="gradient"
      />

      <section className="py-16 lg:py-24">
        <Container>
          <RepaymentCalculator />
        </Container>
      </section>

      <FAQ
        title="Repayment FAQs"
        items={faqs}
      />

      <CTA
        title="Want That Better Rate?"
        subtitle="Let us negotiate with banks on your behalf"
        primaryCTA={{ text: "Get Pre-Approved", href: "/home-loans/get-preapproved" }}
        secondaryCTA={{ text: "Apply Now", href: "/home-loans/apply" }}
        variant="gradient"
      />
    </>
  );
}
