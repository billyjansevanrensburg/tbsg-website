import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, Card, Button } from "@/components";

export const metadata: Metadata = {
  title: "Bridging Finance South Africa | Fast Property Finance | TBSG",
  description: "Get bridging finance in as little as 6 hours. Up to 80% advance for sellers, 85% for agents. Zero initiation fees, no minimum period. BFASA member.",
};

const stats = [
  { value: "6hr", label: "Fastest Turnaround" },
  { value: "80%", label: "Seller Advance", highlight: true },
  { value: "85%", label: "Agent Advance", highlight: true },
  { value: "R0", label: "Initiation Fees" },
];

const solutions = [
  {
    title: "For Property Sellers",
    description: "Need funds before your property transfer registers? Bridge up to 80% of your net proceeds to pay rates, levies, or move forward with your next purchase.",
    features: ["Up to 80% of net proceeds", "Pay rates & levies arrears", "6-hour turnaround possible", "No minimum period"],
    href: "/bridging-finance/sellers",
    cta: "Apply as Seller",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "For Estate Agents",
    description: "Waiting months for your commission? Advance up to 85% of your commission within 24 hours. Plus earn referral fees on home loan applications.",
    features: ["Up to 85% of commission", "24-hour payout", "Earn bond referral fees", "Agency advances available"],
    href: "/bridging-finance/agents",
    cta: "Apply as Agent",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "For Bond Applicants",
    description: "Taking a new bond, further loan, or switching banks? Access your approved funds before registration to cover deposits or other expenses.",
    features: ["New bond advances", "Further loan bridging", "Switch financing", "Fast approval"],
    href: "/bridging-finance/bond-applicants",
    cta: "Apply for Bond Bridging",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "For Bond Originators",
    description: "Manage your pipeline cash flow better. Advance up to 35% of your instructed commission pipeline with same-day payment available.",
    features: ["Up to 35% of pipeline", "Same-day payment", "Apply twice weekly", "No bank impact"],
    href: "/bridging-finance/bond-originators",
    cta: "Apply as Originator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const processSteps = [
  { number: 1, title: "Apply Online", description: "Complete our simple application form. It takes just a few minutes." },
  { number: 2, title: "Submit Documents", description: "Upload your OTP, ID, and proof of sale. We'll guide you through what's needed." },
  { number: 3, title: "Get Approved", description: "Our team reviews and approves\u2014often within hours." },
  { number: 4, title: "Receive Funds", description: "Funds transferred to your account. As fast as 6 hours for bridging." },
];

const faqs = [
  {
    question: "What is bridging finance?",
    answer: "Bridging finance is a short-term loan that 'bridges' the gap between when you need funds and when you receive them. For property sellers, this means accessing your sale proceeds before the transfer registers. For agents, it means getting your commission before the deal closes.",
  },
  {
    question: "How fast can I get funds?",
    answer: "For straightforward applications with all documents in order, we can release funds in as little as 6 hours. Most applications are processed within 24 hours.",
  },
  {
    question: "What are your fees?",
    answer: "We charge a daily fee calculated on the amount advanced. There are zero initiation fees and no minimum loan period\u2014you only pay for the days you use the funds. Contact us for a personalised quote.",
  },
  {
    question: "What documents do I need?",
    answer: "Typically you'll need: signed Offer to Purchase, ID documents, proof of the sale/commission, and bank statements. The exact requirements vary by product\u2014we'll guide you through the process.",
  },
  {
    question: "Is TBSG registered and compliant?",
    answer: "Yes. TBSG is a BFASA (Bridging Finance Association of South Africa) member and NCR registered. We've been operating for over 10 years with a strong compliance track record.",
  },
];

export default function BridgingFinancePage() {
  return (
    <>
      <Hero
        badge="BFASA Member \u2022 10+ Years Track Record"
        title="Bridging Finance That Moves When You Do"
        subtitle="Whether you're a property seller, estate agent, bond applicant, or originator\u2014get the funds you need in as little as 6 hours. Zero initiation fees, no minimum period."
        primaryCTA={{ text: "Apply Now", href: "/bridging-finance/sellers" }}
        secondaryCTA={{ text: "Calculate Your Advance", href: "/tools/bridging-calculator" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Bridging Finance Solutions
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Choose the solution that fits your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} hover padding="lg" className="flex flex-col">
                <div className="w-14 h-14 bg-tbsg-primary/10 rounded-xl flex items-center justify-center mb-6 text-tbsg-primary">
                  {solution.icon}
                </div>

                <h3 className="text-2xl font-heading font-bold text-tbsg-charcoal mb-3">
                  {solution.title}
                </h3>

                <p className="text-tbsg-charcoal/70 mb-6">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-8 flex-grow">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-tbsg-charcoal/80">
                      <svg className="w-4 h-4 text-tbsg-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" href={solution.href} className="w-full">
                  {solution.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <Process
        title="How Bridging Finance Works"
        subtitle="Simple, fast, transparent"
        steps={processSteps}
        variant="horizontal"
      />

      <FAQ
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about bridging finance"
        items={faqs}
      />

      <CTA
        title="Ready to Get Started?"
        subtitle="Apply now and get a response within hours"
        primaryCTA={{ text: "Apply for Bridging", href: "/bridging-finance/sellers" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
        variant="gradient"
      />
    </>
  );
}
