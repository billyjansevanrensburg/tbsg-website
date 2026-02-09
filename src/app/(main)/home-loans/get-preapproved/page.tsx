import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, Button } from "@/components";

export const metadata: Metadata = {
  title: "Get Pre-Approved for a Home Loan | Free & Fast | TBSG",
  description: "Get pre-approved for your home loan in minutes. Know exactly what you can afford before you start house hunting. Free service, all major banks.",
};

const stats = [
  { value: "Minutes", label: "To Pre-Approval" },
  { value: "Free", label: "Service" },
  { value: "All", label: "Major Banks" },
  { value: "0.95%", label: "Average Savings", highlight: true },
];

const benefits = [
  {
    title: "Know Your Budget",
    description: "House hunt with confidence knowing exactly what you can afford.",
    icon: "\uD83D\uDCB0",
  },
  {
    title: "Stronger Offers",
    description: "Sellers take pre-approved buyers more seriously. Win more deals.",
    icon: "\uD83D\uDCAA",
  },
  {
    title: "Faster Process",
    description: "When you find your dream home, you're ready to move fast.",
    icon: "\u26A1",
  },
  {
    title: "No Obligation",
    description: "Pre-approval doesn't commit you to anything. It's just information.",
    icon: "\u2713",
  },
];

const processSteps = [
  { number: 1, title: "Complete Online Form", description: "Basic details about you, your income, and what you're looking for. Takes about 5 minutes." },
  { number: 2, title: "Upload Documents", description: "ID, proof of income, bank statements. We'll tell you exactly what's needed." },
  { number: 3, title: "Get Your Pre-Approval", description: "We assess your application and provide your pre-approved amount and estimated rate." },
  { number: 4, title: "Start House Hunting", description: "Armed with your budget, find your perfect property with confidence." },
];

const faqs = [
  {
    question: "What's the difference between pre-qualification and pre-approval?",
    answer: "Pre-qualification is a quick estimate based on information you provide. Pre-approval involves document verification and gives you a more accurate, reliable budget that sellers take seriously.",
  },
  {
    question: "Does pre-approval guarantee I'll get the loan?",
    answer: "Pre-approval is a strong indication, not a guarantee. Final approval depends on the specific property you choose and a final verification of your circumstances. However, pre-approved applicants are approved at very high rates.",
  },
  {
    question: "How long is pre-approval valid?",
    answer: "Typically 90 days. If you haven't found a property by then, we can easily renew it (assuming your circumstances haven't changed significantly).",
  },
  {
    question: "Does applying affect my credit score?",
    answer: "The initial pre-qualification uses a 'soft' credit check that doesn't affect your score. A full credit check is only done when you proceed to formal application.",
  },
  {
    question: "What documents do I need?",
    answer: "Typically: SA ID, 3 months payslips (or 2 years financials if self-employed), 3 months bank statements, and proof of residence. Requirements vary slightly based on your employment type.",
  },
];

export default function GetPreApprovedPage() {
  return (
    <>
      <Hero
        badge="Free \u2022 Fast \u2022 No Obligation"
        title="Get Pre-Approved in Minutes"
        subtitle="Know exactly what you can afford before you start house hunting. Pre-approval makes your offer stronger and the buying process faster."
        primaryCTA={{ text: "Start Pre-Approval", href: "https://www.kaptain.co.za/tbsg" }}
        secondaryCTA={{ text: "Why Get Pre-Approved?", href: "#benefits" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Benefits Grid */}
      <section id="benefits" className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Why Get Pre-Approved?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Pre-approval gives you the advantage in a competitive property market
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-tbsg-light rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading font-bold text-lg text-tbsg-charcoal mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-tbsg-charcoal/70">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="Pre-Approval Process"
        subtitle="Four simple steps to knowing your budget"
        steps={processSteps}
        variant="horizontal"
      />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 mb-8">
              Complete our online pre-approval form. It takes about 5 minutes and there&apos;s no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="https://www.kaptain.co.za/tbsg"
                external
              >
                Start Pre-Approval
              </Button>
              <Button variant="ghost" size="lg" href="/tools/affordability-calculator">
                Use Affordability Calculator
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <FAQ
        title="Pre-Approval FAQs"
        items={faqs}
      />

      <CTA
        title="Questions About Pre-Approval?"
        subtitle="Our team is here to help"
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
