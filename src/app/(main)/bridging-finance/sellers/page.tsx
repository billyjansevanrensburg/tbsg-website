import { Metadata } from "next";
import { Container, Hero, Stats, Process, FAQ, CTA, WhyUs, Button } from "@/components";

export const metadata: Metadata = {
  title: "Bridging Finance for Property Sellers | Up to 80% Advance | TBSG",
  description: "Selling your property? Get up to 80% of your net proceeds before transfer registers. Pay rates arrears, fund your next purchase. 6-hour turnaround. Zero fees.",
};

const stats = [
  { value: "80%", label: "Maximum Advance", highlight: true },
  { value: "6hr", label: "Fastest Turnaround" },
  { value: "R0", label: "Initiation Fee" },
  { value: "0", label: "Minimum Days" },
];

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pay Rates & Levies",
    description: "Clear municipal arrears blocking your transfer. Get your rates clearance certificate without delay.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Fund Your Next Purchase",
    description: "Use bridged funds as a deposit on your new property. Don't miss out while waiting for transfer.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Zero Upfront Costs",
    description: "No initiation fees, no admin charges. You only pay the daily rate for the days you use.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Funds in as little as 6 hours. We run payment batches at 10am and 2pm daily.",
  },
];

const processSteps = [
  {
    number: 1,
    title: "Complete Online Application",
    description: "Fill in your details and upload your signed Offer to Purchase. Takes about 5 minutes."
  },
  {
    number: 2,
    title: "Submit Supporting Documents",
    description: "ID documents, rates figures, and bank details. We'll tell you exactly what's needed."
  },
  {
    number: 3,
    title: "Receive Your Quote",
    description: "We'll confirm your advance amount and the daily cost. No hidden fees, no surprises."
  },
  {
    number: 4,
    title: "Get Your Funds",
    description: "Once approved, funds are transferred directly to you or to pay your rates/levies."
  },
];

const faqs = [
  {
    question: "How much can I borrow as a property seller?",
    answer: "You can advance up to 80% of your net proceeds (sale price minus bond, agent commission, and transfer costs). The exact amount depends on your specific transaction.",
  },
  {
    question: "What can I use the bridging funds for?",
    answer: "Common uses include: paying municipal rates and levies arrears to get clearance, funding a deposit on your next property, covering moving costs, or any other legitimate purpose. We can pay directly to the municipality if needed.",
  },
  {
    question: "How long until my transfer registers?",
    answer: "Transfer timelines vary, but typically take 2-4 months from signed OTP to registration. Delays at municipalities or the Deeds Office can extend this. You only pay for the actual days until transfer.",
  },
  {
    question: "What if the sale falls through?",
    answer: "If the sale doesn't proceed, we work with you and the attorneys to resolve the situation. This is rare and typically covered by the transaction structure.",
  },
  {
    question: "Is my property in a company or trust?",
    answer: "Yes, we can assist with properties held in legal entities. The process is slightly different\u2014use our Legal Entity application form.",
  },
  {
    question: "How do I apply?",
    answer: "Click 'Apply Now' below to start your online application. You'll need your signed Offer to Purchase, ID, and basic sale details. Our team will guide you through the rest.",
  },
];

export default function SellersPage() {
  return (
    <>
      <Hero
        badge="For Property Sellers"
        title="Get Up to 80% of Your Sale Proceeds\u2014Before Transfer"
        subtitle="Don't wait months for your money. Whether you need to clear rates arrears, fund your next purchase, or just access your equity sooner\u2014we've got you covered."
        primaryCTA={{ text: "Apply Now", href: "https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertysellerfinance" }}
        secondaryCTA={{ text: "Calculate Your Advance", href: "/tools/bridging-calculator" }}
        variant="gradient"
      />

      <Stats stats={stats} variant="light" />

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Waiting for Transfer Is Stressful
            </h2>
            <p className="text-lg text-tbsg-charcoal/70">
              You&apos;ve sold your property, but the money won&apos;t arrive for months. Meanwhile, you need to pay rates arrears,
              fund a deposit on your new home, or cover unexpected expenses. Sound familiar?
            </p>
          </div>

          <div className="bg-tbsg-light rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-4">Common Challenges:</h3>
                <ul className="space-y-3">
                  {[
                    "Rates arrears blocking your transfer",
                    "Need a deposit for your next property",
                    "Municipal delays holding up clearance",
                    "Unexpected costs during the waiting period",
                    "Cash flow pressure for 2-4 months",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-tbsg-charcoal/80">
                      <svg className="w-5 h-5 text-tbsg-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-4">Our Solution:</h3>
                <ul className="space-y-3">
                  {[
                    "Advance up to 80% of your net proceeds",
                    "Funds in as little as 6 hours",
                    "We can pay municipalities directly",
                    "Zero initiation fees",
                    "Pay only for days used",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-tbsg-charcoal/80">
                      <svg className="w-5 h-5 text-tbsg-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhyUs
        title="Why Sellers Choose TBSG"
        subtitle="Trusted by property sellers across South Africa for over 10 years"
        features={benefits}
        columns={4}
      />

      <Process
        title="How to Apply"
        subtitle="Get from application to funds in 4 simple steps"
        steps={processSteps}
        variant="vertical"
      />

      <FAQ
        title="Seller Bridging Finance FAQs"
        subtitle="Common questions from property sellers"
        items={faqs}
      />

      {/* Application Options */}
      <section className="py-16 lg:py-20 bg-tbsg-light">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-tbsg-charcoal mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg text-tbsg-charcoal/70 max-w-2xl mx-auto">
              Choose the application that matches your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                Property in Personal Name
              </h3>
              <p className="text-tbsg-charcoal/70 mb-6">
                The property is registered in your personal name (not a company, trust, or CC).
              </p>
              <Button
                variant="primary"
                href="https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertysellerfinance"
                external
                className="w-full"
              >
                Apply Now (Personal)
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-tbsg-charcoal mb-3">
                Property in Legal Entity
              </h3>
              <p className="text-tbsg-charcoal/70 mb-6">
                The property is held in a company, trust, CC, or other legal entity.
              </p>
              <Button
                variant="secondary"
                href="https://tbsg.azurewebsites.net/pages/external-transaction-create/create/propertysellerlegal"
                external
                className="w-full"
              >
                Apply Now (Legal Entity)
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Questions? We're Here to Help"
        subtitle="Our team is ready to guide you through the process"
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
        secondaryCTA={{ text: "Calculate Your Advance", href: "/tools/bridging-calculator" }}
        variant="primary"
      />
    </>
  );
}
